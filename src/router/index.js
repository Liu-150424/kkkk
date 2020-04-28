import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zyk from '@/components/zyk'
import two from '@/components/two'
import three from '@/components/three'
import four from '@/components/four'
import five from '@/components/five'
import 商城 from '@/components/商城'
import 购买 from '@/components/购买'
import 确认 from '@/components/确认'
import 订单 from '@/components/订单'
import receiving from '@/components/receiving'
import added from '@/components/added'
import ranking from '@/components/ranking'
import invitation from '@/components/invitation'
import profit from '@/components/profit'
import daily from '@/components/daily'
import report from '@/components/report'
import tixian from '@/components/tixian'
import dizhibianji from '@/components/dizhibianji'
import shouquanshu from '@/components/shouquanshu'
import xinshou from '@/components/xinshou'
import shanghu from '@/components/shanghu'
import shanghuxiang from '@/components/shanghuxiang'
import zhuanyi from '@/components/zhuanyi'
import zhuce from '@/components/zhuce'
import denglu from '@/components/denglu'
import guolvqi from '@/components/guolvqi'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/zyk',
      name: 'zyk',
      component: zyk
    },
    {
      path: '/two',
      name: 'two',
      component: two
    },
    {
      path: '/three',
      name: 'three',
      component: three
    },
    {
      path: '/four',
      name: 'four',
      component: four
    },
    {
      path: '/five',
      name: 'five',
      component: five
    },
    {
      path: '/商城',
      name: '商城',
      component: 商城
    },
    {
      path: '/购买',
      name: '购买',
      component: 购买
    },
    {
      path: '/确认',
      name: '确认',
      component: 确认
    },
    {
      path: '/订单',
      name: '订单',
      component: 订单
    },
    {
      path: '/receiving',
      name: 'receiving',
      component: receiving
    },
    {
      path: '/added',
      name: 'added',
      component: added
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: ranking
    },
    {
      path: '/invitation',
      name: 'invitation',
      component: invitation
    },
    {
      path: '/profit',
      name: 'profit',
      component: profit
    },
    {
      path: '/daily',
      name: 'daily',
      component: daily
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '/tixian',
      name: 'tixian',
      component: tixian
    },
    {
      path: '/dizhibianji',
      name: 'dizhibianji',
      component: dizhibianji
    },
    {
      path: '/shouquanshu',
      name: 'shouquanshu',
      component: shouquanshu
    },
    {
      path: '/xinshou',
      name: 'xinshou',
      component: xinshou
    },
    {
      path: '/shanghu',
      name: 'shanghu',
      component: shanghu
    },
    {
      path: '/shanghuxiang',
      name: 'shanghuxiang',
      component: shanghuxiang
    },
    {
      path: '/zhuanyi',
      name: 'zhuanyi',
      component: zhuanyi
    },
    {
      path: '/',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/guolvqi',
      name: 'guolvqi',
      component: guolvqi
    }
  ]
})
