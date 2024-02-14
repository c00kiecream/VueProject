<template>
    <div class="d-flex justify-content-between align-items-center card-text pt-3 border-top pad">
        <div class="row">
            <div class="col-auto">
                <label class="col-form-label">구매수량</label>
                <p style="text-align: left;">최대 구매수량 10개</p>
            </div>
            <!-- 상품수량
            유저가 input에 입력한 값을 저장하려면-->
            <div class="col-auto">
              <div class="input-group">
                <span class="input-group-text" style="cursor:pointer;" @click="minus()">-</span>
                <input type="text" class="form-control" style="width:40px;" v-model="count">
                <span class="input-group-text" style="cursor:pointer;" @click="plus()">+</span>
              </div>
            </div>
         </div>
         <div class="row pt-3 pb-3">
                <div style="text-align: right;">
                   <p>총합계: {{ totalPrice }}</p>
                </div>
         </div>
    </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */

export default {
    data() {
      return {
        count: 1, //카운드
        totalPrice: 0, //최종금액
        selectedPrice: 0, // 사용자가 선택한 사이즈에 따라 업데이트되는 가격
      }
    },
    computed: { //가격 노출 바로하려면 computed
      total(){
        return this.selectedPrice * this.count;
      }
    },
    watch: { //클릭 될때마다 변경 감시되서 값 변경  watch
      // selectedPrice가 변경될 때마다 total을 다시 계산
      selectedPrice: function (newPrice, oldPrice) {
          this.count = 1; // 가격이 변경될 때 count를 1로 재설정
      },
      total(newTotal) {
        this.$emit('updateTotal', newTotal);
      }
    },
    methods: {
      plus() {
      if( this.count < 10 ) {
        this.count = this.count + 1;	
        //this.totalPrice = (this.selectedPrice * this.count);
      } else {
        alert("최대 구매 수량은 10개 입니다.");
      }
      this.totalPrice = this.selectedPrice * this.count;
      this.$emit('updateTotal', this.totalPrice);
      this.updateSelectedPrice(this.selectedPrice); // 이 부분을 추가
    },
    minus() {
      if(this.count <= 1) {
        return;
        }else {
          this.count = this.count - 1;
          this.$emit('updateTotal', this.totalPrice);
       }
    },
      increment(){
        this.$store.commit('increment');
      },
      updateSizePrice(sizePrice) {
      this.selectedPrice = sizePrice;
      // this.$emit('updateTotal', this.total);
      // console.log('this.total은', this.total)
    },
     updateSelectedPrice(selectedPrice) {
    this.$emit('updateSelectedPrice', selectedPrice);
  },
  },
    mounted() {
      // this.emitter.on("selectedPrice", (a) => {
      //   console.log('받아오는 가격은'+ a);
      //   this.selectedPrice = a;
      //   this.$emit('updateTotal', this.total);
      //   //this.updateSizePrice(a); //메소드 호출
      //   console.log('this.total은', this.total)
      // });
        // 수정된 코드
      const emitter = this.$options.emitter; // 전역 emitter를 가져옴
      emitter.on("selectedPrice", (a) => {
        console.log('받아오는 가격은'+ a);
        this.selectedPrice = a;
        this.$emit('updateTotal', this.total);
        console.log('this.total은', this.total)
     });
    }
};
</script>