<template>
    <div id="setup-training-plan-container">
        <h1>Novo Plano de Treino</h1>
        <transition>
            <div class="container-training">
                <section class="training-section">
                    <h3 class="title-card-training" @click="setShowTraining(!showTraining)">
                        <img :src="showTraining ? arrowDownIcon : arrowForwardIcon" alt="" />
                        <p>Treino {{ lettersToNumbers[currentNumberTraining] }}</p>
                    </h3>
                    <div v-if="showTraining">
                        <div v-if="showExerciseForm" class="exercise-form">
                            <label for="" class="labels-inputs">
                                Dia da Semana
                                <Select v-model="selectedDay" :options="daysOfWeek" optionLabel="label"
                                    placeholder="Selecione um dia da semana" class="p-mb-3" />
                            </label>
                        </div>
                        <div>
                            <Button label="Adicionar Exercício" icon="pi pi-plus" @click="showExerciseForm = true" />
                        </div>
                    </div>
                </section>
                <div>
                    <Button label="Adicionar Treino" icon="pi pi-plus" @click="currentNumberTraining++"
                        severity="contrast" />
                </div>
            </div>
        </transition>

    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { ref } from 'vue';
import type { Ref } from 'vue';
import type { Student } from '../../../interfaces/IStudentRepository';
import { Button } from 'primevue';
import Select from 'primevue/select';
import InputNumber from 'primevue/inputnumber';

import arrowForwardIcon from '../../../assets/icons/arrow_forward_black.svg';
import arrowDownIcon from '../../../assets/icons/arrow_downward.svg';

// list of letters from A to Z to get the current training number
const lettersToNumbers: Record<number, string> = {
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
const currentNumberTraining: Ref<number> = ref(1);

// Days of the week options
const daysOfWeek: Array<{ label: string; value: string }> = [
    { label: 'Domingo', value: 'sunday' },
    { label: 'Segunda-feira', value: 'monday' },
    { label: 'Terça-feira', value: 'tuesday' },
    { label: 'Quarta-feira', value: 'wednesday' },
    { label: 'Quinta-feira', value: 'thursday' },
    { label: 'Sexta-feira', value: 'friday' },
    { label: 'Sábado', value: 'saturday' }
];
const selectedDay: Ref<string | null> = ref(null);
//

// List of exercises (this can be replaced with a more dynamic list)
const exercises: Array<{ label: string; value: string }> = [
    { label: 'Agachamento', value: 'squat' },
    { label: 'Supino Reto na máquina', value: 'bench_press' },
    { label: 'Puxada na Barra', value: 'pull_up' },
    { label: 'Leg Press', value: 'leg_press' },
    { label: 'Rosca Direta', value: 'bicep_curl' },
    { label: 'Tríceps na Polia', value: 'tricep_pushdown' },
    { label: 'Elevação de Panturrilha', value: 'calf_raise' },
    { label: 'Prancha', value: 'plank' },
    { label: 'Abdução de Quadril', value: 'hip_abduction' },
    { label: 'Flexão de Pernas', value: 'leg_curl' },
    { label: 'Desenvolvimento de Ombros', value: 'shoulder_press' },
    { label: 'Barra Fixa', value: 'pull_up_bar' },
    { label: 'Cadeira Extensora', value: 'leg_extension' },
    { label: 'Cadeira Abdutora', value: 'hip_adduction' },
    { label: 'Puxada Frontal', value: 'lat_pulldown' },
    { label: 'Remada Baixa', value: 'seated_row' },
    { label: 'Rosca Martelo', value: 'hammer_curl' },
    { label: 'Tríceps Francês', value: 'overhead_tricep_extension' },
    { label: 'Elevação Lateral de Ombros', value: 'lateral_raise' },
    { label: 'Levantamento Terra', value: 'deadlift' },
    { label: 'Supino Inclinado', value: 'incline_bench_press' },
    { label: 'Puxada na Máquina', value: 'machine_row' },
    { label: 'Leg Press Unilateral', value: 'unilateral_leg_press' },
    { label: 'Rosca Scott', value: 'preacher_curl' },
    { label: 'Tríceps Testa', value: 'skull_crusher' },
    { label: 'Levantamento Terra', value: 'deadlift' },
    { label: 'Remada', value: 'row' },
    { label: 'Flexão de Braços', value: 'push_up' },
    { label: 'Abdominal', value: 'sit_up' },
    { label: 'Cardio (esteira, bicicleta, etc.)', value: 'cardio' },
    { label: 'Rosca Scott', value: 'scott_curl' }
];
const selectedExercise: Ref<string | null> = ref(null);

// Repetitions input
const reps: Ref<number | null> = ref(null);

type Exercise = {
    name: string;
    reps: number;
    sets: number;
};

const trainings: Ref<Array<{ dayOfWeek: string; exercises: Exercise[] }>> = ref([]);

const props = defineProps({
    student: {
        type: Object as () => Student,
        required: true
    }
});

// Estado para manipular quando deve aparecer formulário de exercícios
const showExerciseForm: Ref<boolean> = ref(false);

const showTraining: Ref<boolean> = ref(false);

const setShowTraining = (value: boolean) => {
    showTraining.value = value;
};
</script>
<style scoped>
#setup-training-plan-container {
    padding: 1rem;
    background-color: #f4f4f4;
    border-radius: 8px;
    font-size: 16px;

    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#exercises-container {
    display: flex;
    flex-direction: row;
    gap: 1.0rem;
    /* justify-content: space-between; */
}

.labels-inputs {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 38%;
}

.container-training {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.training-section {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.title-card-training {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    user-select: none;
}

.fade-expand-enter-active,
.fade-expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.fade-expand-enter-from,
.fade-expand-leave-to {
  opacity: 0;
  max-height: 0;
}
.fade-expand-enter-to,
.fade-expand-leave-from {
  opacity: 1;
  max-height: 1000px; /* ajuste conforme necessário */
}

img.rotated {
  transform: rotate(-90deg);
  transition: transform 0.3s ease;
}
</style>