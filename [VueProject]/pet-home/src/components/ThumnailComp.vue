<template>
    <!-- 썸네일 -->
    <div class="col-md-5" >
        <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel" >
            <div class="carousel-indicators ">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" ></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" ></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
            </div>
            <div class="carousel-inner" style="border-radius: 15px;">
              <!-- 삼항 연산자 -->
              <div :class="`carousel-item ${i == 0?'active':''}`" :key="i" v-for="(img, i) in productImage">
                <img :src="`/download/${productId}/${img.path}`" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
    </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
    data(){
        return{
            productId: 0,
            productImage: {}
        }
    },
    created() {
        this.productId = this.$route.query.product_id;
        this.getProductImage();
    },
    methods: {
      async getProductImage(){
      this.productImage = await this.$api('/api/e_productMainImages', {param:[this.productId]});
      console.log('this.productImage',this.productImage);
      }
    },
    props : {
      product : Object,
    }
}

</script>