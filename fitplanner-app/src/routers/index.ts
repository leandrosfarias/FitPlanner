import { createRouter, createWebHistory, } from 'vue-router';
import Login from '../views/Login.vue';
import CoachDashboard from '../views/CoachDashboard.vue';
import ClientDashboard from '../views/ClientDashboard.vue';

const routes: Array<any> = [
    { path: '/', component: Login },
    { path: '/dashboard/coach', component: CoachDashboard },
    { path: '/dashboard/client', component: ClientDashboard },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;