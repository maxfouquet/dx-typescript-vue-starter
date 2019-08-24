import Vue from 'vue';
import Vuex from 'vuex';
import AppComponent from './components/AppComponent';

Vue.use(Vuex);

Vue.component('app-component', AppComponent);

new Vue({
    store: require('./stores/Store').default,
    el: '#app'
});