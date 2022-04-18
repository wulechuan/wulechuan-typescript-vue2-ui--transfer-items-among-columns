<template>
    <div id="vue-应用根">
        <Layout默认></Layout默认>
    </div>
</template>









<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import 页面之默认布局 from './页面布局库/默认布局.vue'





@Component({
    components: {
        Layout默认: 页面之默认布局,
    },
})
export default class App根 extends Vue {}
</script>









<style lang="stylus">
#vue-应用根 {
    font-family: 'Microsoft YaHei', 'Microsoft YaHei UI', '微软雅黑', 'Segoe UI', 'Lucida Grande', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
}
</style>
