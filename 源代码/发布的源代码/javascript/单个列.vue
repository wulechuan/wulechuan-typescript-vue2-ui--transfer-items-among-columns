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
                            ></span><span class="el-checkbox__label">{{ 条目.在界面展示时的称谓 }}</span></label></li>
            </ol>
        </div>
    </div>
</template>





<script source-language-was="ts">
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
const 单列允许列示的条目数之上限_默认值 = 500;
let wlc双列互换数据之单列 = class wlc双列互换数据之单列 extends Vue {
    constructor() {
        super(...arguments);
        this.用以过滤条目之关键词 = '';
        this.当下恰已选中所有条目_含隐藏之条目 = false;
        this.当下恰已选中所有条目_仅列示之条目 = false;
        this.所有条目之列表_最终采纳值 = [];
        this.当下选中的所有条目之唯一标识之列表 = [];
    }
    get 本列之称谓_最终采纳值() {
        const 外界给出值 = this.本列之称谓;
        let 拟采纳值 = '';
        if (typeof 外界给出值 === 'string') {
            拟采纳值 = 外界给出值.trim();
        }
        return 拟采纳值 || '该列';
    }
    get 本列之标题栏之文字() {
        return `${this.本列之称谓_最终采纳值}之条目`;
    }
    get 允许列示的条目数之上限_最终采纳值() {
        const 外界给出值 = this.允许列示的条目数之上限;
        let 拟采纳值 = NaN;
        if (typeof 外界给出值 === 'number') {
            拟采纳值 = 外界给出值;
        }
        else if (typeof 外界给出值 === 'string' && 外界给出值.trim()) {
            拟采纳值 = +外界给出值.trim();
        }
        return 拟采纳值 > 0 ? 拟采纳值 : 单列允许列示的条目数之上限_默认值;
    }
    get 所有条目之总数() {
        return this.所有条目之列表_最终采纳值.length;
    }
    get 条目过滤器之文本输入框之空框状态提示措辞() {
        return this.所有条目之总数 > 0 ? `筛选${this.本列之称谓_最终采纳值}之条目` : '无条目可筛选';
    }
    get 所有未禁止交互之条目() {
        return this.所有条目之列表_最终采纳值.filter(条目 => !条目.已禁止交互);
    }
    get 匹配当下过滤配置之所有条目() {
        const { 所有条目之列表_最终采纳值, 用以过滤条目之关键词 } = this;
        let 所有匹配的条目 = 所有条目之列表_最终采纳值;
        if (用以过滤条目之关键词) {
            const 用以匹配条目的正则表达式 = new RegExp(`${用以过滤条目之关键词}`, 'i');
            所有匹配的条目 = 所有条目之列表_最终采纳值.filter(条目 => 用以匹配条目的正则表达式.test(条目.在界面展示时的称谓));
        }
        return 所有匹配的条目;
    }
    get 当下列示着的所有条目之列表() {
        const 期望列示的所有条目 = this.匹配当下过滤配置之所有条目;
        const { 允许列示的条目数之上限_最终采纳值 } = this;
        const 匹配的条目过多故暂不应列示任何条目 = 期望列示的所有条目.length > 允许列示的条目数之上限_最终采纳值;
        if (匹配的条目过多故暂不应列示任何条目) {
            return [];
        }
        else {
            return 期望列示的所有条目;
        }
    }
    get 当下期望列示的条目过多故暂不列示任何条目() {
        return this.匹配当下过滤配置之所有条目.length > 0 && this.当下列示着的所有条目之列表.length === 0;
    }
    get 当下已选中的所有条目之列表_含隐藏之条目() {
        return this.所有条目之列表_最终采纳值.filter(条目 => !!条目.已选中);
    }
    get 当下已选中的所有条目之列表_仅列示的条目() {
        return this.当下列示着的所有条目之列表.filter(条目 => !!条目.已选中);
    }
    get 与选中所有条目之交互相关的汇总数据_含隐藏之条目() {
        return this.求与选中所有条目之交互相关的汇总数据(true);
    }
    get 与选中所有条目之交互相关的汇总数据_仅列示之条目() {
        return this.求与选中所有条目之交互相关的汇总数据(false);
    }
    在外界给出的所有条目之列表变动后() {
        this.根据外界给出的条目总表以及当前缓存之情况构建实用的条目总表();
    }
    在当下已选中的所有条目之列表变动后() {
        this.当下选中的所有条目之唯一标识之列表 = this.所有条目之列表_最终采纳值
            .filter(条目 => !!条目.已选中)
            .map(条目 => 条目.唯一标识);
    }
    根据外界给出的条目总表以及当前缓存之情况构建实用的条目总表() {
        let 外界给出值 = this.所有条目之列表;
        if (!Array.isArray(外界给出值)) {
            外界给出值 = [];
        }
        const { 当下选中的所有条目之唯一标识之列表 } = this;
        const 最终采纳值 = [];
        外界给出值.forEach(原始条目 => {
            if (!原始条目) {
                return;
            }
            const { 唯一标识: 该条目之唯一标识, 已禁止交互: 该条目已禁止交互, } = 原始条目;
            const 条目 = Object.assign(Object.assign({}, 原始条目), { 已选中: !该条目已禁止交互 && 当下选中的所有条目之唯一标识之列表.includes(该条目之唯一标识) });
            最终采纳值.push(条目);
        });
        this.所有条目之列表_最终采纳值 = 最终采纳值;
    }
    求某条目之样式类名集_其根元素(条目) {
        if (!条目) {
            return null;
        }
        const 已选中 = !!条目.已选中;
        const 已禁止交互 = !!条目.已禁止交互;
        return {
            'is-checked': 已选中,
            'is-disabled': 已禁止交互,
        };
    }
    求与选中所有条目之交互相关的汇总数据(应将暂不可见的条目一并计入) {
        const 所有参与统计之条目 = 应将暂不可见的条目一并计入 ? this.所有未禁止交互之条目 : this.当下列示着的所有条目之列表;
        const 界面措辞之统一后缀 = 应将暂不可见的条目一并计入 ? '（含未列示条目）' : '（仅列示条目）';
        let 交互项之特征样式类名_其根元素 = null;
        let 交互项之界面措辞 = '无可勾选项';
        const 应禁止交互 = 所有参与统计之条目.length === 0;
        if (应禁止交互) {
            交互项之特征样式类名_其根元素 = 'is-disabled';
        }
        else {
            const 当下未选中任何待统计之条目 = 所有参与统计之条目.every(条目 => !条目.已选中);
            if (当下未选中任何待统计之条目) {
                交互项之界面措辞 = `全部勾选${界面措辞之统一后缀}`;
                交互项之特征样式类名_其根元素 = '';
            }
            else {
                const 当下恰已选中所有待统计之条目 = 所有参与统计之条目.every(条目 => 条目.已选中);
                if (当下恰已选中所有待统计之条目) {
                    交互项之界面措辞 = `全部去掉勾选${界面措辞之统一后缀}`;
                    交互项之特征样式类名_其根元素 = 'is-checked';
                }
                else {
                    交互项之界面措辞 = `全部勾选${界面措辞之统一后缀}`;
                    交互项之特征样式类名_其根元素 = 'is-indeterminate';
                }
            }
        }
        return {
            交互项之界面措辞,
            应禁止交互,
            交互项之特征样式类名_其根元素,
        };
    }
    当选择所有条目之交互项动作时_含隐藏之条目() {
        const 所有应考察之条目 = this.所有未禁止交互之条目;
        const 动作之前所有应考察之条目均已选中 = 所有应考察之条目.every(条目 => 条目.已选中);
        const 动作之目的应为选择所有应考察之条目 = !动作之前所有应考察之条目均已选中;
        所有应考察之条目.forEach(条目 => { 条目.已选中 = 动作之目的应为选择所有应考察之条目; });
        this.当下恰已选中所有条目_含隐藏之条目 = 动作之目的应为选择所有应考察之条目;
    }
    当选择所有条目之交互项动作时_仅列示之条目() {
        const 所有应考察之条目 = this.当下列示着的所有条目之列表;
        const 动作之前所有应考察之条目均已选中 = 所有应考察之条目.every(条目 => 条目.已选中);
        const 动作之目的应为选择所有应考察之条目 = !动作之前所有应考察之条目均已选中;
        所有应考察之条目.forEach(条目 => {
            if (!条目.已禁止交互) {
                条目.已选中 = 动作之目的应为选择所有应考察之条目;
            }
        });
        this.当下恰已选中所有条目_仅列示之条目 = 动作之目的应为选择所有应考察之条目;
    }
    emitChangeEvent() {
        const payload = this.所有条目之列表_最终采纳值.map(uxItem => uxItem.数据);
        this.$emit('change', payload);
    }
};
__decorate([
    Prop()
], wlc双列互换数据之单列.prototype, "\u672C\u5217\u4E4B\u79F0\u8C13", void 0);
__decorate([
    Prop()
], wlc双列互换数据之单列.prototype, "\u5141\u8BB8\u5217\u793A\u7684\u6761\u76EE\u6570\u4E4B\u4E0A\u9650", void 0);
__decorate([
    Prop()
], wlc双列互换数据之单列.prototype, "\u6240\u6709\u6761\u76EE\u4E4B\u5217\u8868", void 0);
__decorate([
    Watch('所有条目之列表', { immediate: true })
], wlc双列互换数据之单列.prototype, "\u5728\u5916\u754C\u7ED9\u51FA\u7684\u6240\u6709\u6761\u76EE\u4E4B\u5217\u8868\u53D8\u52A8\u540E", null);
__decorate([
    Watch('当下已选中的所有条目之列表_含隐藏之条目', { immediate: true })
], wlc双列互换数据之单列.prototype, "\u5728\u5F53\u4E0B\u5DF2\u9009\u4E2D\u7684\u6240\u6709\u6761\u76EE\u4E4B\u5217\u8868\u53D8\u52A8\u540E", null);
wlc双列互换数据之单列 = __decorate([
    Component({})
], wlc双列互换数据之单列);
export default wlc双列互换数据之单列;
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
    margin: 0;
    padding: 0.25rem 0.75rem 0.3rem 0.75rem;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary .entry {
    display: flex;
    max-width: 30rem;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dt,
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd {
    padding: 0.25rem;
    margin: 0;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dt {
    flex: 0 0 20%;
    display: block;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd {
    flex: 1 1 auto;
    display: flex;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd > span {
    flex: 1 1;
    display: flex;
    text-align: right;
    justify-content: flex-end;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd > span .value {
    display: block;
    padding: 0.1rem 0.25rem;
    margin: -0.1rem 0.33rem -0.1rem 0.5rem;
    border-radius: 0.2rem;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd > span.all {
    flex: 1 1 31%;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd > span.all .value {
    flex: 0 0 4rem;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd > span.shown {
    flex: 2 2 69%;
    margin-left: 1.5rem;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd > span.shown .value {
    flex: 0 0 4rem;
}
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd > span .prefix,
.wlc-dual-columns-exchange-items .column-of-list .counts-summary dd > span .suffix {
    flex: 0 0 auto;
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
