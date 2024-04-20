import { formatDate, formatTime } from '@/utils';

const DateRow = ({ datetime }: { datetime: string }) => {
	return (
		<div className='flex flex-col'>
			<span>{formatDate(datetime)}</span>
			<span className='text-[12px] text-neutral-500'>{formatTime(datetime)}</span>
		</div>
	);
};
export default DateRow;
