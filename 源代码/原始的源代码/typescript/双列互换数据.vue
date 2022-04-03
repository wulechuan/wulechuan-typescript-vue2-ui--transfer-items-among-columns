<template>
    <div class="wlc-dual-columns-exchange-items">
        <header v-if="!hasNotTitleBar" class="title-bar">
            <slot name="皿-总标题栏" ></slot>
        </header>

        <div class="chief-part">
            <Wlc双列互换数据之单列
                v-model="左列之状态.当下选中的所有条目之唯一标识之列表"
                :本列之称谓="左列之称谓_最终采纳值"
                :允许列示的条目数之上限="单列允许列示的条目数之上限"
                :所有条目之列表="左列之状态.所有条目"
            ></Wlc双列互换数据之单列>

            <div class="center-column">
                <button
                    :type="decided_elementUITypeOfTransferingButtons[0]"
                    :icon="decided_iconOfTransferingButtons[0]"
                    :disabled="shouldDisableTransferingButton0"
                    @click="handleClickOfButtonOfTransferingToRightColumn"
                >{{ decided_labelTextOfTransferingButtons[0] }}</button>
                <sup
                    :value="左列之状态.当下选中的所有条目之唯一标识之列表.length || null"
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
                    :value="右列之状态.当下选中的所有条目之唯一标识之列表.length || null"
                    type="success"
                    class="badge badge-of-transfering-button-2"
                ></sup>
            </div>

            <Wlc双列互换数据之单列
                v-model="右列之状态.当下选中的所有条目之唯一标识之列表"
                :本列之称谓="右列之称谓_最终采纳值"
                :允许列示的条目数之上限="单列允许列示的条目数之上限"
                :所有条目之列表="右列之状态.所有条目"
            ></Wlc双列互换数据之单列>
        </div>

        <footer v-if="hasFooterBar" class="footer-bar">
            <slot name="footer-bar"></slot>
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

@Component({
    components: {
        Wlc双列互换数据之单列,
    },
})
export default class Wlc双列互换数据 extends Vue {
    @Model('change') public readonly 右列所有条目之唯一标识之列表?: 范_条目之唯一标识之列表

    @Prop() public readonly 所有候选条目之列表?: 范_条目之列表
    @Prop() public readonly 单列允许列示的条目数之上限?: number
    @Prop() public readonly hasNotTitleBar?: boolean
    @Prop() public readonly hasFooterBar?: boolean
    @Prop() public readonly 左列之称谓?: string
    @Prop() public readonly 右列之称谓?: string
    @Prop() public readonly labelTextOfTransferingButtons?: Array<string>
    @Prop() public readonly elementUITypeOfTransferingButtons?: Array<any>

    private 左列之状态: Wlc双列互换数据.范_单列配置项集 = {
        所有条目: [],
        当下选中的所有条目之唯一标识之列表: [],
    }

    private 右列之状态: Wlc双列互换数据.范_单列配置项集 = {
        所有条目: [],
        当下选中的所有条目之唯一标识之列表: [],
    }

    private get 左列之称谓_最终采纳值 (): string {
        const 外界给出值 = this.左列之称谓

        let 拟采纳值 = ''
        if (typeof 外界给出值 === 'string') {
            拟采纳值 = 外界给出值.trim()
        }

        return 拟采纳值 || '未选择的条目' // || '甲列'
    }

    private get 右列之称谓_最终采纳值 (): string {
        const 外界给出值 = this.右列之称谓

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
        return this.左列之状态.当下选中的所有条目之唯一标识之列表.length === 0
    }

    private get shouldDisableTransferingButton1 (): boolean {
        return this.右列之状态.当下选中的所有条目之唯一标识之列表.length === 0
    }





    @Watch('右列所有条目之唯一标识之列表')
    在右列所有条目之唯一标识之列表变动后 () {
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
        let 右列所有条目之唯一标识之列表: Array<范_条目之唯一标识>
        let 所有候选条目之列表: 范_条目之列表

        if (Array.isArray(this.右列所有条目之唯一标识之列表)) {
            右列所有条目之唯一标识之列表 = this.右列所有条目之唯一标识之列表
        } else {
            右列所有条目之唯一标识之列表 = []
        }

        if (Array.isArray(this.所有候选条目之列表)) {
            所有候选条目之列表 = this.所有候选条目之列表
        } else {
            所有候选条目之列表 = []
        }

        const 一切条目之唯一标识之计数字典: { // 处于谨慎，防止数据源出现重复项。
            [唯一标识: string]: number;
        } = {}

        const 应位于左列之条目之列表: 范_条目之列表 = []
        const 应位于右列之条目之列表: 范_条目之列表 = []

        所有候选条目之列表.forEach(原始条目 => {
            if (!原始条目) { return }
            const {
                唯一标识: 该条目之唯一标识,
                // 已禁止交互: 该条目已禁止交互,
            } = 原始条目

            if (该条目之唯一标识 in 一切条目之唯一标识之计数字典) {
                const dupCount = 一切条目之唯一标识之计数字典[该条目之唯一标识]
                一切条目之唯一标识之计数字典[该条目之唯一标识]++
                console.error(`<wlc-dual-columns-exchange-items>：发现 唯一标识 （${该条目之唯一标识}）第${dupCount}个重复的条目。`)
                return
            }

            一切条目之唯一标识之计数字典[该条目之唯一标识] = 1

            // const 条目 = {
            //     ...原始条目,

            //     已选中: false,
            // }

            const 该条目应位于右列中: boolean = 右列所有条目之唯一标识之列表.includes(该条目之唯一标识)

            if (该条目应位于右列中) {
                应位于右列之条目之列表.push(原始条目)
            } else {
                应位于左列之条目之列表.push(原始条目)
            }
        })

        this.左列之状态.所有条目 = 应位于左列之条目之列表
        this.右列之状态.所有条目 = 应位于右列之条目之列表

        const 所有重复出现过的唯一标识之列表 = Object.keys(一切条目之唯一标识之计数字典).filter(key => 一切条目之唯一标识之计数字典[key] > 1)
        if (所有重复出现过的唯一标识之列表.length > 0) {
            const 异常唯一标识之总数 = 所有重复出现过的唯一标识之列表.reduce((总数, 条目之唯一标识) => {
                return 总数 + 一切条目之唯一标识之计数字典[条目之唯一标识] - 1
            }, 0)

            const 出错提示之报文 = `总计有 ${所有重复出现过的唯一标识之列表.length} 种候选项出现重复项。重复项累计 ${异常唯一标识之总数} 条。`
            console.error(出错提示之报文)
            // this.$message.error(出错提示之报文)
        }
    }

    private transferLeftColumnCheckedItemsToRight () {
        const restOfLeft: 范_条目之列表 = []
        const toMoveToRight: 范_条目之列表 = []

        this.左列之状态.所有条目.forEach(条目 => {
            if (!条目.已禁止交互 && 条目.已选中) {
                toMoveToRight.push(条目)
                条目.已选中 = false
            } else {
                restOfLeft.push(条目)
            }
        })

        this.左列之状态.所有条目 = restOfLeft
        this.右列之状态.所有条目 = [...toMoveToRight, ...this.右列之状态.所有条目]

        this.emitChangeEvent()
    }

    private transferRightColumnCheckedItemsToLeft () {
        const restOfRight: 范_条目之列表 = []
        const toMoveToLeft: 范_条目之列表 = []

        this.右列之状态.所有条目.forEach(条目 => {
            if (!条目.已禁止交互 && 条目.已选中) {
                toMoveToLeft.push(条目)
                条目.已选中 = false
            } else {
                restOfRight.push(条目)
            }
        })

        this.右列之状态.所有条目 = restOfRight
        this.左列之状态.所有条目 = [...toMoveToLeft, ...this.左列之状态.所有条目]

        this.emitChangeEvent()
    }





    private emitChangeEvent () {
        // const 左列所有条目之唯一标识之列表 = this.左列之状态.所有条目.map(条目 => 条目.唯一标识)
        const 右列所有条目之唯一标识之列表 = this.右列之状态.所有条目.map(条目 => 条目.唯一标识)

        // const 事件记载 = {
        //     左列: 左列所有条目之唯一标识之列表,
        //     右列: 右列所有条目之唯一标识之列表,
        // }

        const 事件记载 = 右列所有条目之唯一标识之列表

        this.$emit('change', 事件记载)
    }

    private 当选中的条目变动后 (列代号: 范_列之内部代号, 选中的条目之列表: any) {
        console.log(列代号, '选中的条目之列表', [...选中的条目之列表])
    }





    private handleClickOfButtonOfTransferingToRightColumn () {
        this.transferLeftColumnCheckedItemsToRight()
    }

    private handleClickOfButtonOfTransferingToLeftColumn () {
        this.transferRightColumnCheckedItemsToLeft()
    }





    mounted () {
        this.将所有候选条目分配到左右两列()
    }
}
</script>

<style lang="stylus">
@import '../stylus/index.styl';
</style>
