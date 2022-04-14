<template>
    <div class="页面 页面--示范页2-多余-2-列互通之形式">
        <div class="总标题栏">
            <h3>大家好！我是吴乐川。以下是《中华神兽烤肉采购列表》。</h3>
        </div>

        <div class="页面中央内容块">
            <div class="示范区">
                <template v-for="(某列, 某列之列表编号) in 各列数据之表">
                    <template v-if="某列之列表编号 > 0">
                        <div
                            :key="`操控列-${某列之列表编号}-${某列之列表编号 + 1}-（【${各列数据之表[某列之列表编号 - 1].本列之称谓}】-【${各列数据之表[某列之列表编号].本列之称谓}】）`"
                            class="两列之间的操控区"
                        >
                            <div class="功能单体 功能单体-主体为按钮">
                                <button
                                    class="按钮-形状必须为正圆"
                                    :disabled="应禁用两列之间之某按钮(某列之列表编号 - 1, '左至右')"
                                    @click="每当点击某两列之间之某按钮后(某列之列表编号 - 1, '左至右')"
                                >&gt;</button>

                                <sup
                                    v-if="各列数据之表[某列之列表编号 - 1].当下选中的所有条目之唯一标识之列表.length > 0"
                                    class="角标 角标-位置应居左"
                                >{{ 各列数据之表[某列之列表编号 - 1].当下选中的所有条目之唯一标识之列表.length }}</sup>
                            </div>

                            <div class="功能单体 功能单体-主体为按钮">
                                <button
                                    class="按钮-形状必须为正圆"
                                    :disabled="应禁用两列之间之某按钮(某列之列表编号 - 1, '反过来')"
                                    @click="每当点击某两列之间之某按钮后(某列之列表编号 - 1, '反过来')"
                                >&lt;</button>

                                <sup
                                    v-if="各列数据之表[某列之列表编号].当下选中的所有条目之唯一标识之列表.length > 0"
                                    class="角标"
                                >{{ 各列数据之表[某列之列表编号].当下选中的所有条目之唯一标识之列表.length }}</sup>
                            </div>
                        </div>
                    </template>

                    <Wlc任意两列互换数据之单列
                        :key="`列-${某列之列表编号 + 1}-${某列.可成批自动绑定的属性.本列之称谓}`"
                        v-model="某列.当下选中的所有条目之唯一标识之列表"
                        v-bind="某列.可成批自动绑定的属性"
                        @内部某元素之视觉强调之状态已变动="多列互换数据功能之数据.各列之公共数据.当下各列采用视觉强调与否之信号表[某列之列表编号] = $event"
                        @已出错="当双列互换数据功能出错时($event)"
                    >
                        <template slot="界面皿-标题栏">
                            <h3>{{ 某列.可成批自动绑定的属性.本列之称谓 }}</h3>
                        </template>
                    </Wlc任意两列互换数据之单列>
                </template>
            </div>
        </div>
    </div>
</template>









<script lang="ts">
import { VueConstructor } from 'vue'
import { Component, Vue } from 'vue-property-decorator'

import {
    范_条目之唯一标识之列表,
    范_各列新增条目之插入规则,
    范_各列条目排序之函数,
    范_内用格式之条目,

    Wlc任意两列互换数据之单列,
} from '@wulechuan/vue2-ui--columns-exchange-items'

import Wlc任意两列互换数据之条目视觉根之自定义形态示范 from '@/视图/部件/wlc-任意两列互换数据之条目视觉根-自定义形态.vue'

import {
    将某列选中的条目迁移至另一列,
} from '@wulechuan/vue2-ui--columns-exchange-items/源代码/发布的源代码/typescript/核心工具集'

import {
    一切可能的条目之列表,
} from '../../数据/示范页之数据库'

import type {
    范_双列互换数据_实际条目,
    范_双列互换数据_实际条目之列表,
} from '../../数据/示范页之数据库'





/* 本页专用的 “ 范（即通常所说的 ‘ 类型 ’ ）”。 */
type 范_双列互换数据_实际完整形式之条目 = 范_内用格式之条目 & 范_双列互换数据_实际条目;
type 范_双列互换数据_实际完整形式之条目之列表 = Array<范_双列互换数据_实际完整形式之条目>;

type 范_多列互换数据功能之数据 = {
    各列之公共数据: {
        各列允许列示的条目数之统一上限: null | number;
        各列新增条目之默认插入规则: null | 范_各列新增条目之插入规则;
        当下各列采用视觉强调与否之信号表: boolean[];
        各列条目排序之默认函数: null | 范_各列条目排序之函数;
    },

    各列数据之表: 范_多列互换数据功能之列数据之表;
};

type 范_多列互换数据功能之列数据之表 = Array<范_多列互换数据功能之单列数据>;

type 范_多列互换数据功能之单列数据 = {
    // 用于 v-model 双向绑定。
    当下选中的所有条目之唯一标识之列表: 范_条目之唯一标识之列表;

    // 用于 props 单向绑定。
    可成批自动绑定的属性: {
        本列之称谓: string;
        所有条目之列表: 范_双列互换数据_实际完整形式之条目之列表;

        本列之特征样式类名之配置: null | string;
        允许列示的条目数之上限: null | number;
        新增条目之插入规则: null | 范_各列新增条目之插入规则;
        条目排序之函数: null | 范_各列条目排序之函数;
        本列初始的用以过滤条目之配置: null | string | RegExp;
        当下另有他列优先于本列采取视觉强调引导用户操作之: null | boolean;
        不应创建底部栏目: null | boolean;
        部件构造函数之自定义主表条目: null | VueConstructor;
    };
};





const 一切可能的条目去重后之列表: 范_双列互换数据_实际条目之列表 = 一切可能的条目之列表.reduce((状态, 条目) => {
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
    去重后的列表: 范_双列互换数据_实际条目之列表;
    用以去重的辅助字典: { [条目之唯一标识: string]: number; },
}).去重后的列表

const 一切可能的实用完整形式之条目之列表: 范_双列互换数据_实际完整形式之条目之列表 = 一切可能的条目去重后之列表.map((原始条目, 列表编号) => {
    const 完整形式之条目: 范_双列互换数据_实际完整形式之条目 = {
        ...原始条目,
        已选中: false,
        已禁止选择: !!原始条目.已禁止选择,
    }

    if (!完整形式之条目.数据) { 完整形式之条目.数据 = {} }
    完整形式之条目.数据.描述已呈现 = 列表编号 % 9 === 0 // 不妨每 9 个条目故意初始展开（呈现）其解释。

    return 完整形式之条目
})

const 天干表: string[] = '甲乙丙丁戊己庚辛壬癸'.split('')





@Component({
    components: {
        Wlc任意两列互换数据之单列,
    },
})
export default class Page示范页2_多余2列互通之形式 extends Vue {
    private 多列互换数据功能之数据: 范_多列互换数据功能之数据 = {
        各列之公共数据: {
            各列允许列示的条目数之统一上限: NaN,
            当下各列采用视觉强调与否之信号表: [],
            各列新增条目之默认插入规则: '总是追加在首部',
            各列条目排序之默认函数: (甲, 乙) => 甲.在界面中的称谓.length - 乙.在界面中的称谓.length,
        },

        各列数据之表: [],
    }





    private get 各列数据之表 (): 范_多列互换数据功能之列数据之表 {
        return this.多列互换数据功能之数据.各列数据之表
    }





    private 初始化 (): void {
        this.构建各列之数据(5)
        this.多列互换数据功能之数据.各列数据之表[0].可成批自动绑定的属性.所有条目之列表 = 一切可能的实用完整形式之条目之列表
    }

    private 构建各列之数据 (列数: number): void {
        const { 多列互换数据功能之数据 } = this

        const {
            各列允许列示的条目数之统一上限,
            各列新增条目之默认插入规则,
            各列条目排序之默认函数,
        } = 多列互换数据功能之数据.各列之公共数据

        const 用于规定列数的临时数组: Array<boolean> = new Array(列数).fill(false)

        const 各列数据之表: 范_多列互换数据功能之列数据之表 = 用于规定列数的临时数组.map((无用的值, 列编号) => {
            const 本列之天干: string = 天干表[列编号]

            let 本列之称谓: string = 本列之天干
            const 故意要求该列之条目总是排序: boolean = 列编号 === 3
            const 故意要求该列之条目之形态为自定义形态: boolean = 列编号 === 2

            if (故意要求该列之条目总是排序) {
                本列之称谓 = `${本列之称谓}（该列条目总是排序）`
            }
            if (故意要求该列之条目之形态为自定义形态) {
                本列之称谓 = `${本列之称谓}（该列条目均采用订制形态）`
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
                    部件构造函数之自定义主表条目: 故意要求该列之条目之形态为自定义形态 ? Wlc任意两列互换数据之条目视觉根之自定义形态示范 : null,
                },
            }
        })

        多列互换数据功能之数据.各列之公共数据.当下各列采用视觉强调与否之信号表 = 用于规定列数的临时数组

        多列互换数据功能之数据.各列数据之表 = 各列数据之表
    }

    private 应禁用两列之间之某按钮 (甲列之列表编号: number, 按钮之代号: '左至右' | '反过来'): boolean {
        const 应考察的列之列表编号: number = 按钮之代号 === '左至右' ? 甲列之列表编号 : 甲列之列表编号 + 1
        const 应考察的列之数据集 = this.各列数据之表[应考察的列之列表编号]
        return 应考察的列之数据集.当下选中的所有条目之唯一标识之列表.length === 0
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

        const 起列之数据集 = this.各列数据之表[起列之列表编号]
        const 迄列之数据集 = this.各列数据之表[迄列之列表编号]

        const 迁移结果 = 将某列选中的条目迁移至另一列(
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





    private mounted (): void {
        this.初始化()
    }
}
</script>









<style lang="stylus">
.页面--示范页2-多余-2-列互通之形式 {
    box-sizing border-box
    height 100%
    display flex
    flex-direction column

    .总标题栏 {
        flex 0 0 auto
        background-color #ccc

        h3 {
            flex 0 0 auto
            font-size: 2rem
            text-align: center
            margin: 0
            padding 1rem
        }
    }

    .页面中央内容块 {
        flex 1 1 auto
        box-sizing border-box
        display flex
        flex-direction column
        justify-content center
        align-items center
        margin 0
        padding 2em
        overflow hidden
    }

    .示范区 {
        box-sizing border-box
        width: 100%
        height 100%
        display flex
        flex-direction row
        flex-wrap nowrap
        padding 2em
        overflow auto
    }

    .吴乐川-任意两列互换数据-单列 {
        flex 0 0 20em

        .列标题栏 {
            color white
            background-color rgba(black, 0.79)

            h3 {
                margin 0.2em 0
                text-align center
            }
        }

        &.甲 .列首 { background-color: #fcc; }
        &.乙 .列首 { background-color: #ffc; }
        &.丙 .列首 { background-color: #cfc; }
        &.丁 .列首 { background-color: #cff; }
        &.戊 .列首 { background-color: #ccf; }
    }

    .两列之间的操控区 {
        flex 0 0 5em
        display flex
        flex-direction column
        justify-content flex-start
        align-items center
        padding-top 21em

        .功能单体-主体为按钮 {
            margin 0.5em 0
            position relative
        }

        button {
            font-size 1.25em
            width 2.5em
            height @width
        }
    }
}
</style>
