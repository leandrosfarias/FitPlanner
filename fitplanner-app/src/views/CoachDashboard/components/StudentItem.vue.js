import { defineProps, computed } from 'vue';
import { RouterLink } from 'vue-router';
const props = defineProps();
const statusClass = computed(() => {
    return props.student.status === 'Ativo' ? 'status-active' : 'status-inactive';
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['student-card']} */ ;
/** @type {__VLS_StyleScopedClasses['student-info']} */ ;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: ({ name: 'student-details', params: { id: __VLS_ctx.student.id } }),
    ...{ class: "student-card" },
}));
const __VLS_2 = __VLS_1({
    to: ({ name: 'student-details', params: { id: __VLS_ctx.student.id } }),
    ...{ class: "student-card" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
const { default: __VLS_5 } = __VLS_3.slots;
// @ts-ignore
[student,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "student-info" },
});
__VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({});
(__VLS_ctx.student.name);
// @ts-ignore
[student,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
(__VLS_ctx.student.email);
// @ts-ignore
[student,];
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: (__VLS_ctx.statusClass) },
});
// @ts-ignore
[statusClass,];
(__VLS_ctx.student.status);
// @ts-ignore
[student,];
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['student-card']} */ ;
/** @type {__VLS_StyleScopedClasses['student-info']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        RouterLink: RouterLink,
        statusClass: statusClass,
    }),
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=StudentItem.vue.js.map