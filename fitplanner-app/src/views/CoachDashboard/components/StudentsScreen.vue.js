import { onMounted, ref } from 'vue';
import StudentsList from './StudentsList.vue';
import { LocalStudentRepository } from '../../../services/LocalStudentRepository';
const studentRepository = new LocalStudentRepository();
const students = ref([]);
onMounted(async () => {
    students.value = await studentRepository.getAll();
    console.log('Fetched students:', students.value);
});
const sortingModes = ref([
    { labels: 'Mais recentes', value: 'recent' },
    { labels: 'Mais antigos', value: 'oldest' },
    { labels: 'Nome A-Z', value: 'name_az' },
    { labels: 'Nome Z-A', value: 'name_za' },
    { label: 'Nome', value: 'name' },
    { label: 'Email', value: 'email' },
    { label: 'Celular', value: 'phone' },
]);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['bg-indigo-600']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    id: "row-1",
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
RouterLink;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: "/dashboard/coach/create-student",
}));
const __VLS_2 = __VLS_1({
    to: "/dashboard/coach/create-student",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ class: "bg-indigo-600 text-white" },
    id: "button-add-student",
});
__VLS_asFunctionalElement(__VLS_elements.i, __VLS_elements.i)({
    ...{ class: "fas fa-user-plus" },
});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
var __VLS_3;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    id: "search-section",
    ...{ class: "bg-white" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "block" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    for: "search-bar",
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    id: "search-bar-container",
});
__VLS_asFunctionalElement(__VLS_elements.i, __VLS_elements.i)({
    ...{ class: "fas fa-search" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    type: "text",
    name: "search-bar",
    id: "search-bar",
    placeholder: "Nome, email ou celular do aluno",
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "block" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    for: "",
});
__VLS_asFunctionalElement(__VLS_elements.select, __VLS_elements.select)({
    name: "",
    id: "sorting-select",
});
for (const [mode] of __VLS_getVForSourceType((__VLS_ctx.sortingModes))) {
    // @ts-ignore
    [sortingModes,];
    __VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
        key: (mode.value),
        value: (mode.value),
    });
    (mode.labels || mode.label);
}
/** @type {[typeof StudentsList, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(StudentsList, new StudentsList({
    students: (__VLS_ctx.students),
}));
const __VLS_6 = __VLS_5({
    students: (__VLS_ctx.students),
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
// @ts-ignore
[students,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
/** @type {__VLS_StyleScopedClasses['bg-indigo-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['fas']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-user-plus']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['fas']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-search']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        StudentsList: StudentsList,
        students: students,
        sortingModes: sortingModes,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=StudentsScreen.vue.js.map