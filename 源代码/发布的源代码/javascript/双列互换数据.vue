<template>
    <div class="wlc-dual-columns-exchange-items">
        <header v-if="!hasNotTitleBar" class="title-bar">
            <slot name="title-bar" ></slot>
        </header>
        
        <div class="chief-part">
            <div class="column-of-list left-column">
                <header class="heading-block">
                    <div class="column-title-bar">{{ decided_leftColumnSubTitleText }}</div>
                    
                    <div class="column-filter">
                        <input
                            v-model="leftColumn.filteringKeyword"
                            :placeholder="columnFilterPlaceholderText('左列')"
                            class="column-filter-input"
                            :class="{ 'emphasize-to-call-to-action': leftNotShowingAllItems }"
                            :disabled="leftColumn.allItems.length < 1"
                        >
                        <i class="el-input__icon el-icon-search" ></i>
                    </div>
                    
                    <div class="column-check-all">
                        <label
                            class="el-checkbox column-check-all--including-hidden"
                            :class="getStateOfColumnCheckAllIncludingHidden('左列').labelElementCSSClassNames"
                            ><span
                                class="el-checkbox__input"
                                :class="getStateOfColumnCheckAllIncludingHidden('左列').psuedoCheckboxSpanCSSClassNames"
                                ><span class="el-checkbox__inner" ></span><input
                                    v-model="leftColumn.allAreChecked"
                                    type="checkbox"
                                    aria-hidden="false"
                                    class="el-checkbox__original"
                                    :disabled="getStateOfColumnCheckAllIncludingHidden('左列').disabled"
                                    @change="handleColumnCheckAllIncludingHiddenChange('左列')"
                                ></span><span class="el-checkbox__label">{{ getStateOfColumnCheckAllIncludingHidden('左列').labelText }}</span></label>
                        
                        <label
                            class="el-checkbox column-check-all--visible-only"
                            :class="getStateOfColumnCheckAllVisible('左列').labelElementCSSClassNames"
                            ><span
                                class="el-checkbox__input"
                                :class="getStateOfColumnCheckAllVisible('左列').psuedoCheckboxSpanCSSClassNames"
                                ><span class="el-checkbox__inner" ></span><input
                                    v-model="leftColumn.allVisibleAreChecked"
                                    type="checkbox"
                                    aria-hidden="false"
                                    class="el-checkbox__original"
                                    :disabled="getStateOfColumnCheckAllVisible('左列').disabled"
                                    @change="handleColumnCheckAllVisibleChange('左列')"
                                ></span><span class="el-checkbox__label">{{ getStateOfColumnCheckAllVisible('左列').labelText }}</span></label>
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
                                    style="display: none"
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
                            v-model="rightColumn.filteringKeyword"
                            :placeholder="columnFilterPlaceholderText('右列')"
                            class="column-filter-input"
                            :class="{ 'emphasize-to-call-to-action': rightNotShowingAllItems, 'emphasize-without-animation': leftNotShowingAllItems }"
                            :disabled="rightColumn.allItems.length < 1"
                        >
                        <i class="el-input__icon el-icon-search" ></i>
                    </div>
                    
                    <div class="column-check-all">
                        <label
                            class="el-checkbox"
                            :class="getStateOfColumnCheckAllIncludingHidden('右列').labelElementCSSClassNames"
                            ><span
                                class="el-checkbox__input"
                                :class="getStateOfColumnCheckAllIncludingHidden('右列').psuedoCheckboxSpanCSSClassNames"
                                ><span class="el-checkbox__inner" ></span><input
                                    v-model="rightColumn.allAreChecked"
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
                                    v-model="rightColumn.allVisibleAreChecked"
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
                                    style="display: none"
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





<script source-language-was="ts">
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator';
const 单列至多允许显示的条目数之默认值 = 2000;
let wlc双列互换数据 = class wlc双列互换数据 extends Vue {
    constructor() {
        super(...arguments);
        this.leftColumn = {
            filteringKeyword: '',
            allAreChecked: false,
            allVisibleAreChecked: false,
            allItems: [],
            checkedItemsCache: [],
        };
        this.rightColumn = {
            filteringKeyword: '',
            allAreChecked: false,
            allVisibleAreChecked: false,
            allItems: [],
            checkedItemsCache: [],
        };
    }
    get decided_maxCountOfItemsToDisplayInEitherColumn() {
        const _v = this.maxCountOfItemsToDisplayInEitherColumn;
        let v;
        if (typeof _v !== 'number') {
            v = NaN;
        }
        else if (typeof _v === 'string') {
            v = +_v;
        }
        else {
            v = _v;
        }
        if (v > 0) {
            return v;
        }
        return 单列至多允许显示的条目数之默认值;
    }
    get decided_leftColumnSubTitleText() {
        return this.leftColumnSubTitleText || '未选择的条目';
    }
    get decided_rightColumnSubTitleText() {
        return this.rightColumnSubTitleText || '已选择的条目';
    }
    get decided_labelTextOfTransferingButtons() {
        const defaultValues = ['', ''];
        return this.getValuePairOfTransferingButtons(this.labelTextOfTransferingButtons, defaultValues);
    }
    get decided_elementUITypeOfTransferingButtons() {
        const defaultValues = ['primary', 'primary'];
        return this.getValuePairOfTransferingButtons(this.elementUITypeOfTransferingButtons, defaultValues);
    }
    get decided_iconOfTransferingButtons() {
        const [labelLeft, labelRight] = this.decided_labelTextOfTransferingButtons;
        return [
            labelLeft ? null : 'el-icon-arrow-right',
            labelRight ? null : 'el-icon-arrow-left',
        ];
    }
    get leftEnabledItems() {
        return this.leftColumn.allItems.filter(uxItem => {
            });
        // return this.leftColumn.allItems.filter(uxItem => !uxItem.disabled)
    }
    get rightEnabledItems() {
        return this.rightColumn.allItems.filter(uxItem => !uxItem.disabled);
    }
    get leftMatchedItems() {
        const { allItems, filteringKeyword, } = this.leftColumn;
        let matchedItems = allItems;
        if (filteringKeyword) {
            const regexp = new RegExp(`${filteringKeyword}`, 'i');
            matchedItems = allItems.filter(i => regexp.test(i.displayName));
        }
        return matchedItems;
    }
    get rightMatchedItems() {
        const { allItems, filteringKeyword, } = this.rightColumn;
        let matchedItems = allItems;
        if (filteringKeyword) {
            const regexp = new RegExp(`${filteringKeyword}`, 'i');
            matchedItems = allItems.filter(i => regexp.test(i.displayName));
        }
        return matchedItems;
    }
    get leftShownItems() {
        const { decided_maxCountOfItemsToDisplayInEitherColumn } = this;
        const itemsToShow = this.leftMatchedItems;
        const tooManyItemsToShow = itemsToShow.length > decided_maxCountOfItemsToDisplayInEitherColumn;
        if (tooManyItemsToShow) {
            return [];
        }
        return itemsToShow;
    }
    get rightShownItems() {
        const { decided_maxCountOfItemsToDisplayInEitherColumn } = this;
        const itemsToShow = this.rightMatchedItems;
        const tooManyItemsToShow = itemsToShow.length > decided_maxCountOfItemsToDisplayInEitherColumn;
        if (tooManyItemsToShow) {
            return [];
        }
        return itemsToShow;
    }
    get leftNotShowingAllItems() {
        return this.leftShownItems.length === 0 && this.leftMatchedItems.length > 0;
    }
    get rightNotShowingAllItems() {
        return this.rightShownItems.length === 0 && this.rightMatchedItems.length > 0;
    }
    get leftCheckedItems() {
        const checkedItems = this.leftColumn.allItems.filter(i => !i.disabled && !!i.isChecked);
        this.leftColumn.checkedItemsCache = [...checkedItems]; // eslint-disable-line
        return checkedItems;
    }
    get rightCheckedItems() {
        const checkedItems = this.rightColumn.allItems.filter(i => !i.disabled && !!i.isChecked);
        this.rightColumn.checkedItemsCache = [...checkedItems]; // eslint-disable-line
        return checkedItems;
    }
    get leftShownCheckedItems() {
        return this.leftShownItems.filter(i => !i.disabled && !!i.isChecked);
    }
    get rightShownCheckedItems() {
        return this.rightShownItems.filter(i => !i.disabled && !!i.isChecked);
    }
    get shouldDisableTransferingButton0() {
        return this.leftCheckedItems.length === 0;
    }
    get shouldDisableTransferingButton1() {
        return this.rightCheckedItems.length === 0;
    }
    onValueChanged() {
        this.generateItemsOfBothColumns();
    }
    onCandidatesChanged() {
        this.generateItemsOfBothColumns();
    }
    mounted() {
        this.generateItemsOfBothColumns();
    }
    columnFilterPlaceholderText(side) {
        let candidates;
        if (side === '左列') {
            candidates = this.leftColumn.allItems;
        }
        else {
            candidates = this.rightColumn.allItems;
        }
        if (candidates.length > 0) {
            if (side === '左列') {
                return '筛选左侧条目';
            }
            else {
                return '筛选右侧条目';
            }
        }
        return '无条目可筛选';
    }
    getValuePairOfTransferingButtons(providedValueArray, defaultValueArray) {
        if (!Array.isArray(defaultValueArray)) {
            throw new Error('<wlc-dual-columns-exchange-items />: getValuePairOfTransferingButtons() defaultValueArray 无效。');
        }
        if (!Array.isArray(providedValueArray)) {
            return defaultValueArray;
        }
        const usedValueArray = [...defaultValueArray];
        const [valueOfLeft, valueOfRight] = providedValueArray;
        if (typeof valueOfLeft === 'string') {
            usedValueArray[0] = valueOfLeft; // .trim()
        }
        if (typeof valueOfRight === 'string') {
            usedValueArray[1] = valueOfRight; // .trim()
        }
        return usedValueArray;
    }
    generateItemsOfBothColumns() {
        let rightsideValues;
        let candidates;
        if (Array.isArray(this.value)) {
            rightsideValues = this.value;
        }
        else {
            rightsideValues = [];
        }
        if (Array.isArray(this.allCandidatesOfBothColumns)) {
            candidates = this.allCandidatesOfBothColumns;
        }
        else {
            candidates = [];
        }
        const leftCheckedItemsCache = this.leftColumn.checkedItemsCache;
        const rightCheckedItemsCache = this.rightColumn.checkedItemsCache;
        const itemsDeduplicatedDict = {};
        const leftAllItems = [];
        const rightAllItems = [];
        candidates.forEach(c => {
            if (!c) {
                return;
            }
            const { value, disabled } = c;
            if (value in itemsDeduplicatedDict) {
                const dupCount = itemsDeduplicatedDict[value];
                itemsDeduplicatedDict[value]++;
                console.error(`<wlc-dual-columns-exchange-items>：发现 value （${value}）第${dupCount}个重复的条目。`);
                return;
            }
            itemsDeduplicatedDict[value] = 1;
            const uxItem = Object.assign(Object.assign({}, c), { isChecked: false });
            const valueShouldBeAtRightside = rightsideValues.some(v => v === value);
            // if (valueShouldBeAtRightside) {
            //   console.debug(`${value}`, valueShouldBeAtRightside)
            // }
            if (valueShouldBeAtRightside) {
                if (!disabled) {
                    const cachedUXItem = rightCheckedItemsCache.find(item => item.value === value);
                    if (cachedUXItem) {
                        uxItem.isChecked = cachedUXItem.isChecked;
                    }
                }
                rightAllItems.push(uxItem);
            }
            else {
                if (!disabled) {
                    const cachedUXItem = leftCheckedItemsCache.find(item => item.value === value);
                    if (cachedUXItem) {
                        uxItem.isChecked = cachedUXItem.isChecked;
                    }
                }
                leftAllItems.push(uxItem);
            }
        });
        this.leftColumn.allItems = leftAllItems;
        this.rightColumn.allItems = rightAllItems;
        // this.leftColumn.filteringKeyword = ''
        // this.rightColumn.filteringKeyword = ''
        const dupKeys = Object.keys(itemsDeduplicatedDict).filter(key => itemsDeduplicatedDict[key] > 1);
        if (dupKeys.length > 0) {
            const totalDupCountOfAll = dupKeys.reduce((total, key) => {
                return total + itemsDeduplicatedDict[key] - 1;
            }, 0);
            const errorMessage = `总计有 ${dupKeys.length} 种候选项出现重复项。重复项累计 ${totalDupCountOfAll} 条。`;
            console.error(errorMessage);
            // this.$message.error(errorMessage)
        }
    }
    getCSSClassNamesOfItem(item) {
        if (!item) {
            return null;
        }
        const isChecked = !!item.isChecked;
        const disabled = !!item.disabled;
        return {
            labelElement: {
                'is-checked': isChecked,
                'is-disabled': disabled,
            },
            psuedoCheckboxSpan: {
                'is-checked': isChecked,
                'is-disabled': disabled,
            },
        };
    }
    getStateOfColumnCheckAllIncludingHidden(side) {
        let allEnabledItems;
        if (side === '左列') {
            allEnabledItems = this.leftEnabledItems;
        }
        else {
            allEnabledItems = this.rightEnabledItems;
        }
        let labelElementCSSClassNames = null;
        let psuedoCheckboxSpanCSSClassNames = null;
        let labelText = '无可勾选项';
        const disabled = allEnabledItems.length === 0;
        if (disabled) {
            labelElementCSSClassNames = 'is-disabled';
            psuedoCheckboxSpanCSSClassNames = 'is-disabled';
        }
        else {
            const noneAreChecked = allEnabledItems.every(uxItem => !uxItem.isChecked);
            if (noneAreChecked) {
                labelText = '全部勾选（含未列示条目）';
                labelElementCSSClassNames = '';
                psuedoCheckboxSpanCSSClassNames = '';
            }
            else {
                const allAreChecked = allEnabledItems.every(uxItem => uxItem.isChecked);
                if (allAreChecked) {
                    labelText = '全部去掉勾选（含未列示条目）';
                    labelElementCSSClassNames = 'is-checked';
                    psuedoCheckboxSpanCSSClassNames = 'is-checked';
                }
                else {
                    labelText = '全部勾选（含未列示条目）';
                    labelElementCSSClassNames = 'is-indeterminate';
                    psuedoCheckboxSpanCSSClassNames = 'is-indeterminate';
                }
            }
        }
        return {
            labelElementCSSClassNames,
            psuedoCheckboxSpanCSSClassNames,
            disabled,
            labelText,
        };
    }
    getStateOfColumnCheckAllVisible(side) {
        let allEnabledItems;
        if (side === '左列') {
            allEnabledItems = this.leftShownItems;
        }
        else {
            allEnabledItems = this.rightShownItems;
        }
        let labelElementCSSClassNames = null;
        let psuedoCheckboxSpanCSSClassNames = null;
        let labelText = '无可勾选项';
        const disabled = allEnabledItems.length === 0;
        if (disabled) {
            labelElementCSSClassNames = 'is-disabled';
            psuedoCheckboxSpanCSSClassNames = 'is-disabled';
        }
        else {
            const noneVisibleAreChecked = allEnabledItems.every(uxItem => !uxItem.isChecked);
            if (noneVisibleAreChecked) {
                labelText = '全部勾选（仅列示条目）';
                labelElementCSSClassNames = '';
                psuedoCheckboxSpanCSSClassNames = '';
            }
            else {
                const allVisibleAreChecked = allEnabledItems.every(uxItem => uxItem.isChecked);
                if (allVisibleAreChecked) {
                    labelText = '全部去掉勾选（仅列示条目）';
                    labelElementCSSClassNames = 'is-checked';
                    psuedoCheckboxSpanCSSClassNames = 'is-checked';
                }
                else {
                    labelText = '全部勾选（仅列示条目）';
                    labelElementCSSClassNames = 'is-indeterminate';
                    psuedoCheckboxSpanCSSClassNames = 'is-indeterminate';
                }
            }
        }
        return {
            labelElementCSSClassNames,
            psuedoCheckboxSpanCSSClassNames,
            disabled,
            labelText,
        };
    }
    handleColumnCheckAllIncludingHiddenChange(side) {
        let allEnabledItems;
        if (side === '左列') {
            allEnabledItems = this.leftEnabledItems;
        }
        else {
            allEnabledItems = this.rightEnabledItems;
        }
        const allAreChecked = allEnabledItems.every(uxItem => uxItem.isChecked);
        const shouldCheckAll = !allAreChecked;
        allEnabledItems.forEach(uxItem => { uxItem.isChecked = shouldCheckAll; });
        if (side === '左列') {
            this.leftColumn.allAreChecked = allAreChecked;
        }
        else {
            this.rightColumn.allAreChecked = allAreChecked;
        }
    }
    handleColumnCheckAllVisibleChange(side) {
        let allShownItems;
        if (side === '左列') {
            allShownItems = this.leftShownItems;
        }
        else {
            allShownItems = this.rightShownItems;
        }
        const allVisibleAreChecked = allShownItems.every(uxItem => uxItem.isChecked);
        const shouldCheckAll = !allVisibleAreChecked;
        allShownItems.forEach(uxItem => {
            if (uxItem.disabled) {
                return;
            }
            uxItem.isChecked = shouldCheckAll;
        });
        if (side === '左列') {
            this.leftColumn.allVisibleAreChecked = allVisibleAreChecked;
        }
        else {
            this.rightColumn.allVisibleAreChecked = allVisibleAreChecked;
        }
    }
    handleClickOfButtonOfTransferingToRightColumn() {
        this.transferLeftCheckedItemsToRight();
    }
    handleClickOfButtonOfTransferingToLeftColumn() {
        this.transferRighttColumnCheckedItemsToLeft();
    }
    transferLeftCheckedItemsToRight() {
        const restOfLeft = [];
        const toMoveToRight = [];
        this.leftColumn.allItems.forEach(uxItem => {
            if (!uxItem.disabled && uxItem.isChecked) {
                toMoveToRight.push(uxItem);
                uxItem.isChecked = false;
            }
            else {
                restOfLeft.push(uxItem);
            }
        });
        this.leftColumn.allItems = restOfLeft;
        this.rightColumn.allItems = [...toMoveToRight, ...this.rightColumn.allItems];
        this.emitChangeEvent();
    }
    transferRighttColumnCheckedItemsToLeft() {
        const restOfRight = [];
        const toMoveToLeft = [];
        this.rightColumn.allItems.forEach(uxItem => {
            if (!uxItem.disabled && uxItem.isChecked) {
                toMoveToLeft.push(uxItem);
                uxItem.isChecked = false;
            }
            else {
                restOfRight.push(uxItem);
            }
        });
        this.rightColumn.allItems = restOfRight;
        this.leftColumn.allItems = [...toMoveToLeft, ...this.leftColumn.allItems];
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        const payload = this.rightColumn.allItems.map(uxItem => uxItem.value);
        this.$emit('change', payload);
    }
};
__decorate([
    Model('change', { type: Array })
], wlc双列互换数据.prototype, "value", void 0);
__decorate([
    Prop()
], wlc双列互换数据.prototype, "allCandidatesOfBothColumns", void 0);
__decorate([
    Prop()
], wlc双列互换数据.prototype, "maxCountOfItemsToDisplayInEitherColumn", void 0);
__decorate([
    Prop()
], wlc双列互换数据.prototype, "hasNotTitleBar", void 0);
__decorate([
    Prop()
], wlc双列互换数据.prototype, "hasFooterBar", void 0);
__decorate([
    Prop()
], wlc双列互换数据.prototype, "leftColumnSubTitleText", void 0);
__decorate([
    Prop()
], wlc双列互换数据.prototype, "rightColumnSubTitleText", void 0);
__decorate([
    Prop()
], wlc双列互换数据.prototype, "labelTextOfTransferingButtons", void 0);
__decorate([
    Prop()
], wlc双列互换数据.prototype, "elementUITypeOfTransferingButtons", void 0);
__decorate([
    Watch('value')
], wlc双列互换数据.prototype, "onValueChanged", null);
__decorate([
    Watch('allCandidatesOfBothColumns')
], wlc双列互换数据.prototype, "onCandidatesChanged", null);
wlc双列互换数据 = __decorate([
    Component({})
], wlc双列互换数据);
export default wlc双列互换数据;
</script>





<style source-language-was="stylus">
.wlc-dual-columns-exchange-items {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    /**
    * 所有与颜色相关的定义如下。
    */
}
.wlc-dual-columns-exchange-items > .footer-bar {
    flex: 0 0;
    min-height: 2.5rem;
    max-height: 2.5rem;
}
.wlc-dual-columns-exchange-items > .chief-part {
    flex: 1 1;
    overflow: hidden;
    display: flex;
    align-items: stretch;
}
.wlc-dual-columns-exchange-items > .chief-part > .center-column {
    flex: 0 0;
    min-width: 3.5rem;
    max-width: 3.5rem;
    box-sizing: border-box;
}
.wlc-dual-columns-exchange-items > .chief-part > .column-of-list {
    flex: 1 1;
    width: 50%;
    box-sizing: border-box;
    overflow: hidden;
}
.wlc-dual-columns-exchange-items > .chief-part > .center-column {
    padding: 11rem 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.wlc-dual-columns-exchange-items > .chief-part > .center-column .el-badge {
    display: block;
    max-width: 100%;
    margin: 0.25rem auto;
}
.wlc-dual-columns-exchange-items > .chief-part > .center-column .el-badge .el-badge__content {
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
.wlc-dual-columns-exchange-items > .chief-part > .center-column .badge-of-transfering-button-1 .el-badge__content {
    top: 0;
    bottom: auto;
}
.wlc-dual-columns-exchange-items > .chief-part > .center-column .badge-of-transfering-button-2 .el-badge__content {
    top: auto;
    bottom: 0;
}
.wlc-dual-columns-exchange-items > .chief-part > .center-column .el-button {
    box-sizing: border-box;
    display: block;
    max-width: 100%;
}
.wlc-dual-columns-exchange-items > .chief-part > .center-column .el-button i ~ span {
    margin: -0.05rem;
}
.wlc-dual-columns-exchange-items .column-of-list {
    display: flex;
    flex-direction: column;
    border-width: 1px;
    border-style: solid;
}
.wlc-dual-columns-exchange-items .column-of-list .column-tip {
    padding: 0.25rem 0.75rem;
    margin: 0.75rem 0.25rem;
    line-height: 1.5;
}
.wlc-dual-columns-exchange-items .column-of-list .column-tip p {
    margin: 0.25rem 0;
}
.wlc-dual-columns-exchange-items .column-of-list .column-tip em {
    font-style: normal;
    margin: 0 0.2rem;
}
.wlc-dual-columns-exchange-items .column-of-list .column-tip strong {
    font-style: normal;
    font-weight: normal;
}
.wlc-dual-columns-exchange-items .column-of-list .column-title-bar {
    padding: 0.5rem 0.75rem;
    text-align: center;
}
.wlc-dual-columns-exchange-items .column-of-list .column-filter {
    padding: 0.5rem 0.75rem;
    position: relative;
    margin-bottom: -0.25rem;
    display: flex;
}
.wlc-dual-columns-exchange-items .column-of-list .column-filter .el-icon-search {
    position: absolute;
    top: 0.5rem;
    left: 0.75rem;
    height: 32px;
    line-height: 32px;
    width: 1.8rem;
    text-align: center;
    pointer-events: none;
}
.wlc-dual-columns-exchange-items .column-of-list .column-filter-input {
    flex: 1 1;
}
.wlc-dual-columns-exchange-items .column-of-list .column-filter-input input {
    padding-left: 1.6rem;
    border-radius: 10rem;
}
.wlc-dual-columns-exchange-items .column-of-list .column-filter-input.emphasize-to-call-to-action {
    margin: -2px;
}
.wlc-dual-columns-exchange-items .column-of-list .column-filter-input.emphasize-to-call-to-action input {
    height: 36px;
    line-height: 36px;
    border-width: 3px;
    animation-iteration-count: infinite;
    animation-duration: 2s;
}
.wlc-dual-columns-exchange-items .column-of-list .column-check-all {
    padding: 0rem 0.5rem 0.25rem 0.5rem;
}
.wlc-dual-columns-exchange-items .column-of-list .column-check-all .el-checkbox {
    display: block;
    padding: 0.2rem 0.25rem 0.2rem 0.5rem;
    margin: 0;
    border-radius: 0.2rem;
}
.wlc-dual-columns-exchange-items .column-of-list .column-check-all .el-checkbox.is-disabled {
    cursor: not-allowed;
}
.wlc-dual-columns-exchange-items .column-of-list .column-check-all .el-checkbox__input {
    margin-top: -0.1rem;
}
.wlc-dual-columns-exchange-items .column-of-list .column-check-all .el-checkbox__input.is-disabled {
    visibility: hidden;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary {
    padding: 0.25rem 0.75rem 0.3rem 0.75rem;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary .entry {
    display: flex;
    max-width: 15rem;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dt,
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd {
    flex: 1 1;
    display: block;
    padding: 0.25rem;
    margin: 0;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dt {
    min-width: 25%;
    max-width: 25%;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd {
    min-width: 75%;
    max-width: 75%;
    display: flex;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd span {
    flex: 1 1;
    display: block;
    text-align: right;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd span .value {
    display: inline-block;
    padding: 0.1rem 0.25rem;
    margin: -0.1rem 0;
    border-radius: 0.2rem;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd span.prefix {
    flex: 0 0;
    min-width: 3rem;
    max-width: 3rem;
    margin-left: 0.5rem;
}
.wlc-dual-columns-exchange-items .column-of-list .column-list-container {
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
.wlc-dual-columns-exchange-items .column-of-list .column-list {
    list-style: none;
    padding: 0;
    flex: 1 1;
    height: 100%;
    overflow: auto;
    overflow-y: scroll;
    padding: 0;
    margin: 0;
}
.wlc-dual-columns-exchange-items .column-of-list .column-list .column-list-item {
    padding: 0 0.25rem;
}
.wlc-dual-columns-exchange-items .column-of-list .column-list .column-list-item > label {
    display: block;
    padding: 0.2rem 0.25rem 0.2rem 0.5rem;
    overflow: hidden;
}
.wlc-dual-columns-exchange-items .column-of-list .column-list .column-list-item > label.is-disabled {
    cursor: not-allowed;
}
.wlc-dual-columns-exchange-items .column-of-list .column-list .column-list-item > label.is-disabled .el-checkbox__input {
    visibility: hidden;
}
.wlc-dual-columns-exchange-items {
    color: #000;
}
.wlc-dual-columns-exchange-items .heading-block {
    border-color: inherit;
}
.wlc-dual-columns-exchange-items .center-column .el-badge__content {
    box-shadow: 0 0 0.25rem rgba(0,0,0,0.319);
}
.wlc-dual-columns-exchange-items .column-title-bar {
    color: #fff;
    background-color: rgba(0,0,0,0.515);
}
.wlc-dual-columns-exchange-items .column-of-list .column-tip {
    color: #bbb;
    border-color: rgba(0,0,0,0.19);
    background-color: rgba(0,0,0,0.75);
    box-shadow: 0 0 0.25rem rgba(0,0,0,0.515);
}
.wlc-dual-columns-exchange-items .column-of-list .column-tip em {
    color: #5aec3d;
}
.wlc-dual-columns-exchange-items .column-of-list .column-tip strong {
    color: #faa;
}
.wlc-dual-columns-exchange-items .column-of-list .column-filter {
    border-color: inherit;
}
.wlc-dual-columns-exchange-items .column-of-list .column-filter .el-input__icon {
    color: #999;
}
.wlc-dual-columns-exchange-items .column-of-list .column-filter-input {
    border-color: inherit;
}
.wlc-dual-columns-exchange-items .column-of-list .column-filter-input input {
    border-color: inherit;
}
.wlc-dual-columns-exchange-items .column-of-list .column-filter-input input[disabled] {
    border-color: rgba(0,0,0,0.1);
    background-color: rgba(255,255,255,0.319);
}
.wlc-dual-columns-exchange-items .column-of-list .column-check-all .el-checkbox:hover {
    background-color: rgba(0,0,0,0.1);
}
.wlc-dual-columns-exchange-items .column-of-list .column-check-all .el-checkbox.is-disabled {
    background-color: transparent;
}
.wlc-dual-columns-exchange-items .column-of-list .column-check-all .el-checkbox__label {
    color: #000;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary {
    background-color: rgba(0,0,0,0.1);
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dt,
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd {
    color: #666;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary .all,
.wlc-dual-columns-exchange-items .column-of-list .counts-summary .shown {
    color: #000;
    text-shadow: 0 0 1px rgba(0,0,0,0.25);
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary .checked .all .value {
    text-shadow: none;
    color: #fff;
    background-color: #000;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary .checked .shown .value {
    text-shadow: none;
    color: #fff;
    background-color: rgba(0,0,0,0.5);
}
.wlc-dual-columns-exchange-items .column-of-list .column-list-container {
    box-shadow: inset 0 0 0.3rem rgba(0,0,0,0.319);
}
.wlc-dual-columns-exchange-items .column-of-list.left-column {
    border-color: #6e4f4f;
}
.wlc-dual-columns-exchange-items .column-of-list.left-column .heading-block {
    background-color: #ffdfdf;
}
.wlc-dual-columns-exchange-items .column-of-list.left-column .column-filter-input.emphasize-to-call-to-action input {
    border-color: #f00;
    animation-name: dual-list-transferer-input-box1-call-to-action;
}
@-moz-keyframes dual-list-transferer-input-box1-call-to-action {
    0%, 100% {
        border-color: #f00;
    }
    40%, 60% {
        border-color: #fbb;
    }
}
@-webkit-keyframes dual-list-transferer-input-box1-call-to-action {
    0%, 100% {
        border-color: #f00;
    }
    40%, 60% {
        border-color: #fbb;
    }
}
@-o-keyframes dual-list-transferer-input-box1-call-to-action {
    0%, 100% {
        border-color: #f00;
    }
    40%, 60% {
        border-color: #fbb;
    }
}
@keyframes dual-list-transferer-input-box1-call-to-action {
    0%, 100% {
        border-color: #f00;
    }
    40%, 60% {
        border-color: #fbb;
    }
}
.wlc-dual-columns-exchange-items .column-of-list.right-column {
    border-color: #304735;
}
.wlc-dual-columns-exchange-items .column-of-list.right-column .heading-block {
    background-color: #ddfce5;
}
.wlc-dual-columns-exchange-items .column-of-list.right-column .column-filter-input.emphasize-to-call-to-action input {
    border-color: #090;
    animation-name: dual-list-transferer-input-box2-call-to-action;
}
@-moz-keyframes dual-list-transferer-input-box2-call-to-action {
    0%, 100% {
        border-color: #aea;
    }
    40%, 60% {
        border-color: #090;
    }
}
@-webkit-keyframes dual-list-transferer-input-box2-call-to-action {
    0%, 100% {
        border-color: #aea;
    }
    40%, 60% {
        border-color: #090;
    }
}
@-o-keyframes dual-list-transferer-input-box2-call-to-action {
    0%, 100% {
        border-color: #aea;
    }
    40%, 60% {
        border-color: #090;
    }
}
@keyframes dual-list-transferer-input-box2-call-to-action {
    0%, 100% {
        border-color: #aea;
    }
    40%, 60% {
        border-color: #090;
    }
}
.wlc-dual-columns-exchange-items .column-of-list.right-column .column-filter-input.emphasize-to-call-to-action.emphasize-without-animation input {
    animation-name: none;
}
.wlc-dual-columns-exchange-items .column-of-list .column-list .column-list-item > label:hover {
    background-color: #eee;
}
.wlc-dual-columns-exchange-items .column-of-list .column-list .column-list-item > label.is-checked {
    background-color: #777;
}
.wlc-dual-columns-exchange-items .column-of-list .column-list .column-list-item > label.is-checked .el-checkbox__label {
    color: #fff;
}
.wlc-dual-columns-exchange-items .column-of-list .column-list .column-list-item > label.is-disabled {
    color: #444;
    background-color: #e4e4e4;
}
</style>
