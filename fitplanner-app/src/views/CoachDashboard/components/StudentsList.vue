<template>
  <div id="students-list">
    <StudentItem v-for="student in students" :key="student.id" :student="student" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import StudentItem from './StudentItem.vue'; 
import type { IStudent } from '../../../models/IStudent';

// type Student = {
//   id: string;
//   name: string;
//   email: string;
//   status: 'Ativo' | 'Inativo';
// };

const props = defineProps({
  students: {
    type: Array as () => IStudent[],
  }
});
</script>

<style scoped>
#students-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
}
</style>