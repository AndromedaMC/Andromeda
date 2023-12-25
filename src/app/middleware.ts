import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const response = NextResponse.next();

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				get(name: string) {
					return getCookie(name, { req: request, res: response });
				},
				set(name: string, value: string, options: CookieOptions) {
					setCookie(name, value, {
						req: request,
						res: response,
						...options,
					});
				},
				remove(name: string, options: CookieOptions) {
					deleteCookie(name, {
						req: request,
						res: response,
						...options,
					});
				},
			},
		},
	);

	return response;
}

export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
