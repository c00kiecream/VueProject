<template>
  <div style="display: flex; position: fixed; top: 0; width: 100%; height: 3%; background-color: #EEE; z-index: 1000; display: flex; justify-content: flex-end;">
    <router-link v-if="!isAuthenticated" to="/MemberLogin" class="pe-3 pt-1" href="#" style="text-decoration-line: none; color:#1C2474; font-size: 0.8em;">로그인</router-link>
    <router-link v-if="!isAuthenticated" to="/MemberSignin" class="pe-2 pt-1" href="#" style="text-decoration-line: none; color:#1C2474; font-size: 0.8em;">회원가입</router-link>
    <router-link v-if="isAuthenticated" to="#" @click="logout" class="pe-2 pt-1" href="#" style="text-decoration-line: none; color:#1C2474; font-size: 0.8em;">로그아웃</router-link>
  </div>
  <header>
      <nav role="navigation">
  <div id="menuToggle">
  <input type="checkbox" id="navi-toggle" v-model="naviToggle" />
  <span></span>
  <span></span>
  <span></span>
  <ul id="menu" @click.stop>
    <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false"
        style="color:#1C2474; font-size:20px; font-weight:bold" >
          홈
        </button>
        <div class="collapse" id="home-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><router-link to="/mainView" @click="naviToggle = false">HOME</router-link></li>
            </ul>
            </div>
    </li>
    <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#menu-collapse" aria-expanded="false"
        style="color:#1C2474; font-size:20px; font-weight:bold" >
          메뉴
        </button>
        <div class="collapse" id="menu-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><router-link to="/CoffeeMenu" @click="naviToggle = false">CoffeeMenu</router-link></li>
            <li><router-link to="/SalesList" @click="naviToggle = false">제품관리리스트</router-link></li>
            <li><router-link to="/ProductCreate" @click="naviToggle = false">제품등록</router-link></li>
          </ul>
        </div>
      </li>
    <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#find-collapse" aria-expanded="false"
        style="color:#1C2474; font-size:20px; font-weight:bold">
          매장찾기
        </button>
        <div class="collapse" id="find-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><router-link to="/StoreSearch" @click="naviToggle = false">매장찾기</router-link></li>
          </ul>
        </div>
      </li>
    <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#review-collapse" aria-expanded="false"
        style="color:#1C2474; font-size:20px; font-weight:bold">
          커뮤니티
        </button>
        <div class="collapse" id="review-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><router-link to="/" @click="naviToggle = false">리뷰 게시판</router-link></li>
          </ul>
        </div>
      </li>
    <li class="mb-1">
        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false"
        style="color:#1C2474; font-size:20px; font-weight:bold">
          브랜드 스토리
        </button>
        <div class="collapse" id="orders-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><router-link to="/EDetailView" @click="naviToggle = false">EDetailView</router-link></li>
            <li><router-link to="/EimageInsert" @click="naviToggle = false">EimageInsert</router-link></li>
            <li><router-link to="/EListView" @click="naviToggle = false">EListView</router-link></li>
            <li><router-link to="/EmanageMent" @click="naviToggle = false">EmanageMent</router-link></li>
            <li><router-link to="/EorderCheck" @click="naviToggle = false">EorderCheck</router-link></li>
            <li><router-link to="/EproductCreate" @click="naviToggle = false">EproductCreate</router-link></li>
            <li><router-link to="/EproductPrice" @click="naviToggle = false">EproductPrice</router-link></li>
            <li><router-link to="/EproductUpdate" @click="naviToggle = false">EproductUpdate</router-link></li>
            <li><router-link to="/ESales" @click="naviToggle = false">ESales</router-link></li>
          </ul>
        </div>
      </li>
  </ul>
</div>
</nav>
      <div class="container">
        <router-link to="/mainView" @click="naviToggle = false">
              <h1><img src="../assets/chongvely_bi-05.png" alt="home" style="width: 130px; height: auto; padding-top: 1%; padding-bottom: 0.5%;"></h1>
            </router-link>
      </div>
      <div :key="i" v-for="(user, i) in userList">
        <router-link to="/myInfo" @click="goToinfo(user.id);">
          <img src="../assets/user.png" alt="user" style="width: 30px; height: 30px;
          position:absolute; right: 30px; top:28px; ">
        </router-link>
        <a href="#">
          <img src="../assets/bag.png" alt="user" style="width: 30px; height: 30px;
          position:absolute; right: 80px; top:28px; ">
        </a>
      </div>
  </header>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  data () {
    return {
      naviToggle: false,
      userList: {}
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.user && Object.keys(this.$store.state.user).length > 0;
    },
  },
  created() {
    this.userId = this.$route.query.user_id
    this.getUserList();
  },
  mounted () {
    window.addEventListener('click', this.closeMenu)
  },
  beforeUnmount () {
    window.removeEventListener('click', this.closeMenu)
  },
  methods: {
    logout() {
      this.$store.commit('logout'); // 사용자 정보 초기화
      alert('로그아웃되었습니다.');
      this.$router.push('/'); // 로그아웃 후 이동할 경로 설정
    },
    closeMenu () {
      this.naviToggle = false
    },
    async getUserList() {
      this.userList = await this.$api("/api/userList",{});
      console.log('this.userList',this.userList);
    },
    goToinfo(user_id) {
      this.$router.push({path:'/myInfo', query:{user_id:user_id}}); 
    },
  }
}
</script>
<style scoped>
@font-face {
  font-family: 'omyu_pretty';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/omyu_pretty.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
header {
  background-color:#1C2474;
  margin: 0;
  padding: 0;
  display: flex;
  position: fixed;
  top: 25px;
  width: 100%;
z-index: 100;
}
.container {
max-width: 960px;
height: 100%;
margin: 0 auto;
padding: 0 auto;
text-align: center;
}
#menuToggle
{
display: block;
position: relative;
top: 32px;
left: 40px;
z-index: 1;
-webkit-user-select: none;
user-select: none;
}
#menuToggle a
{
font-size:15px;
text-decoration: none;
color: #1C2474;
transition: color 0.3s ease;
}
#menuToggle a:hover
{
color: #2f357c;
}
#menuToggle input
{
display: block;
width: 40px;
height: 32px;
position: absolute;
top: -7px;
left: -5px;
cursor: pointer;
opacity: 0; /* hide this */
z-index: 2; /* and place it over the hamburger */
-webkit-touch-callout: none;
}
#menuToggle span
{
display: block;
width: 33px;
height: 4px;
margin-bottom: 5px;
position: relative;
background: #fcf9f9;
border-radius: 3px;
z-index: 101;
transform-origin: 4px 0px;
transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
            background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
            opacity 0.55s ease;
}
#menuToggle span:first-child
{
transform-origin: 0% 0%;
}
#menuToggle span:nth-last-child(2)
{
transform-origin: 0% 100%;
}
#menuToggle input:checked ~ span
{
opacity: 1;
transform: rotate(45deg) translate(-2px, -1px);
background: #ffffff;
}
#menuToggle input:checked ~ span:nth-last-child(3)
{
opacity: 0;
transform: rotate(0deg) scale(0.2, 0.2);
}
#menuToggle input:checked ~ span:nth-last-child(2)
{
transform: rotate(-45deg) translate(0, -1px);
}
#menu {
position: absolute;
width: 300px;
margin: -100px 0 0 -50px;
padding: 50px;
padding-top: 125px;
padding-bottom: 600px;
background: #FCC4BC;
list-style-type: none;
-webkit-font-smoothing: antialiased;
transform-origin: 0% 0%;
transform: translate(-100%, 0);
transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
z-index: 1;
}
#menu li
{
padding: 10px 0;
font-size: 22px;
}
#menuToggle input:checked ~ ul
{
transform: none;
}
</style>
