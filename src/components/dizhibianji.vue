<template>
  <div>
    <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result :address-info="AddressInfo"
      :search-result="searchResult" :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete"
      @change-detail="onChangeDetail" />
  </div>
</template>

<script>
  import areaList from '../../static/assets/area.js'
  import qs from 'qs'
  export default {
    data() {
      return {
        areaList,
        searchResult: [],
      }
    },
    created() {
      let keyword_val = this.$route.query.aar;
      console.log(keyword_val)
      this.AddressInfo = ({
        name: keyword_val.name,
        tel: keyword_val.tel,
        addressDetail: keyword_val.address
      })
    },
    methods: {
      onSave() {
        Toast('save');
      },
      onDelete() {
        var _this = this;
        let keyword_val = this.$route.query.aar;
        console.log(keyword_val)
        let keydata = ({
          user_id: 73,
          id: keyword_val.id
        })
        this.$axios.post('https://star.qhynice.top/api/address/del_adds', qs.stringify(keydata))
          .then((response) => {
            console.log(response)
          })
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }];
        } else {
          this.searchResult = [];
        }
      }
    }
  }
</script>

<style>
</style>
