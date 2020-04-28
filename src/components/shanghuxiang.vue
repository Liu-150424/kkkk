<template>
  <div>
    <div class="prof_top">
      <van-row>
        <van-col span="2" offset="2" class="arow_max">
          <span style="font-size: 22px;" @click="fanhui">
            <</span> </van-col> <van-col span="5"><span style="font-size: 18px;position: relative;top: 12px;">商户详情</span>
        </van-col>
      </van-row>
    </div>
    <div>
      <van-row>
        <van-col span="4" offset="18">
          <p style="color: #f0a839;" @click="zhuan(userinfo.id)">转移商户</p>
        </van-col>
      </van-row>
      <div style="position: relative;top: -10px;">
        <van-row>
          <van-col span="3" offset="2">
            <img style="width: 80%;" :src="userinfo.img" />
          </van-col>
          <van-col span="3">
            <p>{{userinfo.name}}</p>
          </van-col>
          <van-col span="7" offset="9">
            <p>{{userinfo.phone}}</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="baw">

    </div>
    <div style="border-bottom: 1px solid #e5e5e5;">
      <van-row>
        <van-col span="9" offset="2">
          <div style="border-right: 1px solid #e5e5e5;">
            <p>{{thismonth.thismonth}}</p>
            <p style="color: #e6e6e6;">本月交易额(元)</p>
          </div>
        </van-col>
        <van-col span="9" offset="4">
          <div>
            <p>{{thismonth.count}}</p>
            <p style="color: #e6e6e6;">累计商户交易额(元)</p>
          </div>
        </van-col>
      </van-row>
    </div>
    <div style="margin-top: 20px;">
      <van-row>
        <van-col span="6" offset="2"><span>交易额(元)</span></van-col>
        <van-col span="5" offset="10"><span @click="qi" id="qiri">7日</span>   <span @click="ban" id="bannian" style="background-color: red;">半年</span></van-col>
      </van-row>
    </div>
    <div id="main" style="width: 100%;height: 400px;margin-top: 40px;opacity:0;position: absolute;"></div>
    <div id="mains" style="width: 100%;height: 400px;margin-top: 40px;opacity: 100;position: absolute;"></div>
  </div>
</template>

<script>
  import qs from 'qs'
  import echarts from 'echarts'
  export default {
    data() {
      return {
        userinfo: [],
        thismonth: [],
        charts: '',
      }
    },
    methods: {
      drawLine(id) {
        console.log(this.total)
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["1日", "2日", "3日", "4日", "5日", "6日", "7日",
            ]
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false
            }
          },
          series: [{
            name: '近七日收益',
            type: 'line',
            stack: '总量',
            data: this.total,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#20A0FF'
                }
              },
            },
          }]
        })
      },
      drawLines(id) {
        console.log(this.total)
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["1月", "2月", "3月", "4月", "5月", "6月",
            ]
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false
            }
          },
          series: [{
            name: '近七日收益',
            type: 'line',
            stack: '总量',
            data: this.totals,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#20A0FF'
                }
              },
            },
          }]
        })
      },
      fanhui(){
        this.$router.push({
          path: 'shanghu',
        })
       },
       zhuan(id){
         console.log(id)
         this.$router.push({
           path: 'zhuanyi',
           query:{
              id:id
           }
         })
       },
       qi(){
          var qiri = document.getElementById("mains")
          var col = document.getElementById("qiri")
          var cols = document.getElementById("bannian")
          var yue = document.getElementById("main")
          qiri.style.opacity = "0"
          yue.style.opacity = "100"
          col.style.backgroundColor = "red"
          cols.style.backgroundColor = "white"
       },
       ban(){
                 var qiri = document.getElementById("mains")
                 var yue = document.getElementById("main")
                 var col = document.getElementById("qiri")
                 var cols = document.getElementById("bannian")
                 qiri.style.opacity = "100"
                 yue.style.opacity = "0"
                 col.style.backgroundColor = "white"
                 cols.style.backgroundColor = "red"
              }
    },
    created() {
      var _this = this;
      var keyword_val = this.$route.query.ar;
      let keydata = ({
        id: keyword_val,
      })
      this.$axios.post('https://star.qhynice.top/api/mymerchant/getuserInfo', qs.stringify(keydata))
        .then((response) => {
          console.log(response.data.userinfo)
          _this.userinfo = response.data.userinfo
          _this.thismonth = response.data.sn_money
          _this.total = response.data.seven_days
          _this.totals = response.data.year_days
          _this.userinfo.img = "../../static/assets/Head-portrait（1）.png"
           this.drawLine('main')
           this.drawLines('mains')
        })
    },
  }
</script>

<style scoped>
  .prof_top {
    height: 50px;
    background-color: #f8f8f8;
  }

  .arow_max {
    margin-top: 10px;
  }

  .baw {
    height: 40px;
    width: 100%;
    background-color: #eeede8;
    margin-top: 20px;
  }
</style>
