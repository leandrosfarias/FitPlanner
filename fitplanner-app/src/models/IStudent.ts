export interface IStudent {
    id: string;
    name: string;
    email: string | null;
    status: 'Ativo' | 'Inativo';
}
