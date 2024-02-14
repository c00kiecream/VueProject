<template>
    <h1 class="padding">리뷰 등록이 완료 됐습니다.</h1>
    <h5 class="padding2">추가로 이미지를 등록 하시겠습니까?</h5>
    <div class="padding1" :key="i" v-for="(product, i) in lastId">
      <router-link to="/imageInsert">
    <button type="button" class="btn btn-outline-light" style="color: #1C2474; border:1px solid #1C2474;"
    @click="goToImageInsert(product.id);">이미지 등록</button>
  </router-link>
  <h5 class="padding2">게시판으로 이동 하시겠습니까?</h5>
    <router-link to="/">
    <button type="button" class="btn btn-outline-light" style="color: #1C2474; border:1px solid #1C2474;">게시판 이동</button>
  </router-link>
</div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
data() {
    return {
      lastId: {}
    };
  },
  created() {
	this.productId = this.$route.query.product_id
    this.getLastId();
  },
  methods: {
    async getLastId() {
      this.lastId = await this.$api("/api/lastId",{});
      console.log('this.lastId',this.lastId);
    },
    goToImageInsert(product_id) {
      this.$router.push({path:'/imageInsert', query:{product_id:product_id}}); 
    }
  }
}
</script>
<style>
h1,h5 {
  font-family: 'Nanum Gothic', sans-serif;
  color: #1C2474;
  font-weight: 800;
}
.padding {
    padding-top: 150px;
    padding-bottom: 20px;
}
.padding1 {
    padding-bottom: 250px;
}
.padding2 {
    padding-top:30px;

}
</style>
