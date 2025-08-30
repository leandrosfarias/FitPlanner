import { onMounted, ref, defineProps, watch } from 'vue';
import { LocalExerciseRepository } from '../../../../services/LocalExerciseRepository';
const exerciseRepository = new LocalExerciseRepository();
const exercises = ref([]);
const exercisesFiltered = ref([]);
onMounted(async () => {
    exercises.value = await exerciseRepository.getAll();
    if (props.muscleGroupFilter === 'Grupo Muscular') {
        exercisesFiltered.value = exercises.value;
    }
    else {
        exercisesFiltered.value = exercises.value.filter(exercise => exercise.muscleGroup === props.muscleGroupFilter);
    }
});
const props = defineProps();
watch(() => props.muscleGroupFilter, (newFilter) => {
    if (newFilter === 'Grupo Muscular') {
        exercisesFiltered.value = exercises.value;
    }
    else {
        exercisesFiltered.value = exercises.value.filter(exercise => exercise.muscleGroup === newFilter);
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
    ...{ class: "exercise-list" },
});
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
    ...{ class: "title" },
});
for (const [exercise] of __VLS_getVForSourceType((__VLS_ctx.exercisesFiltered))) {
    // @ts-ignore
    [exercisesFiltered,];
    __VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
        key: (exercise.id),
        ...{ class: "exercise-item" },
    });
    (exercise.name);
}
/** @type {__VLS_StyleScopedClasses['exercise-list']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['exercise-item']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        exercisesFiltered: exercisesFiltered,
    }),
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ExerciseList.vue.js.map