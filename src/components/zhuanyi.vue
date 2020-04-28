<template>
  <div>
    <van-cell-group>
      <van-field v-model="username" label="商户id" placeholder="请输入商户id" @click-right-icon="$toast('question')" />
    </van-cell-group>
    <div style="text-align: center;margin-top: 40px;">
      <img @click="xun" style="width: 15%;" src="../../static/assets/循环.png" />
    </div>
    <van-cell-group style="margin-top: 40px;border-top: none;">
      <van-field v-model="value" label="商户id" placeholder="请输入商户id" @click-right-icon="$toast('question')" />
    </van-cell-group>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    data() {
      return {
        username: "",
        value: "",
      }
    },
    created(){
      var _this=this
      _this.username = this.$route.query.id
      // console.log(this.username)
    },
    methods: {
      xun() {
        var _this = this;
        var keyword_val = this.$route.query.id;
        let keydata = ({
          // id: keyword_val,
          userid: 73,
          pid: keyword_val,
          id: this.value
        })
        this.$axios.post('https://star.qhynice.top/api/mymerchant/save_info', qs.stringify(keydata))
          .then((response) => {
            console.log(response)
          })
      },
    },
  }
</script>

<style>
</style>
