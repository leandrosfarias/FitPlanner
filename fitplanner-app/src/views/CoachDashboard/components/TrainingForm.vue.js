import { ref, defineProps, watch } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Select from 'primevue/select';
import ExpandableBox from '../../../components/ExpandableBox.vue';
const props = defineProps();
const title = ref('');
const muscleGroups = ref([
    { label: 'Peito', value: 'chest' },
    { label: 'Ombro', value: 'shoulder' },
    { label: 'Tríceps', value: 'triceps' },
    { label: 'Costas', value: 'back' },
    { label: 'Bíceps', value: 'biceps' },
    { label: 'Perna', value: 'leg' },
    { label: 'Cardio', value: 'cardio' }
]);
const selectedMuscleGroup = ref('Selecione um grupo muscular');
const showAddExerciseButton = ref(false);
watch([selectedMuscleGroup], () => {
    if (selectedMuscleGroup.value !== "Selecione um grupo muscular") {
        showAddExerciseButton.value = true;
    }
    else {
        showAddExerciseButton.value = false;
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
/** @type {[typeof ExpandableBox, typeof ExpandableBox, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(ExpandableBox, new ExpandableBox({
    title: (`Treino ${props.letter}`),
}));
const __VLS_1 = __VLS_0({
    title: (`Treino ${props.letter}`),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
const { default: __VLS_4 } = __VLS_2.slots;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "label" },
});
const __VLS_5 = {}.InputText;
/** @type {[typeof __VLS_components.InputText, ]} */ ;
// @ts-ignore
InputText;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    modelValue: (__VLS_ctx.title),
    placeholder: "Digite o título do treino",
}));
const __VLS_7 = __VLS_6({
    modelValue: (__VLS_ctx.title),
    placeholder: "Digite o título do treino",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
// @ts-ignore
[title,];
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "label" },
});
const __VLS_10 = {}.Select;
/** @type {[typeof __VLS_components.Select, ]} */ ;
// @ts-ignore
Select;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
    modelValue: (__VLS_ctx.selectedMuscleGroup),
    options: (__VLS_ctx.muscleGroups),
    placeholder: "Selecione um grupo muscular",
    optionLabel: "label",
    optionValue: "value",
}));
const __VLS_12 = __VLS_11({
    modelValue: (__VLS_ctx.selectedMuscleGroup),
    options: (__VLS_ctx.muscleGroups),
    placeholder: "Selecione um grupo muscular",
    optionLabel: "label",
    optionValue: "value",
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
// @ts-ignore
[selectedMuscleGroup, muscleGroups,];
if (__VLS_ctx.showAddExerciseButton) {
    // @ts-ignore
    [showAddExerciseButton,];
    const __VLS_15 = {}.Button;
    /** @type {[typeof __VLS_components.Button, ]} */ ;
    // @ts-ignore
    Button;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
        ...{ class: "btn" },
        label: "Adicionar Exercício",
        icon: "pi pi-plus",
    }));
    const __VLS_17 = __VLS_16({
        ...{ class: "btn" },
        label: "Adicionar Exercício",
        icon: "pi pi-plus",
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
}
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        InputText: InputText,
        Button: Button,
        Select: Select,
        ExpandableBox: ExpandableBox,
        title: title,
        muscleGroups: muscleGroups,
        selectedMuscleGroup: selectedMuscleGroup,
        showAddExerciseButton: showAddExerciseButton,
    }),
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=TrainingForm.vue.js.map