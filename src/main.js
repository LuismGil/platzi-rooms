import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;


const config = {
  apiKey: 'AIzaSyDoGh1vdwyINrRZi7Tj_e9acHtLGb6l6E4',
  authDomain: 'platzi-rooms-92280.firebaseapp.com',
  databaseURL: 'https://platzi-rooms-92280-default-rtdb.firebaseio.com',
  projectId: 'platzi-rooms-92280',
  storageBucket: 'platzi-rooms-92280.appspot.com',
  messagingSenderId: '627550042659',
  appId: '1:627550042659:web:39e594a97c845c015ecf96',
  measurementId: 'G-7QH2BQ25V2',
};
  // Initialize Firebase
firebase.initializeApp(config);


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch('FETCH_AUTH_USER');
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    if (store.state.authId) {
      this.$store.dispatch('FETCH_USER', { id: store.state.authId });
    }
  },
}).$mount('#app');
