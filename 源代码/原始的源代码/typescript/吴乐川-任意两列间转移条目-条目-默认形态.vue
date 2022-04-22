<template>
    <div v-if="条目">
        <span class="吴乐川-任意两列间转移条目-条目之视觉根 默认形态">{{ 条目.在界面中的称谓 }}</span>
    </div>
</template>









<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'





@Component({})
export default class Wlc任意两列间转移条目_主列之条目_默认形态 extends Vue {
    @Prop() public readonly 条目?: Wlc任意两列间转移条目.范_内用格式之条目
}
</script>
