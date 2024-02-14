<template >
  <div class="container">
    <h1 class="mb-3">Review Board</h1>
<table class="table" >
  <thead>
    <tr>
      <th scope="col" style="color:#1C2474">번호</th>
      <th scope="col" style="color:#1C2474">상품 이름</th>
      <th scope="col" style="color:#1C2474">리뷰 제목</th>
      <th scope="col" style="color:#1C2474">글쓴이</th>
      <th scope="col" style="color:#1C2474">등록일</th>
    </tr>
  </thead>
  <tbody>
    <tr :key="i" v-for="(product, i) in searchResults">
      <td>{{ product.id }}</td>
      <td>{{product.product_name}}</td>
      <td><a @click="goToDetail(product.id);" style="cursor:pointer;">{{product.list_title}}</a></td>
      <td>{{product.list_name}}</td>
      <td>{{product.date}}</td>
    </tr>
  </tbody>
</table>
<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" @submit.prevent="search">
    <input class="form-control me-2" type="search" v-model="searchQuery" placeholder="상품이름 검색" aria-label="Search">
    <button class="btn btn-light" type="submit" style="color: #1C2474; border:1px solid #1C2474;">Search</button>
  </form>
    <router-link to="/ReviewEnroll" >
    <button type="button" class="btn btn-outline-light" style="color: #1C2474; border:1px solid #1C2474;">리뷰 등록</button>
  </router-link>
  </div>
</nav>
<div>
  <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center" >
    <li class="page-item disabled">
      <a class="page-link" style="color: #1C2474;">이전페이지</a>
    </li >
    <li class="page-item"><a class="page-link" href="#" style="color: #1C2474;">1</a></li>
    <li class="page-item"><a class="page-link" href="#" style="color: #1C2474;">2</a></li>
    <li class="page-item"><a class="page-link" href="#" style="color: #1C2474;">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" style="color: #1C2474;">다음페이지</a>
    </li>
  </ul>
</nav>
</div>
</div>
</template>
<!-- eslint-disable-next-line -->
<!-- eslint-disable  --> 
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      productReview: [],
      productId: 0,
      searchQuery: ''
    };
  },
  computed: {
    searchResults() {
      if (!this.searchQuery) {
        return this.productReview;
      }

      return this.productReview.filter(product => product.product_name.includes(this.searchQuery));
    }
  },
    created () {
    this.productId = this.$route.query.product_id
    this.getProductReview()
  },
  methods: {
    async getProductReview () {
      this.productReview = await this.$api('/api/productReview',{})
      console.log('this.productReview', this.productReview)
	  // if(ProductReview.length > 0 ) {
		// this.ProductReview = ProductReview[0];
	  },
		goToDetail(product_id) {
	    this.$router.push({
		path:'/ReviewViewpage', query:{product_id: product_id} //자동으로 detail 화면으로 전환됩니다.

	      });
    } 
  }
}
</script>

<style scoped>
.container {
  max-width: 1500px;
}
</style>
