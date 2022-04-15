<template>
    <div v-if="条目">
        <span class="吴乐川-任意两列互换数据-条目之视觉根 默认形态">{{ 条目.在界面中的称谓 }}</span>
    </div>
</template>









<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'





type 范_内用格式之条目 = Wlc任意两列互换数据.范_内用格式之条目;





@Component({})
export class Wlc任意两列互换数据之条目视觉根之默认形态 extends Vue {
    @Prop() public readonly 条目?: 范_内用格式之条目
}
</script>
