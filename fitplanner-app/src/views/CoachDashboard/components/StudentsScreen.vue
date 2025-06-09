<template>
    <div class="first-row" v-if="viewMode === 'list'">
        <div class="search-bar">
            <i class="pi pi-search search-icon"></i>
            <input
            type="text" 
            name="clientSearch" 
            id="clientSearch" 
            placeholder="Buscar aluno">
        </div>
        <button 
        id="add-client-button" 
        @click="goToStudentForm">
            + Novo Aluno
        </button>
    </div>
    <div id="main-content">
        <StudentsList v-if="viewMode === 'list'"/>
        <StudentForm v-else @cancel="goToStudentList" @submit="goToStudentList"/>
    </div>
</template>

<script setup lang="ts">

import 'primeicons/primeicons.css'
import StudentForm from './StudentForm.vue';
import StudentsList from './StudentsList.vue';

import { ref } from 'vue';

const viewMode = ref<'list' | 'form'>('list');

function goToStudentForm() {
    viewMode.value = 'form';
}

function goToStudentList() {
    viewMode.value = 'list';
}
</script>

<style scoped>

.search-bar {
    position: relative;
    width: 50%;
}

.search-bar input {
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  border-radius: 16px;
  border: 1px solid #ccc;
  font-size: 14px;
  font-weight: bold;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 0.8rem;
  transform: translateY(-50%);
  color: #888;
}

.first-row {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    gap: 1.5rem;
}

#add-client-button {
    background-color: #0e6292;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
    font-weight: 600;
}

#add-client-button:hover {
    background-color: #0b4f6c;
}

#add-client-button:active {
    background-color: #083a4c;
}

#main-content {
    padding: 1rem;
    background-color: #f4f4f4;
    border-radius: 8px;
    font-size: 16px;
}
</style>
