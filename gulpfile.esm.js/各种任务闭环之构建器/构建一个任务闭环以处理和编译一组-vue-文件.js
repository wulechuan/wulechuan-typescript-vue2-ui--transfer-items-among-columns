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
        firstPipeForProcessingSources: _处理单个Vue文件,
        // optionsArrayToApplyForTheFirstPipe,

        compressions: {
            shouldNotOutputUncompressedVersion: false,
            shouldNotOutputCompressedVersion: true,
            compressor1: null,
            compressor2: null,
        },
    })

    function _处理单个Vue文件() {
        return through.obj(async function (文件对象, 文件内容之字符编码类型, 回调函数) {
            if (文件对象.isStream()) {
                回调函数(createNewGulpError('Streaming is not supported.'))
            }

            if (文件对象.isNull()) {
                回调函数(null, 文件对象)
            }

            const 源Vue文件之基本名称_不含文件扩展名 = path.basename(文件对象.path)

            const 源Vue文件之内容全文 = 文件对象.contents.toString(文件内容之字符编码类型 || 'utf-8')
            return await transformContentStringOfSingleVueFile(
                源Vue文件之内容全文,
                {
                    ...vueFileConversionOptions,
                    sourceContentDescriptionName: 源Vue文件之基本名称_不含文件扩展名,
                }
            ).then(处理后的Vue文件内容全文 => {
                文件对象.contents = Buffer.from(处理后的Vue文件内容全文)
                回调函数(null, 文件对象)
            }).catch(error => {
                回调函数(createNewGulpError(error), 文件对象)
            })
        })
    }
}
