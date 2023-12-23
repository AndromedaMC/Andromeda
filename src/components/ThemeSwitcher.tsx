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

	switch (theme) {
		case "light":
			return (
				<button
					className="btn btn-ghost btn-circle"
					onClick={(e) => setTheme("dark")}
				>
					<span className=" i-fa6-solid-moon"></span>
				</button>
			);
		case "dark":
		default:
			return (
				<button
					className="btn btn-ghost btn-circle"
					onClick={(e) => setTheme("light")}
				>
					<span className=" i-fa6-solid-sun"></span>
				</button>
			);
	}
}
