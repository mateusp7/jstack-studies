import { NextRequest, NextResponse } from 'next/server';

const isSignedIn = false;

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/contacts/create' && !isSignedIn) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/contacts/create',
}
