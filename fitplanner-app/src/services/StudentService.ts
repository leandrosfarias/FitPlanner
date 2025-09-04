import api from "./api"
import { useAuthStore } from "../stores/auth";

export interface StudentData {
    complete_name: string;
    email: string;
    birth_date: string;
    phone: string | null;
    weight_kg: number | null;
    height_cm: number | null;
    arm_circumference_cm: number | null;
    leg_circumference_cm: number | null;
    chest_circumference_cm: number | null;
    observations: string | null;
    gender: string | null;
}


export class StudentService {
    private authStore: ReturnType<typeof useAuthStore>;

    constructor(authStore: ReturnType<typeof useAuthStore>) {
        this.authStore = authStore;
    }

    async getAllStudents() {
        const response = await api.get("/students");
        return response.data;
    }

    async getStudentById(id: string) {
        const response = await api.get(`/students/${id}`);
        return response.data;
    }

    async createStudent(studentData: StudentData) {
        const token = this.authStore.getToken;
        console.log("Token in StudentService:", token);
        const response = await api.post("/student", studentData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }

    async updateStudent(id: string, studentData: any) {
        const response = await api.put(`/students/${id}`, studentData);
        return response.data;
    }

    async deleteStudent(id: string) {
        const response = await api.delete(`/students/${id}`);
        return response.data;
    }
}