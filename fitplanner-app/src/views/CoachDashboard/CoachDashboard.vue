<script setup lang="ts">
import Sidebar from '../../components/Sidebar.vue';
</script>

<template>
  <div class="app-layout">
    <!-- <Header /> -->
    <div class="content-wrapper">
      <Sidebar />
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>


<style scoped>
.column {
  text-align: center;
  padding: 1.5em;
  font-size: 1.2em;
}

/* CoachDashboard.vue style block */
.app-layout {
  display: flex;
  height: 100vh;
  width: 100%;
}

.content-wrapper {
  display: flex;
  flex: 1; /* Isso é crucial para que o conteúdo ocupe o espaço restante */
}

/* Garanta que o conteúdo principal (onde o router-view está) ocupe o espaço */
.main-content {
  flex: 1; /* Permite que o main-content ocupe o espaço restante após a sidebar */
  overflow-y: auto; /* Adicione scroll se o conteúdo for muito longo */
  padding: 1rem;
}

/* Opcional: garanta que a sidebar tenha uma largura fixa */
.sidebar {
  width: 250px; /* Exemplo de largura */
  flex-shrink: 0;
}
</style>
