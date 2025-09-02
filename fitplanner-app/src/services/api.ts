// src/services/api.ts
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000', // sua API
    // timeout: 5000
})

export default api
