<template>
  <div class="addeds">
    <van-address-edit :area-list="areaList" show-postal show-delete show-set-default show-search-result :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave"/>
  </div>
</template>

<script>
  import areaList from '../../static/assets/area.js'
  import qs from 'qs'
  export default {
    data() {
      return {
        areaList,
        searchResult: []
      }
    },

    methods: {
      onSave(content) {
        var _this = this;
        // this.content=content;
        // console.log(content)
        this.$router.push({
          path: 'receiving',
        })
        let keydata = ({
          // cat_id:keyword_val,
          user_id: 73,
          name: content.name,
          phone: content.tel,
          address: content.addressDetail,
          is_default: "1",
        })
        this.$axios.post('https://star.qhynice.top/api/address/index', qs.stringify(keydata))
          .then((response) => {
            console.log(response.data)
          })
      },
    },
  }
</script>

<style>
</style>
