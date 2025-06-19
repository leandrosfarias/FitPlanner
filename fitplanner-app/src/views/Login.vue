<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from "primevue/button"

const username = ref('')
const password = ref('')
const role = ref('')

const className = ref('role-option');

const styleCoach = ref('coach-option');
const styleStudent = ref('student-option');

const router = useRouter()

function handleLogin() {
  // Navigate to the dashboard or perform login logic
  // if (role.value === 'coach') {
  //   router.push('/dashboard/coach');
  // } else if (role.value === 'client') {
  //   router.push('/dashboard/client');
  // }

  console.log('Username:', username.value);
  console.log('Password:', password.value);
  console.log('Role:', role.value);
}

function selectRole(seletectedRole: string) {
  role.value = seletectedRole;
  console.log('Selected role:', role.value);

  if (role.value === 'coach') {
    styleCoach.value = 'coach-option-selected';
    styleStudent.value = 'student-option';
  } else if (role.value === 'student') {
    styleStudent.value = 'student-option-selected';
    styleCoach.value = 'coach-option';
  } else {
    styleCoach.value = 'coach-option';
    styleStudent.value = 'student-option';
  }
}
</script>

<template>
  <div id="login-page">
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Email:</label>
          <div class="input-with-icon">
            <i class="fas fa-envelope"></i>
            <input type="text" id="username" v-model="username" required placeholder="seu.email@exemplo.com"
              class="input" />
          </div>
        </div>
        <div class="form-group">
          <label for="password">Senha:</label>
          <div class="input-with-icon">
            <i class="fas fa-lock"></i>
            <input type="password" id="password" v-model="password" required placeholder="********" class="input" />
          </div>
        </div>
        <span>Eu sou:</span>
        <div id="role-selection">
          <div :class="className" :id="styleCoach" @click="selectRole('coach')">
            Treinador
          </div>
          <div :class="className" :id="styleStudent" @click="selectRole('student')">
            Aluno
          </div>
        </div>
        <div id="login-button-container">
          <button type="submit" @click="handleLogin" id="login-button">Entrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
#login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #6366F1, #9333EA);
}

.login-container {
  background-color: #ffffff;
  /* bg-white */
  border-radius: 0.75rem;
  /* rounded-xl (12px) */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  /* shadow-2xl */
  padding: 2rem;
  /* p-8 */
  min-width: 28rem;
  /* min-w-sm */
  max-width: 28rem;
  /* max-w-md */
  width: 100%;
  /* w-full */

  transform: scale(1);
  /* transform (base para transições) */
  transition: transform 300ms ease-in-out;
  /* transition duration-300 */
}

.login-container:hover {
  transform: scale(1.05);
  /* hover:scale-105 */
}

.form-group {
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
}

.form-group label {
  text-align: left;
  margin-bottom: 0.5em;
}

.form-group input {
  width: 100%;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#role-selection {
  display: flex;
  flex-direction: row;
}

.role-option {
  cursor: pointer;
  padding: 0.5rem 2rem;
  /* padding: 0.5rem (16px * 0.5 = 8px) para cima/baixo, 2rem (16px * 2 = 32px) para os lados */
  border: 1px solid #ccc;
  /* Borda cinza clara */
  width: 100%;
  /* Ocupa 100% da largura disponível dentro do seu container flex */
  text-align: center;
  /* Fontes e cores de texto padrão (não especificado, mas geralmente herda do body ou é cinza escuro) */
  color: #374151;
  /* Equivalente a text-gray-700 se fosse Tailwind padrão para o Aluno não selecionado */
  background-color: #f9fafb;
  /* Equivalente a bg-gray-50 para o Aluno não selecionado */
  font-weight: 500;
  /* Equivalente a font-medium */
}

#coach-option {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

#student-option {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

#coach-option-selected {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: #4F46E5;
  color: white;
}

#student-option-selected {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #4F46E5;
  color: white;
}

input {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5em;
  color: #000;
}

#login-button {
  width: 100%;
  /* w-full */
  display: flex;
  /* flex */
  justify-content: center;
  /* justify-center */
  padding-top: 0.75rem;
  /* py-3 */
  padding-bottom: 0.75rem;
  /* py-3 */
  padding-left: 1rem;
  /* px-4 */
  padding-right: 1rem;
  /* px-4 */
  border: 1px solid transparent;
  /* border border-transparent */
  border-radius: 0.375rem;
  /* rounded-md */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  /* shadow-sm */
  color: #ffffff;
  /* text-white */
  font-size: 1.125rem;
  /* text-lg */
  font-weight: 600;
  /* font-semibold */
  background-color: #4f46e5;
  /* bg-indigo-600 */
  transition: background-color 200ms ease-in-out, transform 200ms ease-in-out;
  /* transition duration-200 ease-in-out */
}

#login-button:hover {
  background-color: #4338ca;
  /* hover:bg-indigo-700 */
  transform: scale(1.0);
  /* hover:scale-100 (manter o mesmo tamanho, mas a propriedade está lá) */
}

#login-button:focus {
  outline: none;
  /* focus:outline-none */
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #6366f1;
  /* focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 */
  /* O box-shadow para o ring offset simula o efeito do Tailwind */
}

#login-button-container {
  margin-top: 16px;
}

h1 {
  text-align: center;
  color: #333;
}

.input-with-icon {
  position: relative;
  width: 100%;
}

.input-with-icon i {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
}

.input-with-icon input {
  padding-left: 36px;
}

.input {
  display: block;
  width: 100%;
  padding-left: 2.5rem;
  /* pl-10 */
  padding-right: 0.75rem;
  /* pr-3 */
  padding-top: 0.5rem;
  /* py-2 */
  padding-bottom: 0.5rem;
  /* py-2 */
  border: 1px solid;
  /* border */
  border-color: #d1d5db;
  /* border-gray-300 */
  border-radius: 0.375rem;
  /* rounded-md */
  outline: none;
  /* focus:outline-none */
  transition: border-color 150ms ease-in-out, box-shadow 150ms ease-in-out;
  /* transition duration-150 ease-in-out */
}

.input:focus {
  border-color: #6366f1;
  /* focus:border-indigo-500 */
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.5);
  /* focus:ring-indigo-500 */
}

/* Para aplicar o sm:text-sm, você precisaria de uma media query se fosse o único lugar */
/* Nesse caso, text-sm é 0.875rem (14px) */
.input {
  font-size: 0.875rem;
  /* sm:text-sm */
  line-height: 1.25rem;
  /* sm:text-sm (line-height padrão para text-sm) */
}

/* Se você quisesse aplicar sm:text-sm apenas em telas pequenas, seria assim: */
/* @media (min-width: 640px) {
  .input {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
} */
</style>
