import Providers from '@/app/providers';
import Footer from '@/components/footer';
import Header from '@/components/header';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Huy Tu Portfolio',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white-1 dark:bg-black-1 text-black-1 dark:text-white-1`}
			>
				<Providers>
					<div className='flex flex-col min-h-screen justify-between'>
						<div>
							<Header />
							{children}
						</div>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
