<template>
  <div>
    <div style="margin-top: 25px;" @click="awu">
      <van-row>
        <van-col span="3" offset="2"><span><img style="height: 20px;position: relative;top: 5px;" src="../../static/assets/line.png" /></span><span>商户</span></van-col>
        <van-col span="4" offset="15"><span>8人</span><span>></span></van-col>
      </van-row>
    </div>
    <div style="margin-top: 20px;">
      <van-row v-for="desc in desc" style="border-bottom: 1px solid #d2d2d2;">
        <van-col span="2" offset="2"><p style="margin-top: 30px;"><img style="width: 80%;" :src="desc.img" /></p></van-col>
        <van-col span="10" offset="2"><p style="margin-top: 30px;color: #e8c684;">{{desc.name}}</p></van-col>
        <van-col span="3" offset="2"><p style="color: #e8c684;">{{desc.money}}</p></van-col>
        <van-col span="6" offset="18"><p style="margin-top: -40px;">本月交易用户</p></van-col>
      </van-row>
    </div>
    <div class="baw">

    </div>
    <div style="margin-top: 25px;border-bottom: 1px solid #d1d1d1;padding-bottom: 20px;">
      <van-row>
        <van-col span="12" offset="2"><span><img style="height: 20px;position: relative;top: 5px;" src="../../static/assets/line.png" /></span><span>个人业绩(我的业绩)</span></van-col>
      </van-row>
    </div>
    <div>
      <van-row type="flex" justify="center">
        <van-col span="10"><p>本月商户交易额(元)</p></van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col span="6"><span style="font-size: 25px;position: relative;right: 35px;"><span>$</span>{{conuntmoney}}</span></van-col>
      </van-row>
    </div>
    <div class="band">
       <img style="width: 100%;" src="../../static/assets/square.png" />
       <div style="position: relative;top: -140px;">
         <van-row type="flex" justify="center">
           <van-col span="10"><p style="color: #fdfdfa;">本月商户交易额(元)</p></van-col>
         </van-row>
         <van-row type="flex" justify="center">
           <van-col span="6"><span style="font-size: 25px;position: relative;right: 35px;color: #fdfdfa;"><span>$</span>{{conuntmoney}}</span></van-col>
         </van-row>
       </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        desc:[],
        conuntmoney:"",
      }
    },
    methods:{
      awu(){
        this.$router.push({
          path:'shanghu',
        })
      }
    },
    created (){
      var _this = this;
      this.$axios({
        method:'get',
        url:'https://star.qhynice.top/api/mymerchant/index',
        params:{
          userid : 73
        }
      })
      .then(function(response){
        console.log(response.data)
        _this.desc = response.data.desc
        _this.conuntmoney = response.data.conuntmoney
        _this.desc[0].img = "../../static/assets/Icon(1).png"
        _this.desc[1].img = "../../static/assets/lcon(2).png"
        _this.desc[2].img = "../../static/assets/lcon(3).png"
      })
    }
  }
</script>

<style scoped>
  .baw{
    height: 40px;
    width: 100%;
    background-color: #eeede8;
    margin-top: 20px;
  }
  .band{
      margin-top: 40px;
  }
</style>
