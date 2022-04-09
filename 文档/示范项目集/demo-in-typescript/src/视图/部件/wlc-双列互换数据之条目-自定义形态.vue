<template>
    <span class="吴乐川-双列互换数据之条目 自定义形态">
        <span class="输入项 输入项-勾选项" :class="输入项之样式类名配置">
            <span class="勾选项视觉假体"></span>
            <input type="checkbox" :checked="条目_最终采纳值.已选中" @click.prevent>
        </span>
        <span class="输入项配文">{{ 条目_最终采纳值.在界面中的称谓 }}</span>
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





    private get 条目_最终采纳值 (): 范_内用格式之条目 {
        const 外界给出的值 = this.条目
        if (!外界给出的值) return this.构造临时的条目()
        console.log('变动：', 外界给出的值.在界面中的称谓, '---- 选：', 外界给出的值.已选中)
        return 外界给出的值
    }

    private get 输入项之样式类名配置 (): 范_界面元素之样式类名之配置 {
        const 条目 = this.条目_最终采纳值
        return { '已选中': 条目.已选中, '已禁止交互': 条目.已禁止选择, '未选中': !条目.已选中 }
    }





    private 构造临时的条目 (): 范_内用格式之条目 {
        const 称谓: string = Math.random().toFixed(10)
        return { 唯一标识: 称谓, 在界面中的称谓: 称谓, 已禁止选择: true, 已选中: false }
    }
}
</script>

<style lang="stylus">
.吴乐川-双列互换数据之条目.自定义形态 {
    display flex
    flex-direction row
}
</style>
