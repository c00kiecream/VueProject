<template>
<!--  eslint-disable-next-line -->
<!--  eslint-disable -->
 <main class="mt-3">
    <div class="container">
      <button type="button" class="btn btn-dark">
        <router-link class="navbar-brand" to="/management">제품 관리</router-link>
      </button>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">타입</label>
        <div class="col-md-9"> 
          <div class="input-group mb-3">
            <input type="number" class="form-control" v-model="prices.type">            
          </div>
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">제품가격</label>
        <div class="col-md-9"> 
          <div class="input-group mb-3">
            <input type="number" class="form-control" v-model="prices.price">
            <span class="input-group-text">원</span>
          </div>
        </div>
      </div>
    <!-- 버튼 -->
    <div class="mb-3 row">
        <div class="col-6 d-grid p-1">
            <button type="button" class="btn btn-dark" @click="goToList">취소하기</button>
        </div>
        <div class="col-6 d-grid p-1">
            <button type="button" class="btn btn-danger" @click="priceInsert">저장하기</button>
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
      prices: { 
        // product_id: this.productId,       
        price: 0,  
        type: 0        
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
    watch: {
    productId: function(newProductId) {
      this.prices.product_id = newProductId;
    }
  },
  methods: {
    goToList() {
        this.$router.push({path:'/EmanageMent'});
    },
    priceInsert(){    
    this.$swal.fire({
      title: '정말 등록 하시겠습니까?',
      showCancelButton: true,
      confirmButtonText: '생성',
      cancelButtonText: '취소',
      }).then(async (result) => {
      if(result.isConfirmed){
        await this.$api('/api/e_priceInsert', {param:[this.prices]});
        console.log(this.prices);
        this.$swal.fire('저장되었습니다!', '', 'success');
        this.$router.push({path:'/EmanageMent'});                             
        }
    });
  },
  }
};
</script>