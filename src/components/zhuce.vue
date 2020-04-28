<template>
  <div>
    <div style="background-image: url(../../static/assets/111.jpg);width: 100%;height: 850px;margin-top: -30px;">
      <div style="border-bottom: 1px solid #e5b040;">
        <p style="font-size: 25px;text-align: center;color: white;padding-top: 40px;">注册</p>
      </div>
      <div style="text-align: center;margin-top: 60px;color: white;">
        账号：<input style="width: 85%;border: none;border-bottom: 1px solid #453120;background-color: #453120;" v-model="value" type="text" id="z"
          value="value" />
        <p style="color: white;font-size: 12px;">{{ts}}</p>
      </div>
      <div style="text-align: center;margin-top: 40px;color: white;">
        密码：<input style="width: 85%;border: none;border-bottom: 1px solid #453120;background-color: #453120;" v-model="value1" type="password" id="m"
          value="value1" />
        <p style="color: white;font-size: 12px;">{{tse}}</p>
      </div>
      <div style="text-align: center;margin-top: 40px;">
        <button @click="but" style="width: 30%;background-color: #e5b040;border: none;height: 45px;">注册</button>
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
    methods: {
      but() {
        var items = JSON.parse(localStorage.getItem("msgBody"))
        console.log(items)
       if(items==null){
   var items = JSON.parse(localStorage.getItem("msgBody"))
             var comment = {
               user: this.value,
               content: this.value1
             }
             var templist = JSON.parse(localStorage.getItem("msgBody") || "[]")
             templist.push(comment)
             localStorage.setItem("msgBody", JSON.stringify(templist))
           this.$router.push({path:'denglu'})
       }
       else{
         for (let i in items) {
           if (this.value == items[i].user) {
             this.ts = "该账号已经存在"
           } else {
             var comment = {
               user: this.value,
               content: this.value1
             }
             var templist = JSON.parse(localStorage.getItem("msgBody") || "[]")
             templist.push(comment)
             localStorage.setItem("msgBody", JSON.stringify(templist))
           this.$router.push({path:'denglu'})
           }
         }
       }
      }
    },
  }
</script>

<style>
</style>
