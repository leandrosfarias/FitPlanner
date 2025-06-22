<template>
  <div id="students-list">
    <StudentItem v-for="student in students" :key="student.email" v-bind="student" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import StudentItem from './StudentItem.vue';

type Student = {
  name: string;
  email: string;
  status: 'Ativo' | 'Inativo';
};

const props = defineProps({
  students: {
    type: Array as () => Student[],
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