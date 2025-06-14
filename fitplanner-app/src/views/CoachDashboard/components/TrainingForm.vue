<template>
    <ExpandableBox :title="`Treino ${props.letter}`">
        <div class="form-group">
            <label class="label">Título do Treino</label>
            <InputText v-model="title" placeholder="Digite o título do treino" />
            <label class="label">Grupo Muscular</label>
            <Select v-model="selectedMuscleGroup" :options="muscleGroups" placeholder="Selecione um grupo muscular" option-label="label"
                option-value="value" />
            <Button v-if="showAddExerciseButton" class="btn" label="Adicionar Exercício" icon="pi pi-plus" />
        </div>
    </ExpandableBox>
</template>
<script lang="ts" setup>
import { ref, defineProps, watch } from 'vue';
import type { Ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Select from 'primevue/select';
import ExpandableBox from '../../../components/ExpandableBox.vue';

const props = defineProps<{
    letter: string;
}>();

const title: Ref<string> = ref('');

const muscleGroups = ref([
    { label: 'Peito', value: 'chest' },
    { label: 'Ombro', value: 'shoulder' },
    { label: 'Tríceps', value: 'triceps' },
    { label: 'Costas', value: 'back' },
    { label: 'Bíceps', value: 'biceps' },
    { label: 'Perna', value: 'leg' },
    { label: 'Cardio', value: 'cardio' }
]);

const selectedMuscleGroup = ref('Selecione um grupo muscular');

const showAddExerciseButton = ref(false);

watch([selectedMuscleGroup], () => {
    if (selectedMuscleGroup.value !== "Selecione um grupo muscular") {
        showAddExerciseButton.value = true;
    } else {
        showAddExerciseButton.value = false;
    }
});
</script>
<style scoped>
.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 50%;
}

.label {
    font-weight: bold;
    margin-bottom: 8px;
}

.btn {
    width: fit-content;
    margin-top: 8px;
}
</style>