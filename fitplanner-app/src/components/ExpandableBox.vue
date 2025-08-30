<template>
    <div class="expandable-box">
        <h3 @click="isOpen = !isOpen" class="box-title">
            <span class="toggle-icon">{{ isOpen ? '-' : '+' }}</span>
        </h3>
        <div v-if="isOpen" class="box-content">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';


const isOpen = ref(false);
</script>
<style scoped>
.expandable-box {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 12px;
    user-select: none;
}

.box-title {
    background-color: #f5f5f5;
    padding: 12px;
    cursor: pointer;
}

.box-content {
    padding: 12px;
}
</style>