<template>
  <div class="purchase">
    <!-- 箭头部分 -->
    <div class="arow">
      <van-row>
        <van-col span="5" class="arow_max">
          <</van-col> <van-col span="9" offset="7"><span>我的</span>
        </van-col>
      </van-row>
    </div>
    <!-- 轮播图 -->
   <div class="banner">
      <van-swipe :autoplay="2000" indicator-color="#fff">
        <van-swipe-item v-for="(image, index) in commodity" :key="index">
          <img style="height: 200px;" :src="commodity.images">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品价钱介绍 -->
    <div class="introduce">
      <p>{{commodity.price}}</p>
      <strong>{{commodity.name}}</strong>
      <span>快递费：免运费</span>
    </div>
    <!-- 推广下边 -->
    <div class="extension">
      <p>推广</p>
      <p>1.xxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      <p>2.xxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      <p>3.xxxxxxxxxxxxxxxxx</p>
      <p>xxxxxxxxxxxxxxxxxxxxxxxx</p>
      <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      <p>4.xxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      <p>xxxxxxxxxxxx</p>
      <p>5.xxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
      <p>6.xxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
    </div>
    <div>
      <button @click="all" style="padding: 5px 20px;background-color: #F0E68C;color: white;border: #F0E68C;width: 100%;margin-top: 15%;"
        type="button">立即申请</button>
    </div>

    <van-sku v-model="show" :sku="sku" :goods="goods"
      :hide-stock="sku.hide_stock" @buy-clicked="onBuyClicked"/>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    // name: 'sl',
    data() {
      return {
        focus: [],
        show: false,
        commodity:[],
        sku: {
          // 数据结构见下方文档
          tree: [

          ],
          list: [{
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }],
          price: '1.00', // 默认价格（单位元）
          stock_num: 227, // 商品总库存
          collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
          none_sku: false, // 是否无规格商品
          messages: [

          ],
          hide_stock: false // 是否隐藏剩余库存
        },
        goods: {
          // 数据结构见下方文档
          title: '测试商品',
          // 默认商品 sku 缩略图
          picture: '../../static/assets/img6159694579f0.jpeg'
        },
        // SwiperImg: [
        //     "../../static/assets/img421616c69d4de70.jpg",
        //     ''
        //   ],
      }
    },
    created() {
      var _this = this;
      var keyword_val = this.$route.query.id;
      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/goods/getinfo',
          params:{
            id:keyword_val
          }
        })
        .then(function(response) {
          console.log(response.data)
          _this.commodity = response.data.data;
          // console.log(_this.pro)
        })
    },
    methods: {
      all() {
        this.show = true;
        return;
      },
      // akl(){
      //   this.$router.push({
      //     path:'订单',
      //   })
      // },

      onBuyClicked: function() {
        console.log(this.$route.query.id)
        this.$router.push({
          path: '订单',
          query: {
            shangpinid: this.$route.query.id
          }
        })
      }
    }
  }
</script>

<style>
  .banner img {
    width: 80%;
    padding-left: 10%;
  }

  .arow {
    position: relative;
    top: 5px;
  }

  .arow_max {
    font-size: 25px;
    padding-left: 9%;
    position: relative;
    top: -8px;
  }

  .arow span {
    color: black;
    text-align: center;
    padding-bottom: 17px;
  }

  .introduce p {
    font-size: 20px;
    color: coral;
    margin-left: 5%;
  }

  .introduce strong {
    font-size: 15px;
    margin-left: 4%;
  }

  .introduce span {
    display: block;
    margin-left: 5%;
    margin-top: 2%;
    font-size: 12px;
    color: #808080;
  }

  .extension {
    overflow: scroll;
    height: 260px;
    width: 90%;
    margin-left: 5%;
    margin-top: 30px;
  }

  .extension p {
    font-size: 20px;
    margin-left: 5%;
  }

  #cnetss {
    display: none;
    position: absolute;
    background-color: white;
    width: 100%;
    height: 35%;
    z-index: 999;
    margin-top: -340px;
  }

  #rightss {
    float: right;
    margin-top: -70px;
    margin-right: 120px;
  }

  #rightss p {
    font-size: 13px;
  }

  #jiajian {
    padding: 50px 0;
    margin-left: 30px;
  }

  #lefts {
    float: right;
    margin-top: -20px;
    margin-right: 40%;
    font-size: 13px;
  }
</style>
