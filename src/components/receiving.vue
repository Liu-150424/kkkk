<template>
  <div class="addre">
    <!-- 最上边的 -->
    <div class="cifis_top">
      <span @click="paso">
        <img src="../../static/assets/左箭头.png" />
      </span>
      <p>确认订单</p>
    </div>
    <!-- 阴影 -->
    <div class="my_shadow">
    </div>
    <!-- 信息 -->
    <van-address-list v-model="chosenAddressId" :list="adde"
      @add="onAdd" @edit="onEdit" />
    <!-- anniu -->
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    data() {
      return {
        chosenAddressId: '1',
        adde: [],
      }
    },
    methods: {
      onAdd() {
        this.$router.push({
          path: 'added',
        })
      },
      onEdit(item, index) {
        console.log(item)
       this.$router.push({
         path: 'dizhibianji',
         query: {
           aar:item
         }
       })
      },
      paso() {
        this.$router.push({
          path: '订单',
        })
      },
      butaw(res) {
        var _this = this;
        this.res = res;
        console.log(res)
        // this.$router.push({
        //   path: 'added',
        //   query: {
        //     aar:id
        //   }
        // })
      }
    },
    created() {
      var _this = this
      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/address/getaddress',
          params: {
            user_id: '73'
          },
        })
        .then(function(response) {
          _this.adde = response.data.res;
          console.log(response.data)
          for(let i in response.data.res){
            _this.adde[i].tel = _this.adde[i].phone
          }
        })
    },
  }
</script>

<style scoped>
  .cifis_top p {
    font-size: 14px;
    margin-right: 76%;
  }

  .cifis_top img {
    width: 75%;
    margin-top: 10px;
  }

  .cifis_top {
    display: flex;
    justify-content: space-between;
    margin-left: 5%;
  }

  .my_shadow {
    background-color: #EBEDF0;
    width: 100%;
    height: 10px;
  }

  .addre_left {
    padding-left: 5%;
  }

  .addre_information {
    border-bottom: 1px solid #DCDFE6;
  }

  .addre_dui img {
    width: 15%;
  }

  .addre_dui {
    padding-left: 5%;
  }

  .addre_back {
    background-color: white;
    width: 100%;
  }

  .addre_but {
    width: 80%;
    height: 30px;
    background-color: #00008B;
    text-align: center;
    padding-top: 15px;
    margin-left: 10%;
    margin-top: 30px;
    color: white;
    padding-bottom: 10px;
  }
</style>
