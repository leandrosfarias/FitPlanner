import { ref } from 'vue';
import { Button } from 'primevue';
import Select from 'primevue/select';
import arrowForwardIcon from '../../../assets/icons/arrow_forward_black.svg';
import arrowDownIcon from '../../../assets/icons/arrow_downward.svg';
// list of letters from A to Z to get the current training number
const lettersToNumbers = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
    26: 'Z'
};
//
/// Current letter selection
const currentNumberTraining = ref(1);
// Days of the week options
const daysOfWeek = [
    { label: 'Domingo', value: 'sunday' },
    { label: 'Segunda-feira', value: 'monday' },
    { label: 'Terça-feira', value: 'tuesday' },
    { label: 'Quarta-feira', value: 'wednesday' },
    { label: 'Quinta-feira', value: 'thursday' },
    { label: 'Sexta-feira', value: 'friday' },
    { label: 'Sábado', value: 'saturday' }
];
const selectedDay = ref(null);
// Estado para manipular quando deve aparecer formulário de exercícios
const showExerciseForm = ref(false);
const showTraining = ref(false);
const setShowTraining = (value) => {
    showTraining.value = value;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    id: "setup-training-plan-container",
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
const __VLS_0 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
Transition;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "container-training" },
});
__VLS_asFunctionalElement(__VLS_elements.section, __VLS_elements.section)({
    ...{ class: "training-section" },
});
__VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.setShowTraining(!__VLS_ctx.showTraining);
            // @ts-ignore
            [setShowTraining, showTraining,];
        } },
    ...{ class: "title-card-training" },
});
__VLS_asFunctionalElement(__VLS_elements.img)({
    src: (__VLS_ctx.showTraining ? __VLS_ctx.arrowDownIcon : __VLS_ctx.arrowForwardIcon),
    alt: "",
});
// @ts-ignore
[showTraining, arrowDownIcon, arrowForwardIcon,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({});
(__VLS_ctx.lettersToNumbers[__VLS_ctx.currentNumberTraining]);
// @ts-ignore
[lettersToNumbers, currentNumberTraining,];
if (__VLS_ctx.showTraining) {
    // @ts-ignore
    [showTraining,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    if (__VLS_ctx.showExerciseForm) {
        // @ts-ignore
        [showExerciseForm,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "exercise-form" },
        });
        __VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
            for: "",
            ...{ class: "labels-inputs" },
        });
        const __VLS_5 = {}.Select;
        /** @type {[typeof __VLS_components.Select, ]} */ ;
        // @ts-ignore
        Select;
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
            modelValue: (__VLS_ctx.selectedDay),
            options: (__VLS_ctx.daysOfWeek),
            optionLabel: "label",
            placeholder: "Selecione um dia da semana",
            ...{ class: "p-mb-3" },
        }));
        const __VLS_7 = __VLS_6({
            modelValue: (__VLS_ctx.selectedDay),
            options: (__VLS_ctx.daysOfWeek),
            optionLabel: "label",
            placeholder: "Selecione um dia da semana",
            ...{ class: "p-mb-3" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_6));
        // @ts-ignore
        [selectedDay, daysOfWeek,];
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    const __VLS_10 = {}.Button;
    /** @type {[typeof __VLS_components.Button, ]} */ ;
    // @ts-ignore
    Button;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
        ...{ 'onClick': {} },
        label: "Adicionar Exercício",
        icon: "pi pi-plus",
    }));
    const __VLS_12 = __VLS_11({
        ...{ 'onClick': {} },
        label: "Adicionar Exercício",
        icon: "pi pi-plus",
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    let __VLS_14;
    let __VLS_15;
    const __VLS_16 = ({ click: {} },
        { onClick: (...[$event]) => {
                if (!(__VLS_ctx.showTraining))
                    return;
                __VLS_ctx.showExerciseForm = true;
                // @ts-ignore
                [showExerciseForm,];
            } });
    var __VLS_13;
}
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
const __VLS_18 = {}.Button;
/** @type {[typeof __VLS_components.Button, ]} */ ;
// @ts-ignore
Button;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
    ...{ 'onClick': {} },
    label: "Adicionar Treino",
    icon: "pi pi-plus",
    severity: "contrast",
}));
const __VLS_20 = __VLS_19({
    ...{ 'onClick': {} },
    label: "Adicionar Treino",
    icon: "pi pi-plus",
    severity: "contrast",
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
let __VLS_22;
let __VLS_23;
const __VLS_24 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.currentNumberTraining++;
            // @ts-ignore
            [currentNumberTraining,];
        } });
var __VLS_21;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['container-training']} */ ;
/** @type {__VLS_StyleScopedClasses['training-section']} */ ;
/** @type {__VLS_StyleScopedClasses['title-card-training']} */ ;
/** @type {__VLS_StyleScopedClasses['exercise-form']} */ ;
/** @type {__VLS_StyleScopedClasses['labels-inputs']} */ ;
/** @type {__VLS_StyleScopedClasses['p-mb-3']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        Button: Button,
        Select: Select,
        arrowForwardIcon: arrowForwardIcon,
        arrowDownIcon: arrowDownIcon,
        lettersToNumbers: lettersToNumbers,
        currentNumberTraining: currentNumberTraining,
        daysOfWeek: daysOfWeek,
        selectedDay: selectedDay,
        showExerciseForm: showExerciseForm,
        showTraining: showTraining,
        setShowTraining: setShowTraining,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=SetupTrainingPlan.vue.js.map