<template>
    <div>
        <div id="row-1">
            <h1>Alunos</h1>
            <button class="bg-indigo-600 text-white" id="button-add-student">
                <i class="fas fa-user-plus"></i>
                <span>Adicionar Novo Aluno</span>
            </button>
        </div>

        <div id="search-section" class="bg-white">
            <div class="block">
                <label for="search-bar">Buscar aluno:</label>
                <div id="search-bar-container">
                    <i class="fas fa-search"></i>
                    <input type="text" name="search-bar" id="search-bar" placeholder="Nome, email ou celular do aluno">
                </div>
            </div>
            <div class="block">
                <label for="">Ordenar por:</label>
                <select name="" id="sorting-select">
                    <option v-for="mode in sortingModes" :key="mode.value" :value="mode.value">
                        {{ mode.labels || mode.label }}
                    </option>
                </select>
            </div>
        </div>

        <!-- Lista de alunos -->
        <StudentsList :students="mockStudents"/>
        <div></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import StudentsList from './StudentsList.vue';

type Student = {
    name: string;
    email: string;
    status: 'Ativo' | 'Inativo';
};

const mockStudents: Student[] = [
  { name: 'Carlos Eduardo Santos', email: 'carlos.santos@email.com', status: 'Ativo' },
  { name: 'Mariana Almeida', email: 'mariana.almeida@email.com', status: 'Ativo' },
  { name: 'João Silva', email: 'joao.silva@email.com', status: 'Inativo' },
  { name: 'Leandro Silva Farias', email: 'leandro.farias@email.com', status: 'Ativo' },
  { name: 'Ketlyn De Jesus Feitosa', email: 'ketlyn.feitosa@email.com', status: 'Ativo' }
];

const sortingModes = ref([
    { labels: 'Mais recentes', value: 'recent' },
    { labels: 'Mais antigos', value: 'oldest' },
    { labels: 'Nome A-Z', value: 'name_az' },
    { labels: 'Nome Z-A', value: 'name_za' },
    { label: 'Nome', value: 'name' },
    { label: 'Email', value: 'email' },
    { label: 'Celular', value: 'phone' },
]);
</script>

<style scoped>
#row-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#search-section{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
}

.block {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.bg-white {
    background-color: #fff;
}

#search-bar {
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 0.5rem;
}

#search-bar:focus {
    outline: none;
    border-color: #6366F1; /* Focus color */
}

#search-bar-container {
    width: 100%;
    position: relative;
}

#search-bar-container input {
    width: 100%;
    padding-left: 2rem; /* Space for the icon */
    border-radius: 8px;
    border: 1px solid #ccc;
    transition: border-color 0.3s ease;
}

#search-bar-container i {
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa; /* Icon color */
}

#sorting-select {
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 0.5rem;
    transition: border-color 0.3s ease;
}

#sorting-select:focus {
    outline: none;
    border-color: #6366F1; /* Focus color */
}

.bg-indigo-600 {
    background-color: #4f46e5;
    /* bg-indigo-600 */
    transition: background-color 200ms ease-in-out, transform 200ms ease-in-out;
    /* transition duration-200 ease-in-out */
}

.bg-indigo-600:hover {
    background-color: #4338ca;
    /* hover:bg-indigo-700 */
    transform: scale(1.0);
    /* hover:scale-100 (manter o mesmo tamanho, mas a propriedade está lá) */
}

.text-white {
    color: #fff;
}

#button-add-student {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.0rem;
}
</style>
