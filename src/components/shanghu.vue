<template>
  <div>
    <!-- 头部说明 -->
    <div style="padding-top: 10px;">
      <van-row>
       <van-col span="4">
        <router-link to="/xinshou" ><</router-link>
       </van-col>
       <van-col span="16">商户列表</van-col>
       <van-col span="4">...</van-col>
      </van-row>
    </div>
    <!-- 商户列表头部 -->
    <div class="list_head">
      <!-- 头部搜索框 -->
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        shape="round"
        style="width: 60%;margin-left: 20%;"
        background="black"
        @blur = "ina"
      >
      </van-search>
      <div class="list_head_content" style="text-align: center;">
        <p style="font-size: 14px;padding-top: 8%;">我的商户</p >
        <p style="font-size: 20px;padding-top: 6%;padding-bottom: 5%;">{{count}}</p >
      </div>
    </div>
    <!-- 本月交易额 -->
    <div class="list_content">
      <!-- 下拉 -->
      <van-dropdown-menu active-color="#ee0a24" >
        <van-dropdown-item v-model="value1" :options="option1" @change="aa(value1)" />
      </van-dropdown-menu>
    </div>
    <!-- 用户列表 -->
    <div class="userlist" v-for="userlist in userlists" @click="xiang(userlist.id)">
      <div>
        <p style="margin-top: 7%;">{{userlist.name}}</p>
      </div>
      <div>
        <p style="color: yellow;">{{userlist.money}}</p >
        <p>{{userlist.text}}</p >
      </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      value:"",
      value1:0,
      option1:[
         { text: '本月交易额', value: 0 },
         { text: '上月交易额', value: 1 },
         { text: '总交易额', value: 2 }
      ],
      // 用户总数
      count:"",
      userlists:[]
    }
  },
  methods:{
    aa(e){
      var _this = this
      if(e == 0){
        this.$axios({
          methods:"get",
          url:"https://star.qhynice.top/api/mymerchant/myinfo",
          params:{
            userid:73,
            type:1
          }
        }).then(function(res){
          console.log(res.data.data)
          _this.userlists = res.data.data
          console.log(_this.userlists.length)
          var j = _this.userlists.length
          for(let a =0;a<j;a++){
              _this.userlists[a].text = "本月交易额"
          }
        })
      }else if(e == 1){
        this.$axios({
          methods:"get",
          url:"https://star.qhynice.top/api/mymerchant/myinfo",
          params:{
            userid:73,
            type:2
          }
        }).then(function(res){
          console.log(res)
          _this.userlists = res.data.data
          var j = _this.userlists.length
          for(let b =0;b<j;b++){
              _this.userlists[b].text = "上月交易额"
          }
        })
      }else if(e == 2){
        this.$axios({
          methods:"get",
          url:"https://star.qhynice.top/api/mymerchant/myinfo",
          params:{
            userid:73,
            type:3
          }
        }).then(function(res){
          console.log(res)
          _this.userlists = res.data.data
          var j = _this.userlists.length
          for(let c =0;c<j;c++){
              _this.userlists[c].text = "累计交易额"
          }
        })
      }
    },
    ina(){
      var _this = this
     this.$axios({
       methods:"get",
       url:"https://star.qhynice.top/api/mymerchant/myinfo",
       params:{
         userid:73,
         params:this.value,
       }
     }).then(function(res){
       console.log(res)
        _this.userlists = res.data.data
      for(let a = 0;a<_this.userlists.length;a++){
        if(res.data.data == "无数据"){
          var ww = document.querySelectorAll(".userlist")
          ww[a].style.border = "none"
        }
      }
     })
    },
    xiang(id){
      this.$router.push({
        path: 'shanghuxiang',
        query: {
          ar:id
        }
      })
      console.log(id)
    }
  },
  created() {
      var _this = this
      this.$axios({
        methods:"get",
        url:"https://star.qhynice.top/api/mymerchant/myinfo",
        params:{
          userid:73,
          type:1
        }
      }).then(function(res){
        console.log(res)
        _this.count = res.data.params.count
        _this.userlists = res.data.data
        var j = _this.userlists.length
        for(let d =0;d<j;d++){
            _this.userlists[d].text = "本月交易额"
        }
      })
    }
  }
  </script>



<style scoped>
/* 头部 */
.list_head{
  margin-top: 3%;
  background-image:url("../../static/assets/square.jpg");
  background-size: 100%;
  color: white;
}
/* 用户列表 */
.userlist{
  padding-top: 2%;
  padding-bottom: 3%;
  width: 90%;
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
  /* border-top:1px solid #BBBBBB ; */
  border-bottom: 1px solid #BBBBBB;
}
</style>
