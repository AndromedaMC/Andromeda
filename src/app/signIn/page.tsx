interface ProviderButton {
	icon: string;
	name: string;
}

export default function () {
	const buttons: ProviderButton[] = [
		{
			icon: "google",
			name: "Google",
		},
		{
			icon: "discord",
			name: "Discord",
		},
		{
			icon: "twitter",
			name: "X",
		},
		{
			icon: "github",
			name: "GitHub",
		},
		{
			icon: "gitlab",
			name: "GitLab",
		},
		{
			icon: "bitbucket",
			name: "BitBucket",
		},
	];

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
							>
								<span
									className={`i-fa6-brands-${button.icon}`}
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
