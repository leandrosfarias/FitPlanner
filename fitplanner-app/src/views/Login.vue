<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const role = ref('')

const router = useRouter()

function handleLogin() {
    // Navigate to the dashboard or perform login logic
    if (role.value === 'coach') {
      router.push('/dashboard/coach');
    } else if (role.value === 'client') {
      router.push('/dashboard/client');
    }

    // Print as informações do formulário no console
    console.log('Username:', username.value);
    console.log('Password:', password.value);
    console.log('Role:', role.value);
}
</script>

<template>
    <div class="login-page">
      <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="username">Email:</label>
                <input type="text" id="username" v-model="username" required />

            </div>
            <div class="form-group">
                <label for="password">Senha:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <div id="role-selection">
              <div class="role-option">
                <input type="radio" id="coach" value="coach" v-model="role" name="role"/>
              <label for="coach">Sou treinador</label>
              </div>

              <div class="role-option">
                <input type="radio" id="client" value="client" v-model="role" name="role"/>
                <label for="client">Sou cliente</label>
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

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.login-container {
  min-width: 400px;
  max-width: 800px;
  margin: 0 auto;
  padding: 2.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
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
  justify-content: space-between;
  margin-bottom: 1em;
  padding: 0 3.5em 0 3.5em;
}

.role-option {
  display: flex;
  align-items: center;
  gap: 0.5em;
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
  height: auto;
  background-color: #0e6292;
  color: white;
  border: none;
  padding: 0.6em 1.2em;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
  margin-top: 1em;
  border-radius: 6px;
}

#login-button:hover {
  background-color: #0c4f72;
}
#login-button:active {
  background-color: #0a3d5a;
}

#login-button-container {
  display: flex;
  justify-content: center;
  padding: 0 3.5em 0 3.5em;
}

h1 {
  text-align: center;
  color: #333;
}
</style>
