<template>
    <div class="page page--示范页">
        <wlc双列互换数据
            :all-candidates-of-both-columns="双列互换数据功能.候选列表"
        ></wlc双列互换数据>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import wlc双列互换数据 from '@wulechuan/vue2-ui--two-columns-exchange-items/源代码/发布的源代码/typescript/双列互换数据.vue'

import type 范_条目 from '@wulechuan/vue2-ui--two-columns-exchange-items/源代码/发布的源代码/typescript/双列互换数据.vue'

interface 范_双列互换数据_实际条目 {
    displayName: string;
    isChecked: boolean;
    disabled: boolean;
    value: string;
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
                value: '吴乐川',
                disabled: false,
                isChecked: false,
            },
            {
                displayName: '吴淙渊',
                value: '吴淙渊',
                disabled: false,
                isChecked: false,
            },
        ],
    }
}
</script>

<style lang="stylus">
.page--示范页 {
    height: 100%
}
</style>
