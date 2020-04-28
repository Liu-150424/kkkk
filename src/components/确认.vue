<template>
  <div id="add">
    <div id="pasw">
      <p>
        取消
        <b>
          确认支付
        </b>
      </p>
    </div>
    <div id="lpaap">
      <p id="lpaap_shang">
        <b>订单付款</b>
      </p>
      <p id="lpaap_da">
        <b>￥688.00</b>
      </p>
      <div id="lpaap_xia">
        收款方
        <b>
          盛鑫达有限公司
        </b>
      </div>
    </div>
    <p @click="buts" style="padding: 10px;border: 1px solid #F0E68C;color: white;border-radius: 15px;background-color: #9ACD32;text-align: center;">确认</p>
  </div>
</template>

<script>
  export default {
    methods: {
      buts() {
        this.$router.push({
          path: '购买',
        })
      }
    }
  }
</script>

<style scoped>
  #add {
    background-color: #ebedf0;
    margin-top: -17px;
    height: 740px;
  }

  #pasw {
    padding-top: 15px;
    padding-bottom: 5px;
    margin-left: 20px;
  }

  #pasw b {
    font-size: 19px;
    padding-left: 26%;
  }

  #pasw p {
    margin-bottom: 0;
  }

  #lpaap {
    background-color: white;
  }

  #lpaap p {
    text-align: center;
  }

  #lpaap_shang {
    padding-top: 0.625rem;
  }

  #lpaap_da {
    font-size: 30px;
    border-bottom: 1px solid #ebedf0;
    padding-bottom: 15px;
    margin: 0;
  }

  #lpaap_xia {
    margin-left: 20px;
    padding: 10px 0;
  }

  #lpaap_xia b {
    padding-left: 40%;
  }

  button {
    text-align: center;
    margin-top: 20px;
    width: 94%;
    margin-left: 3%;
    padding: 7px 0;
    border-radius: 7px;
    background-color: yellowgreen;
    color: white;
  }
</style>
