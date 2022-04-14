import '@wulechuan/vue2-ui--columns-exchange-items/源代码/发布的源代码/styles/完整样式表/默认/0-基础.css'
import '@wulechuan/vue2-ui--columns-exchange-items/源代码/发布的源代码/styles/完整样式表/默认/1-单列.css'

import Vue from 'vue'
import vue路由器实例 from './视图之路由系统'
import 应用根 from './视图/应用根.vue'

Vue.config.productionTip = false

new Vue({
    router: vue路由器实例,
    render: h => h(应用根),
}).$mount('#vue-应用根占位-div')
