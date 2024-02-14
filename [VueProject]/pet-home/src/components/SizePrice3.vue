<template>
  <!-- 사이즈 선택 -->
  <div class="d-flex border-top pad" style="flex-direction: column">
    <div class="col-auto d-flex justify-content-between" style="width: 100%">
      <label class="col-form-label">사이즈</label>
      <p class="card-title pt-3 pb-3">{{ selectedPrice }}</p>
    </div>
    <div class="d-flex justify-content-between col-12">
      <div class="col-2 d-grid p-1">
        <button
          @click="updatePrice(product[0].price.small)"
          type="button"
          class="btn btn-outline-danger"
        >
          S
        </button>
      </div>
      <div class="col-2 d-grid p-1">
        <button
          @click="updatePrice(product[0].price.medium)"
          type="button"
          class="btn btn-outline-danger"
        >
          <p>M</p>
        </button>
      </div>
      <div class="col-2 d-grid p-1">
        <button
          @click="updatePrice(product[0].price.large)"
          type="button"
          class="btn btn-outline-danger"
        >
          <p>L</p>
        </button>
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
      selectedPrice: 0, //클릭
      candy: 10,
      size: 0
    };
  },
  props: {
    product: Object,
  },
  methods: {
    updatePrice(size) {
      console.log('클릭 가격' + size);
      this.selectedPrice = size;
      this.emitter.emit("selectedPrice", this.selectedPrice);
    }
  },
  computed: {
    SizePrice() {
      // 선택된 size에 따라 가격을 반환
      return this.selectedPrice;
    }
  },
};
</script>
