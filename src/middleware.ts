import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get('token');

  if (jwt && request.nextUrl.pathname === '/authenticate') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  if (!jwt && request.nextUrl.pathname.startsWith('/home')) {
    return NextResponse.redirect(new URL('/authenticate', request.url));
  }
}

export const config = {
  matcher: ['/'],
};
