<template>
  <div class="sl">
    <img style="width: 100%;" src="../../static/assets/QQ图片20191101191426.png" />
    <van-swipe style="margin-top: -120px;" :autoplay="2000" indicator-color="#fff">
      <van-swipe-item v-for="(image, index) in focus" :key="index">
        <img style="width: 80%;padding-left: 10%;" :src="image.images_url">
      </van-swipe-item>
    </van-swipe>
    <div style="position: relative;top: -250px;">
      <van-row>
        <van-col span="3"><img style="height: 40px;padding-left: 10px;padding-top: 10px;" src="../../static/assets/vip_1.png" /></van-col>
        <van-col span="15">
          <form>
            <van-search style="width: 100%;" v-model="value" placeholder="请输入搜索关键词" shape="round" background="false" />
          </form>
        </van-col>
        <van-col @click="ding()" style="padding-top: 15px;padding-left: 25px;" span="4">
          <img style="height: 20px;width: 22px;" src="../../static/assets/message.png" />
          <p style="margin-top: -5px;font-size: 12px;">订单</p>
        </van-col>
      </van-row>
    </div>

    <div style="padding-left: 10%;padding-top: -20px;">
      <van-grid :border="false" :column-num="4.8">
        <van-grid-item v-for="tre in trea" :to="tre.ur">
          <van-image :src="tre.tae" />
          <p style="font-size: 10px;">{{tre.art}}</p>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="dev">
      <div class="dev_als">
        <img src="../../static/assets/money.png" style="width: 30px;height: 30px;margin-top: 12px;" />
        <span style="font-size: 18px; position: absolute;margin-top: 14px;">本月交易量</span>
      </div>
      <div class="dev_las">
        <p style="color: #B3B3B3;font-size: 14px;text-align: center; ">商户交易额(元)</p>
        <p style="color: #F8b602;font-size: 22px; font-weight: bold;text-align: center;">{{mem.member}}</p>
      </div>
      <div class="dev_asw">
        <van-row>
          <van-col span="12">
            <p style="color: red;font-weight: bold;text-align: center;">{{mem.total_price}}</p>
            <p style="font-size: 12px; color: #b3b3b3;text-align: center;">新增会员(人)</p>
          </van-col>
          <van-col span="12">
            <p style="color: red;font-weight: bold;text-align: center;">{{mem.total_count}}</p>
            <p style="font-size: 12px; color: #b3b3b3;text-align: center;">新增VIP(人)</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <van-tabbar route v-model="active">
      <van-tabbar-item v-for="asl in icon" replace :to='asl.toas' style="padding-top: 10px;">
        <span>{{asl.name}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? asl.active : asl.normal">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        name: 'sl',
        active: 0,
        value: "",
        focus: [],
        mem: [],
        trea: [{
            tae: '../../static/assets/user.png',
            art: '用户拓展',
            ur: ''
          },
          {
            tae: '../../static/assets/mall.png',
            art: '商城',
            ur: '/商城'
          },
          {
            tae: '../../static/assets/terminal.png',
            art: '终端'
          },
          {
            tae: '../../static/assets/Invite-friends.png',
            art: '我的商户',
            ur: "/xinshou"
          },
          {
            tae: '../../static/assets/merchants.png',
            art: '邀请好友',
            ur: '/invitation'
          },
          {
            tae: '../../static/assets/list.png',
            art: '排行榜',
            ur: '/ranking'
          },
          {
            tae: '../../static/assets/integral.png',
            art: '积分兑换'
          },
          {
            tae: '../../static/assets/Home.png',
            art: '更多'
          },

        ],

        icon: [{
            name: "首页",
            toas: '/zyk',
            normal: '../../static/assets/home_0.png',
            active: '../../static/assets/home_1.png'
          },
          {
            name: "我的团队",
            toas: '/two',
            normal: '../../static/assets/团队.png',
            active: '../../static/assets/团队.1.png'
          },
          {
            name: "成为VIP",
            toas: '/three',
            normal: '../../static/assets/vip.png',
            active: '../../static/assets/vip_1.png'
          },
          {
            name: "众星学院",
            toas: '/four',
            normal: '../../static/assets/college.png',
            active: '../../static/assets/college_1.png'
          },
          {
            name: "我的",
            toas: '/five',
            normal: '../../static/assets/mine.png',
            active: '../../static/assets/mine_1.png'
          },
        ]
      }
    },
    components: {

    },
    created() {
      var _this = this;
      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/banner/index',
          params: {
            userid: 73
          }
        })
        .then(function(response) {
          _this.focus = response.data.data;
          _this.brand = response.data.brand;
          console.log(response)
        })
      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/banner/monthdata',
          params: {
            userid: 73
          }
        })
        .then(function(response) {
          _this.mem = response.data.data;
          // _this.total_count = response.data.total_count;
          // _this.total_price = response.data.total_price;
          console.log(response.data.data)
        })
    },
    methods: {
      ding() {
        this.$router.push({
          path: '商城',
        })
      }
    }
  }
</script>

<style scoped>
  .dev {
    margin-top: 10px;
    width: 90%;
    margin-left: 5%;
    height: 300px;
    /* background-color: red; */
    border-radius: 5px;
    box-shadow: #666 0px 0px 5px;
  }

  .dev_als {
    padding-bottom: 10px;
    border-bottom: 1px solid #b3b3b3;
  }

  .dev_las {
    padding-top: 10px;

  }

  .dev_asw {
    margin-top: 30px;
  }
</style>
