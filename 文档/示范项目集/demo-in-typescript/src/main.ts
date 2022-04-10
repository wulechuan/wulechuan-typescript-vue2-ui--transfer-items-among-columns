import '@wulechuan/vue2-ui--two-columns-exchange-items/源代码/发布的源代码/stylus/仅尺寸与排版与关键行为（亦可单独发行）/默认/0-基础.styl'
import '@wulechuan/vue2-ui--two-columns-exchange-items/源代码/发布的源代码/stylus/仅着色与装饰（亦可单独发行）/默认/0-基础.styl'

import Vue from 'vue'
import 应用根 from './视图/应用根.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(应用根),
}).$mount('#vue-应用根占位-div')

