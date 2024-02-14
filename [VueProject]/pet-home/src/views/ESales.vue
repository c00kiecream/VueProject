<template>
  <main>
      <div class="mb-1">
        <h3 style="text-align:center;">결제하기</h3>
      </div>

      <div class="container">
        <div class="row box_border p-10">
            <h5 class="fw-bold">매장</h5>
            <div class="col-8">
              <h6 >신논현역점</h6>
            </div>
            <div class="col-4">
              <p>서울 강남구 강남대로 476 어반하이브</p>
            </div>
        </div>
        <div :key="i" v-for="(product, i) in productList">
          <div class="row box_border p-10">
            <h6 class="fw-bold">주문내역</h6>
            <div class="col">
              <img v-if="product.path!=null" :src="`/download/${product.product_id}/${product.path}`" style="height:100px;width:auto;" />
            </div>
            <div class="col d-flex flex-column">
              <span>제품명:</span>
              <span>온도:</span>
              <span>컵선택:</span>
              <span>픽업방법:</span>
            </div>
            <div class="col d-flex flex-column">
              <span>{{ product.product_name }}</span>
              <span class="badge bg-dark me-5">{{ product.temp_description }}</span>
              <span class="badge bg-dark me-5">{{ product.cup_description }}</span>
              <span class="badge bg-dark me-5">{{ product.pickup_description }}</span>
            </div>
          </div>
          <div class="row box_border p-10">
            <div class="col-8">
              <h6 class="fw-bold">최종 결제 금액</h6>
            </div>
            <div class="col-4">
              <span>{{ product.order_price }}</span>
            </div>
          </div>
        </div>
      </div>
  </main>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */

export default {
  data() {
    return {
      productId: 0,
      productList: []
    };
  },
  created() {
    this.productId = this.$route.query.product_id;
    this.getProductList();
  },
  methods: {
    async getProductList() {
      this.productList = await this.$api("/api/e_productList2",{ param: [this.productId] });
      console.log('this.productList2 는??',this.productList);
    },
    goToInsert() {
      this.$router.push({path:'/EproductCreate'}); //페이지 router이동
    },
    goToDetail(product_id) {
     this.$router.push({path:'/EDetailView', query:{product_id:product_id}}); 
    },
    goToUpdate(product_id) {
      this.$router.push({path:'/EproductUpdate', query:{product_id:product_id}}); 
    },
    goToImageInsert(product_id) {
      this.$router.push({path:'/EimageInsert', query:{product_id:product_id}}); 
    },
    deleteProduct(product_id) {
      this.$swal.fire({
        title: '정말 삭제하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: `삭제`,
        cancelButtonText: `취소`
      }).then(async (result) => {
        if (result.isConfirmed) {
          console.log(product_id)
          await this.$api("/api/e_productDelete",{param:[product_id]});
          this.getProductList();
          this.$swal.fire('삭제되었습니다!', '', 'success')
        } 
      });
    }
  }
}

</script>

<style scoped>
.p-10 {
  padding: 15px;
}

div {
  font-size: 16px;
}

body {
  background:#ececec;
}
.box_border{
  width: 90%;
  background-color:white;
  border-radius:15px;
  border: solid 1px green; 
}
</style>