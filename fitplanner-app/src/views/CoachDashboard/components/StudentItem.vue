<template>
    <div id="student-card">
        <div id="circle-container">
            <div id="circle">
                <span>{{ getInitial(props.name!) }}</span>
            </div>
        </div>
        <div id="student-info">
            <h4 id="student-name">{{ props.name }}</h4>
            <p id="student-email">{{ props.email }}</p>
            <div>
                <span id="student-status" :class="props.status === 'Inativo' ? 'inactive' : 'active'">{{ props.status }}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps({
    name: String,
    email: String,
    status: String
});

function getInitial(name: string): string {
    return name.trim().split(' ').map((word) => {
        return word.charAt(0).toUpperCase();
    }).join('');
}
</script>
<style scoped>
#student-card {
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr;
    padding: 1rem 0 1rem 0;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    background-color: #FFF;
    cursor: pointer;
    user-select: none;
}

#circle-container {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

#circle {
    margin: 0;
    padding: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #B0BEC5; /* Cinza mais claro */
    border: 1.5px solid #3F51B5; /* Indigo border */
    padding: 2.0rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    grid-column-start: 1;
    grid-column-end: 2;
}

#student-info {
    grid-column-start: 2;
    grid-column-end: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 1rem;
}

#student-status {
    padding: 0.1rem 0.4rem 0.1rem 0.4rem;
    border-radius: 8px;
    font-weight: bold;
}

.active {
    color: #4CAF50; /* Verde para status ativo */
    background-color: #b2d8b2; /* Cor de fundo verde mais claro */
}

.inactive {
    color: #F44336; /* Vermelho para status inativo */
    background-color: #ffcccc; /* Cor de fundo vermelho mais claro */
}

#student-name {
    padding: 0;
    margin: 0;
}

#student-email {
    padding: 0;
    margin: 0;
    color: #757575; /* Cinza escuro */
}
</style>