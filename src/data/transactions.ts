const generateSimpleDateFormat = () => new Date().toISOString().slice(0, 19).replace('T', ' ');

export default  [
    {
        id: 1,
        date: generateSimpleDateFormat(),
        label: 'Boleto',
        type: 0,
        value: 344.52,
    },
    {
        id: 2,
        date: generateSimpleDateFormat(),
        label: 'TED',
        type: 1,
        value: 549.89,
    },
    {
        id: 3,
        date: generateSimpleDateFormat(),
        label: 'Pix',
        type: 0,
        value: 1036.04,
    },
    {
        id: 4,
        date: generateSimpleDateFormat(),
        label: 'Salário',
        type: 1,
        value: 4080.76,
    },
    {
        id: 5,
        date: generateSimpleDateFormat(),
        label: 'Boleto',
        type: 0,
        value: 981.79,
    },
    {
        id: 6,
        date: generateSimpleDateFormat(),
        label: 'TED',
        type: 1,
        value: 736.46,
    },
    {
        id: 7,
        date: generateSimpleDateFormat(),
        label: 'Pix',
        type: 1,
        value: 980.78,
    },
    {
        id: 8,
        date: generateSimpleDateFormat(),
        label: 'DOC',
        type: 1,
        value: 1020.11,
    },
]