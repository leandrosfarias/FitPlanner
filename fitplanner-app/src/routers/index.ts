import { createRouter, createWebHistory, } from 'vue-router';
import Login from '../views/Login.vue';
import CoachDashboard from '../views/CoachDashboard/CoachDashboard.vue';
import StudentsScreen from '../views/CoachDashboard/components/StudentsScreen.vue';
import ExercisesScreen from '../views/CoachDashboard/components/ExercisesScreen.vue';
import Cadastrotreino from '../views/CoachDashboard/Cadastrotreino.vue';
import StudentDetails from '../views/CoachDashboard/components/StudentDetails.vue';
import StudentForm from '../views/CoachDashboard/components/StudentForm.vue';
import CoachRegister from '../views/CoachRegister.vue';

const routes: Array<any> = [
    { path: '/', component: Login },
    { path: '/register', component: CoachRegister },
    {
        path: '/dashboard/coach',
        component: CoachDashboard,
        children: [
            { path: 'home', component: Cadastrotreino },
            { path: 'students', component: StudentsScreen },
            { path: 'exercises', component: ExercisesScreen },
            { path: 'students/:id', name: 'student-details', component: StudentDetails },
            { path: 'create-student', component: StudentForm }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

for (const route of routes) {
    router.addRoute(route)
}

export default router;