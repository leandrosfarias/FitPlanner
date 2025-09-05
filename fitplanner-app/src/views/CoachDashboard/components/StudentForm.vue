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
              <div class="label-required">
                Nome Completo
                <span>*</span>
              </div>
              <InputText v-model="studentName" placeholder="ex: Leandro Farinha" type="text" fluid />
            </label>
            <label class="input-label">
              <div class="label-required">
                Email
                <span>*</span>
              </div>
              <InputText v-model="studentEmail" placeholder="ex: leandro@email.com" type="email" fluid />
            </label>
          </div>
          <div class="input-row">
            <label class="input-label">
              <div class="label-required">
                Data de Nascimento
                <span>*</span>
              </div>
              <DatePicker v-model="studentBirthDate" placeholder="Data de Nascimento" class="p-datepicker" dateFormat="dd/mm/yy" fluid />
            </label>
            <label class="input-label">
              Celular
              <InputMask v-model="studentPhone" placeholder="ex: (11) 99999-9999" mask="(99) 99999-9999" fluid />
            </label>
          </div>
        </div>
      </div>
      <div class="container-button">
        <Button @click="resetForm" label="Limpar" class="btn-secondary" />
        <Button @click="saveStudent" label="Salvar Aluno" class="btn-primary" :disabled="disabledButton" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import InputMask from 'primevue/inputmask';
import InputText from 'primevue/inputtext';
import { useToast } from 'primevue/usetoast';
import type { Ref } from 'vue';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import type { StudentData } from '../../../services/StudentService';
import { StudentService } from '../../../services/StudentService';
import { useAuthStore } from '../../../stores/auth';

const router = useRouter();
const toast = useToast();
const authStore = useAuthStore();
const studentService = new StudentService(authStore);

const studentName: Ref<string> = ref('');
const studentEmail: Ref<string> = ref('');
const studentPhone: Ref<string> = ref('');
const studentWeight: Ref<number | null> = ref(null);
const studentHeight: Ref<number | null> = ref(null);
const studentArmCircumference: Ref<number | null> = ref(null);
const studentLegCircumference: Ref<number | null> = ref(null);
const studentChestCircumference: Ref<number | null> = ref(null);
const studentBirthDate: Ref<Date | null> = ref(null);
const studentObservations: Ref<string | null> = ref(null);
const selectedGender: Ref<string | null> = ref(null);


const genderOptions = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Feminino', value: 'Feminino' },
    { label: 'Outro', value: 'Outro' }
];

const disabledButton: Ref<boolean> = ref(true);

watchEffect(() => {
    // Habilita o botão apenas se os campos obrigatórios estiverem preenchidos
    disabledButton.value = !studentName.value || !studentEmail.value || studentBirthDate.value === null;
});

function mapGender(gender: string) {
  switch (gender) {
    case 'Masculino':
      return 'M';
    case 'Feminino':
      return 'F';
    case 'Outro':
      return 'O';
    default:
      return 'O';
  }
}

function mapDate(date: Date | null) {
  return date ? date.toISOString().split('T')[0] : null;
}

async function saveStudent() {
  console.log('data ', studentBirthDate.value);
    const newStudent: StudentData = {
        complete_name: studentName.value,
        email: studentEmail.value,
        phone: studentPhone.value,
        birth_date: mapDate(studentBirthDate.value)!
    };

    const response = await studentService.createStudent(newStudent);
    console.log('response ', response);
    if (response) {
      toast.add(
        { 
          severity: 'success', 
          summary: 'Sucesso', 
          detail: 'Aluno criado com sucesso!',
          life: 3000
        });
      router.push({ path: '/dashboard/coach/students' });
    }
}

function resetForm() {
  studentName.value = '';
  studentEmail.value = '';
  studentPhone.value = '';
  studentWeight.value = null;
  studentHeight.value = null;
  studentArmCircumference.value = null;
  studentLegCircumference.value = null;
  studentChestCircumference.value = null;
  studentBirthDate.value = null;
  studentObservations.value = null;
  selectedGender.value = null;
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
  text-align: center;
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
  justify-content: center;
  margin-top: 2rem;
  gap: 1rem;
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

.label-required {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-bottom: 0;
}

.label-required span {
  color: red;
}

/* Responsividade */
@media (max-width: 768px) {
  .input-row {
    grid-template-columns: 1fr;
  }
}
</style>