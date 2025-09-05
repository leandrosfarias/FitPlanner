import api from "./api"
import { useAuthStore } from "../stores/auth";

export interface StudentData {
    complete_name: string;
    email: string;
    birth_date: string;
    phone: string | null;
}


export class StudentService {
    private authStore: ReturnType<typeof useAuthStore>;

    constructor(authStore: ReturnType<typeof useAuthStore>) {
        this.authStore = authStore;
    }

    async getAllStudents() {
        try {
            let response;
            response = await api.get("/students",
                {
                    headers: {
                        Authorization: `Bearer ${this.authStore.getToken}`
                    }
                }
            );

            return response.data;
        } catch (error: any) {
            if (error.response.status === 401) {
                try {
                    let response;
                    response = await api.get("/students",
                        {
                            headers: {
                                Authorization: `Bearer ${this.authStore.getRefreshToken}`
                            }
                        }
                    );
                    return response.data;
                } catch (error: any) {
                    throw error;
                }
            }
        }
    }

    async getStudentById(id: string): Promise<any> {
        let response;
        try {
            response = await api.get(`/student/${id}`, {
                headers: {
                    Authorization: `Bearer ${this.authStore.getToken}`
                }
            });
            return response.data;
        } catch (error: any) {
            if (error.response.status === 401) {
                try {
                    const refreshToken = this.authStore.getRefreshToken;
                    response = await api.get(`/student/${id}`, {
                        headers: {
                            Authorization: `Bearer ${refreshToken}`
                        }
                    });
                    return response.data;
                } catch (error: any) {
                    throw error;
                }
            }
        }
    }

    async createStudent(studentData: StudentData) {
        const token = this.authStore.getToken;
        console.log("Token in StudentService:", token);

        try {
            const response = await api.post("/student", studentData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error: any) {
            if (error.response && error.response.status === 401) {
                console.log("Token expired, attempting to refresh token...");
                try {
                    const refreshToken = this.authStore.getRefreshToken;
                    const newResponse = await api.post("/student", studentData, {
                        headers: {
                            Authorization: `Bearer ${refreshToken}`
                        }
                    });
                    return newResponse.data;
                } catch (refreshError) {
                    console.error("Refresh token failed, user must re-authenticate.");
                    this.authStore.logout();
                    throw refreshError;
                }
            }
            throw error;
        }
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