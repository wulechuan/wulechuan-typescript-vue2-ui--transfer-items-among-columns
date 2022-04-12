import path from 'path'

import {
    构建一个任务闭环用以处理和编译一组Vue文件,
} from './各种任务闭环之构建器/构建一个任务闭环以处理和编译一组-vue-文件'

import {
    构建一个任务闭环用以将一组独立于Vue文件的Typescript文件各自转译成Javascript文件,
} from './各种任务闭环之构建器/构建一个任务闭环以将一组独立于-vue-文件的-typescript-文件各自转译为-javascript-文件'

import {
    构建一个任务闭环用以将一组独立于Vue文件的Stylus文件各自编译成Css文件,
} from './各种任务闭环之构建器/构建一个任务闭环以将一组独立于-vue-文件的-stylus-文件各自编译成-css-文件'

import {
    构建一个任务闭环用以复制一组文件或文件夹,
} from './各种任务闭环之构建器/构建一个任务闭环以将复制一批文件或文件夹'

import {
    create3HighOrderTasksUponMultipleTaskCycles,
} from '@wulechuan/gulp-classical-task-cycle'



import tsconfig from '../tsconfig.json'

const outputFileIndentation = ' '.repeat(4)
const resolvePath = path.resolve





const 任务闭环之处理和编译所有的Vue文件 = 构建一个任务闭环用以处理和编译一组Vue文件({
    descriptionOfCoreTask: '将所有由 TypeScript 写成的 .vue 文件转换成 JavaScript 版本',
    descriptionOfInputsOfCoreTask: '用 TypeScript 写成的 .vue 文件',
    sourceGlobs: {
        rootFolderPath: './源代码/原始的源代码/typescript',
        relativeGlobsSpecificallyForThisTaskCycle: [
            '**/*.vue',
        ],
        extraSourceGlobsToWatch: [
            './源代码/原始的源代码/typescript/**/*.ts',
        ],
    },

    outputFiles: {
        // https://github.com/wulechuan/wulechuan-js-gulp-4-classical-task-cycle/blob/master/documents/refs/en-US/api-create-a-task-cycle.md

        rootFolderPath: './源代码/发布的源代码/javascript',
        forBatchOutputFiles: {
            relativeGlobsOfAllPossibleOutputs: [
                '**/*.vue',
            ],
        },
    },

    extraOptions: {
        vueFileConversionOptions: {
            indentation: outputFileIndentation,
            tsconfig,

            cssStylusCompilationOptions: {
                paths: [
                    resolvePath(__dirname, '../源代码/原始的源代码/stylus'),
                ],
            },

            // shouldNotTranspileTypescript: false,
            // shouldNotCompilePug:          false,
            // shouldNotCompileStylus:       false,
            // shouldNotCompileSass:         false,
            // shouldNotCompileLESS:         false,
        },
    },
})



const 任务闭环之将所有Vue文件以Typescript加Css的形式到发布到发布文件夹内 = 构建一个任务闭环用以处理和编译一组Vue文件({
    descriptionOfCoreTask: '发布所有 .vue 文件的 TypeScript 加 CSS 的形式',
    descriptionOfInputsOfCoreTask: '用 TypeScript 写成的 .vue 文件',

    sourceGlobs: {
        rootFolderPath: './源代码/原始的源代码/typescript',

        relativeGlobsSpecificallyForThisTaskCycle: [
            '**/*.vue',
        ],
        extraSourceGlobsToWatch: [
            './源代码/原始的源代码/typescript/**/*.ts',
        ],
    },

    outputFiles: {
        rootFolderPath: './源代码/发布的源代码/typescript',

        forBatchOutputFiles: {
            relativeGlobsOfAllPossibleOutputs: [
                '**/*.vue',
            ],
        },
    },

    extraOptions: {
        vueFileConversionOptions: {
            indentation: outputFileIndentation,
            tsconfig,

            cssStylusCompilationOptions: {
                paths: [
                    resolvePath(__dirname, '../源代码/原始的源代码/stylus'),
                ],
            },

            shouldNotTranspileTypescript: true,
            // shouldNotCompilePug:         false,
            // shouldNotCompileStylus:      false,
            // shouldNotCompileSass:        false,
            // shouldNotCompileLESS:        false,
        },
    },
})



const 任务闭环之将所有独立于Vue文件的Typescript文件复制到发布文件夹内 = 构建一个任务闭环用以复制一组文件或文件夹({
    descriptionOfCoreTask: '将所有独立于 .vue 文件的 TypeScript 文件复制到发布文件夹中去',
    descriptionOfInputsOfCoreTask: '.ts 文件',

    sourceGlobs: {
        rootFolderPath: './源代码/原始的源代码/typescript',

        relativeGlobsSpecificallyForThisTaskCycle: [
            '**/*.ts',
        ],
        extraSourceGlobsToWatch: [
        ],
    },

    outputFiles: {
        rootFolderPath: './源代码/发布的源代码/typescript',

        forBatchOutputFiles: {
            relativeGlobsOfAllPossibleOutputs: [
                '**/*.ts',
            ],
        },
    },
})



const 任务闭环之将所有独立于Vue文件的Typescript文件各自转译成Javascript文件 = 构建一个任务闭环用以将一组独立于Vue文件的Typescript文件各自转译成Javascript文件({
    descriptionOfCoreTask: '将所有独立的（即不在 .vue 文件中的）TypeScript 编译为 JavaScript',
    descriptionOfInputsOfCoreTask: '独立的 .ts 文件',

    sourceGlobs: {
        rootFolderPath: './源代码/原始的源代码/typescript',

        relativeGlobsSpecificallyForThisTaskCycle: [
            '**/*.ts',
        ],
        extraSourceGlobsToWatch: [
        ],
    },

    outputFiles: {
        rootFolderPath: './源代码/发布的源代码/javascript',

        forBatchOutputFiles: {
            relativeGlobsOfAllPossibleOutputs: [
                '*.js',
            ],
        },
    },

    extraOptions: {
        indentation: outputFileIndentation,
        tsconfig,
    },
})



const 任务闭环之将所有独立于Vue文件的Stylus文件复制到发布文件夹内 = 构建一个任务闭环用以复制一组文件或文件夹({
    descriptionOfCoreTask: '将所有独立于 .vue 文件的 Stylus 文件复制到发布文件夹中去',
    descriptionOfInputsOfCoreTask: '独立的 .styl 文件',

    sourceGlobs: {
        rootFolderPath: './源代码/原始的源代码/stylus',

        relativeGlobsSpecificallyForThisTaskCycle: [
            '**/*.styl',
        ],
        extraSourceGlobsToWatch: [
        ],
    },

    outputFiles: {
        rootFolderPath: './源代码/发布的源代码/stylus',

        forBatchOutputFiles: {
            relativeGlobsOfAllPossibleOutputs: [
                '**/*.styl',
            ],
        },
    },
})



const 任务闭环之将所有独立于Vue文件的Stylus文件各自编译成Css文件 = 构建一个任务闭环用以将一组独立于Vue文件的Stylus文件各自编译成Css文件({
    descriptionOfCoreTask: '将所有独立的（即不在 .vue 文件中的）Stylus 编译为 CSS',
    descriptionOfInputsOfCoreTask: '独立的 .styl 文件',

    sourceGlobs: {
        rootFolderPath: './源代码/原始的源代码/stylus',

        relativeGlobsSpecificallyForThisTaskCycle: [
            // '_通用变量集_/*.styl',
            // '完整样式表（可单独发行）/默认/*.styl',
            '**/*.styl',
        ],

        extraSourceGlobsToWatch: [
            './源代码/原始的源代码/stylus/**/*.styl',
        ],
    },

    outputFiles: {
        rootFolderPath: './源代码/发布的源代码/styles',

        forBatchOutputFiles: {
            relativeGlobsOfAllPossibleOutputs: [
                '*',
            ],
        },

        // forSingleOrTwoOutputFiles: {
        //     fileBaseName: 'default-theme',
        //     fileExtWithoutDot: 'css',
        // },
    },

    compressions: {
        shouldNotOutputUncompressedVersion: false,
        shouldNotOutputCompressedVersion: true,
    },

    // extraOptions: {
    //     shouldDiscardMostCommentsEvenIfNotCompressCSS: false,
    // },
})



const {
    // cleanAllOldOuputs,
    buildEverythingOnce,
    watchEverything,
} = create3HighOrderTasksUponMultipleTaskCycles({
    taskCyclesInPallarel: [
        任务闭环之将所有Vue文件以Typescript加Css的形式到发布到发布文件夹内,
        任务闭环之将所有独立于Vue文件的Typescript文件复制到发布文件夹内,
        任务闭环之处理和编译所有的Vue文件,
        任务闭环之将所有独立于Vue文件的Typescript文件各自转译成Javascript文件,

        任务闭环之将所有独立于Vue文件的Stylus文件复制到发布文件夹内,
        任务闭环之将所有独立于Vue文件的Stylus文件各自编译成Css文件,
    ],
})

export const buildOnce     = buildEverythingOnce
export const buildAndWatch = watchEverything
export default buildAndWatch
