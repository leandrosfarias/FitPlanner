import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Button from 'primevue/button';
import { LocalStudentRepository } from '../../../services/LocalStudentRepository';
const route = useRoute();
const router = useRouter();
const studentRepository = new LocalStudentRepository();
const student = ref(null);
onMounted(async () => {
    const studentId = route.params.id;
    const foundStudent = await studentRepository.getById(studentId);
    if (foundStudent) {
        student.value = foundStudent;
    }
});
const statusClass = computed(() => {
    return student.value && student.value.status === 'Ativo' ? 'status-active' : 'status-inactive';
});
const formattedBirthDate = computed(() => {
    if (student.value && student.value.birthDate) {
        const date = new Date(student.value.birthDate);
        return date.toLocaleDateString('pt-BR');
    }
    return '';
});
const formattedCreatedAt = computed(() => {
    if (student.value && student.value.createdAt) {
        const date = new Date(student.value.createdAt);
        return date.toLocaleDateString('pt-BR');
    }
    return '';
});
const goToTrainingPlanRegistration = () => {
    if (student.value) {
        router.push({
            path: '/dashboard/coach/home',
            query: { studentName: student.value.name }
        });
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
/** @type {__VLS_StyleScopedClasses['info-group']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "details-section" },
});
if (__VLS_ctx.student) {
    // @ts-ignore
    [student,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "details-container" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "card info-card" },
    });
    __VLS_asFunctionalElement(__VLS_elements.header, __VLS_elements.header)({
        ...{ class: "card-header" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({});
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "card-content" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "info-group" },
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (__VLS_ctx.student.name);
    // @ts-ignore
    [student,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (__VLS_ctx.student.email);
    // @ts-ignore
    [student,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (__VLS_ctx.student.phone || 'Não informado');
    // @ts-ignore
    [student,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (__VLS_ctx.student.gender.value);
    // @ts-ignore
    [student,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (__VLS_ctx.formattedBirthDate);
    // @ts-ignore
    [formattedBirthDate,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "info-group" },
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: (__VLS_ctx.statusClass) },
    });
    // @ts-ignore
    [statusClass,];
    (__VLS_ctx.student.status);
    // @ts-ignore
    [student,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (__VLS_ctx.formattedCreatedAt);
    // @ts-ignore
    [formattedCreatedAt,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "card info-card" },
    });
    __VLS_asFunctionalElement(__VLS_elements.header, __VLS_elements.header)({
        ...{ class: "card-header" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({});
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "card-content" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "info-group" },
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (__VLS_ctx.student.weight);
    // @ts-ignore
    [student,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (__VLS_ctx.student.height);
    // @ts-ignore
    [student,];
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (__VLS_ctx.student.goal.value);
    // @ts-ignore
    [student,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "info-group" },
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "observations-text" },
    });
    (__VLS_ctx.student.observations || 'Nenhuma observação.');
    // @ts-ignore
    [student,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "card training-card" },
    });
    __VLS_asFunctionalElement(__VLS_elements.header, __VLS_elements.header)({
        ...{ class: "card-header" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({});
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "card-content" },
    });
    if (__VLS_ctx.student.hasTrainingPlan) {
        // @ts-ignore
        [student,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "training-plan-exists" },
        });
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
        const __VLS_0 = {}.Button;
        /** @type {[typeof __VLS_components.Button, ]} */ ;
        // @ts-ignore
        Button;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            label: "Ver Plano de Treino",
            ...{ class: "btn-primary" },
        }));
        const __VLS_2 = __VLS_1({
            label: "Ver Plano de Treino",
            ...{ class: "btn-primary" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    else {
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "no-training-plan" },
        });
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
        const __VLS_5 = {}.Button;
        /** @type {[typeof __VLS_components.Button, ]} */ ;
        // @ts-ignore
        Button;
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
            ...{ 'onClick': {} },
            label: "+ Cadastrar Plano",
            ...{ class: "btn-primary" },
        }));
        const __VLS_7 = __VLS_6({
            ...{ 'onClick': {} },
            label: "+ Cadastrar Plano",
            ...{ class: "btn-primary" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        let __VLS_9;
        let __VLS_10;
        const __VLS_11 = ({ click: {} },
            { onClick: (__VLS_ctx.goToTrainingPlanRegistration) });
        // @ts-ignore
        [goToTrainingPlanRegistration,];
        var __VLS_8;
    }
}
else {
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "loading-state" },
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
}
/** @type {__VLS_StyleScopedClasses['details-section']} */ ;
/** @type {__VLS_StyleScopedClasses['details-container']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['info-card']} */ ;
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
/** @type {__VLS_StyleScopedClasses['card-content']} */ ;
/** @type {__VLS_StyleScopedClasses['info-group']} */ ;
/** @type {__VLS_StyleScopedClasses['info-group']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['info-card']} */ ;
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
/** @type {__VLS_StyleScopedClasses['card-content']} */ ;
/** @type {__VLS_StyleScopedClasses['info-group']} */ ;
/** @type {__VLS_StyleScopedClasses['info-group']} */ ;
/** @type {__VLS_StyleScopedClasses['observations-text']} */ ;
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['training-card']} */ ;
/** @type {__VLS_StyleScopedClasses['card-header']} */ ;
/** @type {__VLS_StyleScopedClasses['card-content']} */ ;
/** @type {__VLS_StyleScopedClasses['training-plan-exists']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['no-training-plan']} */ ;
/** @type {__VLS_StyleScopedClasses['btn-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['loading-state']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        Button: Button,
        student: student,
        statusClass: statusClass,
        formattedBirthDate: formattedBirthDate,
        formattedCreatedAt: formattedCreatedAt,
        goToTrainingPlanRegistration: goToTrainingPlanRegistration,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=StudentDetails.vue.js.map