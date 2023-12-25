"use client";

import createSupabaseBrowserClient from "@/utils/supabase/browserClient";

interface ProviderButton {
	id: string;
	name: string;
}

export default function () {
	const buttons: ProviderButton[] = [
		{
			id: "google",
			name: "Google",
		},
		{
			id: "discord",
			name: "Discord",
		},
		{
			id: "twitter",
			name: "X",
		},
		{
			id: "github",
			name: "GitHub",
		},
		{
			id: "gitlab",
			name: "GitLab",
		},
		{
			id: "bitbucket",
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
								<span
									className={`i-fa6-brands-${button.id}`}
								></span>
								{button.name}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
