<template>
    <div id="vue-应用根">
        <page示范页></page示范页>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Page示范页 from './页面/示范页.vue'

@Component({
    components: {
        Page示范页,
    },
})
export default class App根 extends Vue {}
</script>

<style lang="stylus">

</style>
