// eslint-disable-next-line
/* eslint-disable */
import { createStore } from 'vuex';
import persistedstate from 'vuex-persistedstate';

const store = createStore({
  state() {
    return {
      user: {} // 메모리 저장 공간 할당 
    };
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
    logout(state) {
      state.user = {}; // 사용자 정보 초기화
    },
  },
  plugins: [
    persistedstate({
      paths: ['user']
    })
  ]
});

export default store;