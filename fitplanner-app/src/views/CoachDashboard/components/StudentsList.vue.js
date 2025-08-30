import { defineProps } from 'vue';
import StudentItem from './StudentItem.vue';
// type Student = {
//   id: string;
//   name: string;
//   email: string;
//   status: 'Ativo' | 'Inativo';
// };
const props = defineProps({
    students: {
        type: Array,
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    id: "students-list",
});
for (const [student] of __VLS_getVForSourceType((props.students))) {
    /** @type {[typeof StudentItem, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(StudentItem, new StudentItem({
        key: (student.id),
        student: (student),
    }));
    const __VLS_1 = __VLS_0({
        key: (student.id),
        student: (student),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
}
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        StudentItem: StudentItem,
    }),
    props: {
        students: {
            type: Array,
        }
    },
});
export default (await import('vue')).defineComponent({
    props: {
        students: {
            type: Array,
        }
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=StudentsList.vue.js.map