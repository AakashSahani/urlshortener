/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// Primary
				mainCyan: 'hsl(180, 66%, 49%)',
				darkViolet: 'hsl(257, 27%, 26%)',

				// Secondary
				mainRed: 'hsl(0, 87%, 67%)',

				// Neutral
				mainGray: 'hsl(0, 0%, 75%)',
				grayishViolet: 'hsl(257, 7%, 63%)',
				veryDarkBlue: 'hsl(255, 11%, 22%)',
				veryDarkViolet: 'hsl(260, 8%, 14%)',
			},
			backgroundImage: {
				bgShortenDesktop: "url('/src/assets/bg-shorten-desktop.svg')",
				bgShortenMobile: "url('/src/assets/bg-shorten-mobile.svg')",
				bgBoostDesktop: "url('/src/assets/bg-boost-desktop.svg')",
				bgBoostMobile: "url('/src/assets/bg-boost-mobile.svg')",
			},
		},
	},
	plugins: [],
};
