<template>
    <div class="吴乐川-任意两列互换数据-两列之间之默认竖栏">
        <hr class="仅用于样式表缺失之情形" />

        <div class="功能单体 功能单体-主体为按钮">
            <button
                class="按钮-形状必须为正圆 迁移条目之按钮 迁移条目之按钮--甲列至乙列"
                :class="将条目从甲列迁移至乙列_界面元素之样式类名之配置"
                :disabled="应禁止甲按钮"
                @click="每当点击用以将甲列选中之条目迁移至乙列之按钮后()"
            >{{ 按钮上的措辞_将条目从甲列迁移至乙列_最终采纳值 }}</button>

            <sup
                v-if="甲列当下有至少一条选中之条目"
                class="角标 角标-位置应居左"
            >{{ 甲列当下选中的条目之总数_最终采纳值 }}</sup>
        </div>

        <div class="功能单体 功能单体-主体为按钮">
            <button
                class="按钮-形状必须为正圆 迁移条目之按钮 迁移条目之按钮--乙列至甲列"
                :class="将条目从乙列迁移至甲列_界面元素之样式类名之配置"
                :disabled="应禁止乙按钮"
                @click="每当点击用以将乙列选中之条目迁移至甲列之按钮后()"
            >{{ 按钮上的措辞_将条目从乙列迁移至甲列_最终采纳值 }}</button>

            <sup
                v-if="乙列当下有至少一条选中之条目"
                class="角标"
            >{{ 乙列当下选中的条目之总数_最终采纳值 }}</sup>
        </div>

        <hr class="仅用于样式表缺失之情形" />
    </div>
</template>









<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import {
    求可靠的数字,
    求可靠的文本,
} from './辅助工具集'





type 范_界面元素之样式类名之配置 = Wlc任意两列互换数据.泛范_界面元素之样式类名之配置<string>;





@Component({})
export class Wlc任意两列互换数据之两列之间之默认竖栏 extends Vue {
    @Prop() public readonly 应全面禁止交互?: boolean
    @Prop() public readonly 按钮上的措辞_将条目从甲列迁移至乙列?: string
    @Prop() public readonly 按钮上的措辞_将条目从乙列迁移至甲列?: string
    @Prop() public readonly 甲列当下选中的条目之总数?: number
    @Prop() public readonly 乙列当下选中的条目之总数?: number





    // private 日志前缀: string = 'Vue 部件 <Wlc任意两列互换数据之两列之间之默认竖栏> ：'





    private get 按钮上的措辞_将条目从甲列迁移至乙列_最终采纳值 (): string {
        return 求可靠的文本(this.按钮上的措辞_将条目从甲列迁移至乙列, '▶', false)
    }

    private get 按钮上的措辞_将条目从乙列迁移至甲列_最终采纳值 (): string {
        return 求可靠的文本(this.按钮上的措辞_将条目从乙列迁移至甲列, '◀', false)
    }

    private get 将条目从甲列迁移至乙列_界面元素之样式类名之配置 (): 范_界面元素之样式类名之配置 {
        const 按钮措辞: string = this.按钮上的措辞_将条目从甲列迁移至乙列_最终采纳值
        const 排版应作特别微调: boolean = 按钮措辞 === '▶'
        return {
            '样式应做特别调整': 排版应作特别微调,
        }
    }

    private get 将条目从乙列迁移至甲列_界面元素之样式类名之配置 (): 范_界面元素之样式类名之配置 {
        const 按钮措辞: string = this.按钮上的措辞_将条目从乙列迁移至甲列_最终采纳值
        const 排版应作特别微调: boolean = 按钮措辞 === '◀'
        return {
            '样式应做特别调整': 排版应作特别微调,
        }
    }

    private get 甲列当下选中的条目之总数_最终采纳值 (): number {
        const 给出值等效的数字: number = 求可靠的数字(this.甲列当下选中的条目之总数)
        const 给出值等效的整数: number = Math.trunc(给出值等效的数字)
        if (给出值等效的整数 > 0) {
            return 给出值等效的整数
        }

        return 0
    }

    private get 乙列当下选中的条目之总数_最终采纳值 (): number {
        const 给出值等效的数字: number = 求可靠的数字(this.乙列当下选中的条目之总数)
        const 给出值等效的整数: number = Math.trunc(给出值等效的数字)
        if (给出值等效的整数 > 0) {
            return 给出值等效的整数
        }

        return 0
    }

    private get 甲列当下有至少一条选中之条目 (): boolean {
        return this.甲列当下选中的条目之总数_最终采纳值 > 0
    }

    private get 乙列当下有至少一条选中之条目 (): boolean {
        return this.乙列当下选中的条目之总数_最终采纳值 > 0
    }

    private get 应禁止甲按钮 (): boolean {
        const { 甲列当下有至少一条选中之条目, 应全面禁止交互 } = this
        return !!应全面禁止交互 || !甲列当下有至少一条选中之条目
    }

    private get 应禁止乙按钮 (): boolean {
        const { 乙列当下有至少一条选中之条目, 应全面禁止交互 } = this
        return !!应全面禁止交互 || !乙列当下有至少一条选中之条目
    }





    private 发布事件_请求将甲列选中之条目迁移至乙列 (): void {
        this.$emit('请求将甲列选中之条目迁移至乙列')
    }

    private 发布事件_请求将乙列选中之条目迁移至甲列 (): void {
        this.$emit('请求将乙列选中之条目迁移至甲列')
    }





    private 每当点击用以将甲列选中之条目迁移至乙列之按钮后 (): void {
        this.发布事件_请求将甲列选中之条目迁移至乙列()
    }

    private 每当点击用以将乙列选中之条目迁移至甲列之按钮后 (): void {
        this.发布事件_请求将乙列选中之条目迁移至甲列()
    }
}
</script>
