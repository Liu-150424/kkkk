<template>
  <div>
    <div style="background-image: url(../../static/assets/111.jpg);width: 100%;height: 850px;margin-top: -30px;">
      <div style="border-bottom: 1px solid #e5b040;">
        <p style="font-size: 25px;text-align: center;color: white;padding-top: 40px;">登录</p>
      </div>
      <div style="text-align: center;margin-top: 60px;color: white;">
        账号：<input style="width: 85%;border: none;background-color: #453120;" v-model="value" type="text" value="value" />
        <p style="color: white;font-size: 12px;">{{ts}}</p>
      </div>
      <div style="text-align: center;margin-top: 40px;color: white;">
        密码：<input style="width: 85%;border: none;background-color: #453120;" v-model="value1" type="password"
          value="value1" />
        <p style="color: white;font-size: 12px;">{{tse}}</p>
      </div>
      <div style="text-align: center;margin-top: 40px;">
        <button @click="but" style="width: 30%;background-color: #e5b040;border: none;height: 45px;">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: "",
        value1: "",
        ts: "",
        tse: ""
      }
    },
    inject: ['reload'],
    methods: {
      but() {
        var _this = this
        var items = JSON.parse(localStorage.getItem("msgBody"))
        console.log(items)
        var a = items.length
        console.log(a)
        for (let i in items) {
          if (this.value != items[i].user) {
            this.reload()
            this.ts = "请输入正确的账号"
          } else if (this.value1 != items[i].content) {
            this.tse = "请输入正确的密码"
            this.reload()
          } else {
            this.$router.push("zyk")
          }
        }
      }
    }
  }
</script>

<style>
</style>
