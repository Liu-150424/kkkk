<template>
  <div id="ass">
    <img style="width: 100%;" src="../../static/assets/QQ图片20191101191426.png" />
    <van-row style="position: relative;top: -11.25rem;">
      <van-col span="4"><img style="width: 30%;padding-left: 2.5rem;" src="../../static/assets/左箭头.png"></van-col>
      <van-col span="10" offset="4"><span style="padding-left: 50px;color: white;">我的团队</span></van-col>
    </van-row>
    <div style="padding-top: -40px;">
      <img style="height: 165px;margin-top: -12.125rem;opacity: 0.9;padding-left: 4%;position: absolute;width: 90%;"
        src="../../static/assets/base.png" />
      <p style="position: relative;top: -175px;padding-left: 35px;">本月团队交易量</p>
      <p style="text-align: center;position: relative;top: -190px;font-size: 30px;"><span style="font-size: 45px;">￥</span>222222.11</p>
    </div>
    <div>
      <van-tabs style="margin-top: -155px;" @click="ajw">
        <van-tab title="一级">
          <van-divider style="margin-top: -2px;" />
          <van-dropdown-menu style="height: 1.25rem;">
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
            <van-dropdown-item v-model="value3" :options="option3" />
          </van-dropdown-menu>
          <van-divider />
          <div class="lot" v-for="apas in oneji">
            <div style="float: left;padding-left: 15px;">
              <img style="border-radius: 50%;height: 40px;width: 40px;" :src="apas.avatar" />
            </div>
            <div style="float: left;margin-top: -9px;">
              <p>{{apas.account}}</p>
              <p><span v-if="apas.status == 0">会员</span><span v-if="apas.status == 1">VIP</span><span v-if="apas.status == 2">合伙人</span><span
                  style="padding-left: 150px;">{{apas.num}}</span></p>
            </div>
            <div style="float: right;margin-top: -18px;">
              <p>{{apas.money}}</p>
              <p>{{apas.parentname}}</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="二级">
          <van-divider style="margin-top: -2px;" />
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
            <van-dropdown-item v-model="value3" :options="option3" />
          </van-dropdown-menu>
          <van-divider />
          <div class="lot" v-for="aps in xinde">
            <div style="float: left;padding-left: 15px;">
              <img style="border-radius: 50%;height: 40px;width: 40px;" :src="aps.avatar" />
            </div>
            <div style="float: left;margin-top: -9px;">
              <p>{{aps.account}}</p>
              <p><span v-if="aps.status == 0">会员</span><span v-if="aps.status == 1">VIP</span><span v-if="aps.status == 2">合伙人</span><span
                  style="padding-left: 150px;">{{aps.num}}</span></p>
            </div>
            <div style="float: right;margin-top: -18px;">
              <p>{{aps.money}}</p>
              <p>{{aps.parentname}}</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="三级">
          <van-divider style="margin-top: -2px;" />
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
            <van-dropdown-item v-model="value3" :options="option3" />
          </van-dropdown-menu>
          <van-divider />
        </van-tab>
      </van-tabs>
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
        // sta:"",
        oneji: [],
        active: 0,
        value1: 0,
        value2: 'a',
        value3: 'd',
        erji: [],
        xinde: [],
        option1: [{
            text: '本月累积',
            value: 0
          },
          {
            text: '上月累积',
            value: 1
          },
        ],
        option2: [{
            text: '会员数',
            value: 'a'
          },
          {
            text: '交易额',
            value: 'b'
          },
        ],
        option3: [{
            text: '合伙人',
            value: 'd'
          },
          {
            text: '会员',
            value: 'e'
          },
          {
            text: '全部',
            value: 'f'
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
    methods: {
      ajw(name, title) {
        var _this = this
        var xinde = []
        if (this.xinde == "") {
          for (let i in this.oneji) {
            this.$axios({
                method: "post",
                url: "https://star.qhynice.top/api/team/teamone",
                params: {
                  userid: this.oneji[i].id,
                },
              })
              .then(function(res) {
                // console.log(res)
                _this.erji = res.data.one
                if (res.data.state == 1) {
                  for (let l in res.data.one) {
                    _this.xinde.push(res.data.one[l])
                  }
                } else {

                }
              })
          }
        } else {

        }
      }
    },
    created() {
      var _this = this
      this.$axios({
          method: "get",
          url: "https://star.qhynice.top/api/team/teamone",
          params: {
            userid: 73,
            type: 1,
          },
        })
        .then(function(res) {
          // console.log(res)
          _this.oneji = res.data.one
        })

    },

  };
</script>

<style scoped>
  .van-tabs__line {
    background-color: black;
  }

  [class*="van-hairline"]::after {
    border: none;
  }

  .lot {
    width: 98%;
    height: 50px;
    padding-top: 10px;
    border-bottom: 1px solid #ebedf0;
    border-left: 1px solid #ebedf0;
    border-top: 1px solid #ebedf0;
    margin-left: 1%;
    font-size: 12px;
  }
</style>
