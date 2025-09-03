<script setup lang="ts">
import { ref } from 'vue';
import api from '../services/api';
import ProgressSpinner from 'primevue/progressspinner';
import { useRouter } from 'vue-router';

const isLoading = ref(false);
const router = useRouter();

const completeName = ref('');
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const phone = ref('');

async function handleRegister() {
  isLoading.value = true;
  console.log('Nome:', completeName.value);
  console.log('Usuário:', username.value);
  console.log('Email:', email.value);
  console.log('Senha:', password.value);
  console.log('Telefone:', phone.value);

  const response = await api.post('/coach', {
    complete_name: completeName.value,
    user_name: username.value,
    email: email.value,
    password: password.value,
    phone: phone.value
  })

  if (response.status === 201) {
    console.log('Cadastro realizado com sucesso:', response.data);
    isLoading.value = false;
    router.push('/');
  } else {
    console.error('Erro ao cadastrar:', response.data);
    isLoading.value = false;
  }
}
</script>

<template>
  <div id="register-page">
    <h1>Registrar Treinador</h1>
    <div id="register-form">
      <div>
        <label for="name">Nome Completo:</label>
        <input type="text" id="name" v-model="completeName" required placeholder="ex: Lucas Lima Cruz"/>
      </div>
      <div>
        <label for="username">Nome de usuário:</label>
        <input type="text" id="username" v-model="username" required placeholder="ex: lucão"/>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required placeholder="ex: lucas@exemplo.com"/>
      </div>
      <div>
        <label for="phone">Telefone:</label>
        <input type="tel" id="phone" v-model="phone" required placeholder="ex: (11) 91234-5678"/>
      </div>
      <div>
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required placeholder="********"/>
      </div>
      <div>
        <label for="confirm-password">Confirmar senha:</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required placeholder="********"/>
      </div>
      <button @click="handleRegister">Registrar</button>
      <div id="container-spinner">
        <ProgressSpinner v-if="isLoading" />
      </div>
    </div>
  </div>
</template>



<style scoped>
#register-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(to bottom right, #6366F1, #9333EA);
    overflow: auto;
}

h1 {
    color: #fff;
}

#register-form {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 35%;
}

#register-form div {
    margin-bottom: 1rem;
}

#register-form label {
    display: block;
    margin-bottom: 0.5rem;
}

#register-form input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

#register-form button {
    background: #6366F1;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}

#register-form button:hover {
    background: #4F46E5;
}

#container-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>