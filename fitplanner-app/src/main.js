import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routers/index';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ToastService from 'primevue/toastservice';
const app = createApp(App);
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
//# sourceMappingURL=main.js.map