import Image from 'next/image';

interface DialogProps {
	children: React.ReactNode;
	onClose: () => void;
}

const Dialog = ({ children, onClose }: DialogProps) => {
	// handler for the close button
	const handleClose = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		onClose();
	};

	return (
		<div className='absolute top-0 left-0 bg-black-rgba h-full w-full flex justify-center items-center '>
			<div className='bg-secondary h-[650px] w-[60vw] p-5 rounded-md relative'>
				<button className='absolute top-2 right-2'>
					<Image
						src='/icons/close.svg'
						alt='close'
						width={25}
						height={25}
						onClick={handleClose}
					/>
				</button>
				{children}
			</div>
		</div>
	);
};
export default Dialog;
