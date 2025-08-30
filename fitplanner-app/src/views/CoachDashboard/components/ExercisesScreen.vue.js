import ExerciseForm from './exercises-components/ExerciseForm.vue';
import ExerciseList from './exercises-components/ExerciseList.vue';
import 'primeicons/primeicons.css';
import Select from 'primevue/select';
import Button from 'primevue/button';
import { ref } from 'vue';
const muscleGroups = ref([
    { label: 'Peito', value: 'chest' },
    { label: 'Ombro', value: 'shoulder' },
    { label: 'Tríceps', value: 'triceps' },
    { label: 'Costas', value: 'back' },
    { label: 'Bíceps', value: 'biceps' },
    { label: 'Perna', value: 'leg' },
    { label: 'Cardio', value: 'cardio' }
]);
const selectedMuscleGroup = ref('Grupo Muscular');
const showExerciseForm = ref(false);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['search-bar']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
    ...{ class: "title" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "container-search-bar" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.showExerciseForm) }, null, null);
// @ts-ignore
[vShow, showExerciseForm,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "search-bar" },
});
__VLS_asFunctionalElement(__VLS_elements.i, __VLS_elements.i)({
    ...{ class: "pi pi-search search-icon" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    type: "text",
    name: "clientSearch",
    id: "clientSearch",
    placeholder: "Buscar exercício",
});
const __VLS_0 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
Button;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    label: "Novo exercício",
    icon: "pi pi-plus",
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    label: "Novo exercício",
    icon: "pi pi-plus",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
const __VLS_6 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.showExerciseForm = true;
            // @ts-ignore
            [showExerciseForm,];
        } });
var __VLS_3;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "filter-container" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.showExerciseForm) }, null, null);
// @ts-ignore
[vShow, showExerciseForm,];
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "label" },
});
const __VLS_8 = {}.Select;
/** @type {[typeof __VLS_components.Select, ]} */ ;
// @ts-ignore
Select;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    modelValue: (__VLS_ctx.selectedMuscleGroup),
    options: (__VLS_ctx.muscleGroups),
    placeholder: "Grupo Muscular",
    optionLabel: "label",
    optionValue: "value",
}));
const __VLS_10 = __VLS_9({
    modelValue: (__VLS_ctx.selectedMuscleGroup),
    options: (__VLS_ctx.muscleGroups),
    placeholder: "Grupo Muscular",
    optionLabel: "label",
    optionValue: "value",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
// @ts-ignore
[selectedMuscleGroup, muscleGroups,];
if (!__VLS_ctx.showExerciseForm) {
    // @ts-ignore
    [showExerciseForm,];
    /** @type {[typeof ExerciseList, ]} */ ;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(ExerciseList, new ExerciseList({
        muscleGroupFilter: (__VLS_ctx.selectedMuscleGroup),
    }));
    const __VLS_14 = __VLS_13({
        muscleGroupFilter: (__VLS_ctx.selectedMuscleGroup),
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    // @ts-ignore
    [selectedMuscleGroup,];
}
/** @type {[typeof ExerciseForm, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(ExerciseForm, new ExerciseForm({
    ...{ 'onClose': {} },
}));
const __VLS_18 = __VLS_17({
    ...{ 'onClose': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
let __VLS_20;
let __VLS_21;
const __VLS_22 = ({ close: {} },
    { onClose: (...[$event]) => {
            __VLS_ctx.showExerciseForm = false;
            // @ts-ignore
            [showExerciseForm,];
        } });
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.showExerciseForm) }, null, null);
// @ts-ignore
[vShow, showExerciseForm,];
var __VLS_19;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['container-search-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['search-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['pi']} */ ;
/** @type {__VLS_StyleScopedClasses['pi-search']} */ ;
/** @type {__VLS_StyleScopedClasses['search-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['filter-container']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        ExerciseForm: ExerciseForm,
        ExerciseList: ExerciseList,
        Select: Select,
        Button: Button,
        muscleGroups: muscleGroups,
        selectedMuscleGroup: selectedMuscleGroup,
        showExerciseForm: showExerciseForm,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ExercisesScreen.vue.js.map