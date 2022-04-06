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
                :各列新增条目之插入规则="双列互换数据功能.各列新增条目之插入规则"
                :各列条目排序之函数="双列互换数据功能.各列条目排序之函数"
                :甲列初始的用以过滤条目之配置="双列互换数据功能.甲列初始的用以过滤条目之配置"
                :乙列初始的用以过滤条目之配置="双列互换数据功能.乙列初始的用以过滤条目之配置"
                :甲列初始选中的条目之唯一标识之列表="双列互换数据功能.甲列初始选中的条目之唯一标识之列表"
                :乙列初始选中的条目之唯一标识之列表="双列互换数据功能.乙列初始选中的条目之唯一标识之列表"
                @已出错="当双列互换数据功能出错时($event)"
            >
                <template slot="内容皿-总标题栏">
                    <h3>大家好，这是中华神兽烤肉采购列表</h3>
                </template>

                <template slot="内容皿-中央11列" slot-scope="状态汇总数据">
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

import {
    一切可能的条目之列表,
    // 范_双列互换数据_实际条目,
    范_双列互换数据_实际条目之列表,
} from './示范页之数据'

type 范_条目之唯一标识之列表 = Wlc双列互换数据.范_条目之唯一标识之列表;
type 范_各列新增条目之插入规则 = Wlc双列互换数据.范_各列新增条目之插入规则;
type 范_各列条目排序之函数 = Wlc双列互换数据.范_各列条目排序之函数;
type Wlc双列互换数据类 = Wlc双列互换数据.Wlc双列互换数据类;

type 范_示范页_双列互换数据功能配置集 = {
    选中的条目之唯一标识之列表: 范_条目之唯一标识之列表;
    候选列表: 范_双列互换数据_实际条目之列表;
    左列之称谓: string;
    右列之称谓: string;
    单列允许列示的条目数之上限?: number;
    各列新增条目之插入规则?: 范_各列新增条目之插入规则;
    各列条目排序之函数?: 范_各列条目排序之函数;
    甲列初始的用以过滤条目之配置?: string | RegExp;
    乙列初始的用以过滤条目之配置?: string | RegExp;
    甲列初始选中的条目之唯一标识之列表?: 范_条目之唯一标识之列表;
    乙列初始选中的条目之唯一标识之列表?: 范_条目之唯一标识之列表;
};

@Component({
    components: {
        WlcDualColumns: Wlc双列互换数据,
    },
})
export default class Page示范页 extends Vue {
    private 双列互换数据功能: 范_示范页_双列互换数据功能配置集 = {
        选中的条目之唯一标识之列表: [ '饕餮', '九尾狐', '天狗', '狴犴', '青龙', '朱雀' ],

        候选列表: 一切可能的条目之列表,
        左列之称谓: '可以买到的神兽',
        右列之称谓: '准备烤着吃的神兽',
        单列允许列示的条目数之上限: 16,
        // 各列新增条目之插入规则: '总是追加在首部',
        各列条目排序之函数: (甲, 乙) => 乙.在界面中的称谓.length - 甲.在界面中的称谓.length,
        甲列初始的用以过滤条目之配置: '牛',
        乙列初始的用以过滤条目之配置: '/.{4,}',
        甲列初始选中的条目之唯一标识之列表: [ '穷奇', '騊駼' ],
        乙列初始选中的条目之唯一标识之列表: [ '九尾狐' ],
    }





    private 当双列互换数据功能出错时 (错误之记载: Error) {
        false && console.log(错误之记载)
    }

    private 每当点击用以将甲列选中之条目迁移至乙列之按钮后 () {
        const 部件实例 = this.$refs['双列互换数据控件-1'] as Wlc双列互换数据类
        部件实例.将甲列选中的条目迁移至乙列()
    }

    private 每当点击用以将乙列选中之条目迁移至甲列之按钮后 () {
        const 部件实例 = this.$refs['双列互换数据控件-1'] as Wlc双列互换数据类
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
        width 90%
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
