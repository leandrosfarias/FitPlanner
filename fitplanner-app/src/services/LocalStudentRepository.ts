import type { IStudentRepository } from '../interfaces/IStudentRepository';
import type { Student } from '../interfaces/IStudentRepository';

const STORAGE_KEY = 'fitplanner_students';

export class LocalStudentRepository implements IStudentRepository {
    async getAll(): Promise<Student[]> {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    }

    async getById(id: string): Promise<Student | undefined> {
        const all = await this.getAll();
        return all.find(s => s.id === id);
    }

    async add(student: Student): Promise<void> {
        const all = await this.getAll();
        all.push(student);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    }

    async update(student: Student): Promise<void> {
        const all = await this.getAll();
        const idx = all.findIndex(s => s.id === student.id);
        if (idx !== -1) {
            all[idx] = student;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
        }
    }

    async delete(id: string): Promise<void> {
        const all = await this.getAll();
        const filtered = all.filter(s => s.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    }
}
