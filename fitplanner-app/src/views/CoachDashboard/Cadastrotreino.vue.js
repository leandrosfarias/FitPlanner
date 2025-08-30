import { ref } from "vue";
import Select from "primevue/select";
const trainings = ref([]);
const muscleGroups = [
    { label: "Peito", value: "peito" },
    { label: "Costas", value: "costas" },
    { label: "Pernas", value: "pernas" },
    { label: "Bíceps", value: "biceps" },
    { label: "Tríceps", value: "triceps" },
];
const allExercises = {
    peito: [
        { label: "Supino Reto", value: "supino_reto" },
        { label: "Supino Inclinado", value: "supino_inclinado" },
    ],
    costas: [
        { label: "Puxada Frente", value: "puxada_frente" },
        { label: "Remada Curvada", value: "remada_curvada" },
    ],
    pernas: [
        { label: "Agachamento Livre", value: "agachamento" },
        { label: "Leg Press", value: "leg_press" },
    ],
    biceps: [
        { label: "Rosca Direta", value: "rosca_direta" },
        { label: "Rosca Alternada", value: "rosca_alternada" },
    ],
    triceps: [
        { label: "Tríceps Testa", value: "triceps_testa" },
        { label: "Tríceps Corda", value: "triceps_corda" },
    ],
};
function filteredExercises(group) {
    return group ? allExercises[group] : [];
}
function addTraining() {
    trainings.value.push({
        exercises: [],
        newExercise: { group: "", exercise: "", repsMin: null, repsMax: null, rirMin: null, rirMax: null },
    });
}
function addExercise(trainingIndex) {
    const training = trainings.value[trainingIndex];
    const ex = training.newExercise;
    if (ex.group && ex.exercise && ex.repsMin !== null && ex.repsMax !== null && ex.rirMin !== null && ex.rirMax !== null) {
        training.exercises.push({ ...ex });
        training.newExercise = { group: "", exercise: "", repsMin: null, repsMax: null, rirMin: null, rirMax: null };
    }
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['new-training-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['reps-rir-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-field']} */ ;
/** @type {__VLS_StyleScopedClasses['add-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['exercise-list']} */ ;
/** @type {__VLS_StyleScopedClasses['exercise-list']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "training-form" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.addTraining) },
    ...{ class: "new-training-btn" },
});
// @ts-ignore
[addTraining,];
for (const [training, tIndex] of __VLS_getVForSourceType((__VLS_ctx.trainings))) {
    // @ts-ignore
    [trainings,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        key: (tIndex),
        ...{ class: "training-block" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({});
    (tIndex + 1);
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "form-grid" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "form-field" },
    });
    __VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({});
    const __VLS_0 = {}.Select;
    /** @type {[typeof __VLS_components.Select, ]} */ ;
    // @ts-ignore
    Select;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        modelValue: (training.newExercise.group),
        options: (__VLS_ctx.muscleGroups),
        optionLabel: "label",
        optionValue: "value",
        placeholder: "Selecione",
        ...{ class: "select-field" },
    }));
    const __VLS_2 = __VLS_1({
        modelValue: (training.newExercise.group),
        options: (__VLS_ctx.muscleGroups),
        optionLabel: "label",
        optionValue: "value",
        placeholder: "Selecione",
        ...{ class: "select-field" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    // @ts-ignore
    [muscleGroups,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "form-field" },
    });
    __VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({});
    const __VLS_5 = {}.Select;
    /** @type {[typeof __VLS_components.Select, ]} */ ;
    // @ts-ignore
    Select;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
        modelValue: (training.newExercise.exercise),
        options: (__VLS_ctx.filteredExercises(training.newExercise.group)),
        optionLabel: "label",
        optionValue: "value",
        placeholder: "Selecione",
        ...{ class: "select-field" },
    }));
    const __VLS_7 = __VLS_6({
        modelValue: (training.newExercise.exercise),
        options: (__VLS_ctx.filteredExercises(training.newExercise.group)),
        optionLabel: "label",
        optionValue: "value",
        placeholder: "Selecione",
        ...{ class: "select-field" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    // @ts-ignore
    [filteredExercises,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "reps-rir-group" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "form-field" },
    });
    __VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({});
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "input-pair" },
    });
    __VLS_asFunctionalElement(__VLS_elements.input)({
        type: "number",
        placeholder: "Min",
        ...{ class: "input-field" },
    });
    (training.newExercise.repsMin);
    __VLS_asFunctionalElement(__VLS_elements.input)({
        type: "number",
        placeholder: "Max",
        ...{ class: "input-field" },
    });
    (training.newExercise.repsMax);
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "form-field" },
    });
    __VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({});
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "input-pair" },
    });
    __VLS_asFunctionalElement(__VLS_elements.input)({
        type: "number",
        placeholder: "Min",
        ...{ class: "input-field" },
    });
    (training.newExercise.rirMin);
    __VLS_asFunctionalElement(__VLS_elements.input)({
        type: "number",
        placeholder: "Max",
        ...{ class: "input-field" },
    });
    (training.newExercise.rirMax);
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.addExercise(tIndex);
                // @ts-ignore
                [addExercise,];
            } },
        ...{ class: "add-btn" },
    });
    if (training.exercises.length) {
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "exercise-list" },
        });
        __VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({});
        for (const [exercise, eIndex] of __VLS_getVForSourceType((training.exercises))) {
            __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
                key: (eIndex),
            });
            (exercise.group);
            (exercise.exercise);
            (exercise.repsMin);
            (exercise.repsMax);
            (exercise.rirMin);
            (exercise.rirMax);
        }
    }
}
/** @type {__VLS_StyleScopedClasses['training-form']} */ ;
/** @type {__VLS_StyleScopedClasses['new-training-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['training-block']} */ ;
/** @type {__VLS_StyleScopedClasses['form-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['form-field']} */ ;
/** @type {__VLS_StyleScopedClasses['select-field']} */ ;
/** @type {__VLS_StyleScopedClasses['form-field']} */ ;
/** @type {__VLS_StyleScopedClasses['select-field']} */ ;
/** @type {__VLS_StyleScopedClasses['reps-rir-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-field']} */ ;
/** @type {__VLS_StyleScopedClasses['input-pair']} */ ;
/** @type {__VLS_StyleScopedClasses['input-field']} */ ;
/** @type {__VLS_StyleScopedClasses['input-field']} */ ;
/** @type {__VLS_StyleScopedClasses['form-field']} */ ;
/** @type {__VLS_StyleScopedClasses['input-pair']} */ ;
/** @type {__VLS_StyleScopedClasses['input-field']} */ ;
/** @type {__VLS_StyleScopedClasses['input-field']} */ ;
/** @type {__VLS_StyleScopedClasses['add-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['exercise-list']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        Select: Select,
        trainings: trainings,
        muscleGroups: muscleGroups,
        filteredExercises: filteredExercises,
        addTraining: addTraining,
        addExercise: addExercise,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Cadastrotreino.vue.js.map