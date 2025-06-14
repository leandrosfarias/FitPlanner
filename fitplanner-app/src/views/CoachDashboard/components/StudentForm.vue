<template>
    <section class="form-section">
        <h1>Cadastrar Novo Atleta</h1>
        <div id="scroll-wrapper">
            <div id="form-container">
                <div class="form-sc" v-if="viewMode === 'register-student'">
                    <div id="header-form">
                        <img :src="icon" @click="switchIcon()" alt="Seta para frente"
                            :class="{ 'arrow-icon': true, 'arrow-icon-rotated': !viewSectionStudentData }" />
                        <h4>Informações do aluno</h4>
                    </div>
                    <div id="form-section-student-data" v-show="!viewSectionStudentData">
                        <div class="container-inputs">
                            <label for="" class="labels-inputs">
                                Nome Completo
                                <InputText v-model="studentName" placeholder="ex: Leandro Farinha" type="text"
                                    class="p-inputtext" fluid />
                            </label>
                            <label for="" class="labels-inputs">
                                Email
                                <InputText v-model="studentEmail" placeholder="ex: leandro@email.com" type="email"
                                    class="p-inputtext" fluid />
                            </label>
                            <label for="" class="labels-inputs">
                                Celular
                                <InputMask v-model="studentPhone" placeholder="ex: (11) 99999-9999"
                                    mask="(99) 99999-9999" class="p-inputtext" />
                            </label>
                        </div>

                        <div class="container-numbers">
                            <label for="weight" class="label-number">
                                Peso (kg)
                                <div class="container-input-number">
                                    <InputNumber v-model="studentWeight" placeholder="Peso (kg)" mode="decimal"
                                        class="p-inputnumber" :minFractionDigits="2" :maxFractionDigits="5" />
                                </div>
                            </label>
                            <label for="height" class="label-number">
                                Altura (cm)
                                <div class="container-input-number">
                                    <InputNumber v-model="studentHeight" placeholder="Altura (cm)" mode="decimal"
                                        class="p-inputnumber" :minFractionDigits="2" :maxFractionDigits="5" />
                                </div>
                            </label>
                        </div>

                        <div id="third-row">
                            <label for="" class="labels-inputs">
                                Gênero
                                <Select v-model="selectedGender" :options="genderOptions" optionLabel="label"
                                    placeholder="Selecione um Gênero" class="" />
                            </label>
                            <label for="" class="labels-inputs">
                                Objetivo
                                <Select v-model="studentGoal" :options="goals" optionLabel="label"
                                    placeholder="Selecione um Objetivo" class="" />
                            </label>
                        </div>

                        <div id="fourth-row">
                            <label for="" class="labels-inputs">
                                Data de Nascimento
                                <DatePicker v-model="studentBirthDate" placeholder="Data de Nascimento"
                                    class="p-datepicker" />
                            </label>
                        </div>

                        <div id="fifth-row">
                            <label for="" class="labels-inputs">
                                Observações sobre o Aluno
                                <Textarea v-model="studentObservations" placeholder="ex: Tem a coluna meia torta"
                                    rows="3" class="p-textarea" />
                            </label>
                        </div>
                        <div id="container-button-next">
                            <Button label="Montar plano de treino" @click="switchFormSectionSetupPlan()"/>
                        </div>

                    </div>

                </div>
                <div id="form-container-setup-plan" class="form-sc">
                    <div id="header-form">
                        <img :src="icon" @click="switchFormSectionSetupPlan" alt="Seta para frente"
                            :class="{ 'arrow-icon': true, 'arrow-icon-rotated': !viewSectionSetupPlan }" />
                        <h4>Montar Plano de Treino</h4>
                    </div>
                    <div v-show="!viewSectionSetupPlan" class="form-content">
                        <Button icon="pi pi-plus" id="setup-plan-button" class="button" label="Adicionar Treino"
                            @click="setupPlan" raised severity="contrast" />
                    </div>
                </div>
            </div>
        </div>
        <!-- <div id="container-btn-setup-plan">
            <Button icon="pi pi-plus" id="setup-plan-button" class="button" label="Montar Plano de treino"
                @click="setupPlan" raised severity="contrast" />
        </div>

        <div id="container-buttons">
            <Button id="save-button" class="button" label="Cadastrar" @click="saveStudent" :disabled="disabledButton" />
            <Button id="cancel-button" class="button" label="Cancelar" severity="warn" @click="cancelForm" />
        </div> -->
    </section>
</template>

<script setup lang="ts">

import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import InputMask from 'primevue/inputmask';
import Button from 'primevue/button';
import Select from 'primevue/select';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';

import { ref, watchEffect, defineEmits } from 'vue';
import type { Ref } from 'vue';

import SetupTrainingPlan from './SetupTrainingPlan.vue';

import { LocalStudentRepository } from '../../../services/LocalStudentRepository';
import type { Student } from '../../../interfaces/Student';
import { v4 as uuidv4 } from 'uuid';

import arrowForwardIcon from '../../../assets/icons/arrow_forward_black_2.svg';
import arrowDownIcon from '../../../assets/icons/keyboard_arrow_down_2.svg';


const icon = ref(arrowForwardIcon);

const studentRepository = new LocalStudentRepository();
const viewMode = ref<'register-student' | 'setup-plan'>('register-student');

const studentName: Ref<string> = ref('');
const studentEmail: Ref<string> = ref('');
const studentPhone: Ref<string> = ref('');
const studentWeight: Ref<number | null> = ref(null);
const studentHeight: Ref<number | null> = ref(null);
const studentBirthDate: Ref<Date | null> = ref(null);
const studentObservations: Ref<string> = ref('');
const studentGoal: Ref<string> = ref('');
const goals = [
    { label: 'Emagrecimento', value: 'weight_loss' },
    { label: 'Hipertrofia', value: 'hypertrophy' },
    { label: 'Definição Muscular', value: 'muscle_definition' },
    { label: 'Aumento de Força', value: 'strength_gain' },
    { label: 'Melhora de Performance', value: 'performance_improvement' }
];

const selectedGender: Ref<string> = ref('');
const genderOptions = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' },
    { label: 'Outro', value: 'O' }
];

const student: Ref<Student | null> = ref(null);

const step = ref(1);

function goToStep(n: number) {
    step.value = n;
}

const emits = defineEmits(['cancel', 'submit']);

const disabledButton: Ref<boolean> = ref(true);

watchEffect(() => {
    disabledButton.value = !studentName.value || !studentEmail.value || !studentWeight.value || !studentHeight.value || !studentBirthDate.value || !studentGoal.value;
});

async function createAndSaveStudent() {
    // Lógica para criar e salvar o aluno
    const newStudent: Student = {
        id: uuidv4(),
        name: studentName.value,
        email: studentEmail.value,
        weight: studentWeight.value ?? 0,
        height: studentHeight.value ?? 0,
        birthDate: studentBirthDate.value?.toISOString() ?? '',
        createdAt: new Date(),
        gender: selectedGender.value,
        observations: studentObservations.value,
        goal: studentGoal.value,
    };

    student.value = newStudent;

    await studentRepository.add(newStudent);
}


async function saveStudent() {
    // Lógica para salvar o aluno
    await createAndSaveStudent();
}

async function setupPlan() {
    // Lógica para configurar o plano do aluno
    console.log('Configurar Plano para:', studentName.value);
    // viewMode.value = 'setup-plan';
    goToStep(2);
    await createAndSaveStudent();
}

function cancelForm() {
    emits('cancel');
}

function switchIcon() {
    // icon.value = icon.value === arrowForwardIcon ? arrowDownIcon : arrowForwardIcon;
    switchFormSectionStudentData();
}


const viewSectionStudentData = ref(false);

function switchFormSectionStudentData() {
    viewSectionStudentData.value = !viewSectionStudentData.value;
}

const viewSectionSetupPlan = ref(true);
function switchFormSectionSetupPlan() {
    viewSectionSetupPlan.value = !viewSectionSetupPlan.value;
    switchFormSectionStudentData();
}
</script>

<style scoped>

#scroll-wrapper {
    max-height: calc(100vh - 120px);
    overflow-y: auto;
    padding-right: 0.5rem;
}

#form-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    /* height: 180vh;
    overflow-y: scroll; */
}

.form-sc {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 600px;
    margin: auto;
    max-height: 70vh;
    overflow-y: auto;
    padding: 1.5em;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
}

#student-form,
#setup-plan-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 600px;
    margin: auto;
    max-height: 80vh;
    overflow-y: auto;
    padding: 1.5em;
    border: 1px solid #ccc;
    border-radius: 8px;
}

#setup-plan-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 600px;
    margin: auto;
    max-height: 80vh;
    overflow-y: auto;
    padding: 1.5em;
    border: 1px solid #ccc;
    border-radius: 8px;
}

#header-form {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

#gender-label {
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem;
}

.radio-group {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-top: 0.5rem;
}

.radio-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
}

.radio-option label {
    cursor: pointer;
}

.container-numbers {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    margin-bottom: 1rem;
    justify-content: center;
}

.input-number {
    max-width: 120px;
    width: 100%;
}

.input-number .p-inputtext {
    padding: 0.5em;
    font-size: 0.9rem;
}

.label-number {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    font-weight: bold;
    gap: 0.5rem;
}

.labels-inputs {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    font-weight: bold;
    gap: 0.5rem;
}

.container-input-number {
    display: flex;
    flex-direction: column;
    width: 30%;
}

.container-inputs {
    display: flex;
    flex-direction: column;
    gap: 1.0rem;
}

#third-row {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    justify-content: center;
}

#save-button {
    width: 100%;
    max-width: 200px;
    margin: auto;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
}

#setup-plan-button {
    /* width: 100%; */
    /* white-space: nowrap; */
    /* padding-left: 1rem; */
    font-size: 1rem;
    font-weight: bolder;
    border-radius: 8px;
}

.button {
    width: 100%;
    max-width: 200px;
    margin: auto;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
}

#fourth-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

h1 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

#container-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin-top: 1.5rem;
}

.form-section {
    transition: all 0.3s ease;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}

#header-form {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    font-size: 1.1rem;
    cursor: pointer;
}

.arrow-icon {
    /* width: 24px;
    height: 24px; */
    transition: transform 0.3s ease;
}

.arrow-icon-rotated {
    transform: rotate(90deg);
}

.form-content {
    padding: 0 1.5rem 0 1.5rem;
}

#form-section-student-data {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

#container-button-next {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
}
</style>