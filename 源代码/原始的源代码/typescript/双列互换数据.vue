<template>
    <div class="wlc-dual-columns-exchange-items">
        <header v-if="!hasNotTitleBar" class="title-bar">
            <slot name="皿-总标题栏" ></slot>
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
                <button
                    :type="decided_elementUITypeOfTransferingButtons[0]"
                    :icon="decided_iconOfTransferingButtons[0]"
                    :disabled="shouldDisableTransferingButton0"
                    @click="handleClickOfButtonOfTransferingToRightColumn"
                >{{ decided_labelTextOfTransferingButtons[0] }}</button>
                <sup
                    :value="甲列之数据集.当下选中的所有条目之唯一标识之列表.length || null"
                    type="danger"
                    class="badge badge-of-transfering-button-1"
                ></sup>

                <button
                    :type="decided_elementUITypeOfTransferingButtons[1]"
                    :icon="decided_iconOfTransferingButtons[1]"
                    :disabled="shouldDisableTransferingButton1"
                    @click="handleClickOfButtonOfTransferingToLeftColumn"
                >{{ decided_labelTextOfTransferingButtons[1] }}</button>
                <sup
                    :value="乙列之数据集.当下选中的所有条目之唯一标识之列表.length || null"
                    type="success"
                    class="badge badge-of-transfering-button-2"
                ></sup>
            </div>

            <Wlc双列互换数据之单列
                v-model="乙列之数据集.当下选中的所有条目之唯一标识之列表"
                本列之特征样式类名之配置="right-column"
                :本列之称谓="乙列之称谓_最终采纳值"
                :允许列示的条目数之上限="单列允许列示的条目数之上限"
                :所有条目之列表="乙列之数据集.所有条目"
            ></Wlc双列互换数据之单列>
        </div>

        <footer v-if="hasFooterBar" class="footer-bar">
            <slot name="皿-底部内容栏"></slot>
        </footer>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'

import Wlc双列互换数据之单列 from './单个列.vue'

type 范_列之内部代号 = Wlc双列互换数据.范_列之内部代号
type 范_条目 = Wlc双列互换数据.范_条目
type 范_条目之列表 = Wlc双列互换数据.范_条目之列表
type 范_条目之唯一标识 = Wlc双列互换数据.范_条目之唯一标识
type 范_条目之唯一标识之列表 = Wlc双列互换数据.范_条目之唯一标识之列表
type 范_单列配置项集 = Wlc双列互换数据.范_单列配置项集

@Component({
    components: {
        Wlc双列互换数据之单列,
    },
})
export default class Wlc双列互换数据 extends Vue {
    @Model('change') public readonly 乙列所有条目之唯一标识之列表?: 范_条目之唯一标识之列表

    @Prop() public readonly 所有候选条目之列表?: 范_条目之列表
    @Prop() public readonly 单列允许列示的条目数之上限?: number
    @Prop() public readonly hasNotTitleBar?: boolean
    @Prop() public readonly hasFooterBar?: boolean
    @Prop() public readonly 甲列之称谓?: string
    @Prop() public readonly 乙列之称谓?: string
    @Prop() public readonly labelTextOfTransferingButtons?: Array<string>
    @Prop() public readonly elementUITypeOfTransferingButtons?: Array<any>





    private 日志前缀: string = 'Vue 部件 <Wlc双列互换数据> ：'

    private 甲列之数据集: 范_单列配置项集 = {
        所有条目: [],
        当下选中的所有条目之唯一标识之列表: [],
    }

    private 乙列之数据集: 范_单列配置项集 = {
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

    private get decided_labelTextOfTransferingButtons (): Array<string> {
        const defaultValues = ['>', '<']
        return this.getValuePairOfTransferingButtons(this.labelTextOfTransferingButtons, defaultValues)
    }

    private get decided_elementUITypeOfTransferingButtons (): Array<unknown> {
        const defaultValues = ['primary', 'primary']
        return this.getValuePairOfTransferingButtons(this.elementUITypeOfTransferingButtons, defaultValues)
    }

    private get decided_iconOfTransferingButtons (): Array<string | null> {
        const [labelLeft, labelRight] = this.decided_labelTextOfTransferingButtons
        return [
            labelLeft ? null : 'el-icon-arrow-right',
            labelRight ? null : 'el-icon-arrow-left',
        ]
    }

    private get shouldDisableTransferingButton0 (): boolean {
        return this.甲列之数据集.当下选中的所有条目之唯一标识之列表.length === 0
    }

    private get shouldDisableTransferingButton1 (): boolean {
        return this.乙列之数据集.当下选中的所有条目之唯一标识之列表.length === 0
    }





    @Watch('乙列所有条目之唯一标识之列表')
    在乙列所有条目之唯一标识之列表变动后 () {
        this.将所有候选条目分配到左右两列()
    }

    @Watch('所有候选条目之列表')
    在所有候选条目之列表变动后 () {
        this.将所有候选条目分配到左右两列()
    }





    private getValuePairOfTransferingButtons (providedValueArray: any, defaultValueArray: Array<string>): Array<string> {
        if (!Array.isArray(defaultValueArray)) {
            throw new Error('<wlc-dual-columns-exchange-items />: getValuePairOfTransferingButtons() defaultValueArray 无效。')
        }

        if (!Array.isArray(providedValueArray)) { return defaultValueArray }

        const usedValueArray = [...defaultValueArray]
        const [valueOfLeft, valueOfRight] = providedValueArray

        if (typeof valueOfLeft === 'string') {
            usedValueArray[0] = valueOfLeft // .trim()
        }

        if (typeof valueOfRight === 'string') {
            usedValueArray[1] = valueOfRight // .trim()
        }

        return usedValueArray
    }

    private 将所有候选条目分配到左右两列 () {
        const { 日志前缀 } = this

        let 乙列所有条目之唯一标识之列表_采纳值: Array<范_条目之唯一标识>
        let 所有候选条目之列表: 范_条目之列表

        const 乙列所有条目之唯一标识之列表_给出值 = this.乙列所有条目之唯一标识之列表

        if (Array.isArray(乙列所有条目之唯一标识之列表_给出值)) {
            乙列所有条目之唯一标识之列表_采纳值 = 乙列所有条目之唯一标识之列表_给出值
        } else {
            乙列所有条目之唯一标识之列表_采纳值 = []
        }

        if (Array.isArray(this.所有候选条目之列表)) {
            所有候选条目之列表 = this.所有候选条目之列表
        } else {
            所有候选条目之列表 = []
        }

        const 一切条目之唯一标识之计数字典: { // 处于谨慎，防止数据源出现重复项。
            [唯一标识: string]: number;
        } = {}

        const 应位于甲列之条目之列表: 范_条目之列表 = []
        const 应位于乙列之条目之列表: 范_条目之列表 = []

        所有候选条目之列表.forEach(原始条目 => {
            if (!原始条目) { return }
            const {
                唯一标识: 该条目之唯一标识,
                // 已禁止交互: 该条目已禁止交互,
            } = 原始条目

            if (该条目之唯一标识 in 一切条目之唯一标识之计数字典) {
                const 该条目之唯一标识之已遭遇次数 = 一切条目之唯一标识之计数字典[该条目之唯一标识]
                一切条目之唯一标识之计数字典[该条目之唯一标识]++
                const 出错提示之报文 = `${日志前缀} 发现唯一标识 “ ${该条目之唯一标识} ” 的第 ${该条目之唯一标识之已遭遇次数} 个重复的条目。`
                console.error(出错提示之报文)
                // this.发布事件_遭遇错误(new Error(出错提示之报文))
                return
            }

            一切条目之唯一标识之计数字典[该条目之唯一标识] = 1

            // const 条目 = {
            //     ...原始条目,

            //     已选中: false,
            // }

            const 该条目应位于乙列中: boolean = 乙列所有条目之唯一标识之列表_采纳值.includes(该条目之唯一标识)

            if (该条目应位于乙列中) {
                应位于乙列之条目之列表.push(原始条目)
            } else {
                应位于甲列之条目之列表.push(原始条目)
            }
        })

        this.甲列之数据集.所有条目 = 应位于甲列之条目之列表
        this.乙列之数据集.所有条目 = 应位于乙列之条目之列表

        const 所有重复出现过的唯一标识之列表 = Object.keys(一切条目之唯一标识之计数字典).filter(key => 一切条目之唯一标识之计数字典[key] > 1)
        const 所有重复项之种类之总数 = 所有重复出现过的唯一标识之列表.length
        if (所有重复项之种类之总数 > 0) {
            const 异常唯一标识之总数 = 所有重复出现过的唯一标识之列表.reduce((总数, 条目之唯一标识) => {
                return 总数 + 一切条目之唯一标识之计数字典[条目之唯一标识] - 1
            }, 0)

            const 出错提示之报文 = `${日志前缀} 总计有 ${所有重复项之种类之总数} 种候选条目出现重复项。重复条目累计 ${异常唯一标识之总数} 条。`
            this.发布事件_遭遇错误(出错提示之报文)
        }
    }

    public 将甲列选中的条目迁移至乙列 () {
        this.将某列选中的条目迁移至对方列(this.甲列之数据集)
    }

    public 将乙列选中的条目迁移至甲列 () {
        this.将某列选中的条目迁移至对方列(this.乙列之数据集)
    }

    private 将某列选中的条目迁移至对方列 (起列?: 范_单列配置项集) {
        const { 甲列之数据集, 乙列之数据集 } = this

        let 迄列: 范_单列配置项集

        if (起列 === 甲列之数据集) {
            迄列 = 乙列之数据集
        } else if (起列 === 乙列之数据集) {
            迄列 = 甲列之数据集
        } else {
            return
        }

        const 应停留在起列之条目之列表: 范_条目之列表 = []
        const 应迁移至迄列之条目之列表: 范_条目之列表 = []

        起列.所有条目.forEach(条目 => {
            if (!条目.已禁止交互 && 条目.已选中) {
                条目.已选中 = false
                应迁移至迄列之条目之列表.push(条目)
            } else {
                应停留在起列之条目之列表.push(条目)
            }
        })

        起列.所有条目 = 应停留在起列之条目之列表
        迄列.所有条目 = [...应迁移至迄列之条目之列表, ...迄列.所有条目 ]

        this.发布事件_条目之分布有变动()
    }





    private 发布事件_遭遇错误 (错误之记载或报文: Error | string) {
        if (错误之记载或报文 instanceof Error) {
            console.error(错误之记载或报文)
            this.$emit('error', 错误之记载或报文)
        } else if (typeof 错误之记载或报文 === 'string') {
            const 出错提示之报文 = 错误之记载或报文.trim()
            console.error(出错提示之报文)
            this.$emit('出错', new Error(出错提示之报文))
        }
    }

    private 发布事件_条目之分布有变动 () {
        // const 甲列所有条目之唯一标识之列表 = this.甲列之数据集.所有条目.map(条目 => 条目.唯一标识)
        const 乙列所有条目之唯一标识之列表 = this.乙列之数据集.所有条目.map(条目 => 条目.唯一标识)

        // const 事件之记载 = {
        //     甲列: 甲列所有条目之唯一标识之列表,
        //     乙列: 乙列所有条目之唯一标识之列表,
        // }

        const 事件之记载 = 乙列所有条目之唯一标识之列表

        this.$emit('change', 事件之记载)
    }





    private handleClickOfButtonOfTransferingToRightColumn () {
        this.将甲列选中的条目迁移至乙列()
    }

    private handleClickOfButtonOfTransferingToLeftColumn () {
        this.将乙列选中的条目迁移至甲列()
    }





    mounted () {
        this.将所有候选条目分配到左右两列()
    }
}
</script>

<style lang="stylus">
@import '../stylus/index.styl';
</style>
