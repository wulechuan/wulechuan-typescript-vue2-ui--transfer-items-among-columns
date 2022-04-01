<template>
    <div class="page page--示范页">
        <wlc双列表数据互换></wlc双列表数据互换>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import wlc双列表数据互换 from '@wulechuan/vue2-ui--two-columns-exchange-items'

@Component({
    components: {
        wlc双列表数据互换,
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
