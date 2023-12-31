import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {},
	plugins: [
		require("daisyui"),
		iconsPlugin({
			collections: getIconCollections(["fa6-solid", "fa6-brands"]),
		}),
	],
	daisyui: {
		themes: [
			"light",
			"dark",
			"synthwave",
			"retro",
			"black",
			"dracula",
			"night",
			"dim",
			"cyberpunk",
			"sunset",
			"nord",
		],
	},
};
export default config;
