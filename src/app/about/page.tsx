import Brief from '@/app/about/components/brief';
import Experience from '@/app/about/components/experience';
import Skill from '@/app/about/components/skill';

const About = () => {
	return (
		<div className='mx-4 lg:mx-10 mt-10'>
			<Brief />
			<Skill />
			<Experience />
		</div>
	);
};

export default About;
