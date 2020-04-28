// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
// import BaiduMap from 'vue-baidu-map'
// import VCharts from 'v-charts'
// import Apps from './App.vue'
import Axios from "axios"					//接口引用
Vue.prototype.$axios=Axios

// Vue.use(VCharts)
// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: 'YOUR_APP_KEY'
// })

Vue.use(Vant)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
   el: '#app',
    render: h => h(App)
})