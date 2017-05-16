/* eslint-disable no-new */

import Vue from 'vue';
import ScrollReveal from 'scrollreveal';
import VueScrollTo from 'vue-scrollto';
import Buefy from 'buefy';
import './assets/styles/main.scss';

import App from './App';
import Separator from './shared/Separator';

Vue.use(VueScrollTo, {
  duration: 1000,
  offset: 0,
  easing: 'ease-in-out',
});
Vue.use(Buefy, {
  defaultIconPack: 'fa',
});

window.sr = ScrollReveal();
Vue.component('separator', Separator);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
