import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { useToast } from 'primevue/usetoast';
import Select from 'primevue/select';
import { ref, defineEmits } from 'vue';
import { LocalExerciseRepository } from '../../../../services/LocalExerciseRepository';
import { v4 as uuidv4 } from 'uuid';
const emit = defineEmits(['close']);
const toast = useToast();
const exerciseTitle = ref('');
const exerciseDescription = ref('');
const selectedMuscleGroup = ref('Selecione um grupo muscular');
const muscleGroups = ref([
    { label: 'Peito', value: 'chest' },
    { label: 'Ombro', value: 'shoulder' },
    { label: 'Tríceps', value: 'triceps' },
    { label: 'Costas', value: 'back' },
    { label: 'Bíceps', value: 'biceps' },
    { label: 'Perna', value: 'leg' },
    { label: 'Cardio', value: 'cardio' }
]);
const exerciseRepository = new LocalExerciseRepository();
const addExercise = () => {
    if (exerciseTitle.value && selectedMuscleGroup.value !== 'Selecione um grupo muscular') {
        const newExercise = {
            id: uuidv4(),
            name: exerciseTitle.value,
            description: exerciseDescription.value,
            muscleGroup: selectedMuscleGroup.value
        };
        exerciseRepository.add(newExercise);
        // Reset form fields
        exerciseTitle.value = '';
        exerciseDescription.value = '';
        selectedMuscleGroup.value = 'Selecione um grupo muscular';
        toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Exercício adicionado com sucesso!', life: 3000 });
        emit('close');
    }
    else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['button-success']} */ ;
/** @type {__VLS_StyleScopedClasses['button-danger']} */ ;
/** @type {__VLS_StyleScopedClasses['button-danger']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "form-block" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "label" },
});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "required" },
});
const __VLS_0 = {}.InputText;
/** @type {[typeof __VLS_components.InputText, ]} */ ;
// @ts-ignore
InputText;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.exerciseTitle),
    placeholder: "ex: Supino reto máquina",
    ...{ class: "input-text" },
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.exerciseTitle),
    placeholder: "ex: Supino reto máquina",
    ...{ class: "input-text" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
// @ts-ignore
[exerciseTitle,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "form-block" },
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
    modelValue: (__VLS_ctx.exerciseDescription),
    placeholder: "ex: Exercício para peito",
    ...{ class: "input-text" },
}));
const __VLS_7 = __VLS_6({
    modelValue: (__VLS_ctx.exerciseDescription),
    placeholder: "ex: Exercício para peito",
    ...{ class: "input-text" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
// @ts-ignore
[exerciseDescription,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "form-block" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    ...{ class: "label" },
});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "required" },
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
    ...{ class: "input-text" },
}));
const __VLS_12 = __VLS_11({
    modelValue: (__VLS_ctx.selectedMuscleGroup),
    options: (__VLS_ctx.muscleGroups),
    placeholder: "Selecione um grupo muscular",
    optionLabel: "label",
    optionValue: "value",
    ...{ class: "input-text" },
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
// @ts-ignore
[selectedMuscleGroup, muscleGroups,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "container-buttons" },
});
const __VLS_15 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
Button;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    ...{ 'onClick': {} },
    label: "Adicionar Exercício",
    icon: "pi pi-plus",
    ...{ class: "button-success" },
}));
const __VLS_17 = __VLS_16({
    ...{ 'onClick': {} },
    label: "Adicionar Exercício",
    icon: "pi pi-plus",
    ...{ class: "button-success" },
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
let __VLS_19;
let __VLS_20;
const __VLS_21 = ({ click: {} },
    { onClick: (__VLS_ctx.addExercise) });
// @ts-ignore
[addExercise,];
var __VLS_18;
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('close');
            // @ts-ignore
            [$emit,];
        } },
    icon: "pi pi-times",
    ...{ class: "button-danger" },
});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    id: "return-btn-text",
});
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-block']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['required']} */ ;
/** @type {__VLS_StyleScopedClasses['input-text']} */ ;
/** @type {__VLS_StyleScopedClasses['form-block']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['input-text']} */ ;
/** @type {__VLS_StyleScopedClasses['form-block']} */ ;
/** @type {__VLS_StyleScopedClasses['label']} */ ;
/** @type {__VLS_StyleScopedClasses['required']} */ ;
/** @type {__VLS_StyleScopedClasses['input-text']} */ ;
/** @type {__VLS_StyleScopedClasses['container-buttons']} */ ;
/** @type {__VLS_StyleScopedClasses['button-success']} */ ;
/** @type {__VLS_StyleScopedClasses['button-danger']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        Button: Button,
        InputText: InputText,
        Select: Select,
        exerciseTitle: exerciseTitle,
        exerciseDescription: exerciseDescription,
        selectedMuscleGroup: selectedMuscleGroup,
        muscleGroups: muscleGroups,
        addExercise: addExercise,
    }),
    emits: {},
});
export default (await import('vue')).defineComponent({
    emits: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ExerciseForm.vue.js.map