import {
    createATaskCycle,
} from '@wulechuan/gulp-classical-task-cycle'

export function 构建一个任务闭环用以复制一组文件或文件夹(配置项集) {
    const {
        descriptionOfCoreTask,
        descriptionOfInputsOfCoreTask,
        sourceGlobs,
        outputFiles,
    } = 配置项集

    return createATaskCycle({
        descriptionOfCoreTask,
        descriptionOfInputsOfCoreTask,

        sourceGlobs,
        outputFiles,

        compressions: {
            compressor1: null,
            compressor2: null,
        },
    })
}
