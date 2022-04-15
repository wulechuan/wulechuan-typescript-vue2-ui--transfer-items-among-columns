/**
 * @typedef {import('vue-router').RouteConfig } RouteConfig
 */

import 示范页1_常见的双列互通之形式 from '@/视图/页面/示范页1-常见的双列互通之形式.vue'
import 示范页2_多余2列互通之形式 from '@/视图/页面/示范页2-多于-2-列互通之形式.vue'

/** @type {Array<RouteConfig>} */
export const 路由定义总表 = [
    {
        path: '/',
        name: '首页',
        redirect: '/examples/1-commonly-used-dual-columns',
    },

    {
        path: '/examples/1-commonly-used-dual-columns',
        name: '示范页1-常见的双列互通之形式',
        component: 示范页1_常见的双列互通之形式,
    },

    {
        path: '/examples/2-multiple-columns',
        name: '示范页2-多余2列互通之形式',
        component: 示范页2_多余2列互通之形式,
    },
]
