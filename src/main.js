/* eslint-disable no-new */

import Vue from 'vue';
import ScrollReveal from 'scrollreveal';
import VueScrollTo from 'vue-scrollto';
import VueAnalytics from 'vue-analytics';
import Buefy from 'buefy';
import NProgress from 'nprogress';
import 'core-js';

import './assets/styles/main.scss';

import App from './App';
import store from './stores';
import Separator from './shared/Separator';

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

NProgress.configure({
  showSpinner: false,
});
NProgress.start();

window.sr = ScrollReveal();
window.onload = setTimeout(() => { NProgress.done(); }, 1000);

Vue.component('separator', Separator);

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
