import ResumeButton from '@/components/homeContent/components/resumeButton';
import CoverImage from '@/images/cover.jpg';
import Image from 'next/image';

const HomeContent = () => {
	return (
		<div className='flex flex-col lg:flex-row justify-start w-3/5 mt-14 lg:mt-20 mx-auto gap-0'>
			<Image
				src={CoverImage}
				alt={'Cover Image'}
				width={320}
			/>
			<div className='w-full lg:w-3/5 lg:ml-4 mt-4 lg:mt-10'>
				<h1>Turning idea into reality with code and design.</h1>
				<p className='text-justify mt-2 lg:mt-4'>
					As a proficient full-stack developer, I specialize in transforming
					ideas into cutting-edge web applications. Check out my recent projects
					and articles that highlight my expertise in React.js and web
					development.
				</p>
				<div className='flex flex-row gap-4  mt-4 items-center'>
					<ResumeButton />
					<a
						className='text-lg font-bold underline cursor-pointer'
						target='_blank'
						href='mailto:huytn0601@gmail.com'
					>
						Connect
					</a>
				</div>
			</div>
		</div>
	);
};

export default HomeContent;
