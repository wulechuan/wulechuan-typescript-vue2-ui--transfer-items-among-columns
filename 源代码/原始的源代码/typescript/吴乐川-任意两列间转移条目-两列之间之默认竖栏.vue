<template>
    <div class="吴乐川-任意两列间转移条目-两列之间之默认竖栏">
        <div class="柔性部件配件"></div>

        <hr class="仅用于样式表缺失之情形" />

        <div class="功能单体 功能单体-主体为按钮">
            <button
                class="按钮-形状必须为正圆 迁移条目之按钮 迁移条目之按钮--甲列至乙列"
                :class="界面元素之样式类名之配置_按钮甲"
                :disabled="应禁止按钮甲交互"
                @click="每当点击底部内容栏默认内容中的按钮甲之后($event)"
            >{{ 界面措辞_按钮甲_最终采纳值 }}</button>

            <sup
                v-if="甲列当下有至少一条选中之条目"
                class="角标 角标-位置应居左"
            >{{ 甲列当下选中的条目之总数_最终采纳值 }}</sup>
        </div>

        <div class="功能单体 功能单体-主体为按钮">
            <button
                class="按钮-形状必须为正圆 迁移条目之按钮 迁移条目之按钮--乙列至甲列"
                :class="界面元素之样式类名之配置_按钮乙"
                :disabled="应禁止按钮乙交互"
                @click="每当点击底部内容栏默认内容中的按钮乙之后($event)"
            >{{ 界面措辞_按钮乙_最终采纳值 }}</button>

            <sup
                v-if="乙列当下有至少一条选中之条目"
                class="角标"
            >{{ 乙列当下选中的条目之总数_最终采纳值 }}</sup>
        </div>

        <slot name="界面皿-增补之功能"></slot>

        <hr class="仅用于样式表缺失之情形" />
    </div>
</template>









<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import {
    求可靠的数字,
    求可靠的文本,
} from './辅助工具集'





type 范_界面元素之样式类名之配置 = Wlc任意两列间转移条目.泛范_界面元素之样式类名之配置<string>;





@Component({})
export default class Wlc任意两列间转移条目_两列之间之竖栏_默认形态 extends Vue {
    @Prop() public readonly 应全面禁止交互?: boolean
    @Prop() public readonly 界面措辞_按钮甲?: string
    @Prop() public readonly 界面措辞_按钮乙?: string
    @Prop() public readonly 甲列当下选中的条目之总数?: number
    @Prop() public readonly 乙列当下选中的条目之总数?: number





    private get 界面措辞_按钮甲_最终采纳值 (): string {
        return 求可靠的文本(this.界面措辞_按钮甲, '▶', false)
    }

    private get 界面措辞_按钮乙_最终采纳值 (): string {
        return 求可靠的文本(this.界面措辞_按钮乙, '◀', false)
    }

    private get 界面元素之样式类名之配置_按钮甲 (): 范_界面元素之样式类名之配置 {
        const 按钮措辞: string = this.界面措辞_按钮甲_最终采纳值
        const 排版应作特别微调: boolean = 按钮措辞 === '▶'
        return {
            '样式应做特别调整': 排版应作特别微调,
        }
    }

    private get 界面元素之样式类名之配置_按钮乙 (): 范_界面元素之样式类名之配置 {
        const 按钮措辞: string = this.界面措辞_按钮乙_最终采纳值
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

    private get 应禁止按钮甲交互 (): boolean {
        const { 甲列当下有至少一条选中之条目, 应全面禁止交互 } = this
        return !!应全面禁止交互 || !甲列当下有至少一条选中之条目
    }

    private get 应禁止按钮乙交互 (): boolean {
        const { 乙列当下有至少一条选中之条目, 应全面禁止交互 } = this
        return !!应全面禁止交互 || !乙列当下有至少一条选中之条目
    }





    private 发布事件_已点击按钮甲 ($event: any): void {
        this.$emit('已点击按钮甲', $event)
    }

    private 发布事件_已点击按钮乙 ($event: any): void {
        this.$emit('已点击按钮乙', $event)
    }





    private 每当点击底部内容栏默认内容中的按钮甲之后 ($event: any): void {
        this.发布事件_已点击按钮甲($event)
    }

    private 每当点击底部内容栏默认内容中的按钮乙之后 ($event: any): void {
        this.发布事件_已点击按钮乙($event)
    }
}
</script>
