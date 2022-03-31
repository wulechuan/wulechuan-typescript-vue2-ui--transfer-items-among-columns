<template>
    <div class="wlc-dual-columns-exchange-items">
        <header v-if="!hasNotTitleBar" class="title-bar">
            <slot name="title-bar" ></slot>
        </header>

        <div class="chief-part">
            <div class="column-of-list left-column">
                <header class="heading-block">
                    <div class="column-title-bar">{{ _leftColumnSubTitleText }}</div>

                    <div class="column-filter">
                        <el-input
                            v-model="leftColumn.filteringKeyword"
                            clearable
                            :placeholder="columnFilterPlaceholderText('left')"
                            class="column-filter-input"
                            :class="{ 'emphasize-to-call-to-action': leftNotShowingAllItems }"
                            :disabled="leftColumn.allItems.length < 1"
                        ></el-input>
                        <i class="el-input__icon el-icon-search" ></i>
                    </div>

                    <div class="column-check-all">
                        <label
                            class="el-checkbox column-check-all--including-hidden"
                            :class="getStateOfColumnCheckAllIncludingHidden('left').labelElementCSSClassNames"
                        ><span
                            class="el-checkbox__input"
                            :class="getStateOfColumnCheckAllIncludingHidden('left').psuedoCheckboxSpanCSSClassNames"
                        ><span class="el-checkbox__inner" ></span><input
                            v-model="leftColumn.allAreChecked"
                            type="checkbox"
                            aria-hidden="false"
                            class="el-checkbox__original"
                            :disabled="getStateOfColumnCheckAllIncludingHidden('left').disabled"
                            @change="handleColumnCheckAllIncludingHiddenChange('left')"
                        ></span><span class="el-checkbox__label">{{ getStateOfColumnCheckAllIncludingHidden('left').labelText }}</span></label>

                        <label
                            class="el-checkbox column-check-all--visible-only"
                            :class="getStateOfColumnCheckAllVisible('left').labelElementCSSClassNames"
                        ><span
                            class="el-checkbox__input"
                            :class="getStateOfColumnCheckAllVisible('left').psuedoCheckboxSpanCSSClassNames"
                        ><span class="el-checkbox__inner" ></span><input
                            v-model="leftColumn.allVisibleAreChecked"
                            type="checkbox"
                            aria-hidden="false"
                            class="el-checkbox__original"
                            :disabled="getStateOfColumnCheckAllVisible('left').disabled"
                            @change="handleColumnCheckAllVisibleChange('left')"
                        ></span><span class="el-checkbox__label">{{ getStateOfColumnCheckAllVisible('left').labelText }}</span></label>
                    </div>

                    <dl class="counts-summary">
                        <div class="entry all">
                            <dt>总数</dt>
                            <dd><span class="all"><span class="value">{{ leftColumn.allItems.length }}</span></span><span class="prefix">（已列示</span><span class="shown"><span class="value">{{ leftShownItems.length }}</span></span>）</dd>
                        </div>
                        <div class="entry checked">
                            <dt>已勾选</dt>
                            <dd><span class="all"><span class="value">{{ leftCheckedItems.length }}</span></span><span class="prefix">（已列示</span><span class="shown"><span class="value">{{ leftShownCheckedItems.length }}</span></span>）</dd>
                        </div>
                    </dl>
                </header>

                <div class="column-list-container">
                    <div
                        v-if="leftNotShowingAllItems"
                        class="column-tip"
                    ><p>条目太多，达<em>{{ leftMatchedItems.length }}</em>条。为确保浏览器不致僵死，暂不显示。</p>
                        <p><strong>请先输入筛选关键字，以减少须列示的条目。</strong></p></div>

                    <ol v-else class="column-list">
                        <li
                            v-for="(item) in leftShownItems"
                            :key="item.value"
                            class="column-list-item"
                        ><label
                            class="el-checkbox"
                            :class="getCSSClassNamesOfItem(item).labelElement"
                        ><span
                            class="el-checkbox__input"
                            :class="getCSSClassNamesOfItem(item).psuedoCheckboxSpan"
                        ><span class="el-checkbox__inner" ></span><input
                            v-model="item.isChecked"
                            type="checkbox"
                            aria-hidden="false"
                            class="el-checkbox__original"
                            :disabled="item.disabled"
                        ></span><span class="el-checkbox__label">{{ item.displayName }}</span></label></li>
                    </ol>
                </div>
            </div>

            <div class="center-column">
                <el-badge
                    :value="leftCheckedItems.length || null"
                    type="danger"
                    class="badge-of-transfering-button-1"
                >
                    <el-button
                        :type="_elementUITypeOfTransferingButtons[0]"
                        :icon="_iconOfTransferingButtons[0]"
                        :disabled="shouldDisableTransferingButton0"
                        @click="handleClickOfButtonOfTransferingToRightColumn"
                    >{{ _labelTextOfTransferingButtons[0] }}</el-button>
                </el-badge>

                <el-badge
                    :value="rightCheckedItems.length || null"
                    type="success"
                    class="badge-of-transfering-button-2"
                >
                    <el-button
                        :type="_elementUITypeOfTransferingButtons[1]"
                        :icon="_iconOfTransferingButtons[1]"
                        :disabled="shouldDisableTransferingButton1"
                        @click="handleClickOfButtonOfTransferingToLeftColumn"
                    >{{ _labelTextOfTransferingButtons[1] }}</el-button>
                </el-badge>
            </div>

            <div class="column-of-list right-column">
                <header class="heading-block">
                    <div class="column-title-bar">{{ _rightColumnSubTitleText }}</div>

                    <div class="column-filter">
                        <el-input
                            v-model="rightColumn.filteringKeyword"
                            clearable
                            :placeholder="columnFilterPlaceholderText('right')"
                            class="column-filter-input"
                            :class="{ 'emphasize-to-call-to-action': rightNotShowingAllItems, 'emphasize-without-animation': leftNotShowingAllItems }"
                            :disabled="rightColumn.allItems.length < 1"
                        ></el-input>
                        <i class="el-input__icon el-icon-search" ></i>
                    </div>

                    <div class="column-check-all">
                        <label
                            class="el-checkbox"
                            :class="getStateOfColumnCheckAllIncludingHidden('right').labelElementCSSClassNames"
                        ><span
                            class="el-checkbox__input"
                            :class="getStateOfColumnCheckAllIncludingHidden('right').psuedoCheckboxSpanCSSClassNames"
                        ><span class="el-checkbox__inner" ></span><input
                            v-model="rightColumn.allAreChecked"
                            type="checkbox"
                            aria-hidden="false"
                            class="el-checkbox__original"
                            :disabled="getStateOfColumnCheckAllIncludingHidden('right').disabled"
                            @change="handleColumnCheckAllIncludingHiddenChange('right')"
                        ></span><span class="el-checkbox__label">{{ getStateOfColumnCheckAllIncludingHidden('right').labelText }}</span></label>

                        <label
                            class="el-checkbox"
                            :class="getStateOfColumnCheckAllVisible('right').labelElementCSSClassNames"
                        ><span
                            class="el-checkbox__input"
                            :class="getStateOfColumnCheckAllVisible('right').psuedoCheckboxSpanCSSClassNames"
                        ><span class="el-checkbox__inner" ></span><input
                            v-model="rightColumn.allVisibleAreChecked"
                            type="checkbox"
                            aria-hidden="false"
                            class="el-checkbox__original"
                            :disabled="getStateOfColumnCheckAllVisible('right').disabled"
                            @change="handleColumnCheckAllVisibleChange('right')"
                        ></span><span class="el-checkbox__label">{{ getStateOfColumnCheckAllVisible('right').labelText }}</span></label>
                    </div>

                    <dl class="counts-summary">
                        <div class="entry all">
                            <dt>总数</dt>
                            <dd><span class="all"><span class="value">{{ rightColumn.allItems.length }}</span></span><span class="prefix">（已列示</span><span class="shown"><span class="value">{{ rightShownItems.length }}</span></span>）</dd>
                        </div>
                        <div class="entry checked">
                            <dt>已勾选</dt>
                            <dd><span class="all"><span class="value">{{ rightCheckedItems.length }}</span></span><span class="prefix">（已列示</span><span class="shown"><span class="value">{{ rightShownCheckedItems.length }}</span></span>）</dd>
                        </div>
                    </dl>
                </header>

                <div class="column-list-container">
                    <div
                        v-if="rightNotShowingAllItems"
                        class="column-tip"
                    ><p>条目太多，达<em>{{ rightMatchedItems.length }}</em>条。为确保浏览器不致僵死，暂不显示。</p>
                        <p><strong>请先输入筛选关键字，以减少须列示的条目。</strong></p></div>

                    <ol v-else class="column-list">
                        <li
                            v-for="item in rightShownItems"
                            :key="item.value"
                            class="column-list-item"
                        ><label
                            class="el-checkbox"
                            :class="getCSSClassNamesOfItem(item).labelElement"
                        ><span
                            class="el-checkbox__input"
                            :class="getCSSClassNamesOfItem(item).psuedoCheckboxSpan"
                        ><span class="el-checkbox__inner" ></span><input
                            v-model="item.isChecked"
                            type="checkbox"
                            aria-hidden="false"
                            class="el-checkbox__original"
                            :disabled="item.disabled"
                        ></span><span class="el-checkbox__label">{{ item.displayName }}</span></label></li>
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
const 单列至多允许显示的条目数之默认值 = 2000

export default {
    name: 'WlcDualColumnsExchangeItems',

    model: {
        prop: 'value',
        event: 'change',
    },

    props: {
        value: {
            type: Array,
            default: null,
        },

        allCandidatesOfBothColumns: {
            /**
             * Array<{ value: any; displayName: string; disabled: boolean; }>
             */
            type: Array,
            default: null,
        },

        maxCountOfItemsToDisplayInEitherColumn: {
            type: Number,
            default: NaN,
        },

        hasNotTitleBar: {
            type: Boolean,
            default: false,
        },

        hasFooterBar: {
            type: Boolean,
            default: false,
        },

        leftColumnSubTitleText: {
            type: String,
            default: '',
        },

        rightColumnSubTitleText: {
            type: String,
            default: '',
        },

        labelTextOfTransferingButtons: {
            type: Array,
            default: null,
        },

        elementUITypeOfTransferingButtons: {
            type: Array,
            default: null,
        },
    },

    data () {
        return {
            leftColumn: {
                filteringKeyword: '',
                allAreChecked: false,
                allVisibleAreChecked: false,
                allItems: [],
                checkedItemsCache: [],
            },

            rightColumn: {
                filteringKeyword: '',
                allAreChecked: false,
                allVisibleAreChecked: false,
                allItems: [],
                checkedItemsCache: [],
            },
        }
    },

    computed: {
        _maxCountOfItemsToDisplayInEitherColumn () {
            const v = +this.maxCountOfItemsToDisplayInEitherColumn
            if (v > 0) { return v }

            return 单列至多允许显示的条目数之默认值
        },

        _leftColumnSubTitleText () {
            return this.leftColumnSubTitleText || '未选择的条目'
        },

        _rightColumnSubTitleText () {
            return this.rightColumnSubTitleText || '已选择的条目'
        },

        _labelTextOfTransferingButtons () {
            const defaultValues = ['', '']
            return this.getValuePairOfTransferingButtons(this.labelTextOfTransferingButtons, defaultValues)
        },

        _elementUITypeOfTransferingButtons () {
            const defaultValues = ['primary', 'primary']
            return this.getValuePairOfTransferingButtons(this.elementUITypeOfTransferingButtons, defaultValues)
        },

        _iconOfTransferingButtons () {
            const [labelLeft, labelRight] = this._labelTextOfTransferingButtons
            return [
                labelLeft ? null : 'el-icon-arrow-right',
                labelRight ? null : 'el-icon-arrow-left',
            ]
        },

        leftEnabledItems () {
            return this.leftColumn.allItems.filter(uxItem => !uxItem.disabled)
        },

        rightEnabledItems () {
            return this.rightColumn.allItems.filter(uxItem => !uxItem.disabled)
        },

        leftMatchedItems () {
            const {
                allItems,
                filteringKeyword,
            } = this.leftColumn

            let matchedItems = allItems
            if (filteringKeyword) {
                const regexp = new RegExp(`${filteringKeyword}`, 'i')
                matchedItems = allItems.filter(i => regexp.test(i.displayName))
            }

            return matchedItems
        },

        rightMatchedItems () {
            const {
                allItems,
                filteringKeyword,
            } = this.rightColumn

            let matchedItems = allItems
            if (filteringKeyword) {
                const regexp = new RegExp(`${filteringKeyword}`, 'i')
                matchedItems = allItems.filter(i => regexp.test(i.displayName))
            }

            return matchedItems
        },

        leftShownItems () {
            const { _maxCountOfItemsToDisplayInEitherColumn } = this

            const itemsToShow = this.leftMatchedItems
            const tooManyItemsToShow = itemsToShow.length > _maxCountOfItemsToDisplayInEitherColumn
            if (tooManyItemsToShow) { return [] }

            return itemsToShow
        },

        rightShownItems () {
            const { _maxCountOfItemsToDisplayInEitherColumn } = this

            const itemsToShow = this.rightMatchedItems
            const tooManyItemsToShow = itemsToShow.length > _maxCountOfItemsToDisplayInEitherColumn
            if (tooManyItemsToShow) { return [] }

            return itemsToShow
        },

        leftNotShowingAllItems () {
            return this.leftShownItems.length === 0 && this.leftMatchedItems.length > 0
        },

        rightNotShowingAllItems () {
            return this.rightShownItems.length === 0 && this.rightMatchedItems.length > 0
        },

        leftCheckedItems () {
            const checkedItems = this.leftColumn.allItems.filter(i => !i.disabled && !!i.isChecked)
            this.leftColumn.checkedItemsCache = [...checkedItems] // eslint-disable-line
            return checkedItems
        },

        rightCheckedItems () {
            const checkedItems = this.rightColumn.allItems.filter(i => !i.disabled && !!i.isChecked)
            this.rightColumn.checkedItemsCache = [...checkedItems] // eslint-disable-line
            return checkedItems
        },

        leftShownCheckedItems () {
            return this.leftShownItems.filter(i => !i.disabled && !!i.isChecked)
        },

        rightShownCheckedItems () {
            return this.rightShownItems.filter(i => !i.disabled && !!i.isChecked)
        },

        shouldDisableTransferingButton0 () {
            return this.leftCheckedItems.length === 0
        },

        shouldDisableTransferingButton1 () {
            return this.rightCheckedItems.length === 0
        },
    },

    watch: {
        'value' () {
            this.generateItemsOfBothColumns()
        },

        'allCandidatesOfBothColumns' () {
            this.generateItemsOfBothColumns()
        },
    },

    mounted () {
        this.generateItemsOfBothColumns()
    },

    methods: {
        columnFilterPlaceholderText (side) {
            let candidates
            if (side === 'left') {
                candidates = this.leftColumn.allItems
            } else {
                candidates = this.rightColumn.allItems
            }

            if (candidates.length > 0) {
                if (side === 'left') {
                    return '筛选左侧条目'
                } else {
                    return '筛选右侧条目'
                }
            }

            return '无条目可筛选'
        },

        getValuePairOfTransferingButtons (providedValueArray, defaultValueArray) {
            if (!Array.isArray(defaultValueArray)) {
                throw new Error('<wlc-dual-columns-exchange-items />: getValuePairOfTransferingButtons() defaultValueArray 无效。')
            }

            if (!Array.isArray(providedValueArray)) { return defaultValueArray }

            const usedValueArray = [...defaultValueArray]
            const [valueOfLeft, valueOfRight] = providedValueArray

            if (valueOfLeft || valueOfLeft === 0) {
                usedValueArray[0] = valueOfLeft
            }

            if (valueOfRight || valueOfRight === 0) {
                usedValueArray[1] = valueOfRight
            }

            return usedValueArray
        },

        generateItemsOfBothColumns () {
            let rightsideValues = this.value
            if (!Array.isArray(rightsideValues)) { rightsideValues = [] }

            let candidates = this.allCandidatesOfBothColumns
            if (!Array.isArray(candidates)) { candidates = [] }

            const leftCheckedItemsCache = this.leftColumn.checkedItemsCache
            const rightCheckedItemsCache = this.rightColumn.checkedItemsCache

            const itemsDeduplicatedDict = {}
            const leftAllItems = []
            const rightAllItems = []

            candidates.forEach(c => {
                if (!c) { return }
                const { value, disabled } = c

                if (value in itemsDeduplicatedDict) {
                    const dupCount = itemsDeduplicatedDict[value]
                    itemsDeduplicatedDict[value]++
                    console.error(`<wlc-dual-columns-exchange-items>：发现 value （${value}）第${dupCount}个重复的条目。`)
                    return
                }

                itemsDeduplicatedDict[value] = 1

                const uxItem = {
                    ...c,
                    isChecked: false,
                }

                const valueShouldBeAtRightside = rightsideValues.some(v => v === value)

                // if (valueShouldBeAtRightside) {
                //   console.debug(`${value}`, valueShouldBeAtRightside)
                // }

                if (valueShouldBeAtRightside) {
                    if (!disabled) {
                        const cachedUXItem = rightCheckedItemsCache.find(item => item.value === value)
                        if (cachedUXItem) {
                            uxItem.isChecked = cachedUXItem.isChecked
                        }
                    }

                    rightAllItems.push(uxItem)
                } else {
                    if (!disabled) {
                        const cachedUXItem = leftCheckedItemsCache.find(item => item.value === value)
                        if (cachedUXItem) {
                            uxItem.isChecked = cachedUXItem.isChecked
                        }
                    }

                    leftAllItems.push(uxItem)
                }
            })

            this.leftColumn.allItems = leftAllItems
            this.rightColumn.allItems = rightAllItems

            // this.leftColumn.filteringKeyword = ''
            // this.rightColumn.filteringKeyword = ''

            const dupKeys = Object.keys(itemsDeduplicatedDict).filter(key => itemsDeduplicatedDict[key] > 1)
            if (dupKeys.length > 0) {
                const totalDupCountOfAll = dupKeys.reduce((total, key) => {
                    return total + itemsDeduplicatedDict[key] - 1
                }, 0)

                const errorMessage = `总计有 ${dupKeys.length} 种候选项出现重复项。重复项累计 ${totalDupCountOfAll} 条。`
                console.error(errorMessage)
                this.$message.error(errorMessage)
            }
        },

        getCSSClassNamesOfItem (item) {
            if (!item) { return null }
            const isChecked = !!item.isChecked
            const disabled = !!item.disabled
            return {
                labelElement: {
                    'is-checked': isChecked,
                    'is-disabled': disabled,
                },
                psuedoCheckboxSpan: {
                    'is-checked': isChecked,
                    'is-disabled': disabled,
                },
            }
        },

        getStateOfColumnCheckAllIncludingHidden (side) {
            let allEnabledItems
            if (side === 'left') {
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
                const noneAreChecked = allEnabledItems.every(uxItem => !uxItem.isChecked)

                if (noneAreChecked) {
                    labelText = '全部勾选（含未列示条目）'
                    labelElementCSSClassNames = ''
                    psuedoCheckboxSpanCSSClassNames = ''
                } else {
                    const allAreChecked = allEnabledItems.every(uxItem => uxItem.isChecked)

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
        },

        getStateOfColumnCheckAllVisible (side) {
            let allEnabledItems
            if (side === 'left') {
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
                const noneVisibleAreChecked = allEnabledItems.every(uxItem => !uxItem.isChecked)

                if (noneVisibleAreChecked) {
                    labelText = '全部勾选（仅列示条目）'
                    labelElementCSSClassNames = ''
                    psuedoCheckboxSpanCSSClassNames = ''
                } else {
                    const allVisibleAreChecked = allEnabledItems.every(uxItem => uxItem.isChecked)
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
        },

        handleColumnCheckAllIncludingHiddenChange (side) {
            let allEnabledItems
            if (side === 'left') {
                allEnabledItems = this.leftEnabledItems
            } else {
                allEnabledItems = this.rightEnabledItems
            }

            const allAreChecked = allEnabledItems.every(uxItem => uxItem.isChecked)
            const shouldCheckAll = !allAreChecked

            allEnabledItems.forEach(uxItem => { uxItem.isChecked = shouldCheckAll })
            if (side === 'left') {
                this.leftColumn.allAreChecked = allAreChecked
            } else {
                this.rightColumn.allAreChecked = allAreChecked
            }
        },

        handleColumnCheckAllVisibleChange (side) {
            let allShownItems
            if (side === 'left') {
                allShownItems = this.leftShownItems
            } else {
                allShownItems = this.rightShownItems
            }

            const allVisibleAreChecked = allShownItems.every(uxItem => uxItem.isChecked)
            const shouldCheckAll = !allVisibleAreChecked

            allShownItems.forEach(uxItem => {
                if (uxItem.disabled) { return }
                uxItem.isChecked = shouldCheckAll
            })

            if (side === 'left') {
                this.leftColumn.allVisibleAreChecked = allVisibleAreChecked
            } else {
                this.rightColumn.allVisibleAreChecked = allVisibleAreChecked
            }
        },

        handleClickOfButtonOfTransferingToRightColumn () {
            this.transferLeftCheckedItemsToRight()
        },

        handleClickOfButtonOfTransferingToLeftColumn () {
            this.transferRighttColumnCheckedItemsToLeft()
        },

        transferLeftCheckedItemsToRight () {
            const restOfLeft = []
            const toMoveToRight = []

            this.leftColumn.allItems.forEach(uxItem => {
                if (!uxItem.disabled && uxItem.isChecked) {
                    toMoveToRight.push(uxItem)
                    uxItem.isChecked = false
                } else {
                    restOfLeft.push(uxItem)
                }
            })

            this.leftColumn.allItems = restOfLeft
            this.rightColumn.allItems = [...toMoveToRight, ...this.rightColumn.allItems]

            this.emitChangeEvent()
        },

        transferRighttColumnCheckedItemsToLeft () {
            const restOfRight = []
            const toMoveToLeft = []

            this.rightColumn.allItems.forEach(uxItem => {
                if (!uxItem.disabled && uxItem.isChecked) {
                    toMoveToLeft.push(uxItem)
                    uxItem.isChecked = false
                } else {
                    restOfRight.push(uxItem)
                }
            })

            this.rightColumn.allItems = restOfRight
            this.leftColumn.allItems = [...toMoveToLeft, ...this.leftColumn.allItems]

            this.emitChangeEvent()
        },

        emitChangeEvent () {
            const payload = this.rightColumn.allItems.map(uxItem => uxItem.value)
            this.$emit('change', payload)
        },
    },
}
</script>

<style lang="stylus">
.wlc-dual-columns-exchange-items {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;

    // > .title-bar {
    //     flex: 0 0;
    //     min-height: 3.5rem;
    //     max-height: 3.5rem;
    // }

    > .footer-bar {
        flex: 0 0;
        min-height: 2.5rem;
        max-height: 2.5rem;
    }

    > .chief-part {
        flex: 1 1;
        overflow: hidden;
        display: flex;
        align-items: stretch;

        > .center-column {
            flex: 0 0;
            min-width: 3.5rem;
            max-width: 3.5rem;
            box-sizing: border-box;
        }

        > .column-of-list {
            flex: 1 1;
            width: 50%;
            box-sizing: border-box;
            overflow: hidden;
        }

        > .center-column {
            padding: 11rem 0.5rem 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            .el-badge {
                display: block;
                max-width: 100%;
                margin: 0.25rem auto;

                .el-badge__content {
                    transform: translateX(-50%);
                    left: 50%;
                    right: auto;
                    margin: -0.9rem auto;
                    width: auto;
                    min-width: 1.1rem;
                    height: 1.1rem;
                    line-height: 1rem;
                    padding: 0 0.25rem 0 0.3rem;
                    border-radius: 0.55rem;
                }
            }

            .badge-of-transfering-button-1 .el-badge__content {
                top: 0;
                bottom: auto;
            }

            .badge-of-transfering-button-2 .el-badge__content {
                top: auto;
                bottom: 0;
            }

            .el-button {
                box-sizing: border-box;
                display: block;
                max-width: 100%;

                i ~ span {
                    margin: -0.05rem;
                }
            }
        }
    }

    .column-of-list {
        display: flex;
        flex-direction: column;
        border-width: 1px;
        border-style: solid;

        .column-tip {
            padding: 0.25rem 0.75rem;
            margin: 0.75rem 0.25rem;
            line-height: 1.5;

            p {
                margin: 0.25rem 0;
            }

            em {
                font-style: normal;
                margin: 0 0.2rem;
            }

            strong {
                font-style: normal;
                font-weight: normal;
            }
        }

        .column-title-bar {
            padding: 0.5rem 0.75rem;
            text-align: center;
        }

        .column-filter {
            padding: 0.5rem 0.75rem;
            position: relative;
            margin-bottom: -0.25rem;
            display: flex;

            .el-icon-search {
                position: absolute;
                top: 0.5rem;
                left: 0.75rem;
                height: 32px;
                line-height: 32px;
                width: 1.8rem;
                text-align: center;
                pointer-events: none;
            }
        }

        .column-filter-input {
            flex: 1 1;

            input {
                padding-left: 1.6rem;
                border-radius: 10rem;
            }

            &.emphasize-to-call-to-action {
                margin: -2px;

                input {
                    height: 36px;
                    line-height: 36px;
                    border-width: 3px;

                    animation-iteration-count: infinite;
                    animation-duration: 2s;
                }
            }
        }

        .column-check-all {
            padding: 0rem 0.5rem 0.25rem 0.5rem;

            .el-checkbox {
                display: block;
                padding: 0.2rem 0.25rem 0.2rem 0.5rem;
                margin: 0;
                border-radius: 0.2rem;

                &.is-disabled {
                    cursor: not-allowed;
                }
            }

            .el-checkbox__input {
                margin-top: -0.1rem;

                &.is-disabled {
                    visibility: hidden;
                }
            }
        }

        .counts-summary {
            padding: 0.25rem 0.75rem 0.3rem 0.75rem;

            .entry {
                display: flex;
                max-width: 15rem;
            }

            dt, dd {
                flex: 1 1;
                display: block;
                padding: 0.25rem;
                margin: 0;
            }

            dt {
                min-width: 25%;
                max-width: 25%;
            }

            dd {
                min-width: 75%;
                max-width: 75%;
                display: flex;

                span {
                    flex: 1 1;
                    display: block;
                    text-align: right;

                    .value {
                        display: inline-block;
                        padding: 0.1rem 0.25rem;
                        margin: -0.1rem 0;
                        border-radius: 0.2rem;
                    }

                    // &.all {
                    //     min-width: 33%;
                    //     max-width: 33%;
                    // }

                    // &.shown {
                    //     min-width: 67%;
                    //     max-width: 67%;
                    // }

                    &.prefix {
                        flex: 0 0;
                        min-width: 3rem;
                        max-width: 3rem;
                        margin-left: 0.5rem;
                    }
                }
            }
        }

        .column-list-container {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            flex: 1 1;
            height: 100%;
            padding: 0.25rem;

            border-width: inherit;
            border-left-width: 0;
            border-right-width: 0;
            border-bottom-width: 0;
            border-style: inherit;
            border-color: inherit;
        }

        .column-list {
            list-style: none;
            padding: 0;
            flex: 1 1;
            height: 100%;
            overflow: auto;
            overflow-y: scroll;
            padding: 0;
            margin: 0;

            .column-list-item {
                padding: 0 0.25rem;

                > label {
                    display: block;
                    padding: 0.2rem 0.25rem 0.2rem 0.5rem;
                    overflow: hidden;

                    &.is-disabled {
                        cursor: not-allowed;

                        .el-checkbox__input {
                        visibility: hidden;
                        }
                    }
                }
            }
        }
    }

    /**
    * 所有与颜色相关的定义如下。
    */
    & {
        color: black;

        .heading-block {
            border-color: inherit;
        }

        .center-column {

            .el-badge__content {
                box-shadow: 0 0 0.25rem rgba(black, 0.319);
            }
        }

        .column-title-bar {
            color: white;
            background-color: rgba(black, 0.515);
        }

        .column-of-list {
            // border-color: black;

            .column-tip {
                color: #bbb;
                border-color: rgba(black, 0.19);
                background-color: rgba(black, 0.75);
                box-shadow: 0 0 0.25rem rgba(black, 0.515);

                em {
                    color: rgb(90, 236, 61);
                }

                strong {
                    color: #faa;

                    // animation-name: dual-list-transferer-tip-text-flashing;
                    // animation-iteration-count: infinite;
                    // animation-duration: 4.5s;

                    // @keyframes dual-list-transferer-tip-text-flashing {
                    //   0%, 100% { color: #faa; }
                    //   50% { color: #f88; }
                    // }
                }
            }

            .column-filter {
                border-color: inherit;

                .el-input__icon {
                    color: #999;
                }
            }

            .column-filter-input {
                border-color: inherit;

                input {
                    // border-color: rgba(black, 0.75);
                    border-color: inherit;

                    &[disabled] {
                        border-color: rgba(black, 0.1);
                        background-color: rgba(white, 0.319);
                    }
                }
            }

            .column-check-all {

                .el-checkbox {

                    &:hover {
                        background-color: rgba(black, 0.1);
                    }

                    &.is-disabled {
                        background-color: transparent;
                    }
                }

                .el-checkbox__label {
                    color: black;
                }
            }

            .counts-summary {
                background-color: rgba(black, 0.1);

                dt,
                dd {
                    color: #666;
                }

                .all,
                .shown {
                    color: black;
                    text-shadow: 0 0 1px rgba(black, 0.25);
                }

                .checked .all .value {
                    text-shadow: none;
                    color: white;
                    background-color: black;
                }

                .checked .shown .value {
                    text-shadow: none;
                    color: white;
                    background-color: rgba(black, 0.5);
                }
            }

            .column-list-container {
                box-shadow: inset 0 0 0.3rem rgba(black, 0.319);
            }

            &.left-column {
                border-color: #6e4f4f;

                .heading-block {
                    background-color: #ffdfdf;
                }

                .column-filter-input {

                    // input {
                    //     border-color: rgba(black, 0.75);

                    //     &[disabled] {
                    //         border-color: rgba(black, 0.1);
                    //         background-color: rgba(white, 0.319);
                    //     }
                    // }

                    &.emphasize-to-call-to-action {

                        input {
                            border-color: #f00;
                            animation-name: dual-list-transferer-input-box1-call-to-action;
                            @keyframes dual-list-transferer-input-box1-call-to-action {
                                0%, 100% { border-color: #f00; }
                                40%, 60% { border-color: #fbb; }
                            }
                        }
                    }
                }
            }

            &.right-column {
                border-color: #304735;

                .heading-block {
                    background-color: #ddfce5;
                }

                .column-filter-input {

                    // input {
                    //     border-color: rgba(black, 0.75);

                    //     &[disabled] {
                    //         border-color: rgba(black, 0.1);
                    //         background-color: rgba(white, 0.319);
                    //     }
                    // }

                    &.emphasize-to-call-to-action {

                        input {
                            border-color: #090;
                            animation-name: dual-list-transferer-input-box2-call-to-action;
                            @keyframes dual-list-transferer-input-box2-call-to-action {
                                0%, 100% { border-color: #aea; }
                                40%, 60% { border-color: #090; }
                            }
                        }

                        &.emphasize-without-animation {

                            input {
                                animation-name: none;
                            }
                        }
                    }
                }
            }

            .column-list {

                .column-list-item > label {

                    &:hover {
                        background-color: #dbeafa;
                    }

                    &.is-checked {
                        background-color: #409EFF;

                        .el-checkbox__label {
                        color: white;
                        }
                    }

                    &.is-disabled {
                        color: #444;
                        background-color: #e4e4e4;
                    }
                }
            }
        }
    }
}
</style>
