<template>
    <div class="吴乐川-任意两列互换数据之条目视觉根-自定义形态" :class="{ '详情内容块正呈现着': 条目_最终采纳值.数据.描述已呈现 }">
        <div class="吴乐川-任意两列互换数据之条目视觉根">
            <span class="输入项 输入项-勾选项" :class="输入项之样式类名配置">
                <span class="勾选项视觉假体"></span>
                <input type="checkbox" :checked="条目_最终采纳值.已选中" @click.prevent>
            </span>
            <span class="输入项配文">{{ 条目_最终采纳值.在界面中的称谓 }}</span>
            <span class="自适应占位器"></span>
            <button class="详情内容块开关按钮" @click.stop="条目_最终采纳值.数据.描述已呈现 = !条目_最终采纳值.数据.描述已呈现">解释</button>
        </div>

        <div v-if="条目_最终采纳值.数据.描述已呈现" class="内容块-详情" @click.stop>
            <article>
                <p
                    v-for="(段落文本, 段落文本之列表编号) in 条目描述文本之诸段落之列表"
                    :key="段落文本之列表编号"
                >{{ 段落文本 }}</p>
            </article>

            <button
                v-if="条目描述文本之诸段落总字数较多"
                class="位于底部的收起内容块之按钮"
                @click.stop="条目_最终采纳值.数据.描述已呈现 = false"
            >收起【{{ 条目_最终采纳值.在界面中的称谓 }}】的解释</button>
        </div>
    </div>
</template>

<script>
/** @typedef {import('../../数据/示范页之数据库').范_双列互换数据_实际条目} 范_双列互换数据_实际条目 */
/** @typedef {Wlc双列互换数据.范_内用格式之条目 & 范_双列互换数据_实际条目} 范_双列互换数据_内用格式之实际条目 */
/** @typedef {Wlc双列互换数据.范_界面元素之样式类名之配置} 范_界面元素之样式类名之配置*/

export default {
    name: 'Wlc双列互换数据之条目之自定义形态示范',

    props: {
        条目: {
            type: Object,
            default: null,
        },
    },

    data () {

    },

    computed: {
        /**
         * @returns {范_双列互换数据_内用格式之实际条目}
         */
        条目_最终采纳值 () {
            const 外界给出的值 = this.条目
            if (!外界给出的值) return this.构造临时的条目()
            return 外界给出的值
        },

        /**
         * @returns {范_界面元素之样式类名之配置}
         */
        输入项之样式类名配置 () {
            const 条目 = this.条目_最终采纳值
            return { '已勾选': 条目.已选中, '已禁止交互': 条目.已禁止选择, '未选中': !条目.已选中 }
        },

        /**
         * @returns {string[]}
         */
        条目描述文本之诸段落之列表 () {
            /** @type {string[]} */
            let 诸段落之列表 = []

            const 原始数据 = this.条目_最终采纳值.数据
            if (原始数据) {
                const 原始值 = 原始数据.描述
                if (Array.isArray(原始值)) {
                    诸段落之列表 = 原始值
                } else {
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
        },

        /**
         * @returns {boolean}
         */
        条目描述文本之诸段落总字数较多 () {
            /** @type {number} */
            const 总字符数 = this.条目描述文本之诸段落之列表.reduce((字数, 某段落文本) => {
                return 字数 + 某段落文本.length
            }, 0)

            return 总字符数 > 219
        },
    },

    methods: {
        /**
         * @returns {范_双列互换数据_内用格式之实际条目}
         */
        构造临时的条目 () {
            /** @type {string} */
            const 称谓 = Math.random().toFixed(10)
            return { 唯一标识: 称谓, 在界面中的称谓: 称谓, 已禁止选择: true, 已选中: false, 数据: {} }
        },
    },
}
</script>

<style lang="scss">
.吴乐川-任意两列互换数据之条目视觉根-自定义形态 {
    border-radius: 0.25em;
    overflow: hidden;

    button {
        display: block;
        padding: 0 1.5em;
        min-width: 0;
    }

    .吴乐川-任意两列互换数据之条目视觉根 {
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        .自适应占位器 {
            flex: 10 10 auto;
        }
    }

    .详情内容块开关按钮 {
        // visibility: hidden;
        opacity: 0.1;
        flex: 0 0 4em;
        padding: 0 0.75em;
        margin: -0.05em 0 -0.5em;
    }

    .内容块-详情 {
        min-height: 3em;

        article {
            padding: 0.5em 1.5em 1.8em 2.25em;
            text-align: justify;
            user-select: text;
        }
    }

    &:hover,
    &.详情内容块正呈现着 {

        .详情内容块开关按钮 {
            // visibility: visible;
            opacity: 1;
        }
    }

    &.详情内容块正呈现着 {
        background-color: #ddd;
        box-shadow: inset 0 0 0.2em 0 rgba(black, 0.319);
        // margin-top: 0.5em;
        margin-bottom: 1.5em;

        .吴乐川-任意两列互换数据之条目视觉根 {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            box-shadow: 0 0 0.2em 0 rgba(black, 0.319);
        }
    }

    .位于底部的收起内容块之按钮 {
        margin: 0 auto 1.5em;
    }
}
</style>
