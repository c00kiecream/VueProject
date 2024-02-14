<template>
    <main class="mt-3">
      <div class="container">
        <h2 class="text-center mb-5">제품 관리 페이지</h2>
        <div class="float-end mb-1">
          <button type="button" class="btn btn-light" @click="goToInsert">제품등록</button>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>제품명</th>
              <th>제품가격</th>
              <th>태그</th>
              <th>카테고리</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr :key="i" v-for="(product, i) in productList">
              <td>
                <img v-if="product.path!=null" :src="`/download/${product.id}/${product.path}`" style="height:50px;width:auto;" />
              </td>
              <td>{{product.product_name}}</td>
              <td>{{product.product_price}}</td>
              <td>{{product.tags}}</td>
              <td>{{product.category1}}/{{product.category2}}</td>
              <td>
                <button type="button" class="btn btn-light me-1" @click="goToImageInsert(product.id);">사진등록</button>
                <button type="button" class="btn btn-light me-1" @click="goToUpdate(product.id);">수정</button>
                <button type="button" class="btn btn-light" @click="deleteProduct(product.id);">삭제</button>
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
        productList: {}
      };
    },
    created() {
      this.productId = this.$route.query.product_id
      this.getProductList();
    },
    methods: {
      async getProductList() {
        this.productList = await this.$api("/api/productList2",{});
        console.log('this.productList',this.productList);
      },
      goToInsert() {
        this.$router.push({path:'/ProductCreate'});
      },
      goToDetail(product_id) {
       this.$router.push({path:'/detail', query:{product_id:product_id}}); 
      },
      goToUpdate(product_id) {
        this.$router.push({path:'/productUpdate', query:{product_id:product_id}}); 
      },
      goToImageInsert(product_id) {
        this.$router.push({path:'/menuInsert', query:{product_id:product_id}}); 
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
            await this.$api("/api/productDelete",{param:[product_id]});		  
            this.getProductList();
            this.$swal.fire('삭제되었습니다!', '', 'success')
          } 
        });
      }
    }
  }
</script>
<style scoped>
    h2 {
      font-family: 'Nanum Gothic', sans-serif;
      color: #1C2474;
      font-weight: 800;
    }
    button {
        color: #1C2474;
        border:2px solid #1C2474;
        background-color: #FCC4BC;
    }
</style>