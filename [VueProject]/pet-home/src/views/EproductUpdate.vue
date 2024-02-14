<template>
<!-- eslint-disable-next-line -->
<!-- eslint-disable -->
    <main class="mt-3">
        <div class="container">
            <div class="col-12">	
            <h2 class="text-center">제품 수정 등록</h2>
            <div class="mb-3 row">
                    <label class="col-md-3 col-form-label">제품명</label>
                <div class="col-md-9">
                        <input type="text" class="form-control" v-model="productDetail.product_name">
                </div>
            </div>
            <div class="mb-3 row">
                    <label class="col-md-3 col-form-label">제품가격</label>
                <div class="col-md-9">
                    <div class="input-group">
                        <input type="text" class="form-control" v-model="productDetail.product_price">
                        <span class="input-group-text">원</span>
                        </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">배송비</label>
                <div class="col-md-9">
                    <div class="input-group">
                        <input type="text" class="form-control" v-model="productDetail.delivery_price">
                        <span class="input-group-text">원</span>
                        </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">추가배송비(도서산간)</label>
                <div class="col-md-9">
                    <div class="input-group">
                        <input type="text" class="form-control" v-model="productDetail.add_delivery_price">
                        <span class="input-group-text">원</span>
                        </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">제품카테고리</label>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-auto">
                            <select class="form-select" v-model="productDetail.category1">
                                <option :value="cate" :key="i" v-for="(cate, i) in category1">{{ cate }}</option>									
                            </select>
                        </div>
                        <div class="col-auto">
                            <select class="form-select" v-model="productDetail.category2">
                                <option>{{ productDetail.category2 }}</option>
                            </select>
                        </div>
                        <div class="col-auto">
                            <select class="form-select">
                                <option>{{ productDetail.category3 }}</option>
                            </select>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">테그</label>
                <div class="col-md-9">
                    <input type="text" class="form-control" v-model="productDetail.tags">
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-md-3 col-form-label">출고일</label>
                <div class="col-md-9">
                    <div class="input-group">
                        <input type="text" class="form-control" v-model="productDetail.outbound_days">
                        <span class="input-group-text">일 이내 출고</span>
                        </div>
                </div>
            </div>

            <div class="mb-3 row">
                <div class="col-6 d-grid p-1">
                    <button type="button" class="btn btn-lg btn-dark" @click="goToList">취소하기</button>
                </div>
                <div class="col-6 d-grid p-1">
                    <button type="button" class="btn btn-lg btn-danger" @click="productUpdate">저장하기</button>
                </div>
            </div>
        </div>
        </div>	
    </main>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */ 

export default{
    data() {
        return {
        productId: 0,
        productDetail: {}, // 배열안에 저장
        category1:[],
        category2:[],
        category3:[],
        cate1: "",
        cate2: "",
        cate3: ""	
        }
    },
    created () {
        this.productId = this.$route.query.product_id
        this.getProductEdtail()
        this.getCategoryList()
    },
    methods: {
        goToList() {
            this.$router.push({path:'/ESales'});
        },
        async getCategoryList(){
            let categoryList = await this.$api("/api/e_categoryList",{});
            this.categoryList = categoryList;
            console.log('this.categoryList', this.categoryList)

            let oCategory = {};
            categoryList.forEach(item => { 
                oCategory[item.category1] = item.id;
            });
            console.log('oCategory', oCategory)  

            let category1 = [];
            for(let key in oCategory){
                category1.push(key); 
            }
            console.log('category1', category1) 

            this.category1 = category1; 

            let category2 = [];
            category2 = categoryList.filter( c => { 
                return c.category1 == category[0]; 
            });
        },

        async getProductEdtail() {
            let productDetail = await this.$api('/api/e_productList3', {param:[this.productId]})
            if(productDetail.length > 0){
                this.productDetail = productDetail[0];
            }
            console.log(this.productDetail)
        },
        changeCategory1(){
            this.category3 = [];
            let categoryList = this.categoryList.filter( c => {
                return c.category1 == this.cate1;
            });

            let oCategory2 = {};
            categoryList.forEach( item => {
                oCategory2[item.category2] = item.id;
            });

            let category2 = [];
            for(let key in oCategory2){
                category2.push(key);
            }

            this.category2 = category2;
        },

        productUpdate() {
            if(this.productDetail.product_name == "" ){
                return this.$swal("제품명은 필수 입력값입니다.");
            } 

            this.$swal.fire({ //수정페이지 
                title: '정말 수정하시겠습니까?',
                showCancelButton: true,
                confirmButtonText: `수정`,
                showCancelButtonText: `최소`
            }).then(async (result) => {
                if (result.isConfirmed){ //productID 
                    await this.$api("/api/e_productUpdate",{ //따로따로 넣어야됨
                        param:[this.productDetail.product_name,
                        this.productDetail.product_price,
                        this.productDetail.delivery_price,
                        this.productDetail.add_delivery_price,
                        this.productDetail.tags,
                        this.productDetail.outbound_days,
                        this.productDetail.id]});
                    this.$swal.fire('수정되었습니다!', '','success')
                    this.$router.push({path:'/ESales'});
                }
            });
        }
    }
}
</script>
