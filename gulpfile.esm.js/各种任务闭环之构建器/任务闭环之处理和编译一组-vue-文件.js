import through from 'through2'
import path from 'path'
import createNewGulpError from 'plugin-error'
// import gulpTerser from 'gulp-terser'

import {
    createATaskCycle,
} from '@wulechuan/gulp-classical-task-cycle'

import {
    transformContentStringOfSingleVueFile,
} from '@wulechuan/vue2-sfc-from-typescript-to-javascript'

export function 构建一个任务闭环用以处理和编译一组Vue文件(options) {
    const {
        descriptionOfCoreTask,
        descriptionOfInputsOfCoreTask,
        sourceGlobs,
        outputFiles,
        extraOptions = {},
    } = options

    const {
        vueFileConversionOptions,
    } = extraOptions

    return createATaskCycle({
        descriptionOfCoreTask,
        descriptionOfInputsOfCoreTask,

        sourceGlobs,
        outputFiles,
        firstPipeForProcessingSources: processSingleVueFile,
        // optionsArrayToApplyForTheFirstPipe,

        compressions: {
            shouldNotOutputUncompressedVersion: false,
            shouldNotOutputCompressedVersion: true,
            compressor1: null,
            compressor2: null,
        },
    })

    function processSingleVueFile() {
        return through.obj(async function (file, fileEncoding, callback) {
            if (file.isStream()) {
                return callback(createNewGulpError('Streaming is not supported.'))
            }

            if (file.isNull()) {
                return callback(null, file)
            }

            const sourceVueFileName = path.basename(file.path)

            const sourceVueContents = file.contents.toString(fileEncoding || 'utf-8')
            const processedVueContents = await transformContentStringOfSingleVueFile(
                sourceVueContents,
                {
                    ...vueFileConversionOptions,
                    sourceContentDescriptionName: sourceVueFileName,
                }
            )

            file.contents = Buffer.from(processedVueContents)

            return callback(null, file)
        })
    }
}
