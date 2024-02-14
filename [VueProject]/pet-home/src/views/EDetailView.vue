<!-- eslint-disable-next-line -->
<!-- eslint-disable -->
<template>
  <div class="home">
        <ModalComp :modalOpen="modalOpen" @closeModal="modalOpen = false" />
        <LocationComp />
        <div class="container">
            <div class="row">
                <!-- 썸네일 -->
                <ThumnailComp :product="product" />
                <!-- 상세페이지 내용 -->
                <div class="col-md-7">
                    <div class="card text-center">
                        <div class="card-body">
                          <div  :key="i" v-for="(product, i) in productDetail">
                            <div class="top_ic">
                              <div>
                                <p class="card-text pt-10 border-top">
                                  <span class="badge bg-secondary">{{ product.tags }}</span>
                                </p>
                              </div>
                              <div class="top_ic_list">
                              </div>
                            </div>                         
                            <h5 class="card-title">{{ product.product_name  }}</h5>
                            <h6 >{{ product.product_subtitle }}</h6>
                            <p class="card-text">{{ product.content }}</p>
                          </div>

                          <SizePrice :product="product" />
                          <OrderMenu @updateProduct="updateProduct" @updateTotal="updateTotal" />

                          <!-- 영양 정보 -->
                          <div class=" d-flex justify-content-between align-items-center border-top pad">
                            <div class="col-auto" @click="modalOpen = true" >
                                <label class="col-form-label">영양 정보/ 원산지 정보</label>
                            </div>
                            <div>
                            </div>
                          </div>

                          <!-- 알레르기 유발 성분 -->
                          <div class=" d-flex align-items-center border-top pad">
                            <div class="col-auto">
                                <label class="col-form-label">알레르기 유발 성분</label>
                                <p>없음</p>
                            </div>
                          </div>

                          <!-- 구매수량 가격-->
                          <OrderPirce @updateSelectedPrice="updateSelectedPrice" @updateTotal="updateTotal" />
                         
                          <div class="d-flex justify-content-between align-items-center pad">
                            <div class="col-6 d-grid p-1">
                                <button type="button" class="btn btn-outline-dark">장바구니</button>
                            </div>
                            <div class="col-6 d-grid p-1">
                                <button type="button" class="btn btn-outline-danger" @click="productInsert" >주문하기</button>
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <div class="col-12 d-grid p-1">
                                <button type="button" class="btn btn-outline-dark" @click="goToList" >목록</button>
                            </div>
                          </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import { createApp } from 'vue';
import ThumnailComp from '../components/ThumnailComp.vue'
import SizePrice from '../components/SizePrice3.vue'
import OrderPirce from '../components/OrderPrice.vue'
import ModalComp from '../components/ModalComp.vue'
import LocationComp from '../components/LocationComp.vue'
import OrderMenu from '../components/OrderMenu.vue'

const app = createApp({});

export default {
    data() {
      return {
        modalOpen: false,
        productId: 0,
        productImage: [],
        productDetail: {},
        product: {
          product_id: 0,
          product_name: "",
          order_price: 0,
          temp: 0,
          cup:0,
          pickup:0
        },
        // totalPrice: 0,
        selectedPrice: 0 // 추가
      }
    },
    computed: {
      user(){
        return this.$store.state.user;
      }
    },
    created(){
      this.productId = this.$route.query.product_id;
      console.log('this.productId는', this.productId) //페이지 아이디 불러옴
      this.getProductDetail();
      // this.getProductImage();
      // console.log('this.getProductDetail실행 결과1', this.getProductDetail)
    },
    methods: {
      goToList() {
        this.$router.push({path:'/EListView'});
      },
      updateProduct(updatedProduct) { // 주문내용
        this.product = Object.assign({}, this.product, updatedProduct);
        console.log("주문 내용 확인", this.product);
      },
      updateSelectedPrice(selectedPrice) {
       this.selectedPrice = selectedPrice;
       console.log('selectedPrice 확인', this.selectedPrice);
      },
      updateTotal(total) { // 총합계
        this.product.order_price = total;
        console.log('총 합계는', this.product.order_price);
      },
      async getProductDetail(){
        this.productDetail = await this.$api('/api/e_productDetail', { param: [this.productId] });
        console.log('productDetail 확인', this.productDetail);
         if (this.productDetail && this.productDetail.length > 0) {
      // productDetail이 배열이고 적어도 하나의 항목이 있는 경우
      this.product = {
        ...this.product,
        ...this.productDetail[0],
      };
         }
      },
      productInsert(){    
        if (this.selectedPrice == ""){
          return this.$swal("사이즈 선택은 필수입니다.");
        }
        if (this.product.temp == ""){
          return this.$swal("온도 선택은 필수입니다");
        }
        if (this.product.cup == ""){
          return this.$swal("컵 선택은 필수입니다");
        }
        if (this.product.pickup == ""){
          return this.$swal("픽업 선택은 필수입니다");
        }
        this.$swal.fire({
          title: '정말 주문 하시겠습니까?',
          showCancelButton: true,
          confirmButtonText: '주문',
          cancelButtonText: '취소',
          }).then(async (result) => {
          if(result.isConfirmed){
            try {
            await this.$api('/api/e_productOrderInsert', {
               param: [
                this.productId,
                this.product.product_name,
                this.product.temp,
                this.product.cup,
                this.product.pickup,
                this.product.order_price
                ]
              });
            console.log('최종 주문 내용', this.product);
            this.$swal.fire('주문되었습니다!', '', 'success');
            this.$router.push({path:'/EorderCheck'});  
            } catch (error) {
                console.error('주문 등록 중 에러 발생:', error);
                this.$swal.fire('주문 등록에 실패했습니다.', '', 'error');
            }                     
          }
      });
    },
      getCurrencyFormat(value){ //CurrencyFormat mixins
      return this.$currencyFormat(value);
      }
    },
    props : {
      product : Object,
    },
    components: {
        ThumnailComp,
        SizePrice,
        OrderPirce,
        ModalComp,
        LocationComp,
        OrderMenu
    }
}
</script>

<style scoped>
.top_ic {
  display: flex;
  align-items: baseline;
  flex-direction: row;
  justify-content: space-between;
}

.top_ic_list {
  padding: 10px;
  border-radius: 10px;
  /* border: 1px solid #400bff; */
  background: #eee;
}

.pad {
  padding: 15px 0;
}

</style>