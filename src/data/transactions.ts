const generateSimpleDateFormat = () => new Date().toISOString().slice(0, 19).replace('T', ' ');

export default  [
    {
        id: 1,
        date: generateSimpleDateFormat(),
        label: 'Boleto',
        type: 0,
        value: 300,
    },
    {
        id: 2,
        date: generateSimpleDateFormat(),
        label: 'Conta',
        type: 1,
        value: 500,
    },
    {
        id: 3,
        date: generateSimpleDateFormat(),
        label: 'Pix',
        type: 1,
        value: 800,
    },
    {
        id: 4,
        date: generateSimpleDateFormat(),
        label: 'Salário',
        type: 0,
        value: 1020,
    }
]