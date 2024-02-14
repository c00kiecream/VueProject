<template>
    <div>
        <h1 class="padding">결제하시겠습니까?</h1>
        <div class="padding1" :key="i" v-for="(product, i) in orderList">
        <router-link to="/Sales">
            <button type="button" class="btn btn-outline-light" style="color: #1C2474; border:1px solid #1C2474;"
            @click="goToImageInsert(product.id);">결제하기</button>
        </router-link>
    <h5 class="padding2">다시 주문하시겠습니까?</h5>
        <router-link to="/List">
            <button type="button" class="btn btn-outline-light" style="color: #1C2474; border:1px solid #1C2474;">메뉴로 이동</button>
        </router-link>
        </div>
    </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
data() {
    return {
      orderList: {}
    };
  },
  created() {
   this.productId = this.$route.query.product_id;
   this.getorderList();
  },
  methods: {
    async getorderList() {
      this.orderList = await this.$api("/api/e_productList2",{});
      console.log('this.orderList',this.orderList);
    },
    goToImageInsert(product_id) {
      this.$router.push({path:'/ESales', query:{product_id:product_id}}); 
    }
  }
}
</script>