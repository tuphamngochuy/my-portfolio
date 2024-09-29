import { FaDotCircle } from 'react-icons/fa';

const experiences = [
	{
		companyName: 'Ringkas',
		companyLogo: '',
		title: 'Fullstack Developer',
		projects: [
			{
				name: 'Ringkas CRM',
				description: [
					'Ringkas CRM is a platform to connect property developers, homebuyers to banks for processing mortgage application.',
					'Technologies: ReactJS, NextJS, NodeJS, Java Spring, Kafka, PostgreSQL',
				],
			},
			{
				name: 'Ringkas LOS & Consumer App',
				description: [
					'Ringkas LOS is an end to end solution for processing mortgage with the collaboration between brokers, property develops and lending systems',
					'Ringkas Consumer App is D2C Application which help homebuyer to self onboard and process for their desired property.',
					'Technologies: ReactJS, NodeJS, GraphQL, PostgreSQL, Serverless, Redis, SQS, Hasura, Docker, Apollo Client & Server, Sequelize',
				],
			},
		],
		from: 'Feb 2022',
		to: 'Present',
	},
	{
		companyName: 'Samsung Electronics',
		companyLogo: '',
		title: 'Frontend Developer',
		projects: [
			{
				name: 'SmartThings',
				description: [
					'SmartThings is a mobile application used to control devices in Samsung Ecosystem.',
					'Technologies: Angular 8, Jasmine',
				],
			},
		],
		from: 'Jul 2021',
		to: 'Feb 2022',
	},
	{
		companyName: 'BioTuring',
		companyLogo: '',
		title: 'Frontend & Data Visualization Developer',
		projects: [
			{
				name: 'BBrowser',
				description: [
					'BBrowser is a desktop application to help scientists to visualize and analyze data collected from their experiments.',
					'Technologies: Electron, NodeJS, Python.',
				],
			},
		],
		from: 'May 2021',
		to: 'Jul 2021',
	},
];

const Experience = () => {
	return (
		<div className='my-2'>
			<div className='mx-auto text-center w-fit px-4 py rounded-full bg-white-3 dark:bg-black-3'>
				<h5>Experiences</h5>
			</div>
			<div className='mx-auto text-center w-fit px-4 py-2'>
				{experiences.map(({ companyName, title, projects, from, to }) => (
					<div className='grid grid-cols-12 my-4 border-b-2 border-solid dark:border-white-1-1 border-black-1-1'>
						<div className='col-span-8 text-justify'>
							<h5>{companyName}</h5>
							<p>{title}</p>
							{projects.map(({ name, description }) => (
								<div className='my-2'>
									<h6 className='italic my'>{name}</h6>
									<ul className='ml-4'>
										{description.map((desc) => (
											<li>
												<FaDotCircle
													size={10}
													className='inline-block mr-4'
												/>
												{desc}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
						<div className='col-span-4 text-right italic text-sm'>{`${from} - ${to}`}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
