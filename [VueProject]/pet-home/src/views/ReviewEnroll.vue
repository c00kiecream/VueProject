<template>
<!-- eslint-disable-next-line -->
<!-- eslint-disable  --> 
  <main class="mt-5 mb-5">

    <div class="container">

      <h1 class="text-center mb-3">Review</h1>

      <div class="mb-2">
        <div class="row p-1">
          <div class="col-md-6">
            <label class="col-form-label">제목</label>
            <input type="text" class="form-control" v-model="list.list_title">
          </div>
          <!-- 상품 선택 -->
          <div class="col-md-6 ms-2 mt-3" style="color:#1C2474">리뷰 제품을 골라주세요</div>
          <div class="row ">
  <div class="col-md-6 ms-2" style="display: flex;">
    <div>
      <label class="col-form-label ms-2">〈COFFEE〉</label>
      <select class="form-select" aria-label="Default select example" v-model="list.product_name">
        <option selected>상품을 선택해주세요.</option>
        <option value="AMERICANO">AMERICANO</option>
        <option value="CREAM COFFEE">CREAM COFFEE</option>
        <option value="SPARKLING COFFEE">SPARKLING COFFEE</option>
        <option value="ESPRESSO">ESPRESSO</option>
        <option value="LATTE">LATTE</option>
        <option value="CREAM LATTE">CREAM LATTE</option>
        <option value="MATCHA LATTE">MATCHA LATTE</option>
        <option value="CHOCOLATE LATTE">CHOCOLATE LATTE</option>
        <option value="DONUT LATTE">DONUT LATTE</option>
        <option value="PISTACCHIO LATTE">PISTACCHIO LATTE</option>
        <option value="CHEESE LATTE">CHEESE LATTE</option>
        <option value="INJULMI LATTE">INJULMI LATTE</option>
      </select>
    </div>
    <div>
      <label class="col-form-label ms-2">〈DRINK〉</label>
      <select class="form-select" aria-label="Default select example" v-model="list.product_name">
        <option selected>상품을 선택해주세요.</option>
        <option value="숑블리 AFFOGATO">숑블리 AFFOGATO</option>
        <option value="CLASSIC AFFOGATO">CLASSIC AFFOGATO</option>
        <option value="GREEN TEA AFFOGATO">GREEN TEA AFFOGATO</option>
        <option value="딸기파르페">딸기파르페</option>
        <option value="딸기에이드">딸기에이드</option>
        <option value="자두에이드">자두에이드</option>
        <option value="청포도에이드">청포도에이드</option>
        <option value="체리코크">체리코크</option>
        <option value="딸기스무디">딸기스무디</option>
        <option value="망고스무디">망고스무디</option>
        <option value="스파클링 와인">스파클링 와인</option>
        <option value="하이볼">하이볼</option>
      </select>
    </div>
    <div>
      <label class="col-form-label ms-2">〈FOOD & DESSERT〉</label>
      <select class="form-select" aria-label="Default select example" v-model="list.product_name">
        <option selected>상품을 선택해주세요.</option>
        <option value="애프터눈 세트">애프터눈 세트</option>
        <option value="숑's 브라우니">숑's 브라우니</option>
        <option value="숑이네 버터바">숑이네 버터바</option>
        <option value="티라미숑">티라미숑</option>
        <option value="타워케이크">타워케이크</option>
        <option value="숑블리 허니버터고구마">숑블리 허니버터고구마</option>
        <option value="수제치즈쿠키">수제치즈쿠키</option>
        <option value="Cherry Cupcake">Cherry Cupcake</option>
        <option value="피자브레드">피자브레드</option>
        <option value="크림치즈베이글">크림치즈베이글</option>
        <option value="크로플">크로플</option>
        <option value="프렌치토스트">프렌치토스트</option>
      </select>
    </div>
    <div>
      <label class="col-form-label ms-2">〈PET MENU〉</label>
      <select class="form-select" aria-label="Default select example" v-model="list.product_name">
        <option selected>상품을 선택해주세요.</option>
        <option value="시리얼 세트">시리얼 세트</option>
        <option value="또또 우유">또또 우유</option>
        <option value="멍푸치노">멍푸치노</option>
        <option value="멍걸리">멍걸리</option>
        <option value="멍와인">멍와인</option>
        <option value="멍스크림">멍스크림</option>
        <option value="멍스크림 바">멍스크림 바</option>
        <option value="고구마간식">고구마간식</option>
        <option value="멍!죽">멍!죽</option>
        <option value="생일축하세트">생일축하세트</option>
      </select>
    </div>
  </div>
</div>
<!-- 작성자 input field -->
          <div class="col-md-6">
            <label class="col-form-label">작성자</label>
            <input type="text" class="form-control" v-model="list.list_name">
          </div>
          <div>
          <img src="../assets/shongvely_bi-03.png" alt="Home" style="width: 700px; height: 300px; position: fixed; top:170px; right:250px;">
        </div>
        </div>
      <!-- textarea -->
      <div class="mb-4">
        <label class="col-form-label">내용</label>
        <textarea class="form-control" id="submission_content{{ submission.id }}" rows="8"
        v-model="list.list_content"></textarea>
      </div>

      <div class="row align-items-center">
       <div class="col-auto">
        <div class="form-check mb-3" style="margin-top:16px;">
         <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
        </div>
       </div>
        <div class="col-auto">
         <label class="form-check-label" for="flexCheckChecked">
         개인정보 수집 및 이용에 동의합니다.
         </label>
        </div>
        </div>
      </div>

      <!-- 버튼 -->
      <div class="row mb-5">
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-secondary btn-lg" style="background-color:#d4d4d4; border:none;"
          @click="goToList">취소하기
            </button>
        </div>
        <div class="col-6 d-grid p-1">
          <button type="button" class="btn btn-dark btn-lg" style="background-color:#1C2474; border:none;"
          @click="productInsert">저장하기</button>
        </div>
      </div>

    </div>
  </main>

</template>
<!-- eslint-disable-next-line -->
<!-- eslint-disable  --> 
<script>
export default {
  data () {
    return {
      list: {
        list_name: "",
        list_title: "",
        list_content: "",
        product_name:""
    },
    productId: 0,
    productName: "",
  }
},
created () {
  this.productId = this.$route.query.product_id
},
methods: {
  goToList(){
      this.$router.push({path:'/'});
  },
    productInsert() {
      if(this.list.list_title == "" || this.list.list_title == 0) {
        return this.$swal("제목을 입력해주세요.");
      }
      if(this.list.list_name == "") {
        return this.$swal("작성자를 입력해주세요.");
      }
      if(this.list.list_content == "" || this.list.list_content == 0) {
        return this.$swal("내용을 입력해주세요.");
      }
      
      this.$swal.fire({
        title: '정말 등록 하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: '생성',
        cancelButton: '취소'
      }).then(async (result) => {
        if (result.isConfirmed) {
          await Promise.all([
          this.$api("api/productInsert", {param:[this.list]}),
          this.$api("api/productInsert1", {param:[this.list]})
        ]);
          this.$swal.fire('저장되었습니다!','', 'success');
          this.$router.push({path:'/ReviewSuccess'});
        }
      });
    }
  }
}
</script>

<style>
h1 {
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
