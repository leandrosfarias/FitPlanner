import { createRouter, createWebHistory, } from 'vue-router';
import Login from '../views/Login.vue';
import CoachDashboard from '../views/CoachDashboard/CoachDashboard.vue';
import StudentsScreen from '../views/CoachDashboard/components/StudentsScreen.vue';
import CoachDashboardHome from '../views/CoachDashboard/components/CoachDashboardHome.vue';
import ExercisesScreen from '../views/CoachDashboard/components/ExercisesScreen.vue';

const routes: Array<any> = [
    { path: '/', component: Login },

    {
        path: '/coach-dashboard',
        component: CoachDashboard,
        children: [
            { path: '', component: CoachDashboardHome },
            { path: 'students', component: StudentsScreen },
            { path: 'exercises', component: ExercisesScreen }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;