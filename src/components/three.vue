<template>
  <div id="asse">
    <!-- 顶部导航 -->
    <div>
      <img style="width: 100%;height: 18rem;" src="../../static/assets/QQ图片20191101191426.png" />
      <van-row style="position: relative;top: -17.5rem;">
        <van-col span="5"><img style="width: 30%;padding-left: 30%;padding-bottom: 17px;" src="../../static/assets/左箭头.png"></van-col>
        <van-col span="9" offset="4"><span style="color: white;text-align: center;padding-bottom: 17px;">成为vip</span></van-col>
        <img style="width: 90%;margin-left: 5%;height: 12rem;" src="../../static/assets/card.png" />
        <!-- 人物简介 -->
        <img style="width: 10%;position: absolute;right: 79%;top: 30%;" src="../../static/assets/Head.png" />
        <p style="position: absolute;top: 20%;left: 30%;font-size: 13px;">朱广峰</p>
        <img style="position: absolute;right: 42%;top: 35%;width: 30%;" src="../../static/assets/partnership.png" />
        <p style="position: absolute;top: 29%;left: 35%;color: white;font-size: 18px;">高级合伙人</p>
        <!-- 图片 -->
        <div style="position: absolute;top: 50%;width: 100%;">
          <van-row type="flex" justify="center" style="margin-left: -15%;">
            <van-col span="4.5" v-for="las in lasw">
              <img style="width: 30px;margin-left: 40px;" :src="las.pasw" />
              <p style="margin-left: 45px;font-size: 10px;">{{las.iosa}}</p>
              </van-col>
          </van-row>
        </div>
      </van-row>
    </div>
    <!-- 背景 -->
   <div>
      <img style="width: 100%;margin-top: -360px;position: relative;height: 650px;" src="../../static/assets/background.png" />
    </div>
    <!-- 超级权益 -->
    <div style="position: absolute;top: 25%;width: 100%;">
      <p style="text-align: center;font-size: 17px;color: #ccb785;"><span style="padding-right: 10px;">O</span>尊享超级权益<span style="padding-left: 10px;">O</span></p>
      <div class="alsww" v-for="paso in pae" style="border: 1px solid #ccb785;padding-top: 30%;width: 80%;margin-left: 10%;border-radius: 25px;line-height: 2px;margin-top: 10px;">
        <p style="margin-top: -35%;margin-left: -65%;color: #ccb785;font-size: 12px;">{{paso.tai}}</p>
        <p>{{paso.one}}</p>
        <p>{{paso.two}}</p>
        <p>{{paso.one1}}</p>
        <p>{{paso.two1}}</p>
        <p>{{paso.one2}}</p>
        <p>{{paso.two2}}</p>
      </div>
      <!-- 底部 -->
      <div>
        <img @click="via" style="width: 60%;margin-left: 20%;margin-top: 20px;" src="../../static/assets/button.png" />
      </div>
    </div>
<van-tabbar route v-model="active">
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
              data(){
                return{
                  active: 0,
                  lasw: [
                    {
                      pasw:'../../static/assets/VIP2.png',
                      iosa:'VIP'
                    },
                    {
                      pasw:'../../static/assets/team.png',
                      iosa:'建队'
                    },
                    {
                      pasw:'../../static/assets/promote.png',
                      iosa:'推广'
                    },
                    {
                      pasw:'../../static/assets/as.png',
                      iosa:'积分'
                    }
                  ],
                  pae:[
                    {
                      tai:'如何成为会员',
                      one:'1.xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                      two:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                      one1:'2.xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                      two1:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                      one2:'3.xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                      two2:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                      },
                      {
                        tai:'成为会员的权益',
                        one:'1.xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                        two:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                        one1:'2.xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                        two1:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                        one2:'3.xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                        two2:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                        },
                        {
                          tai:'成为VIP的权益',
                          one:'1.xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                          two:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                          one1:'2.xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                          two1:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                          one2:'3.xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                          two2:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                          }
                  ],
                  icon: [
                    {
                    name:"首页",
                    toas:'/zyk',
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
              },
              methods:{
                via(){
                    this.$router.push({
                      path:'商城',
                    })
                }
              }
  }
</script>

<style scoped>
.alsww p{
  text-align: center;
  color: #ccb785;
}
</style>
