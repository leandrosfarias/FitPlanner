export interface IStudent {
    id: string;
    name: string;
    email: string;
    phone: string;
    observations: string;
    weight: number;
    height: number;
    gender: string;
    birthDate: string;
    createdAt: Date;
    goal: string;
    userImage?: any;
    status: 'Ativo' | 'Inativo';
    hasTrainingPlan: boolean;
}

export interface IStudentRepository {
    getAll(): Promise<IStudent[]>;
    getById(id: string): Promise<IStudent | undefined>;
    add(student: IStudent): Promise<void>;
    update(student: IStudent): Promise<void>;
    delete(id: string): Promise<void>;
}
