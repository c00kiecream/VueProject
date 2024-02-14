<template>
  <div class="container mt-5 mb-5">

    <h4 align="center">개인정보의 수집 및 이용에 대한 동의</h4><br>

    <div class="textblock">
      <h6>■ 개인정보 수집목적 및 이용목적</h6>
      <p>
      쇼핑몰 회원 서비스 제공
      </p>
    </div>

    <div class="textblock">
      <h6>■ 수집하는 개인정보 항목</h6>
      <p>
      아이디, 이메일, 이름, 비밀번호, 휴대전화,(간편가입시 페이스북,네이버,카카오) 주소, 생년월일, 성별, 추천인, 마케팅 정보 수신 동의 중 쇼핑몰에서 지정한 항목을 필수 및 선택 항목으로 수집합니다.
      </p>
    </div>

    <div class="textblock">
      <h6>■ 개인정보의 보유기간 및 이용기간</h6>
      <p>
      원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
      </p>
    </div>

    <div class="textblock">
      <p>
        ο 회사 내부 방침에 의한 정보 보유 사유 · 부정거래 방지 및 쇼핑몰 운영방침에 따른 보관: 5년<br>
        ο 관련 법령에 의한 정보보유 사유
      </p>
      <p>
        가. 계약 또는 청약철회 등에 관한 기록<br>
        - 보존이유: 전자상거래등에서의소비자보호에관한법률<br>
        - 보존기간: 5년<br>
      </p>
      <p>
        나. 대금 결제 및 재화 등의 공급에 관한 기록<br>
        - 보존이유: 전자상거래등에서의소비자보호에관한법률<br>
        - 보존기간: 5년<br>
      </p>
      <p>
        다. 소비자 불만 또는 분쟁처리에 관한 기록<br>
        - 보존이유: 전자상거래등에서의소비자보호에관한법률<br>
        - 보존기간: 3년<br>
      </p>
      <p>
        라. 로그 기록
        - 보존이유: 통신비밀보호법<br>
        - 보존기간: 3개월<br>
      </p>
      <p>
      ※동의를 거부할 수 있으나 거부 시 쇼핑몰 회원 서비스 이용이 불가능합니다.<br>
      </p>
    </div>

  </div>
</template>
<script>
export default {
  name: 'SignUpPrivacy',
  components: {},
  data () {
    return {
      sampledata: ''
    }
  },
  setup () {},
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeUnmount () {},
  unmounted () {},
  methods: {}
}
</script>

<style scoped>
.container {
  max-width: 760px;
}
h4 {
  color: #1C2474;
  font-weight: 800;
}
h6 {
  color: #1C2474;
  font-weight: 800;
  margin-bottom: 0.5rem;
}
ol li {
  color: #1C2474;
  font-size: 0.8rem;
  line-height: 1.4rem;
}
p {
  color: #1C2474;
  font-size: 0.8rem;
  line-height: 1.4rem;
  margin-bottom: 0.4rem;
}
.textblock {
  margin-bottom: 1.5rem;
}
</style>
