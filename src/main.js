import { createApp } from "vue";
import App from "./App.vue";

import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Password from 'primevue/password';
import ProgressSpinner from 'primevue/progressspinner';
import Sidebar from 'primevue/sidebar';
import Card from 'primevue/card';
import Rating from 'primevue/rating';

import router from "./router";
import store from "./store";

import axios from 'axios';
import VueAxios from 'vue-axios'

import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import i18n from './i18n'

const app = createApp(App)

app.use(i18n)
app.use(store)
app.use(router)

app.component('Button',Button)
app.component('InputText',InputText)
app.component('Password',Password)
app.component('ProgressSpinner',ProgressSpinner)
app.component('Sidebar',Sidebar)
app.component('Card',Card)
app.component('Rating',Rating)
app.use(PrimeVue)

app.use(VueSweetalert2);
app.use(VueAxios, {$request: axios})
app.mount("#app");
