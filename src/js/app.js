import Vue from 'vue'

Vue.component('search-bar', require('./components/SearchBar.vue'));
Vue.component('sales-this-week', require('./components/SalesThisWeek.vue'));
Vue.component('earnings-this-week', require('./components/EarningsThisWeek.vue'));

new Vue({
  el: '#app'
});


// The following code is based off a toggle menu by @Bradcomp
// source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
(function() {
  var burger = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-menu');
  burger.addEventListener('click', function() {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });
})();