<template>
  <div class="tixian">
    <div class="prof_top">
      <van-row>
        <van-col span="2" offset="2" class="arow_max">
          <span style="font-size: 22px;">
            <</span> </van-col> <van-col span="4"><span style="font-size: 18px;position: relative;top: 12px;">提现</span>
        </van-col>
      </van-row>
    </div>
    <div style="border-bottom: 1px solid #e8e8e8;margin-top: 10px;">
      <van-cell-group>
        <van-field v-model="username" clearable label="用户名" :error-message="aoa" placeholder="请输入用户名" :input="awa()"
          @click-right-icon="$toast('question')" />
      </van-cell-group>
    </div>
    <div style="margin-top: 10px;border-bottom: 1px solid #e8e8e8;">
      <van-cell-group>
        <van-field v-model="usernames" clearable label="身份证号" :input="aea()"  :error-message="ado" placeholder="请输入身份证" @click-right-icon="$toast('question')" />
      </van-cell-group>
    </div>
    <div style="margin-left: 15px;color: #4b3233;">
      <p>提现方式</p>
    </div>
    <div style="padding-left: 15px;border-top: 1px solid #e8e8e8;border-bottom: 1px solid #e8e8e8;padding-top: 15px;padding-bottom: 15px;margin-top: 10px;">
      <van-checkbox v-model="checked"><span>微信零钱</span></van-checkbox>
    </div>
    <div style="padding-left: 15px;border-top: 1px solid #e8e8e8;border-bottom: 1px solid #e8e8e8;padding-top: 15px;padding-bottom: 15px;margin-top: 10px;">
      <van-checkbox v-model="checkeds" disabled><span style="color: #c9c9c9;">6226223006605458</span></van-checkbox>
      <span style="float: right;position: relative;top: -20px;right: 40px;">更改</span>
    </div>
    <div style="border: 1px solid #e8e8e8;margin: 10px 0;padding-bottom: 10px;">
      <div style="margin-left: 15px;padding: 10px 0;">提现金额</div>
      <span style="margin-left: 15px;">
        <input style="border: none;" placeholder="最低提现1元" v-model="jin" :input="ti()"/>
      </span>
    </div>
    <div style="display: flex;justify-content: space-between;border: 1px solid #e8e8e8;margin: 10px 0;padding: 10px;font-size: 14px;">
      <div>手续费:￥{{cost.service_charge}}</div>
      <div>
        可提现
        <span>551.60</span>
        <span style="color: gold;">全部提现</span>
      </div>
    </div>
    <div style="display: flex;justify-content: space-between;border: 1px solid #e8e8e8;margin: 10px 0;padding: 10px;font-size: 14px;">
      <div>预计税后到账￥{{parseInt(jin-(jin*cost.tax_rate)-cost.service_charge)}}</div>
      <div>
        税率扣点
        <span>{{cost.tax_rate}}</span>
      </div>
    </div>
    <div style="font-size: 14px;">
      <van-checkbox v-model="radios">同意
        <span style="color:blue;">《费用结算服务协议》</span>
        的所有条款</van-checkbox>
    </div>
    <div style="padding-top: 90px;">
      <van-button round style='width: 90%;margin-left: 5%;background-color: #8F4E10;color: white;' @click="bta()">提现</van-button>
    </div>
    <div style="text-align: center;font-size: 13px;">
      (新用户请先在个人中心设置支付密码)
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: false,
        checkeds: false,
        radios: false,
        jin: "1",
        username: "",
        usernames: "",
        cost: [],
        aoa:"",
        aco:"",
      };
    },
    created() {
      var _this = this;
      this.$axios({
          method: 'get',
          url: 'https://star.qhynice.top/api/Getmoney/brokerage',
          params: {
            userid: 73
          }
        })
        .then(function(response) {
          console.log(response)
          _this.cost = response.data.cost
        })
    },
    methods: {
      awa() {
        var reg = /^[\u4e00-\u9fa5]+$/;
        if (reg.test(this.username)||this.username=="") {
          this.aoa = ""
        } else {
          this.aoa = "请输入正确的姓名"
        }
      },
      aea() {
        var regs = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
        if (regs.test(this.usernames)||this.usernames=="") {
          this.ado = ""
        } else {
          this.ado = "请输入正确的身份证号"
        }
      },
      ti(){
        if(this.jin%1 === 0&&this.jin>= 0){

        }
        else{
        alert("请输入大于0的整数")
        }
      },
      bta() {
        if (this.username == "" || this.jin == "" || this.checked == false || this.radios == false || this.usernames ==
          "") {
          alert("请填写完整信息")
          // console.log(parseInt(this.jin - (this.jin * this.cost.tax_rate) - this.cost.service_charge))
        } else {
          this.$axios({
              method: 'get',
              url: 'https://star.qhynice.top/api/Getmoney/Addmoney',
              params: {
                userid: 73,
                card: this.usernames,
                name: this.username,
                money: parseInt(this.jin - (this.jin * this.cost.tax_rate) - this.cost.service_charge),
                type: 1,
                service: this.cost.service_charge,
                tmpmoney: this.jin
              }
            })
            .then(function(response) {
              console.log(response)
              if (response.data.status == 2) {
                alert("卡号错误")
              }
              else if (response.data.status == 3) {
                alert("提现成功")
              }
             else if (response.data.status == 4) {
                alert("提现失败")
              }
              else  if (response.data.status == 5) {
                alert("可提现金额不足")
              }
            })
        }
      }
    },
  };
</script>

<style scoped>
  .prof_top {
    height: 50px;
    background-color: #f8f8f8;
  }
  .arow_max {
    margin-top: 10px;
  }
</style>
