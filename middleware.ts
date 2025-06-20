import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Get environment variables
  const basicAuthUser = process.env.BASIC_AUTH_USER;
  const basicAuthPass = process.env.BASIC_AUTH_PASS;

  // Skip authentication if environment variables are not set
  if (!basicAuthUser || !basicAuthPass) {
    return NextResponse.next();
  }

  // Get the Authorization header
  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return new Response('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Synapse Access Required"',
      },
    });
  }

  // Decode base64 credentials
  try {
    const base64Credentials = authHeader.slice(6); // Remove "Basic " prefix
    const credentials = atob(base64Credentials);
    const [username, password] = credentials.split(':');

    // Verify credentials
    if (username !== basicAuthUser || password !== basicAuthPass) {
      return new Response('Invalid credentials', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Synapse Access Required"',
        },
      });
    }
  } catch (error) {
    return new Response('Invalid authorization header', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Synapse Access Required"',
      },
    });
  }

  // If authentication successful, continue
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}