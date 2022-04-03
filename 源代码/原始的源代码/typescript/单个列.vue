<template>
    <div class="column-of-list left-column">
        <header class="heading-block">
            <div class="column-title-bar"><slot name="皿-标题栏">{{ 本列之标题栏之文字 }}</slot></div>

            <div class="column-filter">
                <input
                    v-model="用以过滤条目之关键词"
                    :placeholder="条目过滤器之文本输入框之空框状态提示措辞"
                    class="column-filter-input"
                    :class="{ 'emphasize-to-call-to-action': 当下期望列示的条目过多故暂不列示任何条目 }"
                    :disabled="所有条目之总数 < 1"
                >
                <i class="el-input__icon el-icon-search" ></i>
            </div>

            <div class="column-check-all">
                <label
                    class="el-checkbox column-check-all--including-hidden"
                    :class="与选中所有条目之交互相关的汇总数据_含隐藏之条目.交互项之特征样式类名_其根元素"
                ><span
                    class="el-checkbox__input"
                ><span class="el-checkbox__inner" ></span><input
                    v-model="当下恰已选中所有条目_含隐藏之条目"
                    type="checkbox"
                    aria-hidden="false"
                    class="el-checkbox__original"
                    :disabled="与选中所有条目之交互相关的汇总数据_含隐藏之条目.应禁止交互"
                    @change="当选择所有条目之交互项动作时_含隐藏之条目()"
                ></span><span class="el-checkbox__label">{{ 与选中所有条目之交互相关的汇总数据_含隐藏之条目.交互项之界面措辞 }}</span></label>

                <label
                    class="el-checkbox column-check-all--visible-only"
                    :class="与选中所有条目之交互相关的汇总数据_仅列示之条目.交互项之特征样式类名_其根元素"
                ><span
                    class="el-checkbox__input"
                ><span class="el-checkbox__inner" ></span><input
                    v-model="当下恰已选中所有条目_仅列示之条目"
                    type="checkbox"
                    aria-hidden="false"
                    class="el-checkbox__original"
                    :disabled="与选中所有条目之交互相关的汇总数据_仅列示之条目.应禁止交互"
                    @change="当选择所有条目之交互项动作时_仅列示之条目()"
                ></span><span class="el-checkbox__label">{{ 与选中所有条目之交互相关的汇总数据_仅列示之条目.交互项之界面措辞 }}</span></label>
            </div>

            <dl class="counts-summary">
                <div class="entry all">
                    <dt>总数</dt>

                    <dd>
                        <span class="all"><span class="value">{{ 所有条目之总数 }}</span></span>

                        <span class="shown">
                            <span class="prefix">（已列示</span>
                            <span class="value">{{ 当下列示着的所有条目之列表.length }}</span>
                            <span class="suffix">）</span>
                        </span>
                    </dd>
                </div>
                <div class="entry checked">
                    <dt>已选中</dt>

                    <dd>
                        <span class="all"><span class="value">{{ 当下已选中的所有条目之列表_含隐藏之条目.length }}</span></span>

                        <span class="shown">
                            <span class="prefix">（已列示</span>
                            <span class="value">{{ 当下已选中的所有条目之列表_仅列示的条目.length }}</span>
                            <span class="suffix">）</span>
                        </span>
                    </dd>
                </div>
            </dl>
        </header>

        <div class="column-list-container">
            <div
                v-if="当下期望列示的条目过多故暂不列示任何条目"
                class="column-tip"
            >
                <p>符合条件的条目太多，达<em>{{ 匹配当下过滤配置之所有条目.length }}</em>条。为确保程序不致僵死，暂不列示任何条目。</p>
                <p><strong>请先输入筛选关键字，以减少须列示的条目。</strong></p>
            </div>

            <ol v-else class="column-list">
                <li
                    v-for="条目 in 当下列示着的所有条目之列表"
                    :key="条目.唯一标识"
                    class="column-list-item"
                ><label
                    class="el-checkbox"
                    :class="求某条目之样式类名集_其根元素(条目)"
                ><span
                    style="display: none"
                    class="el-checkbox__input"
                ><span class="el-checkbox__inner" ></span><input
                    v-model="条目.已选中"
                    type="checkbox"
                    aria-hidden="false"
                    class="el-checkbox__original"
                    :disabled="条目.已禁止交互"
                    @change="当某条目之选中状态变动后(条目)"
                ></span><span class="el-checkbox__label">{{ 条目.在界面展示时的称谓 }}</span></label></li>
            </ol>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch, Emit } from 'vue-property-decorator'

type 范_条目 = Wlc双列互换数据.范_条目
type 范_条目之列表 = Wlc双列互换数据.范_条目之列表
type 范_条目之唯一标识 = 范_条目['唯一标识']
type 范_条目之唯一标识之列表 = Array<范_条目之唯一标识>

const 单列允许列示的条目数之上限_默认值 = 500

@Component({})
export default class Wlc双列互换数据之单列 extends Vue {
    @Model('当选中的条目变动后') public 当下选中的所有条目之唯一标识之列表?: 范_条目之唯一标识之列表

    @Prop() public 本列之称谓?: string
    @Prop() public 允许列示的条目数之上限?: number | string
    @Prop() public 所有条目之列表?: 范_条目之列表

    private 用以过滤条目之关键词: string = ''
    private 当下恰已选中所有条目_含隐藏之条目: boolean = false
    private 当下恰已选中所有条目_仅列示之条目: boolean = false
    private 所有条目之列表_最终采纳值: 范_条目之列表 = []





    private get 本列之称谓_最终采纳值 (): string {
        const 外界给出值 = this.本列之称谓

        let 拟采纳值 = ''
        if (typeof 外界给出值 === 'string') {
            拟采纳值 = 外界给出值.trim()
        }

        return 拟采纳值 || '该列'
    }

    private get 本列之标题栏之文字 (): string {
        return `${this.本列之称谓_最终采纳值}之条目`
    }

    private get 允许列示的条目数之上限_最终采纳值 (): number {
        const 外界给出值 = this.允许列示的条目数之上限

        let 拟采纳值: number = NaN
        if (typeof 外界给出值 === 'number') {
            拟采纳值 = 外界给出值
        } else if (typeof 外界给出值 === 'string' && 外界给出值.trim()) {
            拟采纳值 = +外界给出值.trim()
        }

        return 拟采纳值 > 0 ? 拟采纳值 : 单列允许列示的条目数之上限_默认值
    }

    private get 所有条目之总数 (): number {
        return this.所有条目之列表_最终采纳值.length
    }

    private get 条目过滤器之文本输入框之空框状态提示措辞 (): string {
        return this.所有条目之总数 > 0 ? `筛选${this.本列之称谓_最终采纳值}之条目` : '无条目可筛选'
    }

    private get 所有未禁止交互之条目 (): 范_条目之列表 {
        return this.所有条目之列表_最终采纳值.filter(条目 => !条目.已禁止交互)
    }

    private get 匹配当下过滤配置之所有条目 (): 范_条目之列表 {
        const { 所有条目之列表_最终采纳值, 用以过滤条目之关键词 } = this

        let 所有匹配的条目 = 所有条目之列表_最终采纳值
        if (用以过滤条目之关键词) {
            const 用以匹配条目的正则表达式 = new RegExp(`${用以过滤条目之关键词}`, 'i')
            所有匹配的条目 = 所有条目之列表_最终采纳值.filter(条目 => 用以匹配条目的正则表达式.test(条目.在界面展示时的称谓))
        }

        return 所有匹配的条目
    }

    private get 当下列示着的所有条目之列表 (): 范_条目之列表 {
        const 期望列示的所有条目 = this.匹配当下过滤配置之所有条目
        const { 允许列示的条目数之上限_最终采纳值 } = this

        const 匹配的条目过多故暂不应列示任何条目 = 期望列示的所有条目.length > 允许列示的条目数之上限_最终采纳值
        if (匹配的条目过多故暂不应列示任何条目) {
            return []
        } else {
            return 期望列示的所有条目
        }
    }

    private get 当下期望列示的条目过多故暂不列示任何条目 (): boolean {
        return this.匹配当下过滤配置之所有条目.length > 0 && this.当下列示着的所有条目之列表.length === 0
    }

    private get 当下已选中的所有条目之列表_含隐藏之条目 (): 范_条目之列表 {
        return this.所有条目之列表_最终采纳值.filter(条目 => !!条目.已选中)
    }

    private get 当下已选中的所有条目之列表_仅列示的条目 (): 范_条目之列表 {
        return this.当下列示着的所有条目之列表.filter(条目 => !!条目.已选中)
    }

    private get 与选中所有条目之交互相关的汇总数据_含隐藏之条目 () {
        return this.求与选中所有条目之交互相关的汇总数据(true)
    }

    private get 与选中所有条目之交互相关的汇总数据_仅列示之条目 () {
        return this.求与选中所有条目之交互相关的汇总数据(false)
    }





    @Watch('所有条目之列表', { immediate: true })
    private 在外界给出的所有条目之列表变动后 () {
        this.根据外界给出的条件构建实用的条目总表()
    }

    @Watch('当下选中的所有条目之唯一标识之列表', { immediate: true })
    private 在外界给出的当下选中的所有条目之唯一标识之列表变动后 () {
        this.根据外界给出的条件构建实用的条目总表()
    }





    private 根据外界给出的条件构建实用的条目总表 () {
        let 给出的所有条目之列表: 范_条目之列表
        let 选中的所有条目之唯一标识之列表: 范_条目之唯一标识之列表

        if (Array.isArray(this.所有条目之列表)) {
            给出的所有条目之列表 = this.所有条目之列表
        } else {
            给出的所有条目之列表 = []
        }

        if (Array.isArray(this.当下选中的所有条目之唯一标识之列表)) {
            选中的所有条目之唯一标识之列表 = this.当下选中的所有条目之唯一标识之列表
        } else {
            选中的所有条目之唯一标识之列表 = []
        }

        const 所有条目之列表_最终采纳值: 范_条目之列表 = []

        给出的所有条目之列表.forEach(原始条目 => {
            if (!原始条目) { return }

            const {
                唯一标识: 该条目之唯一标识,
                已禁止交互: 该条目已禁止交互,
            } = 原始条目

            const 条目 = {
                ...原始条目,

                已选中: !该条目已禁止交互 && 选中的所有条目之唯一标识之列表.includes(该条目之唯一标识),
            }

            所有条目之列表_最终采纳值.push(条目)
        })

        this.所有条目之列表_最终采纳值 = 所有条目之列表_最终采纳值
    }

    private 求某条目之样式类名集_其根元素 (条目: 范_条目) {
        if (!条目) { return null }
        const 已选中 = !!条目.已选中
        const 已禁止交互 = !!条目.已禁止交互
        return {
            'is-checked': 已选中,
            'is-disabled': 已禁止交互,
        }
    }

    private 求与选中所有条目之交互相关的汇总数据 (应将暂不可见的条目一并计入?: boolean) {
        const 所有参与统计之条目 = 应将暂不可见的条目一并计入 ? this.所有未禁止交互之条目 : this.当下列示着的所有条目之列表
        const 界面措辞之统一后缀 = 应将暂不可见的条目一并计入 ? '（含未列示条目）' : '（仅列示条目）'

        let 交互项之特征样式类名_其根元素 = null
        let 交互项之界面措辞 = '无可勾选项'

        const 应禁止交互 = 所有参与统计之条目.length === 0
        if (应禁止交互) {
            交互项之特征样式类名_其根元素 = 'is-disabled'
        } else {
            const 当下未选中任何待统计之条目 = 所有参与统计之条目.every(条目 => !条目.已选中)

            if (当下未选中任何待统计之条目) {
                交互项之界面措辞 = `全部勾选${界面措辞之统一后缀}`
                交互项之特征样式类名_其根元素 = ''
            } else {
                const 当下恰已选中所有待统计之条目 = 所有参与统计之条目.every(条目 => 条目.已选中)

                if (当下恰已选中所有待统计之条目) {
                    交互项之界面措辞 = `全部去掉勾选${界面措辞之统一后缀}`
                    交互项之特征样式类名_其根元素 = 'is-checked'
                } else {
                    交互项之界面措辞 = `全部勾选${界面措辞之统一后缀}`
                    交互项之特征样式类名_其根元素 = 'is-indeterminate'
                }
            }
        }

        return {
            交互项之界面措辞,
            应禁止交互,
            交互项之特征样式类名_其根元素,
        }
    }

    private 当选择所有条目之交互项动作时_含隐藏之条目 () {
        const 所有应考察之条目 = this.所有未禁止交互之条目

        const 动作之前所有应考察之条目均已选中 = 所有应考察之条目.every(条目 => 条目.已选中)
        const 动作之目的应为选择所有应考察之条目 = !动作之前所有应考察之条目均已选中

        所有应考察之条目.forEach(条目 => { 条目.已选中 = 动作之目的应为选择所有应考察之条目 })

        this.当下恰已选中所有条目_含隐藏之条目 = 动作之目的应为选择所有应考察之条目

        this.$emit('当选中的条目变动后')
    }

    private 当选择所有条目之交互项动作时_仅列示之条目 () {
        const 所有应考察之条目 = this.当下列示着的所有条目之列表

        const 动作之前所有应考察之条目均已选中 = 所有应考察之条目.every(条目 => 条目.已选中)
        const 动作之目的应为选择所有应考察之条目 = !动作之前所有应考察之条目均已选中

        所有应考察之条目.forEach(条目 => {
            if (!条目.已禁止交互) { 条目.已选中 = 动作之目的应为选择所有应考察之条目 }
        })

        this.当下恰已选中所有条目_仅列示之条目 = 动作之目的应为选择所有应考察之条目

        this.$emit('当选中的条目变动后')
    }

    private 当某条目之选中状态变动后 (选中状态变动之条目: 范_条目) {
        console.log({ ...选中状态变动之条目 })
        this.$emit('当选中的条目变动后')
    }





    @Emit('当选中的条目变动后') private 当选中的条目变动后 () {
        const 事件记载: 范_条目之唯一标识之列表 = this.所有条目之列表_最终采纳值
            .filter(条目 => !!条目.已选中)
            .map(条目 => 条目.唯一标识)
        console.log('事件记载', 事件记载)
        return 事件记载
    }
}
</script>
