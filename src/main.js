import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/styles.scss'

import firebase from '@firebase/app'
import 'firebase/database'
import 'firebase/storage'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
	render: h => h(App),
	created(){
		// Your web app's Firebase configuration
		// For Firebase JS SDK v7.20.0 and later, measurementId is optional
		var firebaseConfig = {
			apiKey: "AIzaSyAiBp3xtK4HItAPnSPeY1aNCUhz1mtfS2o",
			authDomain: "voltaservice-ua.firebaseapp.com",
			databaseURL: "https://voltaservice-ua.firebaseio.com",
			projectId: "voltaservice-ua",
			storageBucket: "voltaservice-ua.appspot.com",
			messagingSenderId: "69882214512",
			appId: "1:69882214512:web:1aea3f921ec958ac2d9cb5",
			measurementId: "G-PMQ1XB3QSR"
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
		// firebase.analytics();
	}
}).$mount('#app')
