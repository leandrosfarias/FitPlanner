<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const selectedItem = ref("workouts");

const route = useRoute();
const isActive = (path: string) => route.path === path;
</script>

<template>
  <aside class="sidebar">
    <h3 class="nav-header border-slate">Fitplanner</h3>
    <nav class="flex-1">
      <ul>
        <li
          :class="{ 'item-selected': isActive('/coach-dashboard/clients') }"
          @click="selectedItem = 'students'"
        >
          <router-link to="/coach-dashboard/students">
            <i class="fas fa-users indigo"></i> Alunos</router-link
          >
        </li>
        <li
          :class="{ 'item-selected': isActive('/coach-dashboard/exercises') }"
          @click="selectedItem = 'workouts'"
        >
          <router-link to="/coach-dashboard/exercises">
            <i class="fas fa-dumbbell text-orange-400"></i>
            Exercícios</router-link
          >
        </li>
        <li
          :class="{ 'item-selected': isActive('/coach-dashboard/progress') }"
          @click="selectedItem = 'progress'"
        >
          <router-link to="/coach-dashboard/progress">
            <i class="fas fa-chart-line text-teal-400"></i>
            Progresso</router-link
          >
        </li>
        <li
          :class="{ 'item-selected': isActive('/coach-dashboard/settings') }"
          @click="selectedItem = 'settings'"
        >
          <router-link to="/coach-dashboard/settings">
            <i class="fas fa-cog text-slate-400"></i> Configurações</router-link
          >
        </li>
      </ul>
    </nav>
    <Footer class=""
      ><p>&copy; 2025 FitPlanner</p>
      <p>Versão 0.1</p></Footer
    >
  </aside>
</template>
<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  background: #1e293b;
  color: #ffffff;
  width: 250px;
  height: 100vh;
  padding: 1em;
  border-right: 1px solid #ccc;
}
.flex-1 {
  flex-grow: 1;
}

.sidebar h2 {
  font-size: 1.5em;
  margin-bottom: 1em;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 0.5em;
  padding: 2.5em;
  width: 100%;
}

.sidebar a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.sidebar a:hover {
  text-decoration: none;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  padding: 0.5em 0;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  transition: background-color 0.3s ease;
  font-weight: 400;
}

.sidebar ul li:hover {
  background-color: #e0e0e0;
}

.sidebar ul li:active {
  background-color: #d0d0d0;
  font-weight: bold;
}

.item-selected {
  background-color: #d0d0d0;
  font-weight: bold;
}

.sidebar ul li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  color: #d1e3f0;
  transition: background 0.2s ease;
  border-radius: 8px;
  font-weight: bold;
}

.sidebar ul li:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar ul li.item-selected {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: bold;
}

.indigo {
  color: #60a5fa;
}

.text-orange-400 {
  color: #f97316;
}

.text-teal-400 {
  color: #14b8a6;
}

.text-slate-400 {
  color: #9ca3af;
}

.nav-header {
  font-size: 1.5em;
  margin-bottom: 1em;
  color: #ffffff;
  padding-bottom: 1rem;
}

.border-slate {
  border-bottom: 1px solid #475569;
}
</style>
