<template>
    <h3 class="title">Exercícios</h3>
    <div class="container-search-bar" v-show="!showExerciseForm">
        <div class="search-bar">
            <i class="pi pi-search search-icon"></i>
            <input type="text" name="clientSearch" id="clientSearch" placeholder="Buscar exercício">
        </div>
        <Button label="Novo exercício" icon="pi pi-plus" @click="showExerciseForm = true"/>
    </div>
    <div class="filter-container" v-show="!showExerciseForm">
        <label class="label"> Filtra por: </label>
        <Select v-model="selectedMuscleGroup" :options="muscleGroups" placeholder="Grupo Muscular" option-label="label"
            option-value="value" />
    </div>
    <ExerciseList :muscleGroupFilter="selectedMuscleGroup" v-if="!showExerciseForm"/>
    <ExerciseForm v-show="showExerciseForm" @close="showExerciseForm = false"/>
</template>
<script lang="ts" setup>
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
</script>
<style scoped>
.title {
    font-size: 1.5em;
    margin-bottom: 16px;
}

.container-search-bar {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    gap: 16px;
    margin-bottom: 16px;
}

.search-bar {
    position: relative;
    width: 50%;
}

.filter-container {
    display: flex;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 16px;
    gap: 8px;

}

.search-bar input {
    width: 100%;
    padding: 0.5rem 0.5rem 0.5rem 2.5rem;
    border-radius: 16px;
    border: 1px solid #ccc;
    font-size: 14px;
    font-weight: bold;
}

.search-icon {
    position: absolute;
    top: 50%;
    left: 0.8rem;
    transform: translateY(-50%);
    color: #888;
}
</style>