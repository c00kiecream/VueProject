<template>
    <!-- eslint-disable-next-line -->
    <!-- eslint-disable  --> 
      <main class="mt-5 mb-5">
        <div class="container">
          <h2 class="text-center mb-5">제품 등록 수정</h2>
            <!-- 제품 명-->
        <form class="mt-3 mb-4" >
          <div class="col mb-5" >
              <div class="mb-4">
                <label class="col-form-label ">제품명</label>
                <input type="text" class="form-control text-end" placeholder="name@example.com "  v-model="productDetail.product_name">
              </div>
              <!-- 제품 가격-->
              <div class="mb-4">
                <label class="col-form-label">제품가격</label>
                <div class="mb-4">
                <div class="input-group mb-3">
                  <input type="number" class="form-control text-end" v-model="productDetail.product_price">
                  <span class="input-group-text">원</span>
                </div>
              </div>
            </div>
              <!-- 제품 태그 -->
              <div class="col mb-5">
                 <div>
                 <label class="col-form-label">태그</label>
                 <select class="form-select mb-4 text-end" aria-label="Default select example"  v-model="productDetail.tags">
            <option selected value="">선택해주세요↓</option>
            <option value="SIGNATURE">SIGNATURE</option>
            <option value="BEST">BEST</option>
            <option value="NEW">NEW</option>
            <option value="시즌한정">시즌한정</option>
            <option value="이달의 추천">이달의 추천</option>
            <option value="할인상품">할인상품</option>
          </select>
        </div>
            <!-- 카테고리 -->
        <div class="col mb-5">
          <label class="col-form-label ms-2">카테고리</label>
          <select class="form-select mb-4 text-end" aria-label="Default select example"  v-model="productDetail.category_id">
            <option selected value="0">선택해주세요↓</option>
            <option value="1">사람 >> 음료</option>
            <option value="2">사람 >> 푸드</option>
            <option value="3">사람 >> 디저트</option>
            <option value="4">펫 >> 음료</option>
            <option value="5">펫 >> 푸드</option>
            <option value="6">펫 >> 디저트</option>
          </select>
        </div>
    </div>
    
 </div></form>

    
          <!-- 버튼 -->
          <div class="row mb-5">
            <div class="col-6 d-grid p-1">
              <button type="button" class="btn btn-secondary btn-lg" style="background-color:#d4d4d4; border:none;"
              @click="goToList">취소하기
                </button>
            </div>
            <div class="col-6 d-grid p-1">
              <button type="button" class="btn btn-dark btn-lg" style="background-color:#1C2474; border:none;"
              @click="productUpdate">저장하기</button>
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
        productDetail: {},
        productDetail2: []
      };
    },
    created() {
      this.productId = this.$route.query.product_id
      this.getProductDetail()
    },
    // mounted() {
    //   if(this.user.email == undefined) {
    //     alert("로그인을 해야 이용할 수 있습니다.");
    //     this.$router.push({path:'/'}); 
    //   }
    // },
    methods: {
      goToList(){
        this.$router.push({path:'/SalesList'}); 
      },
                  async getProductDetail () {
          let productDetail2 = await this.$api('/api/productDetail3', { param: [this.productId] })
          if(productDetail2.length > 0 ) {
            this.productDetail2 = productDetail2[0];
          }
          console.log('this.productDetail2',this.productDetail2)
        },
        productUpdate() {
        if(this.productDetail.product_name == "" || this.productDetail.product_name == 0) {
            return this.$swal("제품명을 입력해주세요.");
          }
          if(this.productDetail.product_price == "" || this.productDetail.product_price == 0) {
            return this.$swal("제품 가격을 입력해주세요.");
          }
          if(this.productDetail.tags == "" || this.productDetail.tags == 0) {
            return this.$swal("태그를 입력해주세요.");
          }
          if(this.productDetail.category_id == "" || this.productDetail.category_id == 0) {
            return this.$swal("카테고리 아이디를 입력해주세요.");
          }
    
        this.$swal.fire({
          title: '수정 완료 하시겠습니까?',
          showCancelButton: true,
          confirmButtonText: `저장`,
          cancelButtonText: `취소`
        }).then(async (result) => {
          if (result.isConfirmed) {
            await this.$api("/api/productUpdate",{param:[this.productDetail.product_name,
                this.productDetail.product_price,
                this.productDetail.tags,
                this.productDetail.category_id,
                this.productDetail.id]});
            this.$swal.fire('저장되었습니다!', '', 'success');
            this.$router.push({path:'/salesList'});
          } 
        });
      }
    }
  }
  </script>
  <style scoped>
     .container {
          max-width: 500px;
    }
    h2 {
      font-family: 'Nanum Gothic', sans-serif;
      color: #1C2474;
      font-weight: 800;
    }
    label {
      font-family: 'Nanum Gothic', sans-serif;
      font-size: 0.9rem;
      font-weight: 300;
      color: #1C2474;
    }
    ul {
      margin-bottom: 0;
    }
    ul li {
      font-family: 'Nanum Gothic', sans-serif;
      font-size: 0.8rem;
      font-weight: 300;
      color: #1C2474;
    }
    .btn {
      outline: none !important;
      box-shadow: none !important;
      border-radius: 0;
    }
    .form-control {
      border-radius: 0;
    }
</style>