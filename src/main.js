import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head';
import './registerServiceWorker'

// create head manager
const head = createHead();

// create the app instance
const app = createApp(App);

// use router and head manager
app.use(router);
app.use(head);

// mount the app
app.mount('#app');
