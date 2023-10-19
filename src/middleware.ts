import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const hybridRoutes = ["/", "/login", "/register"];
const logedInUserAccessibleRoutes = ["/", "/my-profile", "/my-bookings"];
const rolesRedirect: Record<string, unknown> = {
  user: "http://localhost:3000/my-profile",
  admin: "http://localhost:3000/admin/my-profile",
  super_admin: "http://localhost:3000/super-admin/my-profile",
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;
  if (!token) {
    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect("http://localhost:3000/login");
  }

  const role = token?.role as string;
  if (
    (role === "admin" && pathname.startsWith("/admin")) ||
    (role === "super_admin" && pathname.startsWith("/super-admin")) ||
    (role === "user" && logedInUserAccessibleRoutes.includes(pathname))
  ) {
    return NextResponse.next();
  }

  if (pathname === "/" && role && role in rolesRedirect) {
    return NextResponse.redirect(rolesRedirect[role] as string);
  }

  return NextResponse.redirect("http://localhost:3000");
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    //hybrid routes
    "/",
    "/login",
    "/register",
    //user routes
    "/dashboard",
    "/my-profile",
    "/my-bookings",
    //admin routes
    "/admin/:page*",
    //super_admin routes
    "/super-admin/:page*",
  ],
};
