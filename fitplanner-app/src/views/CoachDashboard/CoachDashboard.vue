<script setup lang="ts">
import { ref, Ref } from 'vue';
import Header from '../../components/Header.vue';
import Sidebar from '../../components/Sidebar.vue';
</script>

<template>
  <!-- <Header /> -->
  <div class="app-layout">
    <Sidebar id="sidebar" />
    <div class="dashboard-content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.column {
  text-align: center;
  padding: 1.5em;
  font-size: 1.2em;
}

.app-layout {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background-color: #F8FAFC;
}

.dashboard-content {
  flex: 1;
  padding: 1em;
  background-color: #F8FAFC;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
  /* height: 500px; */
}

</style>
