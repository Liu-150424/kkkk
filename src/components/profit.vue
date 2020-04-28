<template>
<div class="prof">
  <!-- 头部 -->
  <div class="prof_top">
   <van-row>
     <van-col span="5" class="arow_max" @click='sahd()'><</van-col>
     <van-col span="9" offset="5"><span>收益记录</span></van-col>
     </van-row>
  </div>
  <!-- 黑色div -->
  <div class="prof_black">
     <div class="prof_as">
        <p class="prof_opa">可提现（元）</p>
        <p class="prof_opal">明细</p>
     </div>
     <div class="prof_mone">
       <p>{{countmoney.withdrawable}}</p>
       <p class="prof_la" style="font-size: 17px;"@click="awa">去提额</p>
     </div>
     <div class="prof_asn">
        <p>累计到账（元）</p>
        <p>已提现（元）</p>
        <p>未结算（元）</p>
     </div>
     <div class="prof_asntw">
        <p>{{countmoney.bonuses_money}}</p>
        <p>{{countmoney.bonuses_money}}</p>
        <p class="ajs">{{countmoney.unliquidated}}</p>
     </div>
      <!-- 日报开始 -->
         <p style="text-align: left;padding-left: 0.625rem;margin-top: 40px;">昨日日报</p>
         <div class="ribao">
           <div class="ribao0" @click="ribao()">日报</div>
           <van-row>
             <van-col span="10" offset="2">
               <p>激活奖励</p>
               <p>{{yesterday_money.activate}}</p>
             </van-col>
             <van-col span="10" offset="2">
               <p>推广奖励</p>
               <p>{{yesterday_money.raise}}</p>
             </van-col>
           </van-row>
           <van-row>
             <van-col span="10" offset="2">
               <p>育成奖励</p>
               <p>{{yesterday_money.retail}}</p>
             </van-col>
             <van-col span="10" offset="2">
               <p>分润奖励</p>
               <p>{{yesterday_money.spread}}</p>
             </van-col>
           </van-row>
         </div>
         <!-- 日报结束 -->
         <!-- 月报开始 -->
         <div class="wen">
           <div>本月月报</div>
           <div @click="yuebao()" style="color: gold;">历史月报</div>
         </div>
         <div class="yuebao">
           <van-row>
             <van-col span="10" offset="2">
               <p>激活奖励</p>
               <p>{{month_money.activate}}</p>
             </van-col>
             <van-col span="10" offset="2">
               <p>推广奖励</p>
               <p>{{month_money.raise}}</p>
             </van-col>
           </van-row>
           <van-row>
             <van-col span="10" offset="2">
               <p>育成奖励</p>
               <p>{{month_money.retail}}</p>
             </van-col>
             <van-col span="10" offset="2">
               <p>分润奖励</p>
               <p>{{month_money.spread}}</p>
             </van-col>
           </van-row>
         </div>
         <!-- 月报开始 -->
  </div>
</div>
</template>

<script>
  export default{
    data(){
      return{
        countmoney:[],
        yesterday_money:[],
        month_money:[],
      }
    },
 methods:{
        ribao(){
          this.$router.push({
            path:'daily',
          })
        },
        sahd(){
            this.$router.push({
              path:'five',
            })
        },
        yuebao(){
          this.$router.push({
            path:'report',
          })
        },
        awa(){
          this.$router.push({
            path:'tixian',
          })
        }
      },
      created() {
        var _this = this;
        this.$axios({
          method:'get',
          url:'https://star.qhynice.top/api/personal/profit',
        params:{
          userid: 73
        }
        })
        .then(function(response){
          _this.countmoney = response.data.countmoney;
          _this.yesterday_money = response.data.yesterday_money;
          _this.month_money = response.data.month_money;
          console.log(response.data)
        })
      },
  }
</script>

<style scoped>
  .prof_top{
    position: relative;
    top: 15px;
  }
  .prof_black{
    width: 100%;
    height: 240px;
    background-color: black;
    margin-top: 30px;
  }
  .prof_as{
    display: flex;
    justify-content: space-between;
  }
  .prof_as p{
    color: #B3B3B3;
    font-size: 13px;
  }
  .prof_opa{
    padding-left: 6%;
  }
  .prof_opal{
    padding-right: 6%;
  }
  .prof_mone{
    display: flex;
    justify-content: space-between;
    color: white;
  }
  .prof_mone p{
    font-size: 24px;
    padding-left: 6%;
  }
  .prof_la{
    padding-right: 6%;
    border: 1px solid;
    background-color: #f6c011;
    border-radius: 40%;
    height: 35px;
    padding-top: 12px;
  }
  .prof_asn{
    display: flex;
    justify-content: space-between;
    color: #B3B3B3;
    font-size: 13px;
  }
  .prof_asn p{
    padding-left: 4%;
  }
  .prof_asntw{
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 13px;
  }
  .prof_asntw p{
    padding-left: 5%;
  }
  .ajs{
    padding-right: 5%;
  }
.ribao p{
  color: gray;
  font-size: 0.8125rem;

}
.yuebao p{
  color: gray;
  font-size: 0.8125rem;
}
  .yue2 {
    display: flex;
    justify-content: space-around;
  }

  .ribao0 {
    text-align: right;
    padding-right: 0.625rem;
    color: gold;
  }

  .ribao {
    box-shadow: 0px 0px 10px black;
    margin: 0.3125rem;
    width: 96%;
    margin-left: 2%;
    text-align: left;
  }

  .wen {
    display: flex;
    justify-content: space-between;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }

  .yuebao {
    box-shadow: 0px 0px 10px black;
    margin: 0.3125rem;
    width: 96%;
    margin-left: 2%;
    text-align: left;
  }
</style>
