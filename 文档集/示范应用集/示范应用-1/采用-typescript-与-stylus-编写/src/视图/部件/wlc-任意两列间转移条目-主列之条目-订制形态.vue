<template>
    <div class="条目根-在该范例中的订制形态" :class="{ '描述内容块已展开': 条目_最终采纳值.数据.描述内容块已展开故而描述呈现 }">
        <div class="吴乐川-任意两列间转移条目-条目之视觉根">
            <span class="输入项 输入项-勾选项" :class="输入项之样式类名配置">
                <span class="勾选项视觉假体"></span>
                <input type="checkbox" :checked="条目_最终采纳值.已选中" @click.prevent>
            </span>
            <span class="输入项配文 输入项配文-勾选项">{{ 条目_最终采纳值.在界面中的称谓 }}</span>
            <span class="位于中央的宽度自调节之占位器"></span>
            <button class="详情内容块开关按钮" @click.stop="条目_最终采纳值.数据.描述内容块已展开故而描述呈现 = !条目_最终采纳值.数据.描述内容块已展开故而描述呈现">解释</button>
        </div>

        <div v-if="条目_最终采纳值.数据.描述内容块已展开故而描述呈现" class="内容块-详情" @click.stop>
            <article>
                <p
                    v-for="(段落文本, 段落文本之列表编号) in 条目描述文本之诸段落之列表"
                    :key="段落文本之列表编号"
                >{{ 段落文本 }}</p>
            </article>

            <button
                v-if="条目描述文本之诸段落总字数较多"
                class="位于底部的收起内容块之按钮"
                @click.stop="条目_最终采纳值.数据.描述内容块已展开故而描述呈现 = false"
            >收起【{{ 条目_最终采纳值.在界面中的称谓 }}】的解释</button>
        </div>
    </div>
</template>









<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import type Wlc任意两列间转移条目 from '@wulechuan/vue2-ui--transfer-items-among-columns'

import type {
    范_任意两列间转移条目_实际条目,
} from '../../数据/示范页之数据库'





type 范_界面元素之样式类名之配置 = Wlc任意两列间转移条目.泛范_界面元素之样式类名之配置<string>;





@Component({})
export default class Wlc任意两列间转移条目_主列之条目_订制形态 extends Vue {
    @Prop() public 条目?: 范_任意两列间转移条目_实际条目
    @Prop() public 所属列已禁止交互?: boolean





    public get 条目_最终采纳值 (): 范_任意两列间转移条目_实际条目 {
        const 外界给出的值 = this.条目
        if (!外界给出的值) return this.构造临时的条目以滥竽充数()
        return 外界给出的值
    }

    public get 输入项之样式类名配置 (): 范_界面元素之样式类名之配置 {
        const 条目 = this.条目_最终采纳值
        return { '已勾选': 条目.已选中, '已禁止交互': 条目.已禁止选择 || !!this.所属列已禁止交互, '未选中': !条目.已选中 }
    }

    public get 条目描述文本之诸段落之列表 (): string[] {
        let 诸段落之列表: string[] = []

        const 原始数据 = this.条目_最终采纳值.数据
        if (原始数据) {
            const 原始值 = 原始数据.描述
            if (Array.isArray(原始值)) {
                诸段落之列表 = 原始值
            } else if (typeof 原始值 === 'string') {
                诸段落之列表 = [ 原始值 ]
            }

            诸段落之列表 = 诸段落之列表
                .filter(某段落文本 => typeof 某段落文本 === 'string' && !!某段落文本.trim())
                .map(某段落文本 => 某段落文本.trim())
        }

        if (诸段落之列表.length === 0) {
            诸段落之列表 = [ '不详。' ]
        }

        return 诸段落之列表
    }

    public get 条目描述文本之诸段落总字数较多 (): boolean {
        const 总字符数: number = this.条目描述文本之诸段落之列表.reduce((字数, 某段落文本) => {
            return 字数 + 某段落文本.length
        }, 0)

        return 总字符数 > 219
    }





    private 构造临时的条目以滥竽充数 (): 范_任意两列间转移条目_实际条目 {
        const 称谓: string = Math.random().toFixed(10)
        return { 唯一标识: 称谓, 在界面中的称谓: 称谓, 已禁止选择: true, 已选中: false, 数据: {} }
    }
}
</script>









<style lang="stylus">
/* autoprefixer: off */

@import '@/视图/_公共样式/样式定义/本应用的-stylus-通用变量集'

{app_styles_global_wrapper} {

    .条目根-在该范例中的订制形态 {
        border-radius 0.25em
        overflow hidden

        button {
            display block
            padding 0 1.5em
            min-width 0
        }

        .吴乐川-任意两列间转移条目-条目之视觉根 {
            display flex
            flex-direction row
            align-items flex-start
            padding 0.3em 0.5em

            .位于中央的宽度自调节之占位器 {
                flex 10 10 auto
                min-width 1em
            }
        }

        .详情内容块开关按钮 {
            opacity 0.1
            flex 0 0 4em
            padding 0 0.75em
            margin -0.05em 0 -0.5em
        }

        .内容块-详情 {
            min-height 3em

            article {
                padding 0.5em 1.5em 1.8em 2.25em
                text-align justify
                user-select text
            }
        }

        &:hover,
        &.描述内容块已展开 {

            .详情内容块开关按钮 {
                // visibility visible
                opacity 1
            }
        }

        &.描述内容块已展开 {
            background-color #ddd
            box-shadow inset 0 0 0.2em 0 rgba(black, 0.319)
            // margin-top 0.5em
            margin-bottom 1.5em

            .吴乐川-任意两列间转移条目-条目之视觉根 {
                border-bottom-left-radius 0
                border-bottom-right-radius 0
                box-shadow 0 0 0.2em 0 rgba(black, 0.319)
            }
        }

        .位于底部的收起内容块之按钮 {
            margin 0 auto 1.5em
        }
    }
}
</style>
