<template>
    <div class="页面 页面--示范页3-遣将">
        <Wlc任意两列间转移条目_现成实用的双列
            v-model="已出征的将军之列表"
            :双列全部条目之总列表="可任命的中华名将之列表"
            :单列允许列示的条目数之上限="0"

            甲列之称谓="未出征的中华名帅名将"
            乙列之称谓="已出征的中华名帅名将"
            界面措辞_中央竖栏_内建按钮甲="出征"
            界面措辞_中央竖栏_内建按钮乙="凯旋"
            界面措辞_底部内容栏默认内容_按钮甲="出征"
            界面措辞_底部内容栏默认内容_按钮乙="凯旋"

            :应全面禁止交互="false"
            :各列均无需底部的说明书功能区="false"
            :无需底部内容栏="false"
            :无需中央列之功能="true"
        >
            <template v-slot:界面皿-总标题栏>
                <h3>遣将</h3>
            </template>
        </Wlc任意两列间转移条目_现成实用的双列>
    </div>
</template>









<script>
import {
    Wlc任意两列间转移条目_现成实用的双列,
} from '@wulechuan/vue2-ui--transfer-items-among-columns'

/** @typedef {import('@wulechuan/vue2-ui--transfer-items-among-columns').范_条目之唯一标识之列表} 范_条目之唯一标识之列表 */
/** @typedef {import('@wulechuan/vue2-ui--transfer-items-among-columns').范_基础条目} 范_基础条目 */

/**
 * 本页面专用的各种“范”。
 * 注：所谓“范”，即通常所说的“类型”。
 */

/**
 * @typedef {object} 范_中华名将_实际条目
 *
 * @property {范_基础条目['唯一标识']} 唯一标识
 * @property {范_基础条目['在界面中的称谓']} 在界面中的称谓
 * @property {范_基础条目['已禁止选择']} 已禁止选择
 * @property {范_基础条目['已选中']} 已选中
 * @property {object} 数据
 * @property {string} 数据.诞年
 * @property {number} 数据.排序数
 * @property {string} 数据.朝代或时期
 */

/** @type {Array<范_中华名将_实际条目>} */
const 可任命的中华名将之列表 = [
    { 姓名: '妇好', 朝代或时期: '商', 诞年排序数: -1200 },
    { 姓名: '霍去病', 朝代或时期: '西汉', 诞年: -140 },
    { 姓名: '赵云', 朝代或时期: '东汉（三国）', 诞年排序数: 190 },
    { 姓名: '秦琼', 朝代或时期: '隋末唐初', 诞年排序数: 600 },
    { 姓名: '王忠嗣', 朝代或时期: '唐', 诞年: 705 },
    { 姓名: '杨业', 朝代或时期: '北宋', 诞年排序数: 930 },
    { 姓名: '岳飞', 朝代或时期: '南宋', 诞年: 1103 },
    { 姓名: '辛弃疾', 朝代或时期: '南宋', 诞年: 1140 },
    { 姓名: '袁崇焕', 朝代或时期: '明末', 诞年: 1584 },
    { 姓名: '郑成功', 朝代或时期: '明末清初', 诞年: 1624 },
    { 姓名: '戚继光', 朝代或时期: '明', 诞年: 1528 },
    { 姓名: '左宗棠', 朝代或时期: '清末', 诞年: 1812 },
    { 姓名: '张自忠', 朝代或时期: '当代', 诞年: 1891 },
    { 姓名: '刘伯承', 朝代或时期: '当代', 诞年: 1892 },
    { 姓名: '彭德怀', 朝代或时期: '当代', 诞年: 1898 },
].map(某位将军的基本配置 => {
    const {
        姓名,
        诞年,
        诞年排序数,
        朝代或时期,
    } = 某位将军的基本配置

    /** @type {number} */
    let 排序数

    /** @type {string} */
    let 诞年_采纳值

    if (typeof 诞年排序数 === 'number') {
        排序数 = 诞年排序数
    } else if (typeof 诞年 === 'number') {
        排序数 = 诞年
    } else {
        console.error('某位将军之配置未指明排序数。', { ...某位将军的基本配置 })
        排序数 = 2022
    }

    if (typeof 诞年 === 'number') {
        诞年_采纳值 = `${诞年}`
    } else {
        诞年_采纳值 = '?'
    }

    const 唯一标识 = 姓名

    const 在界面中的称谓 = `〔${朝代或时期}〕${姓名}。${
        诞年_采纳值 === '?' ? `诞年不详，约 ${排序数} 年。` : `诞于 ${诞年_采纳值} 年。`
    }`

    /** @type {范_中华名将_实际条目} */
    const 某名将之条目 = {
        唯一标识,
        在界面中的称谓,
        已禁止选择: false,

        数据: {
            排序数,
            诞年: 诞年_采纳值,
            朝代或时期,
        },
    }

    return 某名将之条目
}).sort((甲, 乙) => 甲.数据.排序数 - 乙.数据.排序数)





export default {
    components: {
        Wlc任意两列间转移条目_现成实用的双列,
    },

    data () {
        return {
            /** @type {范_条目之唯一标识之列表} */
            已出征的将军之列表: [ '郑成功', '岳飞' ],

            /** @type {Array<范_中华名将_实际条目>} */
            可任命的中华名将之列表,
        }
    },

    activated () {
        document.title = '两列间转移条目·例3：遣将（TypeScript）'
    },
}
</script>









<style lang="scss">
/* autoprefixer: off */

.页面--示范页3-遣将 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        font-size: 2rem;
        text-align: center;
        margin: 0;
        padding: 1rem;
    }
}
</style>
