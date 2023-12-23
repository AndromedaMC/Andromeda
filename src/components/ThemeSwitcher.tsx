"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function () {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<label className="swap swap-rotate">
			{/* this hidden checkbox controls the state */}
			<input
				type="checkbox"
				className="theme-controller"
				value="synthwave"
				onChange={(e) => setTheme(theme == "light" ? "dark" : "light")}
			/>

			<span className=" i-fa6-solid-sun swap-on fill-current"></span>
			<span className=" i-fa6-solid-moon swap-off fill-current"></span>
		</label>
	);
}
