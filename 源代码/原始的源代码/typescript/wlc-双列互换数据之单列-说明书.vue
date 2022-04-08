<template>
    <div
        v-if="当下正呈现着"
        class="吴乐川-双列互换数据之单列-说明书 条目列表说明书皿"
    >
        <div
            class="条目列表说明书 消息文本块 内容较长"
            :class="界面根元素之样式类名之配置"
        >
            <div class="消息文本-可滚动的内容皿">
                <article>
                    <ol>
                        <li>
                            <p>在顶部的文字输入框输入文字可以筛选条目，<em>不符合筛选条件之条目将暂时隐藏</em>。筛选条目非但有助于操作者搜寻条目，且可防止呈现过多条目时浏览器卡顿乃至卡死的情形。</p>
                            <p>另，该输入框<em>可以输入正则表达式</em>以设计复杂的筛选条件。</p>
                        </li>

                        <li>
                            <p>单击（或触摸）某条目，即可反复选中或取消选中该条目。<em>事先由程序设定为不允许选中的条目除外。</em></p>
                        </li>

                        <li>
                            <p>在点选条目时，按住<span
                                class="尽量不换行之短语"
                            ><kbd>Shift</kbd>键</span
                            >，则可一次性选中或取消选中位置相邻的一组条目，<em>但不改变其间任何隐藏着的条目之选中状态</em>。</p>
                        </li>

                        <li>
                            <p>在点选条目时，若同时按住<span
                                class="尽量不换行之短语"><kbd>Shift</kbd>键</span
                            >和<span
                                class="尽量不换行之短语"><kbd>Ctrl</kbd>键</span
                            >，则可一次性选中或取消选中位置相邻的一组条目，<strong>且其间隐藏着的条目也一并选中</strong>。</p>
                        </li>
                    </ol>
                </article>
            </div>

            <button class="标准按钮-叉 按钮具备标准功能-关闭某物" @click="每当关闭按钮点击后($event)"></button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator'

import {
    求可靠的文本,
} from './工具集'

type 范_界面元素之样式类名之配置 = Wlc双列互换数据.范_界面元素之样式类名之配置;
type 范_信息文本块_采用的配色方案 = Wlc双列互换数据.范_信息文本块_采用的配色方案;
type 范_信息文本块_配色方案之磨砂玻璃效果 = Wlc双列互换数据.范_信息文本块_配色方案之磨砂玻璃效果;

@Component({})
export default class Wlc双列互换数据之单列之说明书 extends Vue {
    @Model('呈现状态期望变更') public readonly 当下正呈现着?: boolean



    @Prop() public readonly 采用的配色方案?: 范_信息文本块_采用的配色方案
    @Prop() public readonly 配色方案之磨砂玻璃效果?: 范_信息文本块_配色方案之磨砂玻璃效果





    private get 配色方案_最终采纳值 (): string {
        const 外界给出的值 = this.采用的配色方案

        let 给出的值裁定后的值: 范_信息文本块_采用的配色方案

        if (外界给出的值 && [
            '',
            '标准配色-亮',
            '标准配色-暗',
        ].includes(外界给出的值)) {
            给出的值裁定后的值 = 外界给出的值
        } else {
            给出的值裁定后的值 = ''
        }

        return 求可靠的文本(给出的值裁定后的值, '标准配色-亮', true)
    }

    private get 配色方案_配色方案之磨砂玻璃效果 (): string {
        const 外界给出的值 = this.配色方案之磨砂玻璃效果

        let 给出的值裁定后的值: 范_信息文本块_配色方案之磨砂玻璃效果

        if (外界给出的值 && [
            '',
            '磨砂玻璃效果-弱',
            '磨砂玻璃效果-无',
        ].includes(外界给出的值)) {
            给出的值裁定后的值 = 外界给出的值
        } else {
            给出的值裁定后的值 = ''
        }

        return 求可靠的文本(给出的值裁定后的值, '磨砂玻璃效果-弱', true)
    }

    private get 界面根元素之样式类名之配置 (): 范_界面元素之样式类名之配置 {
        return [
            this.配色方案_最终采纳值,
            this.配色方案_配色方案之磨砂玻璃效果,
        ]
    }





    private 发布事件_呈现状态期望变更 (期望呈现: boolean): void {
        this.$emit('呈现状态期望变更', 期望呈现)
    }





    private 每当关闭按钮点击后 (事件之记载: PointerEvent): void {
        this.发布事件_呈现状态期望变更(false)
    }
}
</script>
