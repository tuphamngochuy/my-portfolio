'use client';
import SocialNetwork from '@/components/header/components/socialNetwork';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const Links = [
	{ title: 'Home', url: '/' },
	{ title: 'About', url: '/about' },
];

const NavigationBar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div>
			<div className='flex flex-row justify-start items-center invisible lg:visible gap-2'>
				<div
					onClick={() => {
						setOpenMenu((current) => !current);
					}}
				>
					{openMenu ? (
						<IoMdClose
							size='2em'
							className='lg:hidden visible'
						/>
					) : (
						<GiHamburgerMenu
							size='2em'
							className='lg:hidden visible'
						/>
					)}
				</div>
				{Links.map((link) => (
					<div
						key={link.url}
						className='border-transparent border-b-2 hover:dark:border-white-1 hover:border-black-1 px-2 '
					>
						<a
							className='dark:text-white-1 text-black-1 no-underline cursor-pointer font-medium text-lg'
							href={link.url}
						>
							{link.title}
						</a>
					</div>
				))}
			</div>
			{openMenu && (
				<div className='absolute left-0 top-[10%] w-screen lg:hidden h-screen'>
					<div className='flex flex-col gap-4 items-center mx-[5%] py-[50%] bg-black-1-1 dark:bg-white-1-1 rounded-lg h-5/6'>
						{Links.map(({ title, url }) => (
							<div
								key={url}
								className='border-transparent border-b-2 hover:border-white-1 hover:dark:border-black-1 px-2 '
							>
								<a
									className='text-white-1 dark:text-black-1 no-underline cursor-pointer font-medium text-lg'
									href={url}
								>
									{title}
								</a>
							</div>
						))}
						<SocialNetwork isInMenu />
					</div>
				</div>
			)}
		</div>
	);
};

export default NavigationBar;
