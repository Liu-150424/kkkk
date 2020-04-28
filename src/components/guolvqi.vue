<template>

  <div>
    <input id="val1" v-model="value1">
    显示小写转大写 ： {{ value1 | upper}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: ""
      }
    },
    created(){
      var arr = [[1,2],[1,2],[1,2]]
      var arrs = []
      for(let i in arr){
        arrs.push(arr[i])
      }
    },
    methods: {

    },
    filters: {
      upper: function(value) {
           if (!value) return '';//如果value为false时返回“” input框没值时为false
        // if(value==false) return "1";
        // console.log(!value)
        value = value.toString();//转字符串
        return value.toUpperCase();//转大写
      }
    }
  }
</script>

<style>
</style>
