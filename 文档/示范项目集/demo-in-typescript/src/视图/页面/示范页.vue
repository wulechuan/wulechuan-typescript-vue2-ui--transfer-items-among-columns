<template>
    <div class="page page--示范页">
        <div class="中央内容块">
            <WlcDualColumns
                :all-candidates-of-both-columns="双列互换数据功能.候选列表"
            ></WlcDualColumns>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import WlcDualColumns from '@wulechuan/vue2-ui--two-columns-exchange-items/源代码/发布的源代码/typescript/双列互换数据.vue'
import type Wlc双列互换数据 from '@wulechuan/vue2-ui--two-columns-exchange-items/源代码/发布的源代码/typescript/双列互换数据.vue'

interface 范_双列互换数据_实际条目 extends Wlc双列互换数据.范_条目 {
    数据: string;
}

type 范_双列互换数据_实际条目之列表 = Array<范_双列互换数据_实际条目>

@Component({
    components: {
        WlcDualColumns,
    },
})
export default class Page示范页 extends Vue {
    双列互换数据功能: {
        候选列表: 范_双列互换数据_实际条目之列表;
    } = {
        候选列表: [
            {
                唯一标识: '吴乐川',
                在界面展示时的称谓: '吴乐川',
                已禁止交互: false,
                已选中: false,
                数据: '吴乐川',
            },
            {
                唯一标识: '吴淙渊',
                在界面展示时的称谓: '吴淙渊',
                已禁止交互: false,
                已选中: false,
                数据: '吴淙渊',
            },
            {
                唯一标识: '张芮熙',
                在界面展示时的称谓: '张芮熙',
                已禁止交互: false,
                已选中: false,
                数据: '张芮熙',
            },
            {
                唯一标识: '肥肥熊',
                在界面展示时的称谓: '肥肥熊',
                已禁止交互: false,
                已选中: false,
                数据: '肥肥熊',
            },
            {
                唯一标识: '大嘴鸭',
                在界面展示时的称谓: '大嘴鸭',
                已禁止交互: false,
                已选中: false,
                数据: '大嘴鸭',
            },
            {
                唯一标识: '小树懒',
                在界面展示时的称谓: '小树懒',
                已禁止交互: true,
                已选中: false,
                数据: '小树懒',
            },
            {
                唯一标识: '老霸',
                在界面展示时的称谓: '老霸',
                已禁止交互: false,
                已选中: false,
                数据: '老霸',
            },
            {
                唯一标识: '小奶猪',
                在界面展示时的称谓: '小奶猪',
                已禁止交互: false,
                已选中: false,
                数据: '小奶猪',
            },
            {
                唯一标识: '小奶龙',
                在界面展示时的称谓: '小奶龙',
                已禁止交互: false,
                已选中: false,
                数据: '小奶龙',
            },
            {
                唯一标识: '潜艇小黄',
                在界面展示时的称谓: '潜艇小黄',
                已禁止交互: false,
                已选中: false,
                数据: '潜艇小黄',
            },
        ],
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
}
</style>
