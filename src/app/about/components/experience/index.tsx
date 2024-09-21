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
		<div>
			<div className='mx-auto text-center w-fit px-4 py rounded-full bg-white-3 dark:bg-black-3'>
				<h5>Experiences</h5>
			</div>
		</div>
	);
};

export default Experience;
