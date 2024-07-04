import {createApp} from 'vue';
import App from './App.vue';
import store from './store/store';
import VueSplide from '@splidejs/vue-splide';
import './app.scss';

const app = createApp(App);

app.use(store).use( VueSplide ).mount('#app');
