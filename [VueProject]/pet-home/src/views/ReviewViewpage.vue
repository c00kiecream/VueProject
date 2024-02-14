<template>

  <main class="mt-5 mb-5">
    <div class="container">
      <!-- 제목 -->
      <!-- <h2 class="text-center mb-3" >제목: {{ productReview.list_title }}</h2> -->
      <!-- 상품명 -->
      <div :key="i" v-for="(productReview, i) in productReview">
      <h4 class="text-center mb-3" v-if="productReview">{{productReview.product_name}} 후기</h4>
        <P>★★★★★</P>
      <!-- 평점 작성자 -->
      <div style="padding-top: 15px;"><p>{{productReview.list_name}} / {{productReview.date}}</p></div>
      <div class="mt-5 col-sm-8 text-start container">
        <div>
          <img :src="`/download/${productId}/${productReview.path}`" class="card-img-top" alt="..." style="width:40%; height:auto;"
          onerror="this.onerror=null; this.src='../aseets/xbox.png';">
        </div>
      </div>
      <div class="mt-5 col-sm-8 text-start container">
        <p>
          {{productReview.list_content}}
        </p>
      </div>
      <!-- 댓글 -->
      <div class="mt-3 col-sm-8 text-start container">
        <label class="col-form-label" style="font-weight: 600;">댓글 (0)</label>
      <!-- 글쓴이 -->
      <div class="mt-3 mb-3">
       <label for="exampleFormControlInput1" class="form-label" style="font-weight: 600;">글쓴이</label>
       <input type="email" class="form-control" id="exampleFormControlInput1" style="border:1px solid #FCC4BC;">
      </div>
      <!-- 댓글작성 -->
      <div class="mb-3" >
        <label for="exampleFormControlTextarea1" class="form-label" style="font-weight: 600;">내용</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" style="border:1px solid #FCC4BC" ></textarea>
        </div>
      </div>
      <!-- 버튼 -->
      <div class="mt-5 col-sm-8 text-start container">
      <router-link to="/" style="text-decoration: none; color: #1C2474; font-size:13px; ">〈 목록으로가기</router-link>
    </div>
    </div>
  </div>
  </main>

</template>
<!-- eslint-disable-next-line -->
<!-- eslint-disable  --> 
<script>
export default {
  name: 'ReviewEnroll',
  data () {
    return {
      productReview: [],
      productImage: []
    }
    
  },
  created () {
    this.productId = this.$route.query.product_id
    this.getProductReview()
    this.getProductImage()
  },
  methods: {
    async getProductReview () {
  this.productReview = await this.$api('/api/productReview1',{ param: [this.productId] });
  //if(response.length > 0 ) {
   // this.productReview = response[0];
  },
    async getProductImage () {
      this.productImage = await this.$api('/api/imageList', { param: [this.productId] })
      console.log('this.productImage', this.productImage)
    }
  }
}

</script>

<style>
h2 {
  font-family: 'Nanum Gothic', sans-serif;
  color: #1C2474;
  font-weight: 800;
}
h4 {
  font-family: 'Nanum Gothic', sans-serif;
  color: #1C2474;
  font-weight: 600;
}
label {
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.9rem;
  font-weight: 800;
  color: #1C2474;
}
p {
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.9rem;
  line-height: 1.4rem;
  font-weight: 400;
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
.alert {
  border-radius: 0;
}
.img_con {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.textarea {
  outline: 1px solid #1C2474;
  resize: none;
}
</style>
