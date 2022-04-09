<template>
    <span v-if="条目" class="吴乐川-双列互换数据之条目 默认形态">{{ 条目.在界面中的称谓 }}</span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

type 范_内用格式之条目 = Wlc双列互换数据.范_内用格式之条目;

@Component({})
export default class Wlc双列互换数据之条目之默认形态 extends Vue {
    @Prop() public readonly 条目?: 范_内用格式之条目
}
</script>
