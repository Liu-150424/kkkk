<template style="background-image: url(../../static/assets/beijing.jpg);">
  <div class="shop">
    <div class="shop_head">
      <h3 style="margin-left: -65%;margin-top: 25px;">大POS</h3>
    </div>
      <van-grid  :border="false" :column-num="2">
          <van-grid-item class="woa" v-for="commoditys in commodity" @click="aow(commoditys.id)">
              <img style="width: 50%;" :src="commoditys.images" />
              <p>{{commoditys.name}}</p>
            </van-grid-item>
      </van-grid>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        current: 0,
        commodity:[],
      }
    },
    methods: {
      buts() {
        this.$router.push({
          path: '/购买'
        })
      },
      aow(id){
        // console.log(id)
        this.$router.push({
          path: '购买',
          query: {
            id: id
          }
        })
      }
    },
    created() {
      var _this = this;
      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/goods/index',
        })
        .then(function(response) {
          console.log(response.data.data)
          _this.commodity = response.data.data;
          // console.log(_this.pro)
        })
    },
  }
</script>


<style scoped>
  * {
    text-align: center;
  }

  .shop_di {
    margin-top: 0.75rem;
  }

  .shouji_nei {
    font-size: 0.5rem;
    /* position: absolute;
      top: 0.625rem; */
    margin-top: -11.5rem;
  }

  .shouji {
    width: 17%;
  }

  .shop_head {
    border-bottom: 0.0625rem gray solid;
    width: 94%;
    margin-left: 3%;
    margin-top: -1.47rem;
    padding: 0.3rem;
  }

  .shop {
    background-image: url(../../static/assets/beijing.jpg);
    margin-top: -1.625rem;
    height: 64rem;
  }

  .shop_shouji {
    width: 100%;
    margin-top: 0.625rem;
  }

  .shouji_kuang1 {
    padding: 0.3125rem;
    background: white;
    width: 168%;
  }

  .shouji_kuang2 {
    padding: 0.3125rem;
    background: white;
    width: 168%;
  }

  .img1 {
    width: 100%;
  }

  .img2 {
    width: 100%;
  }

  .but {
    background-color: #FF8C00;
    border-radius: 15%;
    color: white;
  }
</style>
