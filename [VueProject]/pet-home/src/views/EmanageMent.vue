<template>
  <main class="mt-3">
    <div class="container">
      <button type="button" class="btn btn-dark">
        <router-link class="navbar-brand" to="/EproductCreate">제품등록</router-link>
      </button>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th></th>
            <th>제품명</th>
            <th>제품가격</th>
            <th>제품설명</th>
            <th>tags</th>
            <th>카테고리</th>
            <th>관리자모드</th>
          </tr>
        </thead>
        <tbody>
          <!-- for문 -->
          <tr :key="i" v-for="(product, i) in productList">
            <td>
              <img v-if="product.path!=null" :src="`/download/${product.id}/${product.path}`" style="height:50px;width:auto;" />
            </td>
            <td>{{ product.product_name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.product_subtitle }}</td>
            <td>{{ product.tags }}</td>
            <td>{{ product.category_id }}</td>
            <!-- <td>{{ product.categoty }}</td> -->
            <td>
              <button type="button" class="btn btn-info me-1" @click="goToImageInsert(product.id);">사진등록</button>
               <button type="button" class="btn btn-info me-1" @click="goToPriceInsert(product.id);">가격등록</button>
              <button type="button" class="btn btn-warning me-1" @click="goToUpdate(product.id);">수정</button>
              <button type="button" class="btn btn-danger" @click="deleteProduct(product.id);">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */

export default {
  data() {
    return {
      // productId: 0,
      productList: []
    };
  },
  created() {
    // this.productId = this.$route.query.product_id
    this.getProductList();
  },
  methods: {
    async getProductList() {
      this.productList = await this.$api("/api/e_productList3",{});
      console.log('this.productList3',this.productList);
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
   goToPriceInsert(product_id) {
      this.$router.push({path:'/EproductPrice', query:{product_id:product_id}}); 
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
