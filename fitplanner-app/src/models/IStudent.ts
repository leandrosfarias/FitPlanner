export interface IStudent {
    id: string;
    complete_name: string;
    email: string | null;
    status: 'active' | 'inactive';
}
