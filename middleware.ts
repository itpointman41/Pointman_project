import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Only protect /admin/* routes
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Allow /admin/login without authentication
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Get admin auth from localStorage (this runs on server, so we check cookies instead)
  const adminToken = request.cookies.get('adminToken')?.value;
  const adminUser = request.cookies.get('adminUser')?.value;

  // If no admin session, redirect to login
  if (!adminToken || !adminUser) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Verify admin user role
  try {
    const admin = JSON.parse(adminUser);
    if (admin.role !== 'admin') {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  } catch (parseError) {
    console.error('Admin auth parsing error:', parseError);
    // Invalid admin user data, redirect to login
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
