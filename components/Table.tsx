'use client';
import { getReports } from '@/lib/getData';
import { useEffect, useState } from 'react';
import DateRow from './DateRow';
import DownloadButton from './DownloadButton';

interface Report {
	id: number;
	name: string;
	date: string;
	reportURL: string;
}

const Table = () => {
	const [reports, setReports] = useState<Report[]>([]);

	useEffect(() => {
		const fetchReports = async () => {
			try {
				const data = await getReports();
				setReports(data);
			} catch (error) {
				console.error('Error fetching reports:', error);
			}
		};

		fetchReports();
	}, []);

	return (
		<table className='min-w-full'>
			<thead>
				<tr>
					<th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
						Date
					</th>
					<th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider'>
						Report Name
					</th>
					<th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider'>
						Download
					</th>
				</tr>
			</thead>
			{reports.length === 0 || reports === undefined ? (
				<tr>
					<td
						className='px-5 py-5 border-b border-gray-200 bg-white text-sm text-center'
						colSpan={3}>
						No reports available
					</td>
				</tr>
			) : (
				<tbody>
					{reports.map(report => (
						<tr key={report.date}>
							<td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
								<DateRow datetime={report.date} />
							</td>
							<td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
								{report.name}
							</td>
							<td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
								<div className='flex justify-end pr-5'>
									<DownloadButton reportURL={report.reportURL} />
								</div>
							</td>
						</tr>
					))}
				</tbody>
			)}
		</table>
	);
};
export default Table;
