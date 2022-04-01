import Vue from 'vue'
import 应用根 from './视图/应用根.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(应用根),
}).$mount('#vue-应用根占位-div')

