import Account from "@/components/Account";
import Appearance from "@/components/Appearance";
import Security from "@/components/Security";

export default function ({ params }: { params: { type: string } }) {
	const type = params.type;

	return (
		<div className="w-11/12 mx-auto my-6">
			<div className="grid gap-5 lg:grid-rows-1 lg:grid-cols-3 grid-cols-1 grid-rows-2 place-items-center">
				<ul className="menu w-full rounded-box lg:col-span-1 bg-base-300">
					<li className="menu-title text-3xl text-base-content">
						Settings
					</li>
					<li>
						<a
							className={type == "appearance" ? "active" : ""}
							href="/user/appearance"
						>
							<span className="i-fa6-solid-paintbrush"></span>
							Appearance
						</a>
					</li>
					<li>
						<a
							className={type == "account" ? "active" : ""}
							href="/user/account"
						>
							<span className="i-fa6-solid-user"></span>
							Account
						</a>
					</li>
					<li>
						<a
							className={type == "security" ? "active" : ""}
							href="/user/security"
						>
							<span className="i-fa6-solid-shield"></span>
							Security
						</a>
					</li>
				</ul>

				<div className="lg:col-span-2 w-full h-full rounded-box bg-base-300">
					<div className="p-5">
						{type == "appearance" ? (
							<Appearance />
						) : type == "account" ? (
							<Account />
						) : (
							<Security />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
