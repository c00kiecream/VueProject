<template>
    <!-- eslint-disable-next-line -->
    <!-- eslint-disable -->
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>제품리스트</title>
  </head>
  <body>
    <main class="mt-3">
        <div class="container">
            <ul class="nav nav-tabs">
            <li class="nav-item">
                <router-link to="/CoffeeMenu"  class="nav-link" href="#" style="color: #1C2474;">All Menu</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/PeopleMenu"  class="nav-link" href="#" style="color: #1C2474;">People's Menu</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/PetMenu"  class="nav-link" href="#" style="color: #1C2474;">Pet's Menu</router-link>
            </li>
          </ul>
          <div class="row mb-2 ml-6 col-2" style="text-align: right;">
            <select class="form-select" v-model="sortOption">
              <option value="1">전체 메뉴</option>
              <option value="2">낮은 가격순</option>
              <option value="3">높은 가격순</option>
              <!-- <option value="4">FOOD & DESSERT</option>
              <option value="6">PET MENU</option> -->
            </select>
          </div>
            <div class="row g-3">
              <div class="col-xl-3 col-lg-4 col-md-6" :key="i" v-for="(product, i) in sortedProductList">
              <div class="card text-center" style="width: 18rem;">
                <a @click="goToDetail(product.id);" style="cursor:pointer;"><img :src="`/download/${product.id}/${product.path}`" class="card-img-top" alt="..."
                  width="140px" height="270px"></a>
                <div class="card-body">
                  <h5 class="card-title">{{ product.product_name }}</h5>
                  <p class="card-text">
                    <span class="badge bg-dark me-1">{{product.category1}}</span>
							      <span class="badge bg-dark me-1">{{product.category2}}</span>
                  </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                  <font-awesome-icon :icon="['fas', 'paw']" size="2xl" style="color: #ff5c9d;" />
                  </div>
                  <div>
                  <button type="button" class="btn btn-sm btn-outline-secondary">SIGNATURE</button>
                  </div>
                  <div>
                  <font-awesome-icon :icon="['fas', 'cart-shopping']" size="2xl" style="color: #ff5c9d;" />  
                  </div>
                  <small class="text-dark">{{product.product_price}}원</small>
                </div> 
                </div>
              </div>
            </div>
        </div>
      </div>
    </main>
  </body>
</template>
<!-- eslint-disable-next-line -->
    <!-- eslint-disable --> 
<script>
  export default {
    data () {
      return {
        sortOption: '1',
        productList: []
      }
    },
    created () {
      this.getProductList()
    },
    computed: {
  sortedProductList() {
    let sortedArray = [...this.productList]; // 원본 배열 복사
    if (this.sortOption === '2') { // 낮은 가격순
      return sortedArray.sort((a, b) => a.product_price - b.product_price);
    } else if (this.sortOption === '3') { // 높은 가격순
      return sortedArray.sort((a, b) => b.product_price - a.product_price);
    } else {
      return sortedArray; // 복사한 원본 배열 반환
    }
  }
},
    methods: {
      async getProductList () {
        this.productList = await this.$api('/api/petList', {})
        console.log(this.productList)
      },
      goToDetail(product_id) {
        this.$router.push({path:'/detail', query:{ product_id: product_id }})
      }
    }
  }
</script>
<style scoped>
.nav-item{
    font-size: x-large
}
</style>
