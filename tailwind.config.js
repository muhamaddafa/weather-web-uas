/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				bkg: "#171819",
				accent: "#66CCC1",
			},
			backgroundImage:{
				'main': 'url("/src/asset/Main.svg")',
			},
			dropShadow: {
				"text-sm": "1px 1px 0px rgba(0, 0, 0, 0.90)",
				"text-md": "1px 2px 0px rgba(0, 0, 0, 0.90)",
				"text-lg": "1px 4px 0px rgba(0, 0, 0, 0.90)",
			},
		},
	},
	plugins: [],
};
