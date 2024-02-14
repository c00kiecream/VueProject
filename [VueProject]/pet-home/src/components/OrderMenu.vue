<template>
    <div>
        <!-- 온도 선택 -->
        <div class="d-flex justify-content-between align-items-center border-top m-10 pad">
        <div class="col-auto">
            <label class="col-form-label">온도 선택</label>
        </div>
        <!-- v-model -->
        <div class="col-5 d-grid p-1">
            <button type="button" class="btn btn-outline-dark" @click="updateTemp(1)">Hot</button>
        </div>
        <div class="col-5 d-grid p-1">
            <button type="button" class="btn btn-outline-danger" @click="updateTemp(2)">ICED</button>
        </div>
        </div>

        <!-- 컵 선택 -->
        <div class=" d-flex justify-content-between align-items-center border-top pad">
        <div class="col-auto">
            <label class="col-form-label">컵 선택</label>
        </div>
        <div class="col-5 d-grid p-1">
            <button type="button" class="btn btn-outline-dark" @click="updateCup(1)">매장컵</button>
        </div>
        <div class="col-5 d-grid p-1">
            <button type="button" class="btn btn-outline-danger" @click="updateCup(2)">일회용컵</button>
        </div>
        </div>

        <!-- 픽업 선택 -->
        <div class=" d-flex justify-content-between align-items-center border-top pad">
        <div class="col-auto">
            <label class="col-form-label">픽업을 어떻게 하시겠어요?</label>
        </div>
        <div class="col-2 d-grid">
            <button type="button" class="btn btn-outline-dark" @click="updatePickup(1)">
                <p> 매장이용</p>
                <p> 매장에서 먹을게요 </p>
            </button>
        </div>
        <div class="col-2 d-grid p-1">
            <button type="button" class="btn btn-outline-danger" @click="updatePickup(2)">
                <p> To-go </p>
                <p> 밖으로 가져갈게요</p>
            </button>
        </div>
        <div class="col-2 d-grid p-1">
            <button type="button" class="btn btn-outline-danger" @click="updatePickup(3)">
                <p> 딜리버스 </p>
                <p> 배달로 받을게요 </p>
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
            product: {
                temp: 0,
                cup: 0,
                pickup: 0,
            }
        }
    },
    computed: {
        user() {
            return this.$store.state.user;            
        }
    },
    methods: {
        updateTemp(value) {
            this.product.temp = value;
            this.$emit('updateProduct', this.product);
        },
        updateCup(value) {
            this.product.cup = value;
            this.$emit('updateProduct', this.product);
        },
        updatePickup(value) {
            this.product.pickup = value;
            this.$emit('updateProduct', this.product);
        }
    }
}
</script>
