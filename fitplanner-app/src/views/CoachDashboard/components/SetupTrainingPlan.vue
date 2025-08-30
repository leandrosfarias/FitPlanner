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
import { ref } from 'vue';
import type { Ref } from 'vue';
import { Button } from 'primevue';
import Select from 'primevue/select';

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