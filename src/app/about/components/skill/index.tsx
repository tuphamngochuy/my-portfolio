import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { DiRedis } from 'react-icons/di';
import {
	FaAngular,
	FaAws,
	FaDocker,
	FaGitAlt,
	FaNodeJs,
	FaReact,
} from 'react-icons/fa';
import { GrGraphQl } from 'react-icons/gr';
import { IoLogoJavascript } from 'react-icons/io5';

import { SiAmazonsqs, SiAwslambda, SiJest, SiSequelize } from 'react-icons/si';

const SkillSets = [
	{
		name: 'JavaScript',
		yoe: 3,
		logo: (
			<IoLogoJavascript
				size={30}
				className='text-yellow-400'
			/>
		),
	},
	{
		name: 'TypeScript',
		yoe: 3,
		logo: (
			<BiLogoTypescript
				size={30}
				className='text-blue-500'
			/>
		),
	},
	{
		name: 'NodeJS',
		yoe: 2,
		logo: (
			<FaNodeJs
				size={30}
				className='text-green-600'
			/>
		),
	},
	{
		name: 'ReactJS',
		yoe: 2,
		logo: (
			<FaReact
				size={30}
				className='text-blue-400'
			/>
		),
	},
	{
		name: 'GraphQL',
		yoe: 2,
		logo: (
			<GrGraphQl
				size={30}
				className='text-pink-500'
			/>
		),
	},
	{
		name: 'PostgreSQL',
		yoe: 1.5,
		logo: (
			<BiLogoPostgresql
				size={30}
				className='text-blue-500'
			/>
		),
	},
	{
		name: 'Lambda',
		yoe: 1.5,
		logo: (
			<SiAwslambda
				size={30}
				className='text-orange-500'
			/>
		),
	},
	{
		name: 'Sequelize',
		yoe: 1.5,
		logo: (
			<SiSequelize
				size={30}
				className='text-blue-700'
			/>
		),
	},
	{
		name: 'Redis',
		yoe: 1,
		logo: (
			<DiRedis
				size={30}
				className='text-red-900'
			/>
		),
	},
	{
		name: 'AWS SQS',
		yoe: 1,
		logo: (
			<SiAmazonsqs
				size={30}
				className='bg-pink-600 text-white-0'
			/>
		),
	},
	{
		name: 'AWS S3',
		yoe: 1,
		logo: <FaAws size={30} />,
	},
	{
		name: 'Angular',
		yoe: 0.5,
		logo: <FaAngular size={30} />,
	},
	{
		name: 'Git',
		yoe: 3,
		logo: (
			<FaGitAlt
				size={30}
				className='text-orange-500'
			/>
		),
	},
	{
		name: 'Jest',
		yoe: 1.5,
		logo: (
			<SiJest
				size={30}
				className='text-pink-500'
			/>
		),
	},
	{
		name: 'Docker',
		yoe: 1.5,
		logo: (
			<FaDocker
				size={30}
				className='text-blue-400'
			/>
		),
	},
];
const Skill = () => {
	return (
		<div className='bg-white-2 dark:bg-black-2 py-4 px-4 mb-4'>
			<div className='mx-auto text-center w-fit px-4 py rounded-full bg-white-3 dark:bg-black-3'>
				<h5>Skills</h5>
			</div>
			<div className='grid grid-cols-2 lg:grid-cols-8 gap-4 mt-4'>
				{SkillSets.map((skill) => (
					<div
						key={skill.name}
						className='flex flex-col items-center gap-1 p-4 rounded-lg shadow-md bg-white-1 dark:bg-black-1'
					>
						{skill.logo}
						<h6>{skill.name}</h6>
						<p>
							{skill.yoe} {skill.yoe <= 1 ? 'year' : 'years'}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skill;
