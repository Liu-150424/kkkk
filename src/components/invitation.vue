<template>
  <div class="invita">
      <!-- 顶部 -->
      <div class="invita_top">
        <van-row>
          <van-col style="font-size: 20px;" span="5" class="arow_max"><</van-col>
          <van-col span="9" offset="5"><span>邀请好友</span></van-col>
        </van-row>
      </div>
      <!-- 加入 -->
      <div class="invita_jia">
        <div class="flexs">
        <p>加入众赢客</p>
      </div>
      <!-- 白色边框 -->
      <div class="wite">
          <div class="wite_apw">
            <img src="../../build/logo.png" />
          </div>
          <div class="wite_tex">
            <p>众赢客</p>
          </div>
          <div class="wite_ja">
            <p>用户名/机构名</p>
          </div>
          <div class="wite_shouji">
            <p>手机号：xxxxxxxxxxxxxx</p>
          </div>
          <div class="wite_yi">
            <h1>一</h1>
          </div>
          <div class="wite_yao">
            <p>邀请码</p>
          </div>
          <div class="wite_nu">
            <p>{{par.promo}}</p>
          </div>
          <div class="wite_img">
            <img src="../../static/assets/timg.jpeg" />
          </div>
          <div class="wite_tian">
            <p>扫码邀请或在注册时直接填写邀请码</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        par:[],
      }
    },
    created (){
      var _this = this
      this.$axios({
        method:"get",
        url:"https://star.qhynice.top/api/authorize/index",
        params:{
          userid:73
        }
      })
      .then(function(res){
        console.log(res)
        _this.par = res.data.list
      })
    },
  }
</script>

<style scoped>
  .invita_top{
    position: relative;
    top: 15px;
  }
  .invita_jia{
    width: 100%;
    height: 780px;
    margin-top: 2.125rem;
    background-image: url(../../static/assets/beijing.jpg);
  }
  .flexs{
    display: flex;
    justify-content: center;
  }
  .flexs p{
    font-size: 40px;
    color: #FF8C00;
  }
  .wite{
    border: 1px solid white;
    width: 80%;
    height: 500px;
    border-radius: 10px;
    margin-left: 10%;
    background-color: white;
  }
  .wite_apw{
    display: flex;
    justify-content: center;
  }
  .wite img{
    width: 20%;
    height: 50px;
    margin-top: 10px;
  }
  .wite_tex{
    display: flex;
    justify-content: center;
    margin-top: -30px;
    font-size: 1.5625rem;
    color: #FF8C00;
  }
  .wite_ja{
    display: flex;
    margin-top: -30px;
    justify-content: center;
  }
  .wite_shouji{
    display: flex;
    justify-content: center;
    margin-top: -20px;
  }
  .wite_yi{
    display: flex;
    justify-content: center;
    margin-top: -50px;
    font-size: 25px;
  }
  .wite_yao{
    display: flex;
    justify-content: center;
    margin-top: -50px;
    color: #FF8C00;
  }
  .wite_nu{
    display: flex;
    justify-content: center;
    margin-top: -20px;
    color: #FF8C00;
  }
  .wite_img{
    display: flex;
    justify-content: center;
  }
  .wite_img img{
    width: 60%;
    height: 150px;
  }
  .wite_tian{
    display: flex;
    justify-content: center;
    font-size: 12px;
  }
</style>
