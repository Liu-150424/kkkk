<template>
  <div id="asss">
    <!-- 背景 -->
    <div class="banner">
      <img src="../../static/assets/QQ图片20191101191426.png" />
      <van-row style="position: relative;top: -60px;">
        <van-col span="5"><img style="width: 25%;height: 22px;padding-left: 14%;" src="../../static/assets/左箭头.png"></van-col>
        <van-col span="9" offset="4"><span style="color: white;text-align: center;padding-bottom: 17px;">众星商学院</span></van-col>
      </van-row>
    </div>
    <!-- 搜索框 -->
    <div class="tap">
      <van-search placeholder="搜索" v-model="value" shape="round" />
    </div>
    <!-- 六张图 -->
    <div class="diagram">
      <!-- <van-grid :border="false" :column-num="3.0" >
        <van-grid-item v-for="diagra in diag" :to="diagra.aop">
          <van-image :src="diagra.dia" />
        </van-grid-item>
      </van-grid> -->
      <van-row type="flex" justify="space-between">
        <van-col span="8" offset="2">
          <img @click="buta" style="width: 80%;" src="../../static/assets/Beginners.png" />
        </van-col>
        <van-col span="8">
          <img @click="butb" style="width: 80%;" src="../../static/assets/one.png" />
        </van-col>
        <van-col span="8">
          <img @click="butc" style="width: 80%;" src="../../static/assets/to.png" />
        </van-col>
      </van-row>
      <van-row type="flex" justify="space-between">
        <van-col span="8" offset="2">
          <img @click="butd" style="width: 80%;" src="../../static/assets/new-star.png" />
        </van-col>
        <van-col span="8">
          <img @click="bute" style="width: 80%;" src="../../static/assets/higher.png" />
        </van-col>
        <van-col span="8">
          <img @click="butf" style="width: 80%;" src="../../static/assets/the.png" />
        </van-col>
      </van-row>
    </div>
    <!-- 边框 -->
    <div class="frame">
    </div>
    <!-- 内容 -->
    <div>
      <img id="addew" style="width: 30%;display: none;" :src="'https://star.qhynice.top' +  ima" />
      <p style="text-align: center;">{{titl}}</p>
      <div v-html="xins.content"></div>
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
        active: 0,
        value: "",
        xins: [],
        ima: "",
        titl:"",
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
    methods: {
      buta() {
        var _this = this;
        this.$axios({
            method: 'get',
            url: 'https://star.qhynice.top/api/business/articlelist',
            params: {
              category_id: 29
            }
          })
          .then(function(response) {
            console.log(response.data.content[0])
            _this.xins = response.data.content[0]
            _this.ima = response.data.content[0].images
            _this.titl = response.data.content[0].title
            _this.depict = response.data.content[0].depict
          })
          var a = document.getElementById("addew")
          a.style.display= "block";
      },
      butb() {
        var _this = this;
        this.$axios({
            method: 'get',
            url: 'https://star.qhynice.top/api/business/articlelist',
            params: {
              category_id: 30
            }
          })
          .then(function(response) {
            console.log(response.data)
            _this.xins = response.data.content[0]
            _this.ima = response.data.content[0].images
            _this.titl = response.data.content[0].title
            _this.depict = response.data.content[0].depict
          })
      },
      butc() {
        var _this = this;
        this.$axios({
            method: 'get',
            url: 'https://star.qhynice.top/api/business/articlelist',
            params: {
              category_id: 31
            }
          })
          .then(function(response) {
            console.log(response.data.content[0])
            _this.xins = response.data.content[0]
            _this.ima = response.data.content[0].images
            _this.titl = response.data.content[0].title
            _this.depict = response.data.content[0].depict
          })
      },
      butd() {
        var _this = this;
        this.$axios({
            method: 'get',
            url: 'https://star.qhynice.top/api/business/articlelist',
            params: {
              category_id: 32
            }
          })
          .then(function(response) {
            console.log(response.data.content[0])
            _this.xins = response.data.content[0]
            _this.ima = response.data.content[0].images
            _this.titl = response.data.content[0].title
            _this.depict = response.data.content[0].depict
          })
      },
      bute() {
        var _this = this;
        this.$axios({
            method: 'get',
            url: 'https://star.qhynice.top/api/business/articlelist',
            params: {
              category_id: 33
            }
          })
          .then(function(response) {
            console.log(response.data.content[0])
            _this.xins = response.data.content[0]
            _this.ima = response.data.content[0].images
            _this.titl = response.data.content[0].title
            _this.depict = response.data.content[0].depict
          })
      },
      butf() {
        var _this = this;
        this.$axios({
            method: 'get',
            url: 'https://star.qhynice.top/api/business/articlelist',
            params: {
              category_id: 34
            }
          })
          .then(function(response) {
            console.log(response.data.content[0])
            _this.xins = response.data.content[0]
            _this.ima = response.data.content[0].images
            _this.titl = response.data.content[0].title
            _this.depict = response.data.content[0].depict
          })
      }
    }
  }
</script>

<style scoped>
  .banner img {
    width: 100%;
    height: 4.375rem;
  }

  .tap {
    position: absolute;
    width: 100%;
    margin-top: -48px;
  }

  .van-field__left-icon .van-icon,
  .van-field__right-icon .van-icon {
    padding-left: 9.375rem;
  }

  .frame {
    background-color: #B3B3B3;
    width: 100%;
    height: 1rem;
    margin-top: 15px;
  }

  .content {
    width: 100%;
  }

  .content_img {
    margin-left: 3.5%;
    padding-top: 15px;
    width: 30%;
    float: left;
  }

  .content_text {
    margin-left: 5%;
    padding-top: 15px;
    font-size: 13px;
    width: 60%;
    float: right;
    line-height: 4px;
    color: #B3B3B3;
  }
</style>
