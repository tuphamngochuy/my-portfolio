import { IoMdDownload } from 'react-icons/io';

const ResumeButton = () => {
	const text = 'dark:text-black-1 text-white-1';
	const textHover = 'dark:hover:text-white-1 hover:text-black-1';
	const bg = 'dark:bg-white-1 bg-black-1';
	const bgHover = 'dark:hover:bg-black-1 hover:bg-white-1';
	return (
		<a
			href='https://drive.google.com/uc?export=download&id=1tK4Yb7IFKdlaWSsVmPOwEPSYMxxOi3D-'
			target='_blank'
			className={`flex flex-row gap-1 items-center px-4 py-2 w-fit rounded-lg ${bg} ${bgHover} border-solid border-2 hover:border-black-1-1 dark:hover:border-white-1 ${text} ${textHover} cursor-pointer`}
		>
			<div className={`text-lg font-bold`}>Resume</div>
			<IoMdDownload />
		</a>
	);
};

export default ResumeButton;
