<template>
<main class="mt-5 mb-5">

  <div class="container">

    <h3 class="mb-5">회원가입</h3>

    <!-- 제품명 input field -->
    <form class="mt-3 mb-4">
      <div class="col mb-5">
        <div class="mb-4">
          <label for="InputEmail" class="form-label">아이디*</label>
          <input type="text" class="form-control" v-model="user1.email">
        </div>
        <div class="mb-3">
          <label for="InputName" class="form-label">이름*</label>
          <input type="text" class="form-control" v-model="user1.nickname">
        </div>
        <div class="mb-3">
          <label for="InputPassword" class="form-label">비밀번호*</label>
          <input type="password" class="form-control" v-model="user1.password">
        </div>
        <div class="mb-3">
          <label for="InputPassword" class="form-label">비밀번호 확인*</label>
          <input type="password" class="form-control" v-model="confirmPassword">
        </div>
        <div class="mb-3">
          <label for="InputPhone" class="form-label">연락처*</label>
          <input type="text" class="form-control" placeholder="연락처를 입력하세요(-포함)" v-model="user1.phone">
        </div>
      </div>
      <!-- 체크박스 -->
      <div>
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" value="" v-model="policyCheck" checked>
          <label class="form-check-label" for="flexCheckChecked">
            [필수] <router-link to="/TermsOfUse">이용약관</router-link>과 <router-link to="/SignUpPrivacy">개인정보 수집 및 이용</router-link>에 동의합니다.
          </label>
        </div>
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" value="" v-model="ageCheck" checked>
          <label class="form-check-label" for="flexCheckChecked">
            [필수] 만 14세 이상입니다.<br>
            <p>만 19세 미만의 미성년자가 결제 시 법정대리인이 거래를 취소할 수 있습니다.</p>
          </label>
        </div>
      </div>

    </form>

    <button type="button" class="btn btn-secondary btn-lg w-100 mb-5" style="background-color:#1C2474; border:none;" @click="registerUser">가입하기</button>

  </div>

</main>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  name: 'MemberSignin',
  data () {
    return {
      user1: {
        email: '',
        nickname: '',
        password: '',
        phone: ''
      },
      policyCheck: true,
      ageCheck: true
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    registerUser() {
      if(this.user1.email == "" || this.user1.email == 0) {
        return this.$swal("아이디를 입력해주세요.");
      }
      if(this.user1.nickname == "") {
        return this.$swal("이름을 입력해주세요.");
      }
      if(this.user1.password == "") {
        return this.$swal("비밀번호를 입력해주세요.");
      }
      if(this.user1.phone == "") {
        return this.$swal("폰번호를 입력해주세요.");
      }
      this.$swal.fire({
      title: '가입하시겠습니까?',
      showCancelButton: true,
      confirmButtonText: '확인',
      cancelButtonText: '취소'
      }).then(async (result) => { // DB에 저장
        if (result.isConfirmed) {
            await this.$api('/api/register', { param: [this.user1] })
            this.$swal.fire('회원가입 완료', '', 'success')
            this.$router.push({ path: '/MemberLogin' })
        }
      })
      }

    }
  }

</script>

<style scoped>
.container {
  margin-top: 10rem;
  max-width: 500px;
}
h3 {
  font-family: 'Nanum Gothic', sans-serif;
  color: #1C2474;
  font-weight: 800;
}
label {
  font-size: 0.9rem;
  font-weight: 800;
  color: #1C2474;
}
.form-check label {
  font-size: 0.9rem;
  font-weight: 300;
  color: #1C2474;
}
p {
  font-size: 0.75rem;
}
a {
  text-decoration: none;
}
</style>
