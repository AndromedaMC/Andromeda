"use client";

import { deleteAccount, signOut } from "@/actions/user/user";
import { redirect, push } from "next/navigation";

export default async function () {
	return (
		<div className="text-base-content">
			<h1 className="text-2xl font-semibold">Delete account</h1>
			<p className="text-md my-1">
				Deleting your account means all attached data, excluding
				projects, will be <i>permanently</i> deleted from our servers.
			</p>
			<button
				className="btn btn-error my-1"
				onClick={async () => {
					await deleteAccount();
					await signOut();
				}}
			>
				<span className="i-fa6-solid-triangle-exclamation"></span>Delete
				my account
			</button>
		</div>
	);
}
