import { createApp } from 'vue';
import App from './App.vue'; 

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUser, faCartShopping);

const app = createApp(App);

app.config.productionTip = false;

app.component('font-awesome-icon', FontAwesomeIcon);


app.use(router).mount('#app');
