"use client";

import createSupabaseBrowserClient from "@/lib/supabase/browserClient";

interface ProviderButton {
	id: string;
	icon: JSX.Element;
	name: string;
}

export default function () {
	const buttons: ProviderButton[] = [
		{
			id: "google",
			icon: <span className="i-fa6-brands-google"></span>,
			name: "Google",
		},
		{
			id: "discord",
			icon: <span className="i-fa6-brands-discord"></span>,
			name: "Discord",
		},
		{
			id: "twitter",
			icon: <span className="i-fa6-brands-twitter"></span>,
			name: "X",
		},
		{
			id: "github",
			icon: <span className="i-fa6-brands-github"></span>,
			name: "GitHub",
		},
		{
			id: "gitlab",
			icon: <span className="i-fa6-brands-gitlab"></span>,
			name: "GitLab",
		},
		{
			id: "bitbucket",
			icon: <span className="i-fa6-brands-bitbucket"></span>,
			name: "BitBucket",
		},
	];

	function signIn(provider: string) {
		const supabase = createSupabaseBrowserClient();

		switch (provider) {
			case "google":
				break;
			case "discord":
				break;
			case "x":
				break;
			case "gitlab":
				break;
			case "bitbucket":
				break;
			case "github":
			default:
				supabase.auth.signInWithOAuth({
					provider: "github",
					options: {
						redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
					},
				});
				break;
		}
	}

	return (
		<div className="grid place-items-center">
			<div className="bg-base-300 w-2/3 lg:w-1/3 rounded-box my-36">
				<div className="m-6">
					<h1 className="text-3xl font-semibold my-6">
						Sign in with
					</h1>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
						{buttons.map((button) => (
							<button
								className="btn btn-neutral"
								key={button.name}
								onClick={() => signIn(button.id)}
							>
								{button.icon}
								{button.name}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
