<template>
    <div class="start" >
    <div class="wrapper" v-if="modalOpen == true" :class="{end : modalOpen}">
        <div class="item">
            <div>
                <h4>영양 정보/원산지 정보</h4>
                <h6>제품 영양 정보(업데이트 예정)</h6>
                <ol>
                    <li>1회 제공량</li>
                    <li>나트륨</li>
                    <li>단백질</li>
                    <li>포화지방</li>
                    <li>당류</li>
                </ol>
                <p>제공되는 영양 정보는 메뉴 기본 옵션 항목을 기반으로 하며 사용자별로 선택한 옵션을 반영하지 않습니다.
    성인과 청소년(13세 이상)은 하루 평균 2,000칼로리가 필요하고 어린이(4~12세)는 하루 평균 1,500칼로리가 필요합니다.
    그러나 개인에 따라 다를 수 있습니다.</p>
                <h6>원산지 정보</h6>
                <p>없음</p>
                <button @click="$emit('closeModal')" class="btn">닫기</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
    name: 'ModalComp',
    props: {
        modalOpen: Boolean, // Boolean 타입으로 변경
    },
    watch: {
        modalOpen(newVal) {
        console.log('ModalComp - modalOpen:', newVal);
    }
  }
}
</script>

<style scoped>
body {
  width:100%;
  margin: 0;
  padding: 0;
}

div {
  box-sizing: border-box;
}

.item {
  width: 600px;
  margin: 200px auto;
  background: white;
  border-radius: 12px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;  /* 수평 가운데 정렬 */
  z-index: 1000;  /* z-index 값을 높게 설정 */
} 

.wrapper {
  width: 100%;
  height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; 
  padding: 20px;
  z-index: 1002;  /* z-index 값을 높게 설정 */
}

.btn{
    background: rgb(207, 27, 27);
    color:white;
}

.start {
    opacity: 1;
    transition: all 0.1s;
}

.end {
    opacity: 1;
}

/* .fade-enter-form {
    opacity: 0;
}

.fade-leave-acrive{
    transition: all 1s;
}

.fade-leave-to {
    opacity: 0;
} */

</style>