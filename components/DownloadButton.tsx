import Image from 'next/image';
import Link from 'next/link';

const DownloadButton = ({ reportURL }: { reportURL: string }) => {
	return (
		<Link href={reportURL}>
			<Image
				src='/icons/download.svg'
				width={25}
				height={25}
				alt='download icon'
			/>
		</Link>
	);
};
export default DownloadButton;
