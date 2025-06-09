<template>
  <div class="client-list">
    <!-- <h1>Lista de Alunos</h1> -->
    <ul v-if="studentsMap.length > 0">
      <StudentItem v-for="student in studentsMap" :key="student.id" :student="student" />
    </ul>
    <div v-else>
      <p id="no-students">Nenhum aluno cadastrado.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import StudentItem from './StudentItem.vue';
import { LocalStudentRepository } from '../../../services/LocalStudentRepository';
import { onMounted, ref } from 'vue';
import type { Student } from '../../../interfaces/IStudentRepository';
import type { Ref } from 'vue';

const studentRepository = new LocalStudentRepository();

const students: Ref<Student[]> = ref([]);
const studentsMap: Ref<{ id: string; name: string; userImage: string }[]> = ref([]);

onMounted(async () => {
  try {
    students.value = await studentRepository.getAll();
    console.log('Students:', students.value);
    studentsMap.value = students.value.map(student => ({
      id: student.id,
      name: student.name,
      userImage: student.userImage || 'https://cdn-icons-png.flaticon.com/512/64/64572.png' // Default image if none provided
    }));
  } catch (error) {
    console.error('Error fetching students:', error);
  }
});
</script>

<style scoped>
/* remove bullets from the list */
.client-list ul {
    list-style: none; /* Remove default bullet points */
    padding: 0; /* Remove default padding */
    overflow-y: auto; /* Enable vertical scrolling if needed */
    max-height: 400px; /* Set a maximum height for the list */
}

.client-list-header {
    padding: 1em;
    background-color: #f9f9f9;
    border-radius: 8px;
    margin-bottom: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2.5em 1em 2.5em;
}

#no-students {
    text-align: center;
    color: #888;
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 2em;
}
</style>