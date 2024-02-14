<template>
    <!--  eslint-disable-next-line -->
    <!--  eslint-disable -->
    <div>
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>쇼핑몰페이지</title>
            </head>
            <body>
                <main class="mt-3">
                    <div class="container">
                        <div class="row mb-2">
                            <div class="col-12">
                                <select class="form-select">
                                    <option selected>Category</option>
                                    <option value="1">노트북</option>
                                    <option value="2">모니터</option>
                                    <option value="3">마우스/키보드</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 col-md-6" :key="i" v-for="(product, i) in productList">
                                <div class="card" style="width: 18rem;">
                                    <a @click="goToDetail(product.id);" style="cursor:pointer;">
                                    <img :src="`/download/${product.id}/${product.path}`" class="card-img-top" alt="..."></a>
                                    <div class="card-body">
                                        <h5 class="card-title">{{ product.product_name }}</h5>
                                        <p class="card-title">{{ product.product_subtitle }}</p>
                                        <p class="card-text">
                                            <span class="badge bg-dark me-1">{{ product.tags }}</span>
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group" role="group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                                                <button type="button" class="btn btn-sm btn-outline-secondary" @click="goToDetail(product.id);">주문하기</button>
                                            </div>
                                            <small class="text-dark">{{ product.price }}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>                
            </body>
        </html>
    </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
 
export default {
    data() {
        return{
            productList: []
        };
    },
    created() {
        this.getProductList();
    },
    methods: {
        async getProductList(){
            this.productList = await this.$api("/api/e_productList",{}); //await 어떤 신호가 전달될때까지 기다림, $ api 함수  
            console.log(this.productList);
        },
        goToDetail(product_id){
            this.$router.push({
                path:'/EDetailView', query:{product_id: product_id} //자동으로 detail페이지로 이동
            });
        }
    }
}
</script>