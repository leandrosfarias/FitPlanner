<template>
  <section class="form-section">
    <div class="form-card">
      <div class="header-form">
        <h4>Cadastrar Novo Atleta</h4>
      </div>
      <div class="form-content">
        <div class="form-group">
          <h5>Informações Pessoais</h5>
          <div class="input-row">
            <label class="input-label">
              Nome Completo
              <InputText v-model="studentName" placeholder="ex: Leandro Farinha" type="text" fluid />
            </label>
            <label class="input-label">
              Email
              <InputText v-model="studentEmail" placeholder="ex: leandro@email.com" type="email" fluid />
            </label>
          </div>
          <div class="input-row">
            <label class="input-label">
              Celular
              <InputMask v-model="studentPhone" placeholder="ex: (11) 99999-9999" mask="(99) 99999-9999" fluid />
            </label>
            <label class="input-label">
              Data de Nascimento
              <DatePicker v-model="studentBirthDate" placeholder="Data de Nascimento" class="p-datepicker" fluid />
            </label>
          </div>
        </div>

        <div class="form-group">
          <h5>Dados Físicos e Objetivos</h5>
          <div class="input-row">
            <label class="input-label">
              Peso (kg)
              <InputNumber v-model="studentWeight" placeholder="Peso" mode="decimal" fluid :minFractionDigits="2" :maxFractionDigits="5" />
            </label>
            <label class="input-label">
              Altura (cm)
              <InputNumber v-model="studentHeight" placeholder="Altura" mode="decimal" fluid :minFractionDigits="2" :maxFractionDigits="5" />
            </label>
          </div>
          <div class="input-row">
            <label class="input-label">
              Gênero
              <Select v-model="selectedGender" :options="genderOptions" optionLabel="label" placeholder="Selecione um Gênero" fluid />
            </label>
            <label class="input-label">
              Objetivo
              <Select v-model="studentGoal" :options="goals" optionLabel="label" placeholder="Selecione um Objetivo" fluid />
            </label>
          </div>
          <div class="input-row-single">
            <label class="input-label">
              Observações sobre o Aluno
              <Textarea v-model="studentObservations" placeholder="ex: Tem a coluna torta" rows="3" fluid />
            </label>
          </div>
        </div>
      </div>
      <div class="container-button">
        <Button @click="saveStudent" label="Salvar Aluno" class="btn-primary" :disabled="disabledButton" />
      </div>
    </div>
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
import { useRouter } from 'vue-router';
import { ref, watchEffect } from 'vue';
import type { Ref } from 'vue';
import { LocalStudentRepository } from '../../../services/LocalStudentRepository';
import type { IStudent } from '../../../interfaces/IStudentRepository';
import { v4 as uuidv4 } from 'uuid';

const router = useRouter();
const studentRepository = new LocalStudentRepository();

const studentName: Ref<string> = ref('');
const studentEmail: Ref<string> = ref('');
const studentPhone: Ref<string> = ref('');
const studentWeight: Ref<number | null> = ref(null);
const studentHeight: Ref<number | null> = ref(null);
const studentBirthDate: Ref<Date | null> = ref(null);
const studentObservations: Ref<string | null> = ref(null);
const studentGoal: Ref<string | null> = ref(null);
const selectedGender: Ref<string | null> = ref(null);

const goals = [
    { label: 'Emagrecimento', value: 'Emagrecimento' },
    { label: 'Hipertrofia', value: 'Hipertrofia' },
    { label: 'Definição Muscular', value: 'Definição Muscular' },
    { label: 'Aumento de Força', value: 'Aumento de Força' },
    { label: 'Melhora de Performance', value: 'Melhora de Performance' }
];

const genderOptions = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Feminino', value: 'Feminino' },
    { label: 'Outro', value: 'Outro' }
];

const disabledButton: Ref<boolean> = ref(true);

watchEffect(() => {
    // Habilita o botão apenas se os campos obrigatórios estiverem preenchidos
    disabledButton.value = !studentName.value || !studentEmail.value || studentWeight.value === null || studentHeight.value === null || studentBirthDate.value === null || studentGoal.value === null || selectedGender.value === null;
});

async function saveStudent() {
    const newStudent: IStudent = {
        id: uuidv4(),
        name: studentName.value,
        email: studentEmail.value,
        phone: studentPhone.value,
        weight: studentWeight.value ?? 0,
        height: studentHeight.value ?? 0,
        birthDate: studentBirthDate.value?.toISOString() ?? '',
        createdAt: new Date(),
        gender: selectedGender.value!,
        observations: studentObservations.value!,
        goal: studentGoal.value!,
        status: 'Ativo',
        hasTrainingPlan: false,
    };

    await studentRepository.add(newStudent);
    
    // Após salvar, redireciona para a tela de alunos
    router.push({ path: '/dashboard/coach/students' });
}
</script>

<style scoped>
.form-section {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
}

.form-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header-form {
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}

.header-form h4 {
  font-size: 1.5rem;
  color: #2d3748;
  margin: 0;
}

.form-group {
  margin-bottom: 2rem;
}

.form-group h5 {
  font-size: 1.25rem;
  color: #4a5568;
  border-left: 4px solid #3b82f6;
  padding-left: 0.75rem;
  margin-bottom: 1.25rem;
}

.input-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.input-row-single {
  margin-bottom: 1.5rem;
}

.input-label {
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  font-weight: bold;
  gap: 0.5rem;
}

.container-button {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}

.btn-primary {
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.btn-primary:hover:not(:disabled) {
  background-color: #2563eb;
}

.btn-primary:disabled {
  background-color: #a0aec0;
  cursor: not-allowed;
}

/* Responsividade */
@media (max-width: 768px) {
  .input-row {
    grid-template-columns: 1fr;
  }
}
</style>