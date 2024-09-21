import AvatarImage from '@public/images/avatar.jpeg';
import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { PiHandWaving } from 'react-icons/pi';

const Brief = () => {
	return (
		<div className='flex flex-col-reverse lg:flex lg:flex-row gap-4 mb-8'>
			<div>
				<div className='flex flex-row gap-2'>
					<h1>Hi, I'm Huy</h1>
					<PiHandWaving size={50} />
				</div>
				<p className='text-justify mt-2'>
					I am an enthusiastic <b>full-stack developer</b> with 3 years of
					experience in software development. I have experiences in both
					enterprise and startup environments. I am{' '}
					<b>skilled in JavaScript, TypeScript, NodeJS, and ReactJS</b> and have
					successfully collaborated with cross-functional teams to develop new
					features. I am committed to furthering my skills in Software
					Engineering and contributing to innovative, collaborative environments
					to help drive company success.
				</p>
				<div className='flex flex-row gap-2 items-center mt-4'>
					<FaLocationDot /> Ho Chi Minh City, Vietnam
				</div>
				<div className='flex flex-row gap-2 items-center mt-4'>
					<FaPhoneAlt />
					+84 778 010 861
				</div>
			</div>
			<Image
				src={AvatarImage}
				alt={'Cover Image'}
				className='lg:w-80 w-full rounded-xl'
			/>
		</div>
	);
};

export default Brief;
