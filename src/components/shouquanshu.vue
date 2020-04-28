<template>
  <div class="aaw">
      <div>
        <img style="width: 100%;margin-top: 80px;" src="../../static/assets/20191226150538.png" />
        <p style="position: absolute;top: 315px;left: 100px;">{{par.account}}</p>
        <p style="position: absolute;bottom: 310px;left: 145px;">{{par.promo}}</p>
        <p style="position: absolute;bottom: 210px;right: 65px;">{{timestampToTime(shijian)}}</p>
      </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        par:[],
        shijian:"",
      }
    },
    beforeCreate (){
      var _this = this
      this.$axios({
        method:"get",
        url:"https://star.qhynice.top/api/authorize/index",
        params:{
          userid:73
        }
      })
      .then(function(res){
        console.log(res.data.list)
        _this.par = res.data.list
        _this.shijian = parseInt(res.data.list.certification_time)
      })
    },
    methods:{
      timestampToTime(timestamp) {
              var date = new Date(timestamp * 1000);
              let y = date.getFullYear();
              let MM = date.getMonth() + 1;
              MM = MM < 10 ? ('0' + MM) : MM;
              let d = date.getDate();
              d = d < 10 ? ('0' + d) : d;
              return y + '年' + MM + '月' + d + '日';
          }
    }
  }
</script>

<style>
</style>
