<template>

  <div class="container">

    <!-- 로그인 input field -->
    <form class="loginbox">

      <h3 class="mb-1">Login</h3>

      <div class="formbox">
        <div class="form-floating">
          <input type="email" v-model="loginData.email" class="form-control mb-1" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">이메일</label>
        </div>

        <div class="form-floating">
          <input type="password" v-model="loginData.password" class="form-control mb-3" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">비밀번호</label>
        </div>

        <button type="button" @click="login" class="btn btn-secondary btn-lg w-100" style="background-color:#1C2474; border:none;">로그인하기</button>
      </div>

    <!-- 소셜 로그인 -->
    <div class="socialLogin">
      <p style="text-align:center;">소셜 계정으로 로그인하기</p>
      <div class="img-box w-100 d-flex justify-content-center">
        <img src="../assets/kakao.png" style="width:40px; height:auto; cursor:pointer;" @click="KakaoLogin">

        <div id="naverIdLogin"></div>

        <!-- <div @click="googleLoginBtn"><img src="../assets/google.png" style="width:40px; height:auto; cursor:pointer;"></div>
        <div class="g-signin2" data-onsuccess="onSignIn" style="display:none;"></div> -->
      </div>
    </div>

    <!-- 회원가입 -->
    <div class="signIn">
      <p style="text-align:center; font-weight:300;">회원가입하고 50,000포인트 적립하세요!</p>
      <router-link to="/MemberSignin">
        <button type="button" class="btn btn-primary btn-lg w-100" style="background-color:#FFF; color:#1C2474; border:1px solid #1C2474;">간편 회원가입하기</button>
      </router-link>
    </div>

    </form>

  </div>

</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'MemberLogin',
  data () {
    return {
      loginData: {
        email: '',
        password: ''
      },
      naverLogin: null
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  mounted () {
    // 네이버
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: 'KtBunztu8l4d7bz003fV',
      callbackUrl: 'http://localhost:8080/login',
      isPopup: true,
      loginButton: { color: "green", type: 1, height: 40 }
    })

    this.naverLogin.init()
    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        console.log(status)
        console.log(this.naverLogin.user)
        var email = this.naverLogin.getEmail()
        if (email === undefined || email === null) {
          alert('이메일은 필수 정보입니다. 정보 제공에 동의해주세요.')
          this.naverLogin.reprompt()
          return
        }
      } else {
        console.log('아이디와 비밀번호를 확인해주세요.')
      }
    })

    // 구글
    // window.gapi.signin2.render("google-sign-btn", { onsuccess: this.onSignIn })
  },
  methods: {
    async login () {
    console.log('Login method called'); // 추가

    // form 입력 유효성 검사
    if (this.loginData.email == '') {
      return this.$swal('', '이메일을 입력해주세요.', 'warning')
    }
    if (this.loginData.password == '') {
      return this.$swal('', '비밀번호를 입력해주세요.', 'warning')
    }

    // 서버에 로그인 요청을 보내고 결과를 받아옴
    const response = await this.$api('/api/login', { param: [ this.loginData.email, this.loginData.password ] })
    console.log('response', response)
    if (response.length > 0) {
      this.$swal.fire('', '숑블리에 오신 것을 환영합니다.')
      this.$store.commit('user', response.data); // 로그인 정보를 vuex 스토어에 저장
      this.$router.push({ path: '/'})
      console.log(response)
    } else {
      this.$swal.fire('', '로그인 정보를 확인하세요.', 'error')
    }
    },
    // 카카오 로그인
    KakaoLogin () {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, profile_image',
        success: this.getProfile
      })
    },
    getProfile (authObj) {
      console.log(authObj)
      window.Kakao.API.request({
        url: 'v2/user/me',
        success: res => {
          const kakao_account = res.kakao_account
          console.log(kakao_account)
          this.KakaoLoginSave(kakao_account)
          alert('숑블리에 오신 것을 환영합니다.')
        }
      })
    },
    async KakaoLoginSave(kakao_account) {
      await this.$api('/api/login', {
        param: [
          { nickname: kakao_account.profile.nickname }
        ]
      })
      this.$store.commit('user', kakao_account)
    },
    KakaoLogout () {
      window.Kakao.Auth.logout((response) => {
        console.log(response)
        this.$$store.commit('user', {})
        alert('로그아웃되었습니다.')
        this.$router.push({ path: '/'})
      })
    },
    NaverLogout () {
      const accessToken = this.naverLogin.accessToken.accessToken
      const url = '/oauth2.0/token?grant_type=delete&client_id=kIJby7ENRe_MAIlXVJiA&client_secret=ZWfzCoUns4&access_token=${accessToken}&service_provider=NAVER'
      axios.get(url).then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  padding: 0;
  width: 330px;
  height: 86vh;
}
.loginbox {
  position: absolute;
  top: 12.8%;
  width: 100%;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  color: #1C2474;
}
.formbox {
  margin-bottom: 2rem;
}
.socialLogin {
  margin-bottom: 2rem;
}
h3 {
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
.img-box{
  width: 100;
}
.img-box img {
  margin-right: 1rem;
}
p {
  font-size: 0.8rem;
  margin: 0.6rem;
}
a {
  text-decoration: none;
}
button {
  font-size: 1.1rem;
  padding: 2.5% 0 3% 0;
}
</style>