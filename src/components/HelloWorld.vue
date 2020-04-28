<template>
  <div class="footer">
<van-tabbar v-model="active">
 <van-tabbar-item v-for="asl in icon" replace :to='asl.toas' style="padding-top: 10px;">
    <span>{{asl.name}}</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? asl.active : asl.normal"
    >
  </van-tabbar-item>
</van-tabbar>
    </div>
</template>
<script>
 export default {
   data() {
     return {
       active: 0,
       icon: [
         {
         name:"首页",
         toas:'/',
         normal: '../../static/assets/home_0.png',
         active: '../../static/assets/home_1.png'
       },
       {
         name:"我的团队",
         toas:'/two',
         normal: '../../static/assets/团队.png',
         active: '../../static/assets/团队.1.png'
       },
       {
         name:"成为VIP",
         toas:'/three',
         normal: '../../static/assets/vip.png',
         active: '../../static/assets/vip_1.png'
       },
       {
         name:"众星学院",
         toas:'/four',
         normal: '../../static/assets/college.png',
         active: '../../static/assets/college_1.png'
       },
       {
         name:"我的",
         toas:'/five',
         normal: '../../static/assets/mine.png',
         active: '../../static/assets/mine_1.png'
       },
       ]
     }
   }
 }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#asl{
  width: 50%;
  padding-top: 50px;
  margin-left: 20%;
  margin-top: 700px;
  border: 1px solid;
}
</style>
