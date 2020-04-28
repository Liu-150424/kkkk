<template>
  <div class="repo">
    <div class="prof_top">
      <van-row>
        <van-col span="5" class="arow_max" @click='sahd()'>
          <</van-col> <van-col span="9" offset="5"><span>收益日报</span>
        </van-col>
      </van-row>
    </div>
    <div class="repo_tab">
      <van-tabs type="card">
        <van-tab title="上个月"> <strong class="ha">2019年8月20日日报</strong>
          <div class="wen">

          </div>
          <div class="yuebao">
            <div>
              <van-cell is-link @click="showPopup">
                选择月份
                <van-field style="margin-left: 60%;margin-top: -35px;" v-model="timeValue" placeholder="" readonly />
              </van-cell>
              <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
                <van-datetime-picker v-model="currentDate" type="date"  @confirm='confi' @cancel='conce'
                  @change="changeFn()" />
              </van-popup>
            </div>
            <van-row>
              <van-col span="10" offset="2">
                <p>激活奖励</p>
                <p>{{da.activate}}</p>
              </van-col>
              <van-col span="10" offset="2">
                <p>推广奖励</p>
                <p>{{da.breed}}</p>
              </van-col>
            </van-row>
            <van-row>
              <van-col span="10" offset="2">
                <p>育成奖励</p>
                <p>{{da.generalize}}</p>
              </van-col>
              <van-col span="10" offset="2">
                <p>分润奖励</p>
                <p>{{da.profit}}</p>
              </van-col>
            </van-row>
          </div>
        </van-tab>
        <van-tab title="近三个月">2</van-tab>
        <van-tab title="近六个月">3</van-tab>
      </van-tabs>
    </div>
<div class="bot">
      <div id="main" style="width: 100%;height: 400px;"></div>
    </div>

  </div>
</template>

<script>
    import echarts from 'echarts'
  export default {
    data() {
      return {
        da:[],
        timeValue: "2019年",
        show: false,
        charts: '',
        currentDate: new Date(),
        total: [],

      }
    },
    created(){
      var _this = this;
      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/personal/report_m',
          params: {
            userid: 73
          }
        })
        .then(function(response) {
          _this.da = response.data
          _this.total = response.data.total
          console.log(response.data.total)
          _this.drawLine('main')
        })
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
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
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
      showPopup() {
        this.show = true;
      },
      sahd() {
        this.$router.push({
          path: 'profit',
        })
      },
      confi() {
        this.timeValue = this.timeFormat(this.currentDate);
        this.show = false;
      },
      conce() {
        this.show = false;
      },
      changeFn() { // 值变化是触发
        this.changeDate = this.currentDate // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)
      },
      confirmFn() { // 确定按钮
        this.timeValue = this.timeFormat(this.currentDate);
        this.show = false;
      },
      timeFormat(time) { // 时间格式化 2019-09-08
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        return year + '年' + month + '月' + day + '日'
      }
    },

  }
</script>

<style scoped>
  .prof_top {
    position: relative;
    top: 15px;
  }

  .repo_tab {
    margin-top: 60px;

  }

  .ha {
    display: block;
    margin-top: 40px;
    margin-left: 5%;
  }

  .yuebao p {
    color: gray;
    font-size: 0.8125rem;
  }

  .wen {
    display: flex;
    justify-content: space-between;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }

  .yuebao {
    box-shadow: 0px 0px 10px black;
    margin: 0.3125rem;
    width: 96%;
    margin-left: 2%;
    text-align: left;
  }
</style>
