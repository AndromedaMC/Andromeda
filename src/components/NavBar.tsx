import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function () {
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
							<Link href="/" className="font-semibold">
								Plugins
							</Link>
						</li>
						<li>
							<Link href="/" className="font-semibold">
								Resource Packs
							</Link>
						</li>
						<li>
							<Link href="/" className="font-semibold">
								Addons
							</Link>
						</li>
					</ul>
				</div>
				<a className="btn btn-ghost text-xl">Andromeda</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link href="/" className="font-semibold">
							Plugins
						</Link>
					</li>
					<li>
						<Link href="/" className="font-semibold">
							Resource Packs
						</Link>
					</li>
					<li>
						<Link href="/" className="font-semibold">
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
				<Link className="btn btn-primary" href="">
					Login
				</Link>
			</div>
		</div>
	);
}
