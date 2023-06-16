export const dateFormat = (date: string) => {
	const newDate = new Date(date);
	return newDate.toLocaleDateString('pt-BR');
};

export const timeFormat = (date: string) => {
	const newDate = new Date(date);
	return newDate.toLocaleTimeString('pt-BR');
};

export const dateTimeFormat = (date: string) => `${dateFormat(date)} ${timeFormat(date)}`;
