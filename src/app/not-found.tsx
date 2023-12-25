"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function () {
	const pathname = usePathname();
	return (
		<div className="flex flex-auto items-center justify-center min-h-screen">
			<div className="text-center h-1/2">
				<p className="text-3xl font-semibold">
					404 |{" "}
					<span className="bg-neutral text-neutral-content p-2 rounded-box">
						{pathname}
					</span>{" "}
					could be not found
				</p>
				<Link href="/" className="btn btn-primary mt-6">
					Go Home
				</Link>
			</div>
		</div>
	);
}
