<template>
    <div class="页面 页面--示范页2-多于-2-列互通之形式">
        <div class="总标题栏">
            <h3>大家好！<span class="页面极窄时则隐藏">我是<span
                class="尽量不换行之短语"
            >吴乐川。</span></span><span
                class="页面过窄时则隐藏 尽量不换行之短语">本例中有多个列。</span><span
                class="页面过窄时则隐藏 尽量不换行之短语">各列不仅两两相邻时可互通条目，</span><span
                class="页面过窄时则隐藏 尽量不换行之短语">甲乙丙三列还可将条目直接</span><span
                class="页面过窄时则隐藏 尽量不换行之短语">迁移至戊列。</span
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
                        v-model="单列允许列示的条目数之上限"
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
                    :class="`操控列-${各列数据之表[某列之列表编号 - 1].可成批自动绑定的属性.本列之称谓}-${各列数据之表[某列之列表编号].可成批自动绑定的属性.本列之称谓}`"
                    :应全面禁止交互="应全面禁止交互"
                    :甲列当下选中的条目之总数="各列数据之表[某列之列表编号 - 1].当下选中的所有条目之唯一标识之列表.length"
                    :乙列当下选中的条目之总数="各列数据之表[某列之列表编号 - 0].当下选中的所有条目之唯一标识之列表.length"
                    @已点击按钮甲="每当点击某两列之间之某按钮后(某列之列表编号 - 1, '左至右')"
                    @已点击按钮乙="每当点击某两列之间之某按钮后(某列之列表编号 - 1, '反过来')"
                >
                    <template slot="界面皿-额外功能">
                        <button
                            v-if="某列之列表编号 < 各列数据之表.length - 1"
                            class="按钮-形状必须为正圆 直接迁移至戊列之按钮"
                            :disabled="应全面禁止交互 || 各列数据之表[某列之列表编号 - 1].当下选中的所有条目之唯一标识之列表.length < 1"
                            @click="每当点击某两列之间之直接迁移至戊列之按钮后(某列之列表编号 - 1)"
                        >戊</button>
                    </template>
                </Wlc任意两列间转移条目_两列之间之竖栏_默认形态>



                <Wlc任意两列间转移条目_单列
                    :key="`列-${某列之列表编号 + 1}-【${某列.可成批自动绑定的属性.本列之称谓}】`"
                    v-model="某列.当下选中的所有条目之唯一标识之列表"
                    v-bind="某列.可成批自动绑定的属性"
                    :应全面禁止交互="应全面禁止交互"
                    :允许列示的条目数之上限="单列允许列示的条目数之上限"
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









<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import {
    范_条目之唯一标识之列表,
    范_各列新增条目之插入规则,
    范_各列条目排序之函数,
    范_内用格式之条目,

    Wlc任意两列间转移条目_单列,
    Wlc任意两列间转移条目_两列之间之竖栏_默认形态,

    Wlc任意两列间转移条目_专用工具集,
} from '@wulechuan/vue2-ui--transfer-items-among-columns'

const {
    将某列选中的条目迁移至另一列: Wlc任意两列间转移条目_专用工具_将某列选中的条目迁移至另一列,
} = Wlc任意两列间转移条目_专用工具集



import Wlc任意两列间转移条目_主表条目之订制形态 from '@/视图/部件/wlc-任意两列间转移条目-主列之条目-订制形态.vue'

import {
    一切可能的条目之列表,
} from '../../数据/示范页之数据库'

import type {
    范_任意两列间转移条目_实际条目,
    范_任意两列间转移条目_实际条目之列表,
} from '../../数据/示范页之数据库'





/* 本页专用的 “ 范（即通常所说的 ‘ 类型 ’ ）”。 */
type 范_任意两列间转移条目_实际完整形式之条目 = 范_内用格式之条目 & 范_任意两列间转移条目_实际条目;
type 范_任意两列间转移条目_实际完整形式之条目之列表 = Array<范_任意两列间转移条目_实际完整形式之条目>;

type 范_多列间转移条目功能之数据 = {
    各列之公共数据: {
        各列允许列示的条目数之统一上限: null | number;
        各列新增条目之默认插入规则: null | 范_各列新增条目之插入规则;
        当下各列采用视觉强调与否之信号表: boolean[];
        各列条目排序之默认函数: null | 范_各列条目排序之函数;
    },

    各列数据之表: 范_多列间转移条目功能_多列数据之列表;
};

type 范_多列间转移条目功能_单列数据 = Wlc任意两列间转移条目_单列.泛范_实例可绑定之属性集<范_任意两列间转移条目_实际完整形式之条目> & {
    当下选中的所有条目之唯一标识之列表: 范_条目之唯一标识之列表;

    可成批自动绑定的属性: {
        所有条目之列表: 范_任意两列间转移条目_实际完整形式之条目[];
    };

    其他数据: {
        副标题之文本?: string;
    };
};

type 范_多列间转移条目功能_多列数据之列表 = Array<范_多列间转移条目功能_单列数据>;





const 一切可能的条目去重后之列表: 范_任意两列间转移条目_实际条目之列表 = 一切可能的条目之列表.reduce((状态, 条目) => {
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
} as {
    去重后的列表: 范_任意两列间转移条目_实际条目之列表;
    用以去重的辅助字典: { [条目之唯一标识: string]: number; },
}).去重后的列表

const 一切可能的实用完整形式之条目之列表: 范_任意两列间转移条目_实际完整形式之条目之列表 = 一切可能的条目去重后之列表.map(
    (原始条目, 列表编号) => { // eslint-disable-line @typescript-eslint/no-unused-vars
        const 完整形式之条目: 范_任意两列间转移条目_实际完整形式之条目 = {
            ...原始条目,
            已选中: false,
            已禁止选择: !!原始条目.已禁止选择, // 确保该布尔值存在。
        }

        if (!完整形式之条目.数据) { 完整形式之条目.数据 = {} }
        完整形式之条目.数据.描述已呈现 = false

        return 完整形式之条目
    }
)

const 天干表: string[] = '甲乙丙丁戊己庚辛壬癸'.split('')





@Component({
    components: {
        Wlc任意两列间转移条目_单列,
        Wlc任意两列间转移条目_两列之间之竖栏_默认形态,
    },
})
export default class Page示范页2_多于2列互通之形式 extends Vue {
    private 应全面禁止交互 = false

    private 单列允许列示的条目数之上限: number | null = null

    private 多列间转移条目功能之数据: 范_多列间转移条目功能之数据 = {
        各列之公共数据: {
            各列允许列示的条目数之统一上限: NaN,
            当下各列采用视觉强调与否之信号表: [],
            各列新增条目之默认插入规则: '总是在队首插入',
            各列条目排序之默认函数: (甲, 乙) => 甲.在界面中的称谓.length - 乙.在界面中的称谓.length,
        },

        各列数据之表: [],
    }





    private get 各列数据之表 (): 范_多列间转移条目功能_多列数据之列表 {
        return this.多列间转移条目功能之数据.各列数据之表
    }

    private get 反复式开关按钮_全面禁止交互与否_措辞 (): string {
        return this.应全面禁止交互 ? '全面允许交互' : '全面禁止交互'
    }





    private 初始化 (): void {
        this.构建各列之数据(5)
        this.多列间转移条目功能之数据.各列数据之表[0].可成批自动绑定的属性.所有条目之列表 = 一切可能的实用完整形式之条目之列表
    }

    private 构建各列之数据 (列数: number): void {
        const { 多列间转移条目功能之数据 } = this

        const {
            各列允许列示的条目数之统一上限,
            各列新增条目之默认插入规则,
            各列条目排序之默认函数,
        } = 多列间转移条目功能之数据.各列之公共数据

        const 用于规定列数的临时数组: Array<boolean> = new Array(列数).fill(false)

        const 各列数据之表: 范_多列间转移条目功能_多列数据之列表 = 用于规定列数的临时数组.map((无用的值, 列编号) => {
            const 本列之天干: string = 天干表[列编号]

            const 本列之称谓: string = 本列之天干
            const 故意要求该列之条目总是排序: boolean = [ 2, 3, 4 ].includes(列编号)
            const 故意要求该列之条目之形态为自定义形态: boolean = [ 0, 2, 3 ].includes(列编号)

            const 副标题之文本短语集: string[] = []
            if (故意要求该列之条目总是排序) {
                副标题之文本短语集.push('总是排序')
            }
            if (故意要求该列之条目之形态为自定义形态) {
                副标题之文本短语集.push('均采用订制形态')
            }

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
                    无需底部的说明书功能区: false,
                    vue部件之定义_订制的主表条目: 故意要求该列之条目之形态为自定义形态 ? Wlc任意两列间转移条目_主表条目之订制形态 : null,
                },

                其他数据: {
                    副标题之文本,
                },
            }
        })

        多列间转移条目功能之数据.各列之公共数据.当下各列采用视觉强调与否之信号表 = 用于规定列数的临时数组

        多列间转移条目功能之数据.各列数据之表 = 各列数据之表
    }

    private 求_当下另有他列优先于本列采取视觉强调引导用户操作之 (本列之列表编号: number): boolean {
        const { 当下各列采用视觉强调与否之信号表 } = this.多列间转移条目功能之数据.各列之公共数据
        const 当下另有他列优先于本列采取视觉强调: boolean = 当下各列采用视觉强调与否之信号表.slice(0, 本列之列表编号).some(某列之信号 => !!某列之信号)
        // console.debug(本列之列表编号, 当下另有他列优先于本列采取视觉强调, 当下各列采用视觉强调与否之信号表.slice(0, 本列之列表编号))
        return 当下另有他列优先于本列采取视觉强调
    }

    private 应禁用两列之间之某按钮 (甲列之列表编号: number, 按钮之代号: '左至右' | '反过来'): boolean {
        const 应考察的列之列表编号: number = 按钮之代号 === '左至右' ? 甲列之列表编号 : 甲列之列表编号 + 1
        const 应考察的列之数据集 = this.各列数据之表[应考察的列之列表编号]
        return 应考察的列之数据集.当下选中的所有条目之唯一标识之列表.length === 0
    }

    private 将某列选中之条目迁移至另一列 (起列之列表编号: number, 迄列之列表编号: number): void {
        const 起列之数据集 = this.各列数据之表[起列之列表编号]
        const 迄列之数据集 = this.各列数据之表[迄列之列表编号]

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
    }





    private 每当点击某两列之间之某按钮后 (甲列之列表编号: number, 按钮之代号: '左至右' | '反过来'): void {
        let 起列之列表编号: number
        let 迄列之列表编号: number

        if (按钮之代号 === '左至右') {
            起列之列表编号 = 甲列之列表编号
            迄列之列表编号 = 甲列之列表编号 + 1
        } else{
            起列之列表编号 = 甲列之列表编号 + 1
            迄列之列表编号 = 甲列之列表编号
        }

        this.将某列选中之条目迁移至另一列(起列之列表编号, 迄列之列表编号)
    }

    private 每当点击某两列之间之直接迁移至戊列之按钮后 (起列之列表编号: number): void {
        this.将某列选中之条目迁移至另一列(起列之列表编号, 4)
    }

    private 每当某列之视觉强调之状态变动后(某列之列表编号: number, 该列当下正启用某种视觉强调: boolean): void {
        // console.debug(this.多列间转移条目功能之数据.各列数据之表[某列之列表编号].可成批自动绑定的属性.本列之称谓, 该列当下正启用某种视觉强调)
        this.$set(this.多列间转移条目功能之数据.各列之公共数据.当下各列采用视觉强调与否之信号表, 某列之列表编号, 该列当下正启用某种视觉强调)
    }





    private beforeMount (): void {
        this.初始化()

        this.$nextTick().then(() => {
            const { 各列数据之表 } = this.多列间转移条目功能之数据
            各列数据之表[0].当下选中的所有条目之唯一标识之列表 = [ '建马', '騊駼', '比翼鸟', '青龙', '白虎', '朱雀' ]
        })
    }

    private activated (): void {
        document.title = '两列间转移条目·例2：多列互通（TypeScript）'
    }
}
</script>









<style lang="stylus">
/* autoprefixer: off */

@require '@/视图/_公共样式/样式定义/本应用的-stylus-通用变量集'

{app_styles_global_wrapper} {

    .页面--示范页2-多于-2-列互通之形式 {
        {wlc_transfer_items_among_columns__css_var_name__element_highlighting_color_static} #008b8b
        {wlc_transfer_items_among_columns__css_var_name__element_highlighting_color_hover} #1eb8b8
        {wlc_transfer_items_among_columns__css_var_name__element_highlighting_but_disabled_color_static} #40c9c9
        {wlc_transfer_items_among_columns__css_var_name__element_non_highlighting_color_hover} #baf2f2
        {wlc_transfer_items_among_columns__css_var_name__focusing_element_outline_color} 'var(%s)' % unquote(wlc_transfer_items_among_columns__css_var_name__element_highlighting_color_static)

        box-sizing border-box
        height 100%
        display flex
        flex-direction column

        @media screen and (max-width 1280px) {
            .页面过窄时则隐藏 { display: none; }
        }

        @media screen and (max-width 960px) {
            .页面极窄时则隐藏 { display: none; }
        }

        .总标题栏 {
            flex 0 0 auto
            background-color #ccc
            display flex
            flex-direction row
            justify-content center
            align-items center
            padding 0.5em 1em

            h3 {
                flex 1 1 auto
                font-size 1.5rem
                text-align center
                margin 0 0.5em
                padding 0.5em
            }
        }

        .页面顶部的控制面板 {
            flex 0 0 32em
            display flex
            flex-direction row
            justify-content flex-end
            align-items center

            input {
                display block
                width 6em
            }

            button {
                flex 0 0 auto
            }
        }

        .页面中央内容块 {
            flex 1 1 auto
            box-sizing border-box
            height 100%
            display flex
            flex-direction row
            flex-wrap nowrap
            padding 2em
            overflow auto
            margin 0 2em 2em
        }

        .吴乐川-任意两列间转移条目-单列 {
            flex 0 0 24em

            .列标题栏 {
                color white
                background-color rgba(black, 0.79)

                h3 {
                    font-size 1.25em
                    text-align center
                    margin 0.2em 0
                }

                h4 {
                    font-size 1em
                    font-weight normal
                    margin 0.5em 0
                    height 1em
                    line-height 1
                }
            }

            &.甲 .列首 { background-color: #fdd; }
            &.乙 .列首 { background-color: #ffd; }
            &.丙 .列首 { background-color: #dfd; }
            &.丁 .列首 { background-color: #dff; }
            &.戊 .列首 { background-color: #ddf; }
        }

        .操控列-甲-乙 .迁移条目之按钮--乙列至甲列,
        .吴乐川-任意两列间转移条目-单列.甲 { // 故意另【甲】列之配色与众不同。
            {wlc_transfer_items_among_columns__css_var_name__element_highlighting_color_static} #f66
            {wlc_transfer_items_among_columns__css_var_name__element_highlighting_color_hover} #f88
            {wlc_transfer_items_among_columns__css_var_name__element_highlighting_but_disabled_color_static} #ecc
            {wlc_transfer_items_among_columns__css_var_name__element_non_highlighting_color_hover} #fdd
            {wlc_transfer_items_among_columns__css_var_name__focusing_element_outline_color} 'var(%s)' % unquote(wlc_transfer_items_among_columns__css_var_name__element_highlighting_color_static)
        }

        .吴乐川-任意两列间转移条目-两列之间之默认竖栏 {

            .直接迁移至戊列之按钮 {
            }
        }
    }
}
</style>
