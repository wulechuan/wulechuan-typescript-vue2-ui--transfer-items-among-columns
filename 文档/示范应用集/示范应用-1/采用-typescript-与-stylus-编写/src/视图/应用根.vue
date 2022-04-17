<template>
    <div id="vue-应用根" class="吴乐川-任意两列间转移条目">
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
