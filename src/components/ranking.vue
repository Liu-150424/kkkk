<template>
  <div class="rank">
    <!-- 头部 -->
    <div class="rank_top">
      <van-row>
        <van-col style="font-size: 20px;" span="5" class="arow_max"><</van-col>
        <van-col span="9" offset="5"><span>排行榜</span></van-col>
      </van-row>
    </div>
    <!-- 红色部分 -->
    <div class="rank_re">
        <div class="rank_h">
          <h2>TOP</h2>
        </div>
        <div>
          <p class="rank_te">20</p>
          <p class="rank_la">全国激活工具TOP</p>
        </div>
    </div>

    <div class="rank_like">
      <p>排名</p>
      <p>伙伴</p>
      <p>激活量</p>
    </div>
    <div class="saw">
      <div class="rank_opa" v-for="pa in pas">
      <p class="oane">{{pa.te}}</p>
      <p>{{pa.te2}}</p>
      <p>{{pa.te3}}</p>
    </div>
    </div>

  </div>
</template>

<script>
  export default{
    data(){
      return{
        pas:[
          {
            te:'1',
            te2:'刘旭红',
            te3:'19'
          },
          {
            te:'2',
            te2:'刘旭红',
            te3:'19'
          },
          {
            te:'3',
            te2:'刘旭红',
            te3:'19'
          },
          {
            te:'4',
            te2:'刘旭红',
            te3:'19'
          },
          {
            te:'5',
            te2:'刘旭红',
            te3:'19'
          },
          {
            te:'6',
            te2:'刘旭红',
            te3:'19'
          },
          {
            te:'7',
            te2:'刘旭红',
            te3:'19'
          },
          {
            te:'8',
            te2:'刘旭红',
            te3:'19'
          },
          {
            te:'9',
            te2:'刘旭红',
            te3:'19'
          },
          {
            te:'10',
            te2:'刘旭红',
            te3:'19'
          },
          {
            te:'11',
            te2:'刘旭红',
            te3:'19'
          },
          {
            te:'12',
            te2:'刘旭红',
            te3:'19'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .rank_top{
    position: relative;
    top: 15px;
  }
  .rank_re{
    width: 100%;
    height: 140px;
    margin-top: 30px;
    background-color: red;
    display: flex;
    justify-content: space-around;
  }
  .rank_h h2{
    font-size: 45px;
    color: #FF8C00;
  }
  .rank_te{
    font-size: 25px;
    margin-top: 50px;
    color: #FF8C00;
  }
  .rank_la{
    margin-top: -25px;
    color: white;
    font-size: 12px;
  }
  .rank_like{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #B3B3B3;
    height: 50px;
    background-color: #EBEDF0;
    padding: 0px 15px;
  }
  .rank_opa{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #B3B3B3;
    height: 70px;
    padding: 0px 15px;
  }
  .oane{
    border: 1px solid;
    border-radius: 50%;
    width: 4%;
    height: 25px;
    padding-left: 5px;
    background-color: #808080;
  }
  .saw{
    overflow: scroll;
    height: 540px;
  }
  .saw>div:nth-child(-n+3){
    color: red;
  }
</style>
