import type { IExercise } from "../interfaces/IExerciseRepository";
import type { IExerciseRepository } from "../interfaces/IExerciseRepository";

export class LocalExerciseRepository implements IExerciseRepository {
    private readonly storageKey: string = 'exercises';

    async getAll(): Promise<IExercise[]> {
        const exercises = localStorage.getItem(this.storageKey);
        return exercises ? JSON.parse(exercises) : [];
    }

    async getById(id: string): Promise<IExercise | undefined> {
        const exercises = await this.getAll();
        return exercises.find(exercise => exercise.id === id);
    }

    async add(exercise: IExercise): Promise<void> {
        const exercises = await this.getAll();
        exercises.push(exercise);
        localStorage.setItem(this.storageKey, JSON.stringify(exercises));
    }

    async update(exercise: IExercise): Promise<void> {
        const exercises = await this.getAll();
        const index = exercises.findIndex(e => e.id === exercise.id);
        if (index !== -1) {
            exercises[index] = exercise;
            localStorage.setItem(this.storageKey, JSON.stringify(exercises));
        }
    }

    async delete(id: string): Promise<void> {
        const exercises = await this.getAll();
        const updatedExercises = exercises.filter(exercise => exercise.id !== id);
        localStorage.setItem(this.storageKey, JSON.stringify(updatedExercises));
    }
}