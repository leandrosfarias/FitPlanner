<template>
    <ul class="exercise-list">
        <h2 class="title">Lista de Exercícios Cadastrados</h2>
        <li v-for="exercise in exercisesFiltered" :key="exercise.id" class="exercise-item">
            {{ exercise.name }}
        </li>
    </ul>
</template>
<script lang="ts" setup>
import { onMounted, ref, defineProps, watch } from 'vue';
import type { IExercise } from '../../../../interfaces/IExerciseRepository';
import { LocalExerciseRepository } from '../../../../services/LocalExerciseRepository';

const exerciseRepository = new LocalExerciseRepository();
const exercises = ref<IExercise[]>([]);
const exercisesFiltered = ref<IExercise[]>([]);



onMounted(async () => {
    exercises.value = await exerciseRepository.getAll();
    if (props.muscleGroupFilter === 'Grupo Muscular') {
        exercisesFiltered.value = exercises.value;
    } else {
        exercisesFiltered.value = exercises.value.filter(exercise => exercise.muscleGroup === props.muscleGroupFilter);
    }
});

const props = defineProps<{
    muscleGroupFilter: string;
}>();

watch(() => props.muscleGroupFilter, (newFilter) => {
    if (newFilter === 'Grupo Muscular') {
        exercisesFiltered.value = exercises.value;
    } else {
        exercisesFiltered.value = exercises.value.filter(exercise => exercise.muscleGroup === newFilter);
    }
});
</script>
<style scoped>
.title {
    font-size: 1.5em;
    margin-bottom: 16px;
    color: #333;
}

.exercise-list {
    padding: 16px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 80%;
    height: 50vh;
    overflow-y: scroll;
}

.exercise-item {
    margin-bottom: 12px;
    background-color: #e4dcdc;
    border-radius: 8px;
    padding: 16px;
    list-style: none;
    font-size: 1.2em;
    color: #333;
    transition: background-color 0.3s ease;
    cursor: pointer;
    font-weight: 400;
    width: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    user-select: none;
}
</style>