<template>
    <div class="wlc-dual-columns-exchange-items">
        <header class="title-bar">
            <slot name="内容皿-总标题栏" v-bind="用于各界面内容皿之状态汇总数据"></slot>
        </header>

        <div class="chief-part">
            <Wlc双列互换数据之单列
                v-model="甲列之数据集.当下选中的所有条目之唯一标识之列表"
                本列之特征样式类名之配置="left-column"
                :本列之称谓="甲列之称谓_最终采纳值"
                :允许列示的条目数之上限="单列允许列示的条目数之上限"
                :所有条目之列表="甲列之数据集.所有条目"
            ></Wlc双列互换数据之单列>

            <div class="center-column">
                <slot name="内容皿-中央列" v-bind="用于各界面内容皿之状态汇总数据">
                    <button
                        :disabled="用于各界面内容皿之状态汇总数据.甲列当下没有条目拟迁移至乙列"
                        @click="每当点击用以将甲列选中之条目迁移至乙列之按钮后()"
                    >&gt;</button>
                    <sup
                        :value="用于各界面内容皿之状态汇总数据.甲列当下选中的条目之总数"
                        type="danger"
                        class="badge badge-of-transfering-button-1"
                    ></sup>

                    <button
                        :disabled="用于各界面内容皿之状态汇总数据.乙列当下没有条目拟迁移至甲列"
                        @click="每当点击用以将乙列选中之条目迁移至甲列之按钮后()"
                    >&lt;</button>
                    <sup
                        :value="用于各界面内容皿之状态汇总数据.乙列当下选中的条目之总数"
                        type="success"
                        class="badge badge-of-transfering-button-2"
                    ></sup>
                </slot>
            </div>

            <Wlc双列互换数据之单列
                v-model="乙列之数据集.当下选中的所有条目之唯一标识之列表"
                本列之特征样式类名之配置="right-column"
                :本列之称谓="乙列之称谓_最终采纳值"
                :允许列示的条目数之上限="单列允许列示的条目数之上限"
                :所有条目之列表="乙列之数据集.所有条目"
            ></Wlc双列互换数据之单列>
        </div>

        <footer class="footer-bar">
            <slot name="内容皿-底部内容栏" v-bind="用于各界面内容皿之状态汇总数据"></slot>
        </footer>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'

import Wlc双列互换数据之单列 from './wlc-双列互换数据之单列.vue'

type 范_条目之列表 = Wlc双列互换数据.范_条目之列表
type 范_条目之唯一标识之列表 = Wlc双列互换数据.范_条目之唯一标识之列表
type 范_单列之内部数据集 = Wlc双列互换数据.范_单列之内部数据集
type 范_状态汇总数据 = Wlc双列互换数据.范_状态汇总数据

@Component({
    components: {
        Wlc双列互换数据之单列,
    },
})
export default class Wlc双列互换数据 extends Vue {
    @Model('条目之分布已变动') public readonly 乙列所有条目之唯一标识之列表?: 范_条目之唯一标识之列表

    @Prop() public readonly 所有候选条目之列表?: 范_条目之列表
    @Prop() public readonly 单列允许列示的条目数之上限?: number
    @Prop() public readonly 甲列之称谓?: string
    @Prop() public readonly 乙列之称谓?: string





    public 将甲列选中的条目迁移至乙列 (调用者?: Vue): void {
        // console.log('调用者', 调用者)
        this.将某列选中的条目迁移至对方列(this.甲列之数据集)
    }

    public 将乙列选中的条目迁移至甲列 (调用者?: Vue): void {
        // console.log('调用者', 调用者)
        this.将某列选中的条目迁移至对方列(this.乙列之数据集)
    }





    private 日志前缀: string = 'Vue 部件 <Wlc双列互换数据> ：'

    private 甲列之数据集: 范_单列之内部数据集 = {
        所有条目: [],
        当下选中的所有条目之唯一标识之列表: [],
    }

    private 乙列之数据集: 范_单列之内部数据集 = {
        所有条目: [],
        当下选中的所有条目之唯一标识之列表: [],
    }

    private get 甲列之称谓_最终采纳值 (): string {
        const 外界给出值 = this.甲列之称谓

        let 拟采纳值 = ''
        if (typeof 外界给出值 === 'string') {
            拟采纳值 = 外界给出值.trim()
        }

        return 拟采纳值 || '未选择的条目' // || '甲列'
    }

    private get 乙列之称谓_最终采纳值 (): string {
        const 外界给出值 = this.乙列之称谓

        let 拟采纳值 = ''
        if (typeof 外界给出值 === 'string') {
            拟采纳值 = 外界给出值.trim()
        }

        return 拟采纳值 || '已选择的条目' // || '乙列'
    }

    private get 用于各界面内容皿之状态汇总数据 (): 范_状态汇总数据 {
        const { 甲列之数据集, 乙列之数据集 } = this
        const 甲列当下选中的条目之总数 = 甲列之数据集.当下选中的所有条目之唯一标识之列表.length
        const 乙列当下选中的条目之总数 = 乙列之数据集.当下选中的所有条目之唯一标识之列表.length
        return {
            甲列当下选中的条目之总数,
            乙列当下选中的条目之总数,
            甲列当下没有条目拟迁移至乙列: 甲列当下选中的条目之总数 < 1,
            乙列当下没有条目拟迁移至甲列: 乙列当下选中的条目之总数 < 1,
        }
    }





    @Watch('乙列所有条目之唯一标识之列表')
    private 每当乙列所有条目之唯一标识之列表变动后 (): void {
        this.将所有候选条目分配到左右两列('变动了：乙列所有条目之唯一标识之列表')
    }

    @Watch('所有候选条目之列表')
    private 每当所有候选条目之列表变动后 (): void {
        this.将所有候选条目分配到左右两列('变动了：所有候选条目之列表')
    }





    private 将所有候选条目分配到左右两列 (原因?: string): void {
        const { 日志前缀 } = this

        // console.debug(`${日志前缀}\n\t 将所有候选条目分配到左右两列()。因为`, 原因, '\n\t', this.乙列所有条目之唯一标识之列表 && [ ...this.乙列所有条目之唯一标识之列表 ])

        let 所有候选条目之列表: 范_条目之列表

        if (Array.isArray(this.所有候选条目之列表)) {
            所有候选条目之列表 = this.所有候选条目之列表
        } else {
            所有候选条目之列表 = []
        }

        const 应位于甲列之条目之列表: 范_条目之列表 = []
        const 应位于乙列之条目之列表: 范_条目之列表 = []

        const 甲列应选中的所有条目之唯一标识之列表: 范_条目之唯一标识之列表 = []
        const 乙列应选中的所有条目之唯一标识之列表: 范_条目之唯一标识之列表 = []

        if (所有候选条目之列表.length > 0) {
            const 乙列所有条目之唯一标识之列表_给出值 = this.乙列所有条目之唯一标识之列表
            let 乙列所有条目之唯一标识之列表_采纳值: 范_条目之唯一标识之列表

            if (Array.isArray(乙列所有条目之唯一标识之列表_给出值)) {
                乙列所有条目之唯一标识之列表_采纳值 = 乙列所有条目之唯一标识之列表_给出值
            } else {
                乙列所有条目之唯一标识之列表_采纳值 = []
            }

            const 一切条目之唯一标识之计数字典: { // 处于谨慎，防止数据源出现重复项。
                [唯一标识: string]: number;
            } = {}

            所有候选条目之列表.forEach(条目 => {
                if (!条目) { return }

                const {
                    唯一标识: 该条目之唯一标识,
                    已选中,
                } = 条目

                if (该条目之唯一标识 in 一切条目之唯一标识之计数字典) {
                    const 该条目之唯一标识之已遭遇次数 = 一切条目之唯一标识之计数字典[该条目之唯一标识]
                    一切条目之唯一标识之计数字典[该条目之唯一标识]++
                    const 出错提示之报文 = `${日志前缀} 发现唯一标识 “ ${该条目之唯一标识} ” 的第 ${该条目之唯一标识之已遭遇次数} 个重复的条目。`
                    console.error(出错提示之报文)
                    return
                }

                一切条目之唯一标识之计数字典[该条目之唯一标识] = 1

                const 该条目应位于乙列中: boolean = 乙列所有条目之唯一标识之列表_采纳值.includes(该条目之唯一标识)

                if (该条目应位于乙列中) {
                    应位于乙列之条目之列表.push(条目)

                    if (已选中) {
                        甲列应选中的所有条目之唯一标识之列表.push(该条目之唯一标识)
                    }
                } else {
                    应位于甲列之条目之列表.push(条目)

                    if (已选中) {
                        乙列应选中的所有条目之唯一标识之列表.push(该条目之唯一标识)
                    }
                }
            })

            const 所有重复出现过的唯一标识之列表 = Object.keys(一切条目之唯一标识之计数字典).filter(key => 一切条目之唯一标识之计数字典[key] > 1)
            const 所有重复项之种类之总数 = 所有重复出现过的唯一标识之列表.length
            if (所有重复项之种类之总数 > 0) {
                const 异常唯一标识之总数 = 所有重复出现过的唯一标识之列表.reduce((总数, 条目之唯一标识) => {
                    return 总数 + 一切条目之唯一标识之计数字典[条目之唯一标识] - 1
                }, 0)

                const 出错提示之报文 = `${日志前缀} 总计有 ${所有重复项之种类之总数} 种候选条目出现重复项。重复条目累计 ${异常唯一标识之总数} 条。`
                this.发布事件_已出错(出错提示之报文)
            }
        }

        this.甲列之数据集.所有条目 = 应位于甲列之条目之列表
        this.乙列之数据集.所有条目 = 应位于乙列之条目之列表

        this.甲列之数据集.当下选中的所有条目之唯一标识之列表 = 甲列应选中的所有条目之唯一标识之列表
        this.乙列之数据集.当下选中的所有条目之唯一标识之列表 = 乙列应选中的所有条目之唯一标识之列表
    }

    private 将某列选中的条目迁移至对方列 (起列之数据集?: 范_单列之内部数据集): void {
        const { 甲列之数据集, 乙列之数据集 } = this

        let 迄列系乙列: boolean
        let 迄列之数据集: 范_单列之内部数据集

        if (起列之数据集 === 甲列之数据集) {
            迄列系乙列 = true
            迄列之数据集 = 乙列之数据集
        } else if (起列之数据集 === 乙列之数据集) {
            迄列系乙列 = false
            迄列之数据集 = 甲列之数据集
        } else {
            return
        }

        const 起列之所有条目之列表的旧模样: 范_条目之列表 = 起列之数据集.所有条目
        const 迄列之所有条目之列表的旧模样: 范_条目之列表 = 迄列之数据集.所有条目

        const 起列之所有条目之列表拟变成的新模样: 范_条目之列表 = []
        const 迄列之所有条目之列表拟变成的新模样: 范_条目之列表 = [
            ...迄列之所有条目之列表的旧模样,
        ]

        起列之所有条目之列表的旧模样.forEach(条目 => {
            if (!条目.已禁止交互 && 条目.已选中) {
                条目.已选中 = false
                迄列之所有条目之列表拟变成的新模样.unshift(条目)
            } else {
                起列之所有条目之列表拟变成的新模样.push(条目)
            }
        })

        let 乙列拟变成的列表: 范_条目之列表

        if (迄列系乙列) {
            乙列拟变成的列表 = 迄列之所有条目之列表拟变成的新模样
        } else {
            乙列拟变成的列表 = 起列之所有条目之列表拟变成的新模样
        }

        const 乙列之条目之唯一标识之列表: 范_条目之唯一标识之列表 = 乙列拟变成的列表.map(条目 => 条目.唯一标识)

        this.发布事件_条目之分布已变动(乙列之条目之唯一标识之列表)
    }





    private 发布事件_已出错 (错误之记载或报文: Error | string): void {
        if (错误之记载或报文 instanceof Error) {
            console.error(错误之记载或报文)
            this.$emit('已出错', 错误之记载或报文)
        } else if (typeof 错误之记载或报文 === 'string') {
            const 出错提示之报文 = 错误之记载或报文.trim()
            console.error(出错提示之报文)
            this.$emit('已出错', new Error(出错提示之报文))
        }
    }

    private 发布事件_条目之分布已变动 (应迁移至迄列之条目之唯一标识之列表: 范_条目之唯一标识之列表): void {
        const 事件之记载 = 应迁移至迄列之条目之唯一标识之列表
        // console.debug(this.日志前缀, '发布事件_条目之分布已变动', 事件之记载)

        this.$emit('条目之分布已变动', 事件之记载)
    }





    private 每当点击用以将甲列选中之条目迁移至乙列之按钮后 (): void {
        this.将甲列选中的条目迁移至乙列()
    }

    private 每当点击用以将乙列选中之条目迁移至甲列之按钮后 (): void {
        this.将乙列选中的条目迁移至甲列()
    }





    private mounted (): void {
        this.将所有候选条目分配到左右两列('正在初始化')
    }
}
</script>

<style lang="stylus">
@import '../stylus/index.styl';
</style>
