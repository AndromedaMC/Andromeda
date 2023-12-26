import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import createSupabaseServerClient from "@/lib/supabase/serverClient";
import { redirect } from "next/navigation";

export default async function () {
	const supabase = createSupabaseServerClient(true);

	const {
		data: { session },
	} = await supabase.auth.getSession();

	async function signOut() {
		"use server";
		await createSupabaseServerClient().auth.signOut();
		redirect("/");
	}

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<span className="i-fa6-solid-bars"></span>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link href="/plugins" className="font-semibold">
								Plugins
							</Link>
						</li>
						<li>
							<Link
								href="/resource-packs"
								className="font-semibold"
							>
								Resource Packs
							</Link>
						</li>
						<li>
							<Link href="/addons" className="font-semibold">
								Addons
							</Link>
						</li>
					</ul>
				</div>
				<Link className="btn btn-ghost text-xl" href="/">
					Andromeda
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href="/plugins" className="font-semibold">
							Plugins
						</Link>
					</li>
					<li>
						<Link href="/resource-packs" className="font-semibold">
							Resource Packs
						</Link>
					</li>
					<li>
						<Link href="/addons" className="font-semibold">
							Addons
						</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<ThemeSwitcher />
				<Link className="btn btn-ghost btn-circle" href="/">
					<span className=" i-fa6-solid-magnifying-glass"></span>
				</Link>

				{session ? (
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									alt="avatar"
									src={`https://api.dicebear.com/7.x/identicon/svg?seed=${session.user.id}`}
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 text-base-content rounded-box w-52"
						>
							<li>
								<a>Profile</a>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<form action={signOut}>
									<button className="">Sign Out</button>
								</form>
							</li>
						</ul>
					</div>
				) : (
					<Link className="btn btn-primary" href="/sign-in">
						Sign In
					</Link>
				)}
			</div>
		</div>
	);
}
