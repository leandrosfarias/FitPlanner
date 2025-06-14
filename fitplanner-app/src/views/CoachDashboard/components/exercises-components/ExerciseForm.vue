<template>
    <div>
        <div class="form-group">
            <div class="form-block">
                <label class="label"> <span class="required">*</span> Nome do Exercício</label>
                <InputText v-model="exerciseTitle" placeholder="ex: Supino reto máquina" class="input-text" />
            </div>
            <div class="form-block">
                <label class="label">Descrição do Exercício</label>
                <InputText v-model="exerciseDescription" placeholder="ex: Exercício para peito" class="input-text" />
            </div>
            <div class="form-block">
                <label class="label"> <span class="required">*</span> Grupo Muscular</label>
                <Select v-model="selectedMuscleGroup" :options="muscleGroups" placeholder="Selecione um grupo muscular"
                    option-label="label" option-value="value" class="input-text" />
            </div>
            <div class="container-buttons">
                <Button label="Adicionar Exercício" icon="pi pi-plus" class="button-success" @click="addExercise" />
                <button icon="pi pi-times" class="button-danger" @click="$emit('close')" >
                    <span id="return-btn-text"> <- Voltar</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { useToast } from 'primevue/usetoast';
import Select from 'primevue/select';
import { ref, defineEmits } from 'vue';
import { LocalExerciseRepository } from '../../../../services/LocalExerciseRepository';
import type { IExercise } from '../../../../interfaces/IExerciseRepository';
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
        const newExercise: IExercise = {
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
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
};
</script>
<style scoped>


.form-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
}

.form-block {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.label {
    font-weight: bold;
    margin-bottom: 16px;
}

.input-text,
.button-success {
    width: 50%;
    border-radius: 12px;
    padding: 8px;
}

.button-success {
    width: 30%;
}

.required {
    color: red;
}

.button-danger {
    width: 30%;
    background-color: #f44336;
    color: white;
    border-radius: 12px;
    padding: 8px;
    border: none;
    cursor: pointer;
}

.button-danger:hover {
    background-color: #d32f2f;
}

.button-danger:active {
    background-color: #b71c1c;
}

#return-btn-text {
    font-weight: bold;
    font-size: 1.0rem;
}

.container-buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
}
</style>