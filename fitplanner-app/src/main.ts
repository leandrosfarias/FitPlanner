import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routers/index';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ToastService from 'primevue/toastservice';
import { createPinia } from 'pinia';


const app = createApp(App);
const pinia = createPinia();
app.use(pinia);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: false,
        }
    }
});
app.use(ToastService);
app.mount('#app');