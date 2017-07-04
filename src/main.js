/* eslint-disable no-new */

import Vue from 'vue';
import ScrollReveal from 'scrollreveal';
import VueScrollTo from 'vue-scrollto';
import VueAnalytics from 'vue-analytics';
import VueProgressiveImage from 'vue-progressive-image';
import Buefy from 'buefy';
import 'core-js';
import './assets/styles/main.scss';

import App from './App';
import Separator from './shared/Separator';

Vue.use(VueProgressiveImage, {
  blur: 8,
  delay: 300,
});
Vue.use(VueScrollTo, {
  duration: 1000,
  offset: 0,
  easing: 'ease-in-out',
});
Vue.use(VueAnalytics, {
  id: 'UA-19428169-1',
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
