'use client';
import Button from '@/components/Button';
import Dialog from '@/components/Dialog';
import Table from '@/components/Table';
import { useState } from 'react';

export default function Home() {
	const [showDialog, setShowDialog] = useState<boolean>(false);

	// handler for the button click
	const handleButtonClick = () => {
		setShowDialog(true);
	};

	return (
		<main className='min-h-full flex'>
			<div className='flex justify-center items-center flex-1 relative'>
				<Button onClick={handleButtonClick}>
					View Recently Generated Reports
				</Button>
				{showDialog && (
					<Dialog onClose={() => setShowDialog(false)}>
						<h2 className='bold text-2xl text-center mb-5'>
							Recently Generated Reports
						</h2>
						<Table />
					</Dialog>
				)}
			</div>
		</main>
	);
}
