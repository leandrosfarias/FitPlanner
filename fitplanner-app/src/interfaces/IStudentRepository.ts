export interface IStudent {
    id: string;
    complete_name: string;
    email: string;
    phone: string;
    observations: string;
    weight_kg: number;
    height_cm: number;
    gender: { value: string };
    birth_date: string;
    created_at: Date;
    arm_circumference_cm: number;
    leg_circumference_cm: number;
    chest_circumference_cm: number;
    status: 'active' | 'inactive';
    hasTrainingPlan: boolean;
}

export interface IStudentRepository {
    getAll(): Promise<IStudent[]>;
    getById(id: string): Promise<IStudent | undefined>;
    add(student: IStudent): Promise<void>;
    update(student: IStudent): Promise<void>;
    delete(id: string): Promise<void>;
}
