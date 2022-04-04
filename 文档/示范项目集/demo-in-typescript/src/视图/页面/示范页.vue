<template>
    <div class="page page--示范页">
        <div class="中央内容块">
            <WlcDualColumns
                ref="双列互换数据控件-1"
                v-model="双列互换数据功能.选中的条目之唯一标识之列表"
                :所有候选条目之列表="双列互换数据功能.候选列表"
                :甲列之称谓="双列互换数据功能.左列之称谓"
                :乙列之称谓="双列互换数据功能.右列之称谓"
                :单列允许列示的条目数之上限="双列互换数据功能.单列允许列示的条目数之上限"
                @出错="当双列互换数据功能出错时($event)"
            >
                <template slot="内容皿-总标题栏">
                    <h3>大家好，这是中华神兽烤肉采购列表</h3>
                </template>

                <template slot="内容皿-中央列" slot-scope="状态汇总数据">
                    <button
                        :disabled="状态汇总数据.甲列当下没有条目拟迁移至乙列"
                        @click="每当点击用以将甲列选中之条目迁移至乙列之按钮后()"
                    >买入</button>

                    <button
                        :disabled="状态汇总数据.乙列当下没有条目拟迁移至甲列"
                        @click="每当点击用以将乙列选中之条目迁移至甲列之按钮后()"
                    >退货</button>
                </template>

                <template slot="内容皿-底部内容栏11" slot-scope="状态汇总数据">
                    <button
                        :disabled="状态汇总数据.甲列当下没有条目拟迁移至乙列"
                        @click="每当点击用以将甲列选中之条目迁移至乙列之按钮后()"
                    >买入</button>

                    <button
                        :disabled="状态汇总数据.乙列当下没有条目拟迁移至甲列"
                        @click="每当点击用以将乙列选中之条目迁移至甲列之按钮后()"
                    >退货</button>
                </template>
            </WlcDualColumns>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Wlc双列互换数据 from '@wulechuan/vue2-ui--two-columns-exchange-items/源代码/发布的源代码/typescript/wlc-双列互换数据.vue'

interface 范_双列互换数据_实际条目 extends Wlc双列互换数据.范_条目 {
    数据: string;
}

type 范_双列互换数据_实际条目之列表 = Array<范_双列互换数据_实际条目>
type 范_条目之唯一标识之列表 = Wlc双列互换数据.范_条目之唯一标识之列表

const 一切可能的条目之列表 = [
    {
        唯一标识: '蠃鱼',
        在界面中的称谓: '蠃（luǒ）鱼',
        已禁止交互: false,
        已选中: false,
        数据: '蠃鱼',
    },
    // {
    //     唯一标识: '蠃鱼',
    //     在界面中的称谓: '蠃（luǒ）鱼（系故意重复之条目）',
    //     已禁止交互: false,
    //     已选中: false,
    //     数据: '蠃鱼',
    // },
    // {
    //     唯一标识: '蠃鱼',
    //     在界面中的称谓: '蠃（luǒ）鱼（系故意重复之条目）',
    //     已禁止交互: false,
    //     已选中: false,
    //     数据: '蠃鱼',
    // },
    {
        唯一标识: '穷奇',
        在界面中的称谓: '穷奇',
        已禁止交互: false,
        已选中: false,
        数据: '穷奇',
    },
    {
        唯一标识: '饕餮',
        在界面中的称谓: '饕（tāo）餮（tiè）',
        已禁止交互: false,
        已选中: false,
        数据: '饕餮',
    },
    {
        唯一标识: '天狗',
        在界面中的称谓: '天狗',
        已禁止交互: false,
        已选中: false,
        数据: '天狗',
    },
    {
        唯一标识: '狰',
        在界面中的称谓: '狰',
        已禁止交互: false,
        已选中: false,
        数据: '狰',
    },
    // {
    //     唯一标识: '蠃鱼',
    //     在界面中的称谓: '蠃（luǒ）鱼（系故意重复之条目）',
    //     已禁止交互: false,
    //     已选中: false,
    //     数据: '蠃鱼',
    // },
    {
        唯一标识: '肥遗',
        在界面中的称谓: '肥遗',
        已禁止交互: true,
        已选中: false,
        数据: '肥遗',
    },
    {
        唯一标识: '蛊雕',
        在界面中的称谓: '蛊雕',
        已禁止交互: false,
        已选中: false,
        数据: '蛊雕',
    },
    {
        唯一标识: '九尾狐',
        在界面中的称谓: '九尾狐',
        已禁止交互: false,
        已选中: false,
        数据: '九尾狐',
    },

    {
        唯一标识: '旋龟',
        在界面中的称谓: '旋龟',
        已禁止交互: false,
        已选中: false,
        数据: '旋龟',
    },
    {
        唯一标识: '青龙',
        在界面中的称谓: '青龙',
        已禁止交互: false,
        已选中: false,
        数据: '青龙',
    },
    {
        唯一标识: '白虎',
        在界面中的称谓: '白虎',
        已禁止交互: false,
        已选中: false,
        数据: '白虎',
    },
    {
        唯一标识: '朱雀',
        在界面中的称谓: '朱雀',
        已禁止交互: false,
        已选中: false,
        数据: '朱雀',
    },
    {
        唯一标识: '玄武',
        在界面中的称谓: '玄武',
        已禁止交互: false,
        已选中: false,
        数据: '玄武',
    },
    {
        唯一标识: '毕方',
        在界面中的称谓: '毕方',
        已禁止交互: false,
        已选中: false,
        数据: '毕方',
    },
    {
        唯一标识: '梼杌',
        在界面中的称谓: '梼（táo）杌（wù）',
        已禁止交互: false,
        已选中: false,
        数据: '梼杌',
    },
    {
        唯一标识: '白泽',
        在界面中的称谓: '白泽',
        已禁止交互: false,
        已选中: false,
        数据: '白泽',
    },
    {
        唯一标识: '獬豸',
        在界面中的称谓: '獬（xiè）豸（zhì）',
        已禁止交互: false,
        已选中: false,
        数据: '獬豸',
    },
    {
        唯一标识: '狴犴',
        在界面中的称谓: '狴（Bì）犴（àn）',
        已禁止交互: false,
        已选中: false,
        数据: '狴犴',
    },
    {
        唯一标识: '夔牛',
        在界面中的称谓: '夔（kuí）牛',
        已禁止交互: false,
        已选中: false,
        数据: '夔牛',
    },
    // {
    //     唯一标识: '九尾狐',
    //     在界面中的称谓: '九尾狐（系故意重复之条目）',
    //     已禁止交互: false,
    //     已选中: false,
    //     数据: '九尾狐',
    // },
]

@Component({
    components: {
        WlcDualColumns: Wlc双列互换数据,
    },
})
export default class Page示范页 extends Vue {
    private 双列互换数据功能: {
        选中的条目之唯一标识之列表: 范_条目之唯一标识之列表;
        候选列表: 范_双列互换数据_实际条目之列表;
        左列之称谓: string;
        右列之称谓: string;
        单列允许列示的条目数之上限: number;
    } = {
        选中的条目之唯一标识之列表: [
            '饕餮',
            '天狗',
        ],

        候选列表: 一切可能的条目之列表,
        左列之称谓: '可以买到的神兽',
        右列之称谓: '准备烤着吃的神兽',
        单列允许列示的条目数之上限: NaN,
    }





    private 当双列互换数据功能出错时 (错误之记载: Error) {
        console.log(错误之记载)
    }

    private 每当点击用以将甲列选中之条目迁移至乙列之按钮后 () {
        const 部件实例 = this.$refs['双列互换数据控件-1'] as Wlc双列互换数据.Wlc双列互换数据类
        部件实例.将甲列选中的条目迁移至乙列()
    }

    private 每当点击用以将乙列选中之条目迁移至甲列之按钮后 () {
        const 部件实例 = this.$refs['双列互换数据控件-1'] as Wlc双列互换数据.Wlc双列互换数据类
        部件实例.将乙列选中的条目迁移至甲列()
    }
}
</script>

<style lang="stylus">
.page--示范页 {
    height 100%
    display flex
    flex-direction column
    justify-content center
    align-items center

    .中央内容块 {
        margin 0
        width 80%
        max-width 1200px
        height 80%
    }

    h3 {
        font-size: 2rem
        text-align: center
        margin: 0
        padding 1rem
    }
}
</style>
