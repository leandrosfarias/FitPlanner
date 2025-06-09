<template>
    <li class="student-item">
        <img :src="student.userImage" alt="">
        <h3>{{ student.name }}</h3>
    </li>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

type Student = {
    id: number;
    name: string;
    userImage?: any;
};
const props = defineProps<{
    student: Student;
}>();
</script>
<style scoped>
.student-item {
    padding: 1em;
    background-color: #ececec;
    border-radius: 8px;
    margin-bottom: 1em;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    /* padding: 0 1.5em 0 1.5em; */
}

.student-item:hover {
    cursor: pointer;
}

.student-item > * {
    margin-right: 8.5em;
}

.student-item img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1em;
}

.student-item p {
    margin: 0;
    font-size: 1.2em;
    color: #666;
    font-weight: bold;
}
</style>