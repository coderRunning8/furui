import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad, {
  error: 'error.jpg',
  loading: 'loading.gif',
});
