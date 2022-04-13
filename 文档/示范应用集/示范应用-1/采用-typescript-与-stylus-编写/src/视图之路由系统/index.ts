import Vue from 'vue'
import Vue路由器之构造函数, { RouteConfig } from 'vue-router'
import 示范页1_常见的双列互通之形式 from '@/视图/页面/示范页1-常见的双列互通之形式.vue'
import 示范页2_多余2列互通之形式 from '@/视图/页面/示范页2-多于-2-列互通之形式.vue'

Vue.use(Vue路由器之构造函数)

const 路由总表: Array<RouteConfig> = [
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

const vue路由器实例 = new Vue路由器之构造函数({
    routes: 路由总表,
})

export default vue路由器实例
