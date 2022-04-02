<template>
    <div class="page page--示范页">
        <wlc双列互换数据></wlc双列互换数据>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import wlc双列互换数据 from '@wulechuan/vue2-ui--two-columns-exchange-items/源代码/发布的源代码/typescript/双列互换数据.vue'

@Component({
    components: {
        wlc双列互换数据,
    },
})
export default class Page示范页 extends Vue {
    @Prop() private msg!: string;
}
</script>

<style lang="stylus">
.page--示范页 {

}
</style>
