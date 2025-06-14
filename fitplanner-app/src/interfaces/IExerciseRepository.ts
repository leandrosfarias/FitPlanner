export interface IExercise {
    id: string;
    name: string;
    description: string | null;
    muscleGroup: string;
}

export interface IExerciseRepository {
    getAll(): Promise<IExercise[]>;
    getById(id: string): Promise<IExercise | undefined>;
    add(exercise: IExercise): Promise<void>;
    update(exercise: IExercise): Promise<void>;
    delete(id: string): Promise<void>;
}