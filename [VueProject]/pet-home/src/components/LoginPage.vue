<template>

  <main>

    <div class="container d-flex justify-content-center" style="height:79vh;">

        <form class="form-signin" >

        <h3 class="mb-2">Login</h3>

        <div class="form-floating">
          <input type="email" class="form-control mb-1" id="floatingInput" placeholder="name@example.com">
          <label for="floatingInput">이메일</label>
        </div>

        <div class="form-floating">
          <input type="password" class="form-control mb-3" id="floatingPassword" placeholder="Password">
          <label for="floatingPassword">비밀번호</label>
        </div>

        <button type="button" class="btn btn-secondary btn-lg w-100 mb-5" style="background-color:#1C2474; border:none;">로그인하기</button>

        <p style="text-align:center;">SNS 계정으로 로그인하기</p>
        <div class="img-box w-100 d-flex justify-content-center">
          <img src="../assets/kakao.png">
          <img src="../assets/kakao.png">
          <img src="../assets/kakao.png">
        </div>

        </form>
      </div>

</main>

</template>
<script>
export default {
  name: 'LoginPage',
  components: {},
  data () {
    return {
      sampleData: ''
    }
  },
  setup () {},
  beforeCreate () {},
  created () {},
  beforeUpdate () {},
  updated () {},
  beforeMount () {},
  mounted () {},
  beforeUnmount () {},
  unmounted () {},
  methods: {}
}
</script>

<style scoped>
.container {
  position: relative;
  padding: 0;
}
.form-signin {
  position: absolute;
  top: 25%;
  margin: 0 auto;
  width: 330px;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  color: #1C2474;
}
.form-signin .form-floating:focus-within {
  z-index: 2;
}
.form-signin input[type="email"] {
  padding: 0.8rem;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  padding: 0.8rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
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
.btn {
  padding: 0.8rem;
  outline: none !important;
  box-shadow: none !important;
  border-radius: 0;
  font-size: 1.1rem;
  font-weight: 300;
}
.img-box{
  width: 100;
}
.img-box img {
  margin-right: 1rem;
}
</style>
