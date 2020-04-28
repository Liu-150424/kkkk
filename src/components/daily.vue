<template>
  <div class="dia">
    <!-- toubu -->
    <div class="prof_top">
      <van-row>
        <van-col span="5" class="arow_max" @click='ashd()'>
          <</van-col> <van-col span="9" offset="5"><span>收益日报</span>
        </van-col>
      </van-row>
    </div>
    <strong class="ha">2019年8月20日日报</strong>
    <div class="ribao">
      <van-row>
        <van-col span="10" offset="2" style="padding-top: 40px;">
          <p>激活奖励</p>
          <p>{{da.activate}}</p>
        </van-col>
        <van-col span="10" offset="2" style="padding-top: 40px;">
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
    <div class="riqi">
      <vue-datepicker-local v-model="time" />
    </div>
    <!-- 折线图 -->
    <div class="bot">
      <div id="main" style="width: 100%;height: 400px;"></div>
    </div>
  </div>
</template>

<script>
  import VueDatepickerLocal from 'vue-datepicker-local'
  import echarts from 'echarts'
  export default {
    components: {
      VueDatepickerLocal
    },
    name: '',
    data() {
      return {
        da: [],
        time: new Date(),
        charts: '',
        total: []
      }
    },
    methods: {
      ashd() {
        this.$router.push({
          path: 'profit',
        })
      },
      glob() {
        var _this = this;
        this.$axios({
            method: 'get',
            url: 'https://star.qhynice.top/api/personal/report_d',
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
            data: ["1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "9日", "10日", "11日", "12日", "13日", "14日", "15日",
              "16日", "17日", "18日", "19日", "20日", "21日",
              "22日", "23日", "24日", "25日", "26日", "27日", "28日", "29日", "30日", "31日",
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
    },
    //调用
    mounted() {
      this.glob()
    },
  }
</script>

<style scoped>
  .riqi {
    position: absolute;
    top: 105px;
    left: 3%;
  }

  .bot {
    margin-top: 60px;
  }

  .prof_top {
    position: relative;
    top: 15px;
  }

  .ha {
    display: block;
    margin-top: 40px;
    margin-left: 5%;
  }

  .ribao p {
    color: gray;
    font-size: 0.8125rem;

  }

  .ribao {
    box-shadow: 0px 0px 10px black;
    margin: 0.3125rem;
    width: 96%;
    margin-left: 2%;
    text-align: left;
  }
</style>
