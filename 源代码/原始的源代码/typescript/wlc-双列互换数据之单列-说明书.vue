<template>
    <div
        v-if="当下正呈现着"
        class="吴乐川-双列互换数据之单列-说明书 条目列表说明书皿"
        @click.stop
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
    将变量值稳妥地映射成规定的样式类名,
} from './辅助工具集'

type 范_界面元素之样式类名之配置 = Wlc双列互换数据.范_界面元素之样式类名之配置;
type 范_信息文本块_配色方案之名称 = Wlc双列互换数据.范_信息文本块_配色方案之名称;
type 范_信息文本块_标准配色方案之磨砂玻璃效果之名称 = Wlc双列互换数据.范_信息文本块_标准配色方案之磨砂玻璃效果之名称;

@Component({})
export default class Wlc双列互换数据之单列之说明书 extends Vue {
    @Model('呈现状态期望变更') public readonly 当下正呈现着?: boolean



    @Prop() public readonly 采用的标准配色方案之名称?: 范_信息文本块_配色方案之名称
    @Prop() public readonly 采用的标准配色方案之磨砂玻璃效果之名称?: 范_信息文本块_标准配色方案之磨砂玻璃效果之名称





    private get 采用的标准配色方案之名称_最终采纳值 (): string | null {
        type 有效的样式类名 = '' | '标准配色-亮' | '标准配色-暗';

        return 将变量值稳妥地映射成规定的样式类名<有效的样式类名>({
            当下给出的变量值: this.采用的标准配色方案之名称,
            默认的样式类名: '', // '标准配色-亮',
            用以将变量至映射至样式类名的字典: {
                '': '',
                '默认': '',
                '亮': '标准配色-亮',
                '暗': '标准配色-暗',
            },
        })
    }

    private get 采用的标准配色方案之磨砂玻璃效果之名称_最终采纳值 (): string | null {
        type 有效的样式类名 = '' | '磨砂玻璃效果-弱' | '磨砂玻璃效果-无';

        return 将变量值稳妥地映射成规定的样式类名<有效的样式类名>({
            当下给出的变量值: this.采用的标准配色方案之磨砂玻璃效果之名称,
            默认的样式类名: '磨砂玻璃效果-弱',
            用以将变量至映射至样式类名的字典: {
                '': '',
                '默认': '',
                '弱': '磨砂玻璃效果-弱',
                '无': '磨砂玻璃效果-无',
            },
        })
    }

    private get 界面根元素之样式类名之配置 (): 范_界面元素之样式类名之配置 {
        return [
            this.采用的标准配色方案之名称_最终采纳值,
            this.采用的标准配色方案之磨砂玻璃效果之名称_最终采纳值,
        ].filter(条目 => typeof 条目 === 'string' && !!条目.trim())
    }





    private 发布事件_呈现状态期望变更 (期望呈现: boolean): void {
        this.$emit('呈现状态期望变更', 期望呈现)
    }





    private 每当关闭按钮点击后 (事件之记载: PointerEvent): void {
        this.发布事件_呈现状态期望变更(false)
    }
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

@import '../stylus/仅尺寸与排版与关键行为（亦可单独发行）/默认/1-单列之说明书.styl'
@import '../stylus/仅着色与装饰（亦可单独发行）/默认/1-单列之说明书.styl'
</style>
