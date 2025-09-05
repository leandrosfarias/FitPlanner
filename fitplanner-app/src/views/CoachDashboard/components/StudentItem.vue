<template>
  <router-link :to="{ name: 'student-details', params: { id: student.id } }" class="student-card">
    <div class="student-info">
      <h3>{{ student.complete_name }}</h3>
      <p>{{ student.email }}</p>
    </div>
    <span :class="statusClass">{{ student.status }}</span>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { RouterLink } from 'vue-router';
import type { IStudent } from '../../../models/IStudent';

// type Student = {
//   id: string;
//   name: string;
//   email: string;
//   status: 'Ativo' | 'Inativo';
// };

const props = defineProps<{
  student: IStudent
}>();

const statusClass = computed(() => {
  return props.student.status === 'active' ? 'status-active' : 'status-inactive';
});
</script>

<style scoped>
.student-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  text-decoration: none;
  color: inherit;
}

.student-card:hover {
  transform: translateY(-5px);
}

.student-info h3 {
  margin: 0 0 0.5em 0;
}

.student-info p {
  margin: 0;
  color: #666;
}

.status-active {
  color: #28a745;
  font-weight: bold;
}

.status-inactive {
  color: #dc3545;
  font-weight: bold;
}
</style>