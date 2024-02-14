<template>
<!--  eslint-disable-next-line -->
<!--  eslint-disable -->
 <main class="mt-3">
    <div class="container">
      <button type="button" class="btn btn-dark">
        <router-link class="navbar-brand" to="/EmanageMent">제품관리</router-link>
      </button>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제품명</label>
        <div class="col-md-9">
          <input type="text" class="form-control" v-model="product.product_name">
        </div>
      </div>

      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제품 설명</label>
        <div class="col-md-9">
          <input type="text" class="form-control" v-model="product.product_subtitle">
        </div>
      </div>
      
      <!-- 제품 카테고리 -->
      <div class="mb-3 row">
          <label class="col-md-3 col-form-label">카테고리</label>
          <div class="col-md-9">
            <select class="form-select mb-4 text-end" aria-label="Default select example"  v-model="product.category_id">
              <option selected value="0">선택해주세요↓</option>
              <option value="1"> 커피 >> 음료</option>
              <option value="2"> 수제간식 >> 푸드</option>
              <option value="3"> 세트  >> 커피+수제간식</option>
            </select>
          </div>
      </div>

      <!-- 태그 -->
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">태그</label>
        <div class="col-md-9">
          <input type="text" class="form-control" v-model="product.tags">
        </div>
      </div>
    
    <!-- 버튼 -->
    <div class="mb-3 row">
        <div class="col-6 d-grid p-1">
            <button type="button" class="btn btn-dark" @click="goToList">취소하기</button>
        </div>
        <div class="col-6 d-grid p-1">
            <button type="button" class="btn btn-danger" @click="productInsert">저장하기</button>
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
      product: { // v-model
        product_name: "",
        product_subtitle: "",
        tags: "",
        category_id: 0,
        seller_id: 1
      }
    };
  },
    created() {
    this.productId = this.$route.query.product_id;
    console.log('this.productId',this.productId)
  },
    computed: {
    user(){
      return this.$store.state.user;
    }
  },
  //   watch: {
  //   productId: function(newProductId) {
  //     this.prices.product_id = newProductId;
  //   }
  // },
  methods: {
    goToList() {
        this.$router.push({path:'/EmanageMent'});
    },
    productInsert(){    
    if (this.product.product_name == ""){
      return this.$swal("제품명은 필수 입력값입니다");
    } 
    if (this.product.product_subtitle == ""){
      return this.$swal("제품설명 필수 입력값입니다");
    }
     if (this.product.tags == ""){
      return this.$swal("태그는 필수 입력값입니다");
    }
    this.$swal.fire({
      title: '정말 등록 하시겠습니까?',
      showCancelButton: true,
      confirmButtonText: '생성',
      cancelButtonText: '취소',
      }).then(async (result) => {
      if(result.isConfirmed){
        await this.$api('/api/e_productInsert', {param:[this.product]});
        console.log(this.product);
        this.$swal.fire('저장되었습니다!', '', 'success');
        this.$router.push({path:'/EmanageMent'});                             
        }
    });
  },
  }
};
</script>