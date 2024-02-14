<template>
<footer>
    <div class="loop_cont">
  <ul class="banner_list n1">
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
  </ul>
  <ul class="banner_list n2">
    <li class="banner">Chongvly</li>
    <li class="banner">always</li>
    <li class="banner">presents</li>
    <li class="banner1">fun 🐕</li>
    <li class="banner1">things</li>
    <li class="banner">to furry</li>
    <li class="banner">friends!</li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
    <li class="banner"></li>
  </ul>
</div>
</footer>
</template>

<script>
export default {}
</script>

<style scoped>
@font-face {
    font-family: 'LINESeedKR-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
footer{
    height: 50px;
    position: relative;
    transform: translateY(0%);
    border-top:1px solid #FCC4BC;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family:GoryeongStrawberry;
    font-size: 30px;
}
* {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  .loop_cont {
    display: flex;
    margin-top: 100px;
    overflow: hidden; /* 롤링 배너 영역 벗어나는 부분 숨기기 */
  }
  .banner {
    width: 120px;
    height: 50px;
    background-color: #FCC4BC;
    border-bottom:1px solid #FCC4BC;
    color:#1C2474;
    font-weight: bold;
    font-size:25px;
    margin: 0 auto;
  }
  .banner1 {
    width: 120px;
    height: 50px;
    background-color: #FCC4BC;
    border-bottom:1px solid #FCC4BC;
    color:#1C2474;
    font-weight: bold;
    font-size:25px;
    margin: 0 auto;
  }
  .banner_list {
    display: flex;
    width: 100%; /* 부모 요소에 맞게 배너 리스트 너비 조정 */
    animation: roll 15s linear infinite;
  }
  /* 첫 번째 배너 리스트가 끝나면 뒤에 바로 두 번째 배너 리스트가 붙도록 설정 */
  .n1:last-child {
    animation-delay: 15s;
  }
  /* 롤링 애니메이션 정의 */
  @keyframes roll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
