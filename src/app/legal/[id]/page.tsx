export default function ({ params }: { params: { id: string } }) {
	const id = params.id;

	return (
		<div className="w-11/12 mx-auto my-6">
			<div className="grid gap-5 lg:grid-rows-1 lg:grid-cols-3 grid-cols-1 grid-rows-2 place-items-center">
				<ul className="menu w-full rounded-box lg:col-span-1 bg-base-300">
					<li className="menu-title text-lg text-base-content">
						Legal
					</li>
					<li>
						<a
							className={id == "terms" ? "active" : ""}
							href="/legal/terms"
						>
							<span className="i-fa6-solid-handshake"></span>
							Terms of use
						</a>
					</li>
					<li>
						<a
							className={id == "privacy" ? "active" : ""}
							href="/legal/privacy"
						>
							<span className="i-fa6-solid-lock"></span>
							Privacy policy
						</a>
					</li>
					<li>
						<a
							className={id == "cookie" ? "active" : ""}
							href="/legal/cookie"
						>
							<span className="i-fa6-solid-cookie"></span>
							Cookie policy
						</a>
					</li>
				</ul>

				<div className="lg:col-span-2 w-full h-full rounded-box bg-base-300">
					<div className="p-5">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Asperiores recusandae dignissimos quis
							perferendis quam magni labore obcaecati, nihil
							quibusdam sunt debitis provident doloribus repellat
							maxime laudantium ratione ad? Voluptatum, eius.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
