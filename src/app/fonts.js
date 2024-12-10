import localFont from 'next/font/local';

export const gilroy = localFont({
	src: [
		{ weight: '100', style: 'normal', path: '../../public/assets/fonts/Gilroy/Gilroy-Thin.woff' },
		{ weight: '100', style: 'italic', path: '../../public/assets/fonts/Gilroy/Gilroy-ThinItalic.woff' },
		{ weight: '200', style: 'normal', path: '../../public/assets/fonts/Gilroy/Gilroy-UltraLight.woff' },
		{ weight: '200', style: 'italic', path: '../../public/assets/fonts/Gilroy/Gilroy-UltraLightItalic.woff' },
		{ weight: '300', style: 'normal', path: '../../public/assets/fonts/Gilroy/Gilroy-Light.woff' },
		{ weight: '300', style: 'italic', path: '../../public/assets/fonts/Gilroy/Gilroy-LightItalic.woff' },
		{ weight: '400', style: 'normal', path: '../../public/assets/fonts/Gilroy/Gilroy-Regular.woff' },
		{ weight: '400', style: 'italic', path: '../../public/assets/fonts/Gilroy/Gilroy-RegularItalic.woff' },
		{ weight: '500', style: 'normal', path: '../../public/assets/fonts/Gilroy/Gilroy-Medium.woff' },
		{ weight: '500', style: 'italic', path: '../../public/assets/fonts/Gilroy/Gilroy-MediumItalic.woff' },
		{ weight: '600', style: 'normal', path: '../../public/assets/fonts/Gilroy/Gilroy-Semibold.woff' },
		{ weight: '600', style: 'italic', path: '../../public/assets/fonts/Gilroy/Gilroy-SemiboldItalic.woff' },
		{ weight: '700', style: 'normal', path: '../../public/assets/fonts/Gilroy/Gilroy-Bold.woff' },
		{ weight: '700', style: 'italic', path: '../../public/assets/fonts/Gilroy/Gilroy-BoldItalic.woff' },
		{ weight: '800', style: 'normal', path: '../../public/assets/fonts/Gilroy/Gilroy-Extrabold.woff' },
		{ weight: '800', style: 'italic', path: '../../public/assets/fonts/Gilroy/Gilroy-ExtraboldItalic.woff' },
		{ weight: '900', style: 'normal', path: '../../public/assets/fonts/Gilroy/Gilroy-Heavy.woff' },
		{ weight: '900', style: 'italic', path: '../../public/assets/fonts/Gilroy/Gilroy-HeavyItalic.woff' },
		{ weight: '900', style: 'normal', path: '../../public/assets/fonts/Gilroy/Gilroy-Black.woff' },
		{ weight: '900', style: 'italic', path: '../../public/assets/fonts/Gilroy/Gilroy-BlackItalic.woff' }
	],
	display: 'swap',
	variable: '--font-gilroy'
});
