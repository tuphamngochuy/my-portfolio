'use client';

import { useTheme } from 'next-themes';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

const Socials = [
	{
		id: 'linkedin',
		logo: <FaLinkedin />,
		href: 'https://www.linkedin.com/in/huy-tu-se',
	},
	{
		id: 'github',
		logo: <FaGithub />,
		href: 'https://github.com/tuphamngochuy',
	},
	{
		id: 'facebook',
		logo: <FaFacebook />,
		href: 'https://www.facebook.com/huytn61/',
	},
	{
		id: 'instagram',
		logo: <FaInstagram />,
		href: 'https://www.instagram.com/huy.tuf/',
	},
];
const SocialNetwork = ({ isInMenu = false }: { isInMenu?: boolean }) => {
	const { theme, setTheme } = useTheme();

	return (
		<div
			className={`flex flex-row justify-end items-center ${
				isInMenu
					? 'text-white-1 dark:text-black-1'
					: 'invisible text-black-1 dark:text-white-1'
			} lg:visible gap-4`}
		>
			{Socials.map((social) => (
				<div key={social.id}>
					<a
						href={social.href}
						target='_blank'
						className='cursor-pointer '
					>
						{social.logo}
					</a>
				</div>
			))}
			<button
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				className='no-underline cursor-pointer font-medium text-lg items-center'
			>
				{theme === 'dark' ? <IoMdSunny /> : <IoMdMoon />}
			</button>
		</div>
	);
};

export default SocialNetwork;
