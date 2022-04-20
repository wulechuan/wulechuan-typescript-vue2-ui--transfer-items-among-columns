<template>
    <div class="页面 页面--示范页2-多余-2-列互通之形式">
        <div class="总标题栏">
            <h3>大家好！<span class="页面极窄时则隐藏">我是<span
                class="尽量不换行之短语"
            >吴乐川。</span></span><span
                class="页面过窄时则隐藏 尽量不换行之短语">本例中有多个列，</span><span
                class="页面过窄时则隐藏 尽量不换行之短语">不仅两两相邻时可互通条目，</span><span
                class="页面过窄时则隐藏 尽量不换行之短语">各列还可直接将条目</span><span
                class="页面过窄时则隐藏 尽量不换行之短语">迁移至末列（戊列）。</span
            ></h3>

            <div class="页面顶部的控制面板">
                <label class="包裹着输入项 包裹着输入项-单行文字输入">
                    <span class="输入项配文 输入项配文-单行文字输入">
                        <span class="尽量不换行之短语">单列允许列示的</span>
                        <span class="尽量不换行之短语">条目数之上限</span>
                    </span>
                    <input
                        class="输入项 输入项-单行文字输入"
                        type="number"
                        v-model="允许列示的条目数之上限"
                    >
                </label>

                <button
                    class="反复式开关-全面禁止交互与否"
                    @click="应全面禁止交互 = !应全面禁止交互"
                >{{ 反复式开关按钮_全面禁止交互与否_措辞 }}</button>
            </div>
        </div>

        <div class="页面中央内容块">
            <template v-for="(某列, 某列之列表编号) in 各列数据之表">



                <Wlc任意两列间转移条目_两列之间之竖栏_默认形态
                    v-if="某列之列表编号 > 0"
                    :key="`操控列-${某列之列表编号}-${某列之列表编号 + 1}-（【${各列数据之表[某列之列表编号 - 1].可成批自动绑定的属性.本列之称谓}】-【${各列数据之表[某列之列表编号].可成批自动绑定的属性.本列之称谓}】）`"
                    :应全面禁止交互="应全面禁止交互"
                    :甲列当下选中的条目之总数="各列数据之表[某列之列表编号 - 1].当下选中的所有条目之唯一标识之列表.length"
                    :乙列当下选中的条目之总数="各列数据之表[某列之列表编号 - 0].当下选中的所有条目之唯一标识之列表.length"
                    @请求将甲列选中之条目迁移至乙列="每当点击某两列之间之某按钮后(某列之列表编号 - 1, '左至右')"
                    @请求将乙列选中之条目迁移至甲列="每当点击某两列之间之某按钮后(某列之列表编号 - 1, '反过来')"
                >
                    <template slot="界面皿-额外功能区">
                        <button
                            v-if="某列之列表编号 < 各列数据之表.length - 1"
                            class="按钮-形状必须为正圆 直接迁移至戊列之按钮"
                            :disabled="各列数据之表[某列之列表编号 - 1].当下选中的所有条目之唯一标识之列表.length < 1"
                            @click="每当点击某两列之间之直接迁移至戊列之按钮后(某列之列表编号 - 1)"
                        >戊</button>
                    </template>
                </Wlc任意两列间转移条目_两列之间之竖栏_默认形态>



                <Wlc任意两列间转移条目_单列
                    :key="`列-${某列之列表编号 + 1}-【${某列.可成批自动绑定的属性.本列之称谓}】`"
                    v-model="某列.当下选中的所有条目之唯一标识之列表"
                    v-bind="某列.可成批自动绑定的属性"
                    :应全面禁止交互="应全面禁止交互"
                    :允许列示的条目数之上限="允许列示的条目数之上限"
                    :当下另有他列优先于本列采取视觉强调引导用户操作之="求_当下另有他列优先于本列采取视觉强调引导用户操作之(某列之列表编号)"
                    @内部某元素之视觉强调之状态已变动="每当某列之视觉强调之状态变动后(某列之列表编号, $event)"
                    @已出错="当任意两列间转移条目功能出错时($event)"
                >
                    <template slot="界面皿-标题栏">
                        <h3>{{ 某列.可成批自动绑定的属性.本列之称谓 }}</h3>
                        <h4>{{ 某列.其他数据.副标题之文本 }}</h4>
                    </template>
                </Wlc任意两列间转移条目_单列>



            </template>
        </div>
    </div>
</template>









<script>
import {
    Wlc任意两列间转移条目_单列,
    Wlc任意两列间转移条目_两列之间之竖栏_默认形态,

    Wlc任意两列间转移条目_专用工具集,
} from '@wulechuan/vue2-ui--transfer-items-among-columns/源代码/发布的源代码/javascript'

const {
    将某列选中的条目迁移至另一列: Wlc任意两列间转移条目_专用工具_将某列选中的条目迁移至另一列,
} = Wlc任意两列间转移条目_专用工具集



import Wlc任意两列间转移条目_主表条目之订制形态_Vue类之配置 from '@/视图/部件/wlc-任意两列间转移条目-主表条目-订制形态.vue'

import {
    一切可能的条目之列表,
} from '../../数据/示范页之数据库'

import {
    范_任意两列间转移条目_实际条目,
    范_任意两列间转移条目_实际条目之列表,
} from '../../数据/示范页之数据库'





/** @typedef {import('@wulechuan/vue2-ui--transfer-items-among-columns').范_各列新增条目之插入规则} 范_各列新增条目之插入规则 */
/** @typedef {import('@wulechuan/vue2-ui--transfer-items-among-columns').范_各列条目排序之函数} 范_各列条目排序之函数 */
/** @typedef {import('@wulechuan/vue2-ui--transfer-items-among-columns').范_内用格式之条目} 范_内用格式之条目 */

/**
 * @typedef {范_内用格式之条目 & 范_任意两列间转移条目_实际条目} 范_任意两列间转移条目_实际完整形式之条目
 */

/**
 * @typedef {Array<范_任意两列间转移条目_实际完整形式之条目>} 范_任意两列间转移条目_实际完整形式之条目之列表
 */

/**
 * @typedef {object} 范_多列间转移条目功能之数据
 *
 * @property {object} 各列之公共数据
 * @property {null | number} 各列之公共数据.各列允许列示的条目数之统一上限
 * @property {null | 范_各列新增条目之插入规则} 各列之公共数据.各列新增条目之默认插入规则
 * @property {boolean[]} 各列之公共数据.当下各列采用视觉强调与否之信号表
 * @property {null | 范_各列条目排序之函数} 各列之公共数据.各列条目排序之默认函数
 *
 * @property {范_多列间转移条目功能_多列数据之列表} 各列数据之表
 */

/**
 * @typedef {Wlc任意两列间转移条目_单列.泛范_实例可绑定之属性集<
 *     范_任意两列间转移条目_实际完整形式之条目
 * > & {
 *     其他数据: {
 *         副标题之文本?: string;
 *     };
 * } 范_多列间转移条目功能_单列数据
 */

/**
 * @typedef {Array<范_多列间转移条目功能_单列数据>} 范_多列间转移条目功能_多列数据之列表
 */





/** @type {范_任意两列间转移条目_实际条目之列表} */
const 一切可能的条目去重后之列表 = 一切可能的条目之列表.reduce(
    /**
     * @param {object} 状态
     * @param {范_任意两列间转移条目_实际条目之列表} 状态.去重后的列表
     * @param {{ [条目之唯一标识: string]: number; }} 状态.用以去重的辅助字典
     */
    (状态, 条目) => {
        const { 去重后的列表, 用以去重的辅助字典 } = 状态
        const { 唯一标识 } = 条目

        if (!(唯一标识 in 用以去重的辅助字典)) {
            用以去重的辅助字典[唯一标识] = 1
            去重后的列表.push(条目)
        } else {
            用以去重的辅助字典[唯一标识]++
        }

        return 状态
    }, {
        去重后的列表: [],
        用以去重的辅助字典: {},
    }
).去重后的列表

/** @type {范_任意两列间转移条目_实际完整形式之条目之列表} */
const 一切可能的实用完整形式之条目之列表 = 一切可能的条目去重后之列表.map(
    (原始条目, 列表编号) => {
        /** @type {范_任意两列间转移条目_实际完整形式之条目} */
        const 完整形式之条目 = {
            ...原始条目,
            已选中: false,
            已禁止选择: !!原始条目.已禁止选择, // 确保该布尔值存在。
        }

        if (!完整形式之条目.数据) { 完整形式之条目.数据 = {} }
        完整形式之条目.数据.描述已呈现 = false

        return 完整形式之条目
    }
)

/** @type {string[]} */
const 天干表 = '甲乙丙丁戊己庚辛壬癸'.split('')





export default {
    name: 'Page示范页2_多余2列互通之形式',

    components: {
        Wlc任意两列间转移条目_单列,
        Wlc任意两列间转移条目_两列之间之竖栏_默认形态,
    },

    data () {
        return {
            /** @type {boolean} */
            应全面禁止交互: false,

            /** @type {number} */
            允许列示的条目数之上限: null,

            /** @type {范_多列间转移条目功能之数据} */
            多列间转移条目功能之数据: {
                各列之公共数据: {
                    各列允许列示的条目数之统一上限: NaN,
                    当下各列采用视觉强调与否之信号表: [],
                    各列新增条目之默认插入规则: '总是在队首插入',
                    各列条目排序之默认函数: (甲, 乙) => 甲.在界面中的称谓.length - 乙.在界面中的称谓.length,
                },

                各列数据之表: [],
            },
        }
    },

    computed: {
        /**
         * @returns {范_多列间转移条目功能_多列数据之列表}
         */
        各列数据之表 () {
            return this.多列间转移条目功能之数据.各列数据之表
        },

        /**
         * @returns {string}
         */
        反复式开关按钮_全面禁止交互与否_措辞 () {
            return this.应全面禁止交互 ? '全面允许交互' : '全面禁止交互'
        },
    },

    methods: {
        初始化 () {
            this.构建各列之数据(5)
            this.多列间转移条目功能之数据.各列数据之表[0].可成批自动绑定的属性.所有条目之列表 = 一切可能的实用完整形式之条目之列表
        },

        /**
         * @param {number} 列数
         */
        构建各列之数据 (列数) {
            const { 多列间转移条目功能之数据 } = this

            const {
                各列允许列示的条目数之统一上限,
                各列新增条目之默认插入规则,
                各列条目排序之默认函数,
            } = 多列间转移条目功能之数据.各列之公共数据

            /** @type {boolean[]} */
            const 用于规定列数的临时数组 = new Array(列数).fill(false)

            /** @type {范_多列间转移条目功能_多列数据之列表} */
            const 各列数据之表 = 用于规定列数的临时数组.map(/** @returns {范_多列间转移条目功能_单列数据} */ (无用的值, 列编号) => {
                /** @type {string} */
                const 本列之天干 = 天干表[列编号]

                /** @type {string} */
                const 本列之称谓 = 本列之天干

                /** @type {boolean} */
                const 故意要求该列之条目总是排序 = [ 2, 3, 4 ].includes(列编号)

                /** @type {boolean} */
                const 故意要求该列之条目之形态为自定义形态 = [ 0, 2, 3 ].includes(列编号)

                /** @type {string[]} */
                const 副标题之文本短语集 = []

                if (故意要求该列之条目总是排序) {
                    副标题之文本短语集.push('总是排序')
                }

                if (故意要求该列之条目之形态为自定义形态) {
                    副标题之文本短语集.push('均采用订制形态')
                }

                /** @type {string} */
                let 副标题之文本 = '该列一切配置均为默认形式'
                if (副标题之文本短语集.length > 0) {
                    副标题之文本 = `该列之所有条目${副标题之文本短语集.join('、')}`
                }

                return {
                    // 用于 v-model 双向绑定。
                    当下选中的所有条目之唯一标识之列表: [],

                    // 用于 props 单向绑定。
                    可成批自动绑定的属性: {
                        本列之称谓,
                        所有条目之列表: [],

                        本列之特征样式类名之配置: 本列之天干,
                        允许列示的条目数之上限: 各列允许列示的条目数之统一上限,
                        新增条目之插入规则: 故意要求该列之条目总是排序 ? '总是参与排序' : 各列新增条目之默认插入规则,
                        条目排序之函数: 各列条目排序之默认函数,
                        本列初始的用以过滤条目之配置: '',
                        当下另有他列优先于本列采取视觉强调引导用户操作之: false,
                        不应创建底部栏目: false,
                        vue部件之定义_订制的主表条目: 故意要求该列之条目之形态为自定义形态 ? Wlc任意两列间转移条目_主表条目之订制形态_Vue类之配置 : null,
                    },

                    其他数据: {
                        副标题之文本,
                    },
                }
            })

            多列间转移条目功能之数据.各列之公共数据.当下各列采用视觉强调与否之信号表 = 用于规定列数的临时数组

            多列间转移条目功能之数据.各列数据之表 = 各列数据之表
        },

        /**
         * @param {number} 本列之列表编号
         * @returns {boolean}
         */
        求_当下另有他列优先于本列采取视觉强调引导用户操作之 (本列之列表编号) {
            const { 当下各列采用视觉强调与否之信号表 } = this.多列间转移条目功能之数据.各列之公共数据

            /** @type {boolean} */
            const 当下另有他列优先于本列采取视觉强调 = 当下各列采用视觉强调与否之信号表.slice(0, 本列之列表编号).some(某列之信号 => !!某列之信号)
            // console.debug(本列之列表编号, 当下另有他列优先于本列采取视觉强调, 当下各列采用视觉强调与否之信号表.slice(0, 本列之列表编号))
            return 当下另有他列优先于本列采取视觉强调
        },

        /**
         * @param {number} 甲列之列表编号
         * @param {'左至右' | '反过来'} 按钮之代号
         *
         * @returns {boolean}
         */
        应禁用两列之间之某按钮 (甲列之列表编号, 按钮之代号) {
            /** @type {number} */
            const 应考察的列之列表编号 = 按钮之代号 === '左至右' ? 甲列之列表编号 : 甲列之列表编号 + 1

            /** @type {范_多列间转移条目功能_多列数据之列表} */
            const 各列数据之表 = this.各列数据之表

            /** @type {范_多列间转移条目功能_单列数据} */
            const 应考察的列之数据集 = 各列数据之表[应考察的列之列表编号]

            return 应考察的列之数据集.当下选中的所有条目之唯一标识之列表.length === 0
        },

        /**
         * @param {number} 起列之列表编号
         * @param {number} 迄列之列表编号
         */
        将某列选中之条目迁移至另一列 (起列之列表编号, 迄列之列表编号) {
            /** @type {范_多列间转移条目功能_多列数据之列表} */
            const 各列数据之表 = this.各列数据之表

            /** @type {范_多列间转移条目功能_单列数据} */
            const 起列之数据集 = 各列数据之表[起列之列表编号]

            /** @type {范_多列间转移条目功能_单列数据} */
            const 迄列之数据集 = 各列数据之表[迄列之列表编号]

            const 迁移结果 = Wlc任意两列间转移条目_专用工具_将某列选中的条目迁移至另一列(
                起列之数据集.可成批自动绑定的属性.所有条目之列表,
                迄列之数据集.可成批自动绑定的属性.所有条目之列表
            )
            if (!迁移结果) { return }

            const {
                迁移后起列所有条目之列表,
                迁移后迄列所有条目之列表,
            } = 迁移结果

            起列之数据集.可成批自动绑定的属性.所有条目之列表 = 迁移后起列所有条目之列表
            迄列之数据集.可成批自动绑定的属性.所有条目之列表 = 迁移后迄列所有条目之列表
        },

        /**
         * @param {number} 甲列之列表编号
         * @param {'左至右' | '反过来'} 按钮之代号
         */
        每当点击某两列之间之某按钮后 (甲列之列表编号, 按钮之代号) {
            /** @type {number} */
            let 起列之列表编号

            /** @type {number} */
            let 迄列之列表编号

            if (按钮之代号 === '左至右') {
                起列之列表编号 = 甲列之列表编号
                迄列之列表编号 = 甲列之列表编号 + 1
            } else{
                起列之列表编号 = 甲列之列表编号 + 1
                迄列之列表编号 = 甲列之列表编号
            }

            this.将某列选中之条目迁移至另一列(起列之列表编号, 迄列之列表编号)
        },

        /**
         * @param {number} 起列之列表编号
         */
        每当点击某两列之间之直接迁移至戊列之按钮后 (起列之列表编号) {
            this.将某列选中之条目迁移至另一列(起列之列表编号, 4)
        },

        /**
         * @param {number} 某列之列表编号
         * @param {boolean} 该列当下正启用某种视觉强调
         */
        每当某列之视觉强调之状态变动后(某列之列表编号, 该列当下正启用某种视觉强调) {
            // console.debug(this.多列间转移条目功能之数据.各列数据之表[某列之列表编号].可成批自动绑定的属性.本列之称谓, 该列当下正启用某种视觉强调)
            this.$set(this.多列间转移条目功能之数据.各列之公共数据.当下各列采用视觉强调与否之信号表, 某列之列表编号, 该列当下正启用某种视觉强调)
        },
    },

    beforeMount () {
        this.初始化()
    },

    activated () {
        document.title = '两列间转移条目·例2：多列互通（JavaScript）'
    },
}
</script>









<style lang="scss">
/* autoprefixer: off */

@import '@/视图/_公共样式/样式定义/本应用的-sass-通用变量集';

#{$用以包裹整个应用之部分样式之选择器} {

    .页面--示范页2-多余-2-列互通之形式 {
        #{$吴乐川_任意两列间转移条目__css变量名__element_highlighting_color_static}: #008b8b;
        #{$吴乐川_任意两列间转移条目__css变量名__element_highlighting_color_hover}: #1eb8b8;
        #{$吴乐川_任意两列间转移条目__css变量名__element_highlighting_but_disabled_color_static}: #40c9c9;
        #{$吴乐川_任意两列间转移条目__css变量名__element_non_highlighting_color_hover}: #baf2f2;
        #{$吴乐川_任意两列间转移条目__css变量名__focusing_element_outline_color}: var(#{$吴乐川_任意两列间转移条目__css变量名__element_highlighting_color_static});

        font-size: 18px;
        box-sizing: border-box;
        height: 100%;
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 1280px) {
            .页面过窄时则隐藏 { display: none; }
        }

        @media screen and (max-width: 960px) {
            .页面极窄时则隐藏 { display: none; }
        }

        .总标题栏 {
            flex: 0 0 auto;
            background-color: #ccc;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 0.5em 1em;

            h3 {
                flex: 1 1 auto;
                font-size: 1.5rem;
                text-align: center;
                margin: 0 0.5em;
                padding: 0.5em;
            }
        }

        .页面顶部的控制面板 {
            flex: 0 0 32em;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;

            input {
                display: block;
                width: 6em;
            }

            button {
                flex: 0 0 auto;
            }
        }

        .页面中央内容块 {
            flex: 1 1 auto;
            box-sizing: border-box;
            height: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            padding: 2em;
            overflow: auto;
            margin: 0 2em 2em;
        }

        .吴乐川-任意两列间转移条目-单列 {
            flex: 0 0 24em;

            .列标题栏 {
                color: white;
                background-color: rgba(black, 0.79);

                h3 {
                    font-size: 1.25em;
                    text-align: center;
                    margin: 0.2em 0;
                }

                h4 {
                    font-size: 1em;
                    font-weight: normal;
                    margin: 0.5em 0;
                    height: 1em;
                    line-height: 1;
                }
            }

            &.甲 .列首 { background-color: #fcc; }
            &.乙 .列首 { background-color: #ffc; }
            &.丙 .列首 { background-color: #cfc; }
            &.丁 .列首 { background-color: #cff; }
            &.戊 .列首 { background-color: #ccf; }
        }

        // .吴乐川-任意两列间转移条目-两列之间之默认竖栏 {

        //     .直接迁移至戊列之按钮 {
        //     }
        // }
    }
}
</style>
