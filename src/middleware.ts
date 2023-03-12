import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const jwt = request.cookies.get('token');

  if (jwt && request.nextUrl.pathname === '/authenticate') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  if (!jwt && request.nextUrl.pathname.startsWith('/home')) {
    return NextResponse.redirect(new URL('/authenticate', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
};
