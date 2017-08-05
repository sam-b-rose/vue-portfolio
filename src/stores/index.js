import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  state: {
    modalData: null,
  },
  mutations: {
    setModalData(state, data) {
      state.modalData = data;
    },
  },
});

export default store;
