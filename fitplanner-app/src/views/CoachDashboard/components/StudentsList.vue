<template>
  <div id="students-list">ß
    <StudentItem v-for="student in props.students" :key="student.id" :student="student" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { IStudent } from '../../../models/IStudent';
import StudentItem from './StudentItem.vue';

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