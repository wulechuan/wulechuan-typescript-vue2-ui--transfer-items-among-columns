<template>
    <div class="page page--示范页">
        <div class="中央内容块">
            <wlc双列互换数据
                :all-candidates-of-both-columns="双列互换数据功能.候选列表"
            ></wlc双列互换数据>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import wlc双列互换数据 from '@wulechuan/vue2-ui--two-columns-exchange-items/源代码/发布的源代码/typescript/双列互换数据.vue'

interface 范_双列互换数据_实际条目 extends wlc双列互换数据.范_条目 {
    displayName: string;
    isChecked: boolean;
    disabled: boolean;
    数据: string;
}

type 范_双列互换数据_实际条目之列表 = Array<范_双列互换数据_实际条目>

@Component({
    components: {
        wlc双列互换数据,
    },
})
export default class Page示范页 extends Vue {
    双列互换数据功能: {
        候选列表: 范_双列互换数据_实际条目之列表;
    } = {
        候选列表: [
            {
                displayName: '吴乐川',
                disabled: false,
                isChecked: false,
                数据: '吴乐川',
            },
            {
                displayName: '吴淙渊',
                disabled: false,
                isChecked: false,
                数据: '吴淙渊',
            },
            {
                displayName: '肥肥熊',
                disabled: false,
                isChecked: false,
                数据: '肥肥熊',
            },
            {
                displayName: '大嘴鸭',
                disabled: false,
                isChecked: false,
                数据: '大嘴鸭',
            },
            {
                displayName: '小树懒',
                disabled: true,
                isChecked: false,
                数据: '小树懒',
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
