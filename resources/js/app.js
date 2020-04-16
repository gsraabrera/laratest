require('./bootstrap');

window.Vue = require('vue');

import articles from './components/Articles.vue';

const app = new Vue({
  el: '#app',
  components: {
    articles
  },
  render: h => h(articles)
});