<template>
<main>
  <div class="main_banner">
    <!-- 배너 1920*800 -->
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/8-1.png" class="d-block w-100" alt="img1">
        </div>
        <div class="carousel-item">
          <img src="../assets/8-1.png" class="d-block w-100" alt="img2">
        </div>
        <div class="carousel-item">
          <img src="../assets/8-1.png" class="d-block w-100" alt="img3">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <!--  -->

  <!-- 컨테이터 -->
  <div class="container">

    <!-- 픽업주문 -->
    <div class="pickup mt-4 mb-5">

      <div class="pickup_tit_box mb-2">
        <h2>Pick Up Order</h2>
      </div>

      <!-- 메뉴 캐러셀 -->
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src="../assets/menu_1.jpg" class="w-100 mb-4">
            <h5>클래식 아포가토</h5>
            <p>리저브 에스프레소 투 샷이 <br>바닐라 아이스크림과 진하게 어우러진 <br>정통 아포가토</p>
          </div>
          <div class="carousel-item">
            <img src="../assets/menu_2.jpg" class="w-100 mb-4">
            <h5>콜드 브루 플로트</h5>
            <p>리저브 콜드 브루 위에 녹아 내리는 <br>한 스쿱의 바닐라 아이스크림</p>
          </div>
          <div class="carousel-item">
            <img src="../assets/menu_3.jpg" class="w-100 mb-4">
            <h5>콜드 브루 몰트</h5>
            <p>콜드 브루, 바닐라 아이스크림, 몰트가 블렌딩된 <br>리저브만의 쉐이크</p>
          </div>
        </div>
      </div>

    </div>

    <!-- 날씨 배너 -->
    <div class="weather_banner mb-5" style="background-color:#aaa;">
      오늘의 날씨는 {{ }} 입니다.
    </div>

  </div>

  <div class="row"><img src="../assets/3.png"></div>

  <div class="container">

    <!-- 브랜드스토리 -->
    <div class="brand_story mb-5">
      <div class="text_box">
        <h2>OUR BRAND STORY</h2>
        <p>숑블리는 대표하는 브랜드이자<br>국내 200여개의 매장을 가진 커피 브랜드입니다.</p>
      </div>
      <div class="row d-flex justify-content-evenly">
        <ul>
          <li>
            <p>Always Fresh</p>
          </li>
          <li>
            <p>프리미엄 원두</p>
          </li>
          <li>
            <p>반려동물 케어링</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="mb-5" style="clear:both;"></div>

    <!-- 매장찾기 -->
    <div class="search_store mb-5">
      <div class="text_box">
        <h2>매장 찾기</h2>
        <p>주변에 있는<br>숑블리 매장을 찾아보세요!</p>
        <router-link to="/store">
          <button type="button" class="cta_btn" @click="goToStoreSearch">매장찾기</button>
        </router-link>
      </div>
    </div>

  </div>
</main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped>
main {
  background-color: #FFF;
}
.container {
  margin: 0 auto;
  min-width: 330px;
  background-color: #FFF;
  padding: 4%;
  align-content: center;
  align-items: center;
  text-align: center;
}
.main_banner {
  width: 100%;
}
.bridge {
  width: 100%;
  object-fit: cover;
}
.pickup {
  margin: 3em 0em;
}
.weather_banner {
  display: flex;
  margin: 3em 0em;
  width: 100%;
  height: 160px;
  align-content: center;
  align-items: center;
  border-radius: 20px;
}
.brand_story {
  margin: 4em 0em;
}
.search_store{
  margin: 4em 0em;
}
.text_box {
  margin-bottom: 2em;
}
h2 {
  font-size: 2rem;
  margin-bottom: 0.5em;
}
p {
  color: #333;
}
.cta_btn {
  width: 140px;
  height: 42px;
  padding: 6px 6px 16px 6px;
  border: none;
  border-radius: 25px;
  background-color: #1C2474;
  color: #FFF;
  font-size: 1.2rem;
  font-weight: 800;
  cursor: pointer;
}
ul {
  margin: 0;
  padding: 0;
  list-style-position: inside;
}
ul li {
  float: left;
  max-width: 33.3%;
  /* list-style-image: url("../assets/naver.png"); */
  margin-right: 5%;
}
ul li p {
  font-size: 0.9rem;
  font-weight: 800;
}
</style>
