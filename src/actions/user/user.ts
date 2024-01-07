"use server";

import createSupabaseServerClient from "@/lib/supabase/serverClient";
import { redirect } from "next/navigation";

export async function deleteAccount() {
	const supabase = createSupabaseServerClient(false);
	const {
		data: { user },
	} = await supabase.auth.getUser();

	await supabase.auth.admin.deleteUser(user?.id!);
}

export async function signOut() {
	const supabase = createSupabaseServerClient(false);

	await supabase.auth.signOut();
	redirect("/");
}
