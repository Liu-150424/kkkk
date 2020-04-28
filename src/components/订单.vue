<template>
  <div id="app">
    <div id="heds">
      <p>
        < <b>确认订单</b>
          <span>

          </span>
      </p>
    </div>
    <div id="cens" @click="censa()">
      <b>{{adde.name}}</b>
      <p>{{adde.address}}</p>
    </div>
    <div id="cnet">
      <div>
        <img style="width: 25%;" src="../../static/assets/img6159694579f0.jpeg" />
      </div>
      <div id="rights">
        <b>{{name}}</b>
        <p>{{jia}}</p>
      </div>
    </div>
    <div id="jia">
      <ul>
        <li>
          <b>申请数量</b>
        </li>
        <li id="left">
          <span>
            <button type="button">-</button>
          </span>
          <span>1</span>
          <span>
            <button type="button">+</button>
          </span>
        </li>
      </ul>
    </div>
    <div id="yunfei">
      <b id="yun">运费</b>
      <b>免运费</b>
    </div>
    <div id="bei">
      <b>添加备注</b>
      <span>选项，如有需要请以备注告知</span>
    </div>
    <div id="foots">
      <span>
        合计：{{jia}}
      </span>
      <button @click="fu" style="padding: 10px 20px;background-color: #F0E68C;color: white;border: #F0E68C;" type="button">提交订单</button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        adde: [],
        jia:"",
        name:"",
        diname:"",
        xiangqing:"",
        tel:"",
        shu:"",
      }
    },
    methods: {
      fu() {
        var goodsid = this.$route.query.shangpinid
        console.log(goodsid)
        this.$router.push({
          path: '确认',
        })
        this.$axios({
            method: 'get',
            url: 'https://star.qhynice.top/api/wxpay/index',
            params: {
              userid: 73,
              goodsid:goodsid,
              goodsname:this.name,
              username:this.diname,
              address:this.xiangqing,
              phone:this.tel,
              buy_number_count:this.shu,
              total_price:this.jia
            },
          })
          .then(function(response) {
            console.log(response)
          })
      },
      censa() {
        this.$router.push({
          path: 'receiving',
        })
      }
    },
    created() {
      var _this = this
      var keyword_val = this.$route.query.shangpinid;
      console.log(keyword_val)
      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/goods/getinfo',
          params:{
            id:keyword_val
          }
        })
        .then(function(response) {
          console.log(response.data)
          _this.name = response.data.data.name;
          _this.shu = response.data.data.type;
           _this.jia = response.data.data.price*_this.shu;
          // console.log(_this.pro)
        })
      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/address/getaddress',
          params: {
            user_id: '73'
          },
        })
        .then(function(response) {
          _this.adde = response.data.res[0];
          _this.diname = response.data.res[0].name;
          _this.xiangqing = response.data.res[0].address;
          _this.tel = response.data.res[0].add_time;
          console.log(response.data)
        })
    }
  }
</script>

<style scoped>
  .map {
    width: 100%;
    height: 400px;
  }

  #heds p {
    margin-top: 10px;
  }

  #heds img {
    margin-bottom: -10px;
  }

  #heds {
    margin-left: 20px;
  }

  #heds b {
    padding-left: 30%;
    padding-right: 30%;
  }

  #cens {
    margin-left: 30px;
    padding-top: 20px;
  }

  #cens p {
    font-size: 13px;
  }

  #cnet {
    margin-top: 80px;
    margin-left: 30px;
  }

  #rights {
    float: right;
    margin-top: -70px;
    margin-right: 35%;
  }

  #rights p {
    color: #F0E68C;
  }

  #jia {
    padding: 20px 0;
    margin-left: 30px;
  }

  #left {
    float: right;
    margin-top: -20px;
    margin-right: 30px;
    font-size: 13px;
  }

  #yun {
    padding-right: 67%;
  }

  #yunfei {
    margin-left: 30px;
    font-size: 14px;
    padding-bottom: 10px;
  }

  #bei {
    margin-left: 30px;
    padding: 10px 0;
  }

  #bei span {
    font-size: 13px;
    padding-left: 10px;
  }

  #foots {
    margin-top: 63%;
    margin-left: 30px;
  }

  #foots span {
    padding-right: 30%;
    color: #F0E68C;
  }
</style>
