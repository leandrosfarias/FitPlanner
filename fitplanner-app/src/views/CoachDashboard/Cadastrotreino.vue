<template>
  <div class="training-form">
    <h2>Cadastro de Treinos</h2>

    <button @click="addTraining" class="new-training-btn">+ Novo Treino</button>

    <div v-for="(training, tIndex) in trainings" :key="tIndex" class="training-block">
      <h3>Treino {{ tIndex + 1 }}</h3>

      <div class="form-grid">
        <div class="form-field">
          <label>Grupo Muscular</label>
          <Select
            v-model="training.newExercise.group"
            :options="muscleGroups"
            optionLabel="label"
            optionValue="value"
            placeholder="Selecione"
            class="select-field"
          />
        </div>

        <div class="form-field">
          <label>Exercício</label>
          <Select
            v-model="training.newExercise.exercise"
            :options="filteredExercises(training.newExercise.group)"
            optionLabel="label"
            optionValue="value"
            placeholder="Selecione"
            class="select-field"
          />
        </div>
        
        <div class="reps-rir-group">
          <div class="form-field">
            <label>REPS</label>
            <div class="input-pair">
              <input v-model="training.newExercise.repsMin" type="number" placeholder="Min" class="input-field" />
              <input v-model="training.newExercise.repsMax" type="number" placeholder="Max" class="input-field" />
            </div>
          </div>
          <div class="form-field">
            <label>RIR</label>
            <div class="input-pair">
              <input v-model="training.newExercise.rirMin" type="number" placeholder="Min" class="input-field" />
              <input v-model="training.newExercise.rirMax" type="number" placeholder="Max" class="input-field" />
            </div>
          </div>
        </div>

        <button @click="addExercise(tIndex)" class="add-btn">Adicionar</button>
      </div>

      <div v-if="training.exercises.length" class="exercise-list">
        <ul>
          <li v-for="(exercise, eIndex) in training.exercises" :key="eIndex">
            {{ exercise.group }} - {{ exercise.exercise }}
            ({{ exercise.repsMin }}/{{ exercise.repsMax }} reps, RIR: {{ exercise.rirMin }}/{{ exercise.rirMax }})
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Select from "primevue/select";

interface Exercise {
  group: string;
  exercise: string;
  repsMin: number | null;
  repsMax: number | null;
  rirMin: number | null;
  rirMax: number | null;
}

interface Training {
  exercises: Exercise[];
  newExercise: Exercise;
}

const trainings = ref<Training[]>([]);

const muscleGroups = [
  { label: "Peito", value: "peito" },
  { label: "Costas", value: "costas" },
  { label: "Pernas", value: "pernas" },
  { label: "Bíceps", value: "biceps" },
  { label: "Tríceps", value: "triceps" },
];

const allExercises: Record<string, { label: string; value: string }[]> = {
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

function filteredExercises(group: string) {
  return group ? allExercises[group] : [];
}

function addTraining() {
  trainings.value.push({
    exercises: [],
    newExercise: { group: "", exercise: "", repsMin: null, repsMax: null, rirMin: null, rirMax: null },
  });
}

function addExercise(trainingIndex: number) {
  const training = trainings.value[trainingIndex];
  const ex = training.newExercise;
  if (ex.group && ex.exercise && ex.repsMin !== null && ex.repsMax !== null && ex.rirMin !== null && ex.rirMax !== null) {
    training.exercises.push({ ...ex });
    training.newExercise = { group: "", exercise: "", repsMin: null, repsMax: null, rirMin: null, rirMax: null };
  }
}
</script>

<style scoped>
.training-form {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.new-training-btn {
  margin-bottom: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
.new-training-btn:hover {
  background-color: #2563eb;
}

.training-block {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  background: #f9fafb;
}

.form-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-end;
}

.form-field {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 150px;
}

.reps-rir-group {
  display: flex;
  gap: 1rem;
  flex-grow: 1;
}

.reps-rir-group .form-field {
  flex-grow: 1;
  min-width: 0;
}

.input-pair {
  display: flex;
  gap: 0.5rem;
}

.select-field, .input-field {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.95rem;
}

.add-btn {
  padding: 0.75rem 1.5rem;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
.add-btn:hover {
  background-color: #059669;
}

.exercise-list {
  margin-top: 1rem;
}
.exercise-list ul {
  list-style: none;
  padding: 0;
}
.exercise-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
}
</style>