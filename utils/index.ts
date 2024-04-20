export const formatDate = (date: string) => {
	const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
	const formattedDate = new Date(date)
		.toLocaleDateString('en-GB', options)
		.replace(/\//g, '-');
	return formattedDate;
};
export const formatTime = (time: string) => {
	const options = { hour: '2-digit', minute: '2-digit', hour12: true };
	const formattedTime = new Date(time)
		.toLocaleTimeString('en-GB', options as any)
		.toUpperCase();
	return formattedTime;
};
