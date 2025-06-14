export interface Student {
    id: string;
    name: string;
    email: string;
    weight: number;
    height: number;
    gender: string;
    birthDate: string;
    createdAt: Date;
    goal: string;
    userImage?: any;
}

export interface IStudentRepository {
    getAll(): Promise<Student[]>;
    getById(id: string): Promise<Student | undefined>;
    add(student: Student): Promise<void>;
    update(student: Student): Promise<void>;
    delete(id: string): Promise<void>;
}
