<template>
    <span v-if="条目" class="吴乐川-双列互换数据之条目 自定义形态">
        <span class="输入项 输入项-勾选项" :class="输入项之样式类名配置">
            <span class="勾选项视觉假体"></span>
            <input type="checkbox" :checked="条目已选中" @click.prevent>
        </span>
        <span class="输入项配文">{{ 条目.在界面中的称谓 }}</span>
    </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import type Wlc双列互换数据 from '@wulechuan/vue2-ui--two-columns-exchange-items/源代码/发布的源代码/typescript/wlc-双列互换数据.vue'

type 范_内用格式之条目 = Wlc双列互换数据.范_内用格式之条目;
type 范_界面元素之样式类名之配置 = Wlc双列互换数据.范_界面元素之样式类名之配置;

@Component({})
export default class Wlc双列互换数据之条目之自定义形态示范 extends Vue {
    @Prop() public 条目?: 范_内用格式之条目

    private get 条目已选中 (): boolean { const { 条目 } = this; console.log('条目', { ...条目 }); return !!(条目 && 条目.已选中) }
    private get 条目已禁止 (): boolean { const { 条目 } = this; return !!(条目 && 条目.已禁止选择) }

    private get 输入项之样式类名配置 (): 范_界面元素之样式类名之配置 {
        return {
            '已选中': this.条目已选中,
            '已禁止交互': this.条目已禁止,
        }
    }
}
</script>
