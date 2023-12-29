import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface Theme {
	id: string;
	name: string;
}

export default function () {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const themes: Theme[] = [
		{
			id: "dark",
			name: "Dark",
		},
		{
			id: "light",
			name: "Light",
		},
		{
			id: "black",
			name: "Black",
		},
		{
			id: "synthwave",
			name: "Synthwave",
		},
		{
			id: "retro",
			name: "Retro",
		},
		{
			id: "night",
			name: "Night",
		},
		{
			id: "dim",
			name: "Dim",
		},

		{
			id: "dracula",
			name: "Dracula",
		},
		{
			id: "cyberpunk",
			name: "Cyberpunk",
		},
		{
			id: "nord",
			name: "Nord",
		},
		{
			id: "sunset",
			name: "Sunset",
		},
	];

	useEffect(() => {
		setMounted(true);
	}, []);

	function onThemeChange(e: { target: { value: string } }) {
		setTheme(e.target.value);
	}

	if (!mounted) {
		return null;
	}

	return (
		<div className="dropdown mb-72">
			<div tabIndex={0} role="button" className="btn m-1">
				{themes[themes.findIndex((t) => t.id === theme)].name}
				<span className="i-fa6-solid-chevron-down"></span>
			</div>
			<ul
				tabIndex={0}
				className="dropdown-content z-[1] p-2 shadow-2xl bg-base-200 rounded-box w-52"
			>
				{themes.map(({ id, name }) => (
					<li>
						<input
							type="radio"
							name="theme-dropdown"
							className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
							aria-label={name}
							value={id}
							checked={id === theme}
							onChange={onThemeChange}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
