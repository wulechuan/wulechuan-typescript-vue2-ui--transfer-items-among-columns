<template>
    <div class="page page--示范页">
        <Ux双列互换条目></Ux双列互换条目>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import Ux双列互换条目 from '@wulechuan/vue2-ui--two-columns-exchange-items'

@Component({
    components: {
        Ux双列互换条目,
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
