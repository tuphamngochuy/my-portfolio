import HuyTuLogo from '@/components/header/components/logo';
import NavigationBar from '@/components/header/components/navigationBar';
import SocialNetwork from '@/components/header/components/socialNetwork';

const Header = () => {
	return (
		<div className='lg:mt-6 mt-5 ml-2 mr-4'>
			<div className='flex justify-between'>
				<NavigationBar />
				<HuyTuLogo />
				<SocialNetwork />
			</div>
		</div>
	);
};

export default Header;
