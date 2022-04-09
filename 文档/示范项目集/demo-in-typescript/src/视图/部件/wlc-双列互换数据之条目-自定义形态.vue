<template>
    <span v-if="条目" class="吴乐川-双列互换数据之条目 自定义形态">
        <span class="输入项 输入项-勾选项" :class="输入项之样式类名配置">
            <span class="勾选项视觉假体"></span>
            <input type="checkbox" :checked="_条目.已选中" @click.prevent>
        </span>
        <span class="输入项配文">{{ 条目.在界面中的称谓 }}</span>
    </span>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

import type Wlc双列互换数据 from '@wulechuan/vue2-ui--two-columns-exchange-items/源代码/发布的源代码/typescript/wlc-双列互换数据.vue'

type 范_内用格式之条目 = Wlc双列互换数据.范_内用格式之条目;
type 范_界面元素之样式类名之配置 = Wlc双列互换数据.范_界面元素之样式类名之配置;

@Component({})
export default class Wlc双列互换数据之条目之自定义形态示范 extends Vue {
    @Prop() public 条目?: 范_内用格式之条目



    private _条目: 范_内用格式之条目 = this.构造临时的条目()



    @Watch('条目', { immediate: true })
    当条目变动时 (新值?: 范_内用格式之条目): void {
        if (!新值) { return }
        console.log('变动：', 新值.在界面中的称谓, '---- 选：', 新值.已选中)
        this._条目 = 新值
    }

    private get 输入项之样式类名配置 (): 范_界面元素之样式类名之配置 {
        return { '已选中': this._条目.已选中, '已禁止交互': this._条目.已禁止选择, '未选中': !this._条目.已选中 }
    }

    private 构造临时的条目 (): 范_内用格式之条目 {
        const 称谓: string = Math.random().toFixed(10)
        return { 唯一标识: 称谓, 在界面中的称谓: 称谓, 已禁止选择: true, 已选中: false }
    }
}
</script>
