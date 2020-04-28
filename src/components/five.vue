<template>
  <div id="asas">
    <!-- 个人信息 -->
    <div class="head">

    </div>
    <div>
      <van-row style="position: relative;top: -190px;">
        <van-col span="5"><img style="width: 25%;height: 22px;padding-left: 14%;" src="../../static/assets/左箭头.png"></van-col>
        <van-col span="9" offset="7"><span style="color: white;text-align: center;padding-bottom: 17px;'">我的</span></van-col>
         </van-row>
         <div style="margin-top: -190px;margin-left: 5%;">
           <img style="width: 15%;" src="../../static/assets/Head-portrait.png" />
           <span style="font-size: 17px;position: absolute;left: 25%;color: white;">
             {{xinxi.account}}
               <img style="width: 30%;" src="../../static/assets/partnership.png" />
               <p style="position: relative;top: -30px;left: 75px;font-size: 10px;" v-if=" a == 0" >会员</p>
               <p style="position: relative;top: -30px;left: 75px;font-size: 10px;" v-if=" a == 1" >VIP</p>
               <p style="position: relative;top: -30px;left: 75px;font-size: 10px;" v-if=" a == 2" >合伙人</p>
           </span>
           <p style="border: 1px solid #8d480a;width: 40%;padding-left: 3%;border-radius: 25px;position: absolute;top: 60px;left: 24%;font-size: 12px;color: white;">邀请ID：<a>{{xinxi.promo}}</a><span style="border: 1px solid #8d480a;margin-left: 17%;border-radius: 25px;padding-left: 1%;">复制</span></p>
         </div>
         <!-- 金框 -->
         <div class="jin">

         </div>
         <!-- 金色图片 -->
         <div style="background-image: url(../../static/assets/base.png);margin-top: -30px;">
           <p @click="pro" style="text-align: center;padding-top: 8px;"><img style="position: relative;top: 8px;right: 5px;" src="../../static/assets/question.png"  />累计收益<span style="font-size: 1.5625rem;margin-left: 10%;">></span></p>
           <p style="text-align: center;font-size: 25px;color: #FF8C00;margin-right: 100px;position: relative;top: -20px;">{{countmoney.bonuses_money}}</p>
           <van-row style="margin-top: -35px;">
             <van-col style="margin-left: 4%;border-right: 1px solid; margin-bottom: 10px;color: #FF8C00;line-height: 5px;" span="4">
               <p style="text-align: center;font-size: 12px;">今日</p>
               <p style="text-align: center;font-size: 12px;">激活奖励</p>
               <p style="text-align: center;font-size: 12px;">{{jiangli.today_activace}}</p>
             </van-col>
             <van-col style="margin-left: 4%;border-right: 1px solid; margin-bottom: 10px;color: #FF8C00;line-height: 5px;" span="4">
               <p style="text-align: center;font-size: 12px;">本月</p>
               <p style="text-align: center;font-size: 12px;">推广奖励</p>
               <p style="text-align: center;font-size: 12px;">{{jiangli.month_retail}}</p>
             </van-col>
             <van-col style="margin-left: 4%;border-right: 1px solid; margin-bottom: 10px;color: #FF8C00;line-height: 5px;" span="4">
               <p style="text-align: center;font-size: 12px;">累积</p>
               <p style="text-align: center;font-size: 12px;">育成奖励</p>
               <p style="text-align: center;font-size: 12px;">{{jiangli.money_format}}</p>
             </van-col>
             <van-col style="margin-left: 4%;border-right: 1px solid; margin-bottom: 10px;color: #FF8C00;line-height: 5px;" span="4">
               <p style="text-align: center;font-size: 12px;">本月</p>
               <p style="text-align: center;font-size: 12px;">分润奖励</p>
               <p style="text-align: center;font-size: 12px;">{{jiangli.month_spread}}</p>
             </van-col>
           </van-row>
         </div>
         <!-- 图片下边 -->
          <div style="padding-left: 10%;padding-top: -20px;">
            <van-grid :border="false" :column-num="4.8" >
              <van-grid-item  v-for="xias in xia" :to="xias.ur">
                <van-image :src="xias.xia1" />
                <p style="font-size: 10px;">{{xias.xia2}}</p>
              </van-grid-item>
            </van-grid>
          </div>
    </div>
    <!-- 底部 -->
      <div class="nab" v-for="nabs in nabb">
          <van-row style="border-bottom: 1px solid #ebedf0;">
            <van-col style="padding-top: 20px;padding-bottom: 10px;" span="10" offset="2">
              <img  style="width: 15%;" :src="nabs.nab1"/>
              <span style="position: relative;top: -5px;left: 15%;">{{nabs.nab2}}</span>
              </van-col>
            <van-col style="padding-left: 30%;font-size: 25px;margin-top: 15px;" span="4">{{nabs.nab3}}</van-col>
          </van-row>
      </div>

      <van-tabbar route v-model="active">
       <van-tabbar-item v-for="asl in icon" replace :to='asl.toas' style="padding-top: 10px;">
          <span>{{asl.name}}</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? asl.active : asl.normal"
          >
        </van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
  export default{
    data() {
      return{
        jiangli:[],
        xinxi:[],
        a:"",
        active: 0,
        countmoney:[],
           xia:[
             {
               xia1:'../../static/assets/order.png',
               xia2:'订单'
             },
             {
               xia1:'../../static/assets/mall%20(2).png',
               xia2:'物料商城'
             },
             {
               xia1:'../../static/assets/attorney.png',
               xia2:'授权书',
               ur:"shouquanshu"
             },
             {
               xia1:'../../static/assets/service.png',
               xia2:'客服'
             }
           ],
           nabb:[
             {
               nab1:'../../static/assets/specification.png',
               nab2:'推广规则',
               nab3:'>'
             },
             {
               nab1:'../../static/assets/tutorial.png',
               nab2:'新手教程',
               nab3:'>'
             },
             {
               nab1:'../../static/assets/Teachers.png',
               nab2:'创业导师',
               nab3:'>'
             },
             {
               nab1:'../../static/assets/feedback.png',
               nab2:'意见反馈',
               nab3:'>'
             },
             {
               nab1:'../../static/assets/Set.png',
               nab2:'设置',
               nab3:'>'
             }
           ],
           icon: [
             {
             name:"首页",
             toas:'/zyk',
             normal: '../../static/assets/home_0.png',
             active: '../../static/assets/home_1.png'
           },
           {
             name:"我的团队",
             toas:'/two',
             normal: '../../static/assets/团队.png',
             active: '../../static/assets/团队.1.png'
           },
           {
             name:"成为VIP",
             toas:'/three',
             normal: '../../static/assets/vip.png',
             active: '../../static/assets/vip_1.png'
           },
           {
             name:"众星学院",
             toas:'/four',
             normal: '../../static/assets/college.png',
             active: '../../static/assets/college_1.png'
           },
           {
             name:"我的",
             toas:'/five',
             normal: '../../static/assets/mine.png',
             active: '../../static/assets/mine_1.png'
           },
           ]
      }
    },
    created() {
      var _this = this;
      this.$axios({
        method:'get',
        url:'https://star.qhynice.top/api/personal/index',
      params:{
        userid: 73
      }
      })
      .then(function(response){
        _this.jiangli = response.data
         _this.xinxi = response.data.user
         _this.a = response.data.user.status
        console.log(response.data)
      })
      this.$axios({
        method:'get',
        url:'https://star.qhynice.top/api/personal/profit',
      params:{
        userid: 73
      }
      })
      .then(function(response){
        _this.countmoney = response.data.countmoney;
        console.log(response.data.countmoney)
      })
    },
    methods:{
      pro(){
          this.$router.push({
            path:'profit',
          })
      }
    }
  }
</script>

<style scoped>
  .head{
    background-color: black;
    width: 100%;
    height: 12.5rem;
  }
  .jin{
    width: 80%;
    height: 50px;
    border: 1px solid darkorange;
    border-bottom: none;
    border-radius: 10px;
    margin-left: 10%;
    margin-top: 20px;
  }
</style>
