<template>
    <div class="wlc-dual-columns-exchange-items">
        <header v-if="!hasNotTitleBar" class="title-bar">
            <slot name="title-bar" ></slot>
        </header>

        <div class="chief-part">
            <Wlc双列互换数据之单列
                v-model="左列之状态.checkedItemsCache"
                本列之称谓="甲列"
                :允许列示的条目数之上限="NaN"
                :所有条目之列表="左列之状态.allItems"
                @当选中的条目变动后="当选中的条目变动后('左列', $event)"
            ></Wlc双列互换数据之单列>

            <div class="center-column">
                <button
                    :type="decided_elementUITypeOfTransferingButtons[0]"
                    :icon="decided_iconOfTransferingButtons[0]"
                    :disabled="shouldDisableTransferingButton0"
                    @click="handleClickOfButtonOfTransferingToRightColumn"
                >{{ decided_labelTextOfTransferingButtons[0] }}</button>
                <sup
                    :value="leftCheckedItems.length || null"
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
                    :value="rightCheckedItems.length || null"
                    type="success"
                    class="badge-of-transfering-button-2"
                ></sup>
            </div>

            <div class="column-of-list right-column">
                <header class="heading-block">
                    <div class="column-title-bar">{{ decided_rightColumnSubTitleText }}</div>

                    <div class="column-filter">
                        <input
                            v-model="右列之状态.filteringKeyword"
                            :placeholder="columnFilterPlaceholderText('右列')"
                            class="column-filter-input"
                            :class="{ 'emphasize-to-call-to-action': rightNotShowingAllItems, 'emphasize-without-animation': leftNotShowingAllItems }"
                            :disabled="右列之状态.allItems.length < 1"
                        >
                    </div>

                    <div class="column-check-all">
                        <label
                            class="el-checkbox"
                            :class="getStateOfColumnCheckAllIncludingHidden('右列').labelElementCSSClassNames"
                        ><span
                            class="el-checkbox__input"
                            :class="getStateOfColumnCheckAllIncludingHidden('右列').psuedoCheckboxSpanCSSClassNames"
                        ><span class="el-checkbox__inner" ></span><input
                            v-model="右列之状态.allAreChecked"
                            type="checkbox"
                            aria-hidden="false"
                            class="el-checkbox__original"
                            :disabled="getStateOfColumnCheckAllIncludingHidden('右列').disabled"
                            @change="handleColumnCheckAllIncludingHiddenChange('右列')"
                        ></span><span class="el-checkbox__label">{{ getStateOfColumnCheckAllIncludingHidden('右列').labelText }}</span></label>

                        <label
                            class="el-checkbox"
                            :class="getStateOfColumnCheckAllVisible('右列').labelElementCSSClassNames"
                        ><span
                            class="el-checkbox__input"
                            :class="getStateOfColumnCheckAllVisible('右列').psuedoCheckboxSpanCSSClassNames"
                        ><span class="el-checkbox__inner" ></span><input
                            v-model="右列之状态.allVisibleAreChecked"
                            type="checkbox"
                            aria-hidden="false"
                            class="el-checkbox__original"
                            :disabled="getStateOfColumnCheckAllVisible('右列').disabled"
                            @change="handleColumnCheckAllVisibleChange('右列')"
                        ></span><span class="el-checkbox__label">{{ getStateOfColumnCheckAllVisible('右列').labelText }}</span></label>
                    </div>

                    <dl class="counts-summary">
                        <div class="entry all">
                            <dt>总数</dt>
                            <dd>
                                <span class="all"><span class="value">{{ 右列之状态.allItems.length }}</span></span>

                                <span class="shown">
                                    <span class="prefix">（ 已列示</span>
                                    <span class="value">{{ rightShownItems.length }}</span>
                                    <span class="suffix">）</span>
                                </span>
                            </dd>
                        </div>
                        <div class="entry checked">
                            <dt>已勾选</dt>
                            <dd>
                                <span class="all"><span class="value">{{ rightCheckedItems.length }}</span></span>

                                <span class="shown">
                                    <span class="prefix">（ 已列示</span>
                                    <span class="value">{{ rightShownCheckedItems.length }}</span>
                                    <span class="suffix">）</span>
                                </span>
                            </dd>
                        </div>
                    </dl>
                </header>

                <div class="column-list-container">
                    <div
                        v-if="rightNotShowingAllItems"
                        class="column-tip"
                    ><p>符合条件的条目太多，达<em>{{ rightMatchedItems.length }}</em>条。为确保程序不致僵死，暂不列示任何条目。</p>
                        <p><strong>请先输入筛选关键字，以减少须列示的条目。</strong></p></div>

                    <ol v-else class="column-list">
                        <li
                            v-for="条目 in rightShownItems"
                            :key="条目.唯一标识"
                            class="column-list-item"
                        ><label
                            class="el-checkbox"
                            :class="getCSSClassNamesOfItem(条目).labelElement"
                        ><span
                            style="display: none"
                            class="el-checkbox__input"
                            :class="getCSSClassNamesOfItem(条目).psuedoCheckboxSpan"
                        ><span class="el-checkbox__inner" ></span><input
                            v-model="条目.已选中"
                            type="checkbox"
                            aria-hidden="false"
                            class="el-checkbox__original"
                            :disabled="条目.已禁止交互"
                        ></span><span class="el-checkbox__label">{{ 条目.在界面展示时的称谓 }}</span></label></li>
                    </ol>
                </div>
            </div>
        </div>

        <footer v-if="hasFooterBar" class="footer-bar">
            <slot name="footer-bar"></slot>
        </footer>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator'

import Wlc双列互换数据之单列 from './单个列.vue'

type 范_列代号 = Wlc双列互换数据.范_列代号
type 范_条目 = Wlc双列互换数据.范_条目
type 范_条目之列表 = Wlc双列互换数据.范_条目之列表
type 范_条目之唯一标识 = 范_条目['唯一标识']

const 单列允许列示的条目数之上限_默认值 = 9

@Component({
    components: {
        Wlc双列互换数据之单列,
    },
})
export default class Wlc双列互换数据 extends Vue {
    @Model('change') public value?: Array<范_条目之唯一标识>

    @Prop() public allCandidatesOfBothColumns?: 范_条目之列表
    @Prop() public maxCountOfItemsToDisplayInEitherColumn?: number
    @Prop() public hasNotTitleBar?: boolean
    @Prop() public hasFooterBar?: boolean
    @Prop() public leftColumnSubTitleText?: string
    @Prop() public rightColumnSubTitleText?: string
    @Prop() public labelTextOfTransferingButtons?: Array<string>
    @Prop() public elementUITypeOfTransferingButtons?: Array<any>

    private 左列之状态: Wlc双列互换数据.范_单列配置项集 = {
        filteringKeyword: '',
        allAreChecked: false,
        allVisibleAreChecked: false,
        allItems: [],
        checkedItemsCache: [],
    }

    private 右列之状态: Wlc双列互换数据.范_单列配置项集 = {
        filteringKeyword: '',
        allAreChecked: false,
        allVisibleAreChecked: false,
        allItems: [],
        checkedItemsCache: [],
    }

    private get decided_maxCountOfItemsToDisplayInEitherColumn (): number {
        const _v = this.maxCountOfItemsToDisplayInEitherColumn

        let v: number
        if (typeof _v !== 'number') {
            v = NaN
        } else if (typeof _v === 'string') {
            v = +_v
        } else {
            v = _v
        }

        if (v > 0) { return v }

        return 单列允许列示的条目数之上限_默认值
    }

    private get decided_leftColumnSubTitleText (): string {
        return this.leftColumnSubTitleText || '未选择的条目'
    }

    private get decided_rightColumnSubTitleText (): string {
        return this.rightColumnSubTitleText || '已选择的条目'
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

    private get leftEnabledItems (): 范_条目之列表 {
        return this.左列之状态.allItems.filter(条目 => {

        })
        // return this.左列之状态.allItems.filter(条目 => !条目.已禁止交互)
    }

    private get rightEnabledItems (): 范_条目之列表 {
        return this.右列之状态.allItems.filter(条目 => !条目.已禁止交互)
    }

    private get leftMatchedItems (): 范_条目之列表 {
        const {
            allItems,
            filteringKeyword,
        } = this.左列之状态

        let 所有匹配的条目 = allItems
        if (filteringKeyword) {
            const 用以匹配条目的正则表达式 = new RegExp(`${filteringKeyword}`, 'i')
            所有匹配的条目 = allItems.filter(条目 => 用以匹配条目的正则表达式.test(条目.在界面展示时的称谓))
        }

        return 所有匹配的条目
    }

    private get rightMatchedItems (): 范_条目之列表 {
        const {
            allItems,
            filteringKeyword,
        } = this.右列之状态

        let 所有匹配的条目 = allItems
        if (filteringKeyword) {
            const 用以匹配条目的正则表达式 = new RegExp(`${filteringKeyword}`, 'i')
            所有匹配的条目 = allItems.filter(条目 => 用以匹配条目的正则表达式.test(条目.在界面展示时的称谓))
        }

        return 所有匹配的条目
    }

    private get leftShownItems (): 范_条目之列表 {
        const { decided_maxCountOfItemsToDisplayInEitherColumn } = this

        const itemsToShow = this.leftMatchedItems
        const tooManyItemsToShow = itemsToShow.length > decided_maxCountOfItemsToDisplayInEitherColumn
        if (tooManyItemsToShow) { return [] }

        return itemsToShow
    }

    private get rightShownItems (): 范_条目之列表 {
        const { decided_maxCountOfItemsToDisplayInEitherColumn } = this

        const itemsToShow = this.rightMatchedItems
        const tooManyItemsToShow = itemsToShow.length > decided_maxCountOfItemsToDisplayInEitherColumn
        if (tooManyItemsToShow) { return [] }

        return itemsToShow
    }

    private get leftNotShowingAllItems (): boolean {
        return this.leftShownItems.length === 0 && this.leftMatchedItems.length > 0
    }

    private get rightNotShowingAllItems (): boolean {
        return this.rightShownItems.length === 0 && this.rightMatchedItems.length > 0
    }

    private get leftCheckedItems (): 范_条目之列表 {
        const checkedItems = this.左列之状态.allItems.filter(条目 => !条目.已禁止交互 && !!条目.已选中)
        this.左列之状态.checkedItemsCache = [...checkedItems] // eslint-disable-line
        return checkedItems
    }

    private get rightCheckedItems (): 范_条目之列表 {
        const checkedItems = this.右列之状态.allItems.filter(条目 => !条目.已禁止交互 && !!条目.已选中)
        this.右列之状态.checkedItemsCache = [...checkedItems] // eslint-disable-line
        return checkedItems
    }

    private get leftShownCheckedItems (): 范_条目之列表 {
        return this.leftShownItems.filter(条目 => !条目.已禁止交互 && !!条目.已选中)
    }

    private get rightShownCheckedItems (): 范_条目之列表 {
        return this.rightShownItems.filter(条目 => !条目.已禁止交互 && !!条目.已选中)
    }

    private get shouldDisableTransferingButton0 (): boolean {
        return this.leftCheckedItems.length === 0
    }

    private get shouldDisableTransferingButton1 (): boolean {
        return this.rightCheckedItems.length === 0
    }

    @Watch('value')
    onValueChanged () {
        this.generateItemsOfBothColumns()
    }

    @Watch('allCandidatesOfBothColumns')
    onCandidatesChanged () {
        this.generateItemsOfBothColumns()
    }

    mounted () {
        this.generateItemsOfBothColumns()
    }

    private columnFilterPlaceholderText (side: 范_列代号): '筛选左侧条目' | '筛选右侧条目' | '无条目可筛选' {
        let candidates: 范_条目之列表
        if (side === '左列') {
            candidates = this.左列之状态.allItems
        } else {
            candidates = this.右列之状态.allItems
        }

        if (candidates.length > 0) {
            if (side === '左列') {
                return '筛选左侧条目'
            } else {
                return '筛选右侧条目'
            }
        }

        return '无条目可筛选'
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

    private generateItemsOfBothColumns () {
        let rightsideValues: Array<范_条目之唯一标识>
        let candidates: 范_条目之列表

        if (Array.isArray(this.value)) {
            rightsideValues = this.value
        } else {
            rightsideValues = []
        }

        if (Array.isArray(this.allCandidatesOfBothColumns)) {
            candidates = this.allCandidatesOfBothColumns
        } else {
            candidates = []
        }

        const leftCheckedItemsCache = this.左列之状态.checkedItemsCache
        const rightCheckedItemsCache = this.右列之状态.checkedItemsCache

        const itemsDeduplicatedDict: {
            [value: string]: number;
        } = {}

        const leftAllItems: 范_条目之列表 = []
        const rightAllItems: 范_条目之列表 = []

        candidates.forEach(原始条目 => {
            if (!原始条目) { return }
            const {
                唯一标识: 该条目之唯一标识,
                已禁止交互: 该条目已禁止交互,
            } = 原始条目

            if (该条目之唯一标识 in itemsDeduplicatedDict) {
                const dupCount = itemsDeduplicatedDict[该条目之唯一标识]
                itemsDeduplicatedDict[该条目之唯一标识]++
                console.error(`<wlc-dual-columns-exchange-items>：发现 唯一标识 （${该条目之唯一标识}）第${dupCount}个重复的条目。`)
                return
            }

            itemsDeduplicatedDict[该条目之唯一标识] = 1

            const 条目 = {
                ...原始条目,

                已选中: false,
            }

            const 该条目应位于右列中: boolean = rightsideValues.includes(该条目之唯一标识)

            // if (该条目应位于右列中) {
            //   console.debug(`${value}`, 该条目应位于右列中)
            // }

            if (该条目应位于右列中) {
                if (!该条目已禁止交互) {
                    const cachedUXItem = rightCheckedItemsCache.find(条目 => 条目.唯一标识 === 该条目之唯一标识)
                    if (cachedUXItem) {
                        条目.已选中 = cachedUXItem.已选中
                    }
                }

                rightAllItems.push(条目)
            } else {
                if (!该条目已禁止交互) {
                    const cachedUXItem = leftCheckedItemsCache.find(条目 => 条目.唯一标识 === 该条目之唯一标识)
                    if (cachedUXItem) {
                        条目.已选中 = cachedUXItem.已选中
                    }
                }

                leftAllItems.push(条目)
            }
        })

        this.左列之状态.allItems = leftAllItems
        this.右列之状态.allItems = rightAllItems

        // this.左列之状态.filteringKeyword = ''
        // this.右列之状态.filteringKeyword = ''

        const dupKeys = Object.keys(itemsDeduplicatedDict).filter(key => itemsDeduplicatedDict[key] > 1)
        if (dupKeys.length > 0) {
            const totalDupCountOfAll = dupKeys.reduce((total, key) => {
                return total + itemsDeduplicatedDict[key] - 1
            }, 0)

            const errorMessage = `总计有 ${dupKeys.length} 种候选项出现重复项。重复项累计 ${totalDupCountOfAll} 条。`
            console.error(errorMessage)
            // this.$message.error(errorMessage)
        }
    }

    private getCSSClassNamesOfItem (条目: 范_条目) {
        if (!条目) { return null }

        const 已选中 = !!条目.已选中
        const 已禁止交互 = !!条目.已禁止交互

        return {
            labelElement: {
                'is-checked': 已选中,
                'is-disabled': 已禁止交互,
            },
            psuedoCheckboxSpan: {
                'is-checked': 已选中,
                'is-disabled': 已禁止交互,
            },
        }
    }

    private getStateOfColumnCheckAllIncludingHidden (side: 范_列代号) {
        let allEnabledItems: 范_条目之列表
        if (side === '左列') {
            allEnabledItems = this.leftEnabledItems
        } else {
            allEnabledItems = this.rightEnabledItems
        }

        let labelElementCSSClassNames = null
        let psuedoCheckboxSpanCSSClassNames = null
        let labelText = '无可勾选项'

        const disabled = allEnabledItems.length === 0
        if (disabled) {
            labelElementCSSClassNames = 'is-disabled'
            psuedoCheckboxSpanCSSClassNames = 'is-disabled'
        } else {
            const noneAreChecked = allEnabledItems.every(条目 => !条目.已选中)

            if (noneAreChecked) {
                labelText = '全部勾选（含未列示条目）'
                labelElementCSSClassNames = ''
                psuedoCheckboxSpanCSSClassNames = ''
            } else {
                const allAreChecked = allEnabledItems.every(条目 => 条目.已选中)

                if (allAreChecked) {
                    labelText = '全部去掉勾选（含未列示条目）'
                    labelElementCSSClassNames = 'is-checked'
                    psuedoCheckboxSpanCSSClassNames = 'is-checked'
                } else {
                    labelText = '全部勾选（含未列示条目）'
                    labelElementCSSClassNames = 'is-indeterminate'
                    psuedoCheckboxSpanCSSClassNames = 'is-indeterminate'
                }
            }
        }

        return {
            labelElementCSSClassNames,
            psuedoCheckboxSpanCSSClassNames,
            disabled,
            labelText,
        }
    }

    private getStateOfColumnCheckAllVisible (side: 范_列代号) {
        let allEnabledItems: 范_条目之列表
        if (side === '左列') {
            allEnabledItems = this.leftShownItems
        } else {
            allEnabledItems = this.rightShownItems
        }

        let labelElementCSSClassNames = null
        let psuedoCheckboxSpanCSSClassNames = null
        let labelText = '无可勾选项'

        const disabled = allEnabledItems.length === 0
        if (disabled) {
            labelElementCSSClassNames = 'is-disabled'
            psuedoCheckboxSpanCSSClassNames = 'is-disabled'
        } else {
            const noneVisibleAreChecked = allEnabledItems.every(条目 => !条目.已选中)

            if (noneVisibleAreChecked) {
                labelText = '全部勾选（仅列示条目）'
                labelElementCSSClassNames = ''
                psuedoCheckboxSpanCSSClassNames = ''
            } else {
                const allVisibleAreChecked = allEnabledItems.every(条目 => 条目.已选中)
                if (allVisibleAreChecked) {
                    labelText = '全部去掉勾选（仅列示条目）'
                    labelElementCSSClassNames = 'is-checked'
                    psuedoCheckboxSpanCSSClassNames = 'is-checked'
                } else {
                    labelText = '全部勾选（仅列示条目）'
                    labelElementCSSClassNames = 'is-indeterminate'
                    psuedoCheckboxSpanCSSClassNames = 'is-indeterminate'
                }
            }
        }

        return {
            labelElementCSSClassNames,
            psuedoCheckboxSpanCSSClassNames,
            disabled,
            labelText,
        }
    }

    private handleColumnCheckAllIncludingHiddenChange (side: 范_列代号) {
        let allEnabledItems: 范_条目之列表
        if (side === '左列') {
            allEnabledItems = this.leftEnabledItems
        } else {
            allEnabledItems = this.rightEnabledItems
        }

        const allAreChecked = allEnabledItems.every(条目 => 条目.已选中)
        const shouldCheckAll = !allAreChecked

        allEnabledItems.forEach(条目 => { 条目.已选中 = shouldCheckAll })
        if (side === '左列') {
            this.左列之状态.allAreChecked = allAreChecked
        } else {
            this.右列之状态.allAreChecked = allAreChecked
        }
    }

    private handleColumnCheckAllVisibleChange (side: 范_列代号) {
        let allShownItems: 范_条目之列表
        if (side === '左列') {
            allShownItems = this.leftShownItems
        } else {
            allShownItems = this.rightShownItems
        }

        const allVisibleAreChecked = allShownItems.every(条目 => 条目.已选中)
        const shouldCheckAll = !allVisibleAreChecked

        allShownItems.forEach(条目 => {
            if (条目.已禁止交互) { return }
            条目.已选中 = shouldCheckAll
        })

        if (side === '左列') {
            this.左列之状态.allVisibleAreChecked = allVisibleAreChecked
        } else {
            this.右列之状态.allVisibleAreChecked = allVisibleAreChecked
        }
    }

    private handleClickOfButtonOfTransferingToRightColumn () {
        this.transferLeftCheckedItemsToRight()
    }

    private handleClickOfButtonOfTransferingToLeftColumn () {
        this.transferRighttColumnCheckedItemsToLeft()
    }

    private transferLeftCheckedItemsToRight () {
        const restOfLeft: 范_条目之列表 = []
        const toMoveToRight: 范_条目之列表 = []

        this.左列之状态.allItems.forEach(条目 => {
            if (!条目.已禁止交互 && 条目.已选中) {
                toMoveToRight.push(条目)
                条目.已选中 = false
            } else {
                restOfLeft.push(条目)
            }
        })

        this.左列之状态.allItems = restOfLeft
        this.右列之状态.allItems = [...toMoveToRight, ...this.右列之状态.allItems]

        this.emitChangeEvent()
    }

    private transferRighttColumnCheckedItemsToLeft () {
        const restOfRight: 范_条目之列表 = []
        const toMoveToLeft: 范_条目之列表 = []

        this.右列之状态.allItems.forEach(条目 => {
            if (!条目.已禁止交互 && 条目.已选中) {
                toMoveToLeft.push(条目)
                条目.已选中 = false
            } else {
                restOfRight.push(条目)
            }
        })

        this.右列之状态.allItems = restOfRight
        this.左列之状态.allItems = [...toMoveToLeft, ...this.左列之状态.allItems]

        this.emitChangeEvent()
    }

    private emitChangeEvent () {
        const payload = this.右列之状态.allItems.map(uxItem => uxItem.唯一标识)
        this.$emit('change', payload)
    }

    private 当选中的条目变动后 (side: 范_列代号, 选中的条目之列表) {
        console.log(选中的条目之列表)
    }
}
</script>

<style lang="stylus">
@import '../stylus/index.styl';
</style>
