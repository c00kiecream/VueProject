// eslint-disable-next-line
/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import mitt from 'mitt'

createApp(App).use(store).mixin(mixins).use(VueSweetalert2).use(router).mount('#app')

const emitter = mitt();
app.config.globalProperties.emitter = emitter;

window.Kakao.init("e5cb87f1a32b669234b64c5711d1c5b6")