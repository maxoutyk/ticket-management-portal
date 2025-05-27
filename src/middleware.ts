import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  
  console.log('Middleware: Starting middleware check for path:', pathname);
  
  // If this is the login page with requireTwoFactor parameter, don't redirect
  if (pathname === '/login' && searchParams.has('requireTwoFactor')) {
    console.log('Middleware: Already on login page with requireTwoFactor flag, allowing access');
    return NextResponse.next();
  }
  
  // Check if the pathname starts with /dashboard
  if (pathname.startsWith('/dashboard')) {
    console.log(`Middleware: Processing request for ${pathname}`);
    
    try {
      const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
      })

      // If no token exists, redirect to the login page
      if (!token) {
        console.log('Middleware: No token found, redirecting to login');
        const url = new URL('/login', request.url)
        url.searchParams.set('callbackUrl', encodeURI(request.url))
        return NextResponse.redirect(url)
      }
      
      console.log('Middleware: Token found', { 
        email: token.email,
        role: token.role,
        requiresTwoFactor: token.requiresTwoFactor || false 
      });
      
      // If the token requires two-factor authentication, redirect back to login with special flag
      if (token.requiresTwoFactor === true) {
        console.log('Middleware: User requires 2FA, redirecting to login with 2FA flag');
        
        // Create redirect URL with flags to show OTP screen
        const url = new URL('/login', request.url)
        url.searchParams.set('callbackUrl', encodeURI(request.url))
        url.searchParams.set('requireTwoFactor', 'true')
        url.searchParams.set('email', token.email as string)
        
        console.log('Middleware: Redirecting to', url.toString());
        return NextResponse.redirect(url)
      }
      
      console.log('Middleware: User authenticated, allowing access');
    } catch (error) {
      console.error('Middleware: Error processing request:', error);
      const url = new URL('/login', request.url)
      url.searchParams.set('error', 'AuthError')
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
} 