<template>
  <section class="details-section">
    <div v-if="student" class="details-container">
      <div class="card info-card">
        <header class="card-header">
          <h3>Informações Pessoais</h3>
        </header>
        <div class="card-content">
          <div class="info-group">
            <p><strong>Nome Completo:</strong> {{ student.complete_name }}</p>
            <p><strong>Email:</strong> {{ student.email }}</p>
            <p><strong>Celular:</strong> {{ student.phone || 'Não informado' }}</p>
            <p><strong>Gênero:</strong> {{ student.gender }}</p>
            <p><strong>Data de Nascimento:</strong> {{ formattedBirthDate }}</p>
          </div>
          <div class="info-group">
            <p><strong>Status:</strong> <span :class="statusClass">{{ student.status }}</span></p>
            <p><strong>Data de Cadastro:</strong> {{ formattedCreatedAt }}</p>
          </div>
        </div>
      </div>
      
      <div class="card info-card">
        <header class="card-header">
          <h3>Dados Físicos</h3>
        </header>
        <div class="card-content">
          <div class="info-group" id="physical-data">
            <div class="physical-measurements">
              <p><strong>Peso:</strong> {{ student.weight_kg || 'Não informado' }} <span v-if="student.weight_kg">kg</span></p>
              <p><strong>Altura:</strong> {{ student.height_cm || 'Não informado' }} <span v-if="student.height_cm">cm</span></p>
            </div>
            <div class="physical-measurements">
              <p><strong>Comprimento do braço:</strong> {{ student.arm_circumference_cm || 'Não informado' }} <span v-if="student.arm_circumference_cm">cm</span></p>
              <p><strong>Comprimento da perna:</strong> {{ student.leg_circumference_cm || 'Não informado' }} <span v-if="student.leg_circumference_cm">cm</span></p>
              <p><strong>Comprimento do peito:</strong> {{ student.chest_circumference_cm || 'Não informado' }} <span v-if="student.chest_circumference_cm">cm</span></p>
            </div>
          </div>
          <div class="info-group">
            <p><strong>Observações:</strong></p>
            <p class="observations-text">{{ student.observations || 'Nenhuma observação.' }}</p>
          </div>
        </div>
      </div>

      <div class="card training-card">
        <header class="card-header">
          <h3>Plano de Treino</h3>
        </header>
        <div class="card-content">
          <div v-if="student.hasTrainingPlan" class="training-plan-exists">
            <p>Este aluno possui um plano de treino ativo.</p>
            <Button label="Ver Plano de Treino" class="btn-primary" />
          </div>
          <div v-else class="no-training-plan">
            <p>Este aluno ainda não possui um plano de treino cadastrado.</p>
            <Button @click="goToTrainingPlanRegistration" label="+ Cadastrar Plano" class="btn-primary" />
          </div>
        </div>
      </div>

    </div>
    <div v-else class="loading-state">
      <p>Carregando dados do aluno...</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Button from 'primevue/button';
import { LocalStudentRepository } from '../../../services/LocalStudentRepository';
import { useAuthStore } from '../../../stores/auth';
import { StudentService } from '../../../services/StudentService';
import type { IStudent } from '../../../interfaces/IStudentRepository';

const route = useRoute();
const router = useRouter();

const studentRepository = new LocalStudentRepository();
const authStore = useAuthStore();
const studentService = new StudentService(authStore);

const student = ref<IStudent | null>(null);

onMounted(async () => {
  const studentId = route.params.id as string;
  console.log("Fetching student with ID:", studentId);
  const foundStudent = await studentService.getStudentById(studentId);
  console.log("Found student:", foundStudent);
  if (foundStudent) {
    foundStudent.gender = mapGender(foundStudent.gender);
    // foundStudent.status = mapStatus(foundStudent.status);
    student.value = foundStudent;
  }
});

const statusClass = computed(() => {
  return student.value && student.value.status === 'active' ? 'status-active' : 'status-inactive';
});

const formattedBirthDate = computed(() => {
  if (student.value && student.value.birth_date) {
    const date = new Date(student.value.birth_date);
    return date.toLocaleDateString('pt-BR');
  }
  return '';
});

const formattedCreatedAt = computed(() => {
  if (student.value && student.value.created_at) {
    const date = new Date(student.value.created_at);
    return date.toLocaleDateString('pt-BR');
  }
  return '';
});

const goToTrainingPlanRegistration = () => {
  if (student.value) {
    router.push({
      path: '/dashboard/coach/home',
      query: { studentName: student.value.complete_name }
    });
  }
};

const mapGender = (gender: string | null) => {
  switch (gender) {
    case 'M':
      return 'Masculino';
    case 'F':
      return 'Feminino';
    case 'O':
      return 'Outro';
    default:
      return 'Não informado';
  }
};

const mapStatus = (status: string | null) => {
  switch (status) {
    case 'active':
      return 'Ativo';
    case 'inactive':
      return 'Inativo';
    default:
      return 'Desconhecido';
  }
};
</script>

<style scoped>
.details-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  background-color: #FFF;
  min-height: 100vh;
}

.details-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
}

.card-header {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.card-header h3 {
  font-size: 1.3rem;
  color: #333;
  margin: 0;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-group p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666;
}

.info-group p strong {
  color: #333;
}

.observations-text {
  background-color: #f1f5f9;
  border-radius: 8px;
  padding: 1rem;
  font-style: italic;
  white-space: pre-wrap;
  color: #444;
}

.status-active {
  color: #28a745;
  font-weight: bold;
}

.status-inactive {
  color: #dc3545;
  font-weight: bold;
}

.training-card {
  border: 1px dashed #ced4da;
  text-align: center;
}

.no-training-plan, .training-plan-exists {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
}

.btn-primary {
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #3a7bd5;
}

.loading-state {
  text-align: center;
  padding-top: 4rem;
  font-size: 1.2rem;
  color: #888;
}

#physical-data {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.physical-measurements {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>