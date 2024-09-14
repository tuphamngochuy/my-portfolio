import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				'white-0': '#ffffff',
				'white-1': '#f5f5f5',
				'white-1-1': '#f5f5f5bf',
				'black-1': '#1b1b1b',
				'black-1-1': '#1b1b1bbf',
			},
		},
	},
	plugins: [],
};
export default config;
