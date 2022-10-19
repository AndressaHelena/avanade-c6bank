import TypeDb from "../../../types/typeDb";

const db: Array<TypeDb>=[
    {
        id: 1,
        type: 'pix',
        amount: 100,
        date: '2022-10-13',
        description: 'Pizza',
        operation: 'credit'
    },
    {
        id: 2,
        type: 'debit',
        amount: 10,
        date: '2022-10-15',
        description: 'Padaria',
        operation: 'debit'   
    },
    {
        id: 3,
        type: 'Ted',
        amount: 1500,
        date: '2022-10-15',
        description: 'Salary',
        operation: 'credit'
    },
    {
        id: 4,
        type: 'credit',
        amount: 700,
        date: '2022-11-10',
        description: 'Faculdade',
        operation: 'debit'   
    }
];

export default db;