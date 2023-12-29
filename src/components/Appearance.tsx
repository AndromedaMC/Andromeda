"use client";

import ThemeSwitcher from "./ThemeSwitcher";

export default function () {
	return (
		<div>
			<h1 className="text-2xl font-semibold">Themes</h1>
			<div className="mt-2">
				<ThemeSwitcher />
			</div>
		</div>
	);
}
