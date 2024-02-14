<template>

  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="container">
    <div class="col-10">
      <div class="row">
        <div class="d-flex justify-content-between align-items-center">
          <div class="col-xl-3">
          <p>구매수량</p>
          </div>
          <div class="col-2">
            <div class="input-group">
              <button class="input-group-text" @click="minus">-</button>
              <span class="form-control" style="width:10px;">{{ a }}</span>
              <button class="input-group-text" @click="plus">+</button>
            </div>
          </div>
          <div class="col-3">
            <p>합계:{{ add }}</p>
          </div>
      </div>
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
     a: 1,
     b: 219000,
     c: 0
    }
  },
  methods: {
    plus() {
      this.a = this.a + 1;
    },
    minus() {
        if(this.a == 0) {
        return;
      }else{ this.a = this.a - 1; }
    }
  },
  computed: {
    add() {
     return this.c = this.a * this.b;
   }
  }
}
</script>