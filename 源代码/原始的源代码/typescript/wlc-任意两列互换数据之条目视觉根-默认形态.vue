<template>
    <div v-if="条目">
        <span class="吴乐川-任意两列互换数据之条目视觉根 默认形态">{{ 条目.在界面中的称谓 }}</span>
    </div>
</template>









<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'





type 范_内用格式之条目 = Wlc任意两列互换数据.范_内用格式之条目;





@Component({})
export default class Wlc任意两列互换数据之条目视觉根之默认形态 extends Vue {
    @Prop() public readonly 条目?: 范_内用格式之条目
}
</script>









<style lang="stylus">
// 在多个 Vue 部件（ component ）中均加载某 .styl 文件时，
// 即便采用 @require 语句而非 @import 语句，也无法避免该 .styl 文件之内容
// 编译出的 css 内容重复出现在最终的 .css 文件中。即，这些 css 内容会反复出现！
// 即使变通地采用 stylus 全局变量和 if 语句来包裹 @import 或 @require 语句仍无济于事。
// 故，各 Vue 部件均依赖的 .styl 文件（目前仅《 `0-基础.styl` 》）的加载语句，
// 既不应写在本 <style> 代码块内，也不应写在各 Vue 部件专属的 .styl 文件中。
// 否则，非但 css 会有重复内容，且重复加载的 css 内容其相对于其他 css 内容之顺序也不能确保正确。
// 目前推荐的做法是，始终提醒本工具之使用者在 Vue 的 `main.ts` 或 `main.js` 中加载**两**个 `0-基础.styl` 文件。

@import '../stylus/仅尺寸与排版与关键行为（亦可单独发行）/默认/1-主表之条目.styl'
@import '../stylus/仅着色与装饰（亦可单独发行）/默认/1-主表之条目.styl'
</style>
