import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		// require("@tailwindcss/typography"),
		require("tailwindcss-radix")({
			variantPrefix: "rdx",
		}),
		// require("@tailwindcss/forms")({
		// 	strategy: "classop",
		// }),
	],
};
export default config;
