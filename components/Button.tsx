interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className='bg-primary text-secondary p-4 rounded-md hover:bg-neutral-700 transition-colors duration-150'>
			{children}
		</button>
	);
};
export default Button;
