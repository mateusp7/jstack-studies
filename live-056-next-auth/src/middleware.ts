import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export default auth((request) => {
  const isLogged = !!request.auth;
  const { pathname } = request.nextUrl;
  const isPrivatePath = pathname.startsWith("/dash");

  if (isLogged && !isPrivatePath) {
    return NextResponse.redirect(new URL("/dash", request.url));
  }

  if (isPrivatePath && !isLogged) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
});

export const config = {
  matcher: ["/dash", "/dash/:path", "/login", "/register"],
};
