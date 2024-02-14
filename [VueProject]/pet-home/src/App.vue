<template>
  <body>
  <div id="app" >
    <HeaderView />
    <div class="mt">
    <router-view/>
    </div>
  </div>
    <FooterView />
</body>
</template>

<script>
import HeaderView from './components/HeaderView'
import FooterView from './components/FooterPage'

export default {
  name: 'App',
  components: { HeaderView, FooterView }
}
</script>
<style>
@font-face {
    font-family: 'LINESeedKR-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/SOYOMapleBoldTTF.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
#app {
  font-family: SOYOMapleBoldTTF, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.mt {
  margin-top: 116px;
}
</style>
