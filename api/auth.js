export default function handler(request) {
  // Get environment variables
  const basicAuthUser = process.env.BASIC_AUTH_USER;
  const basicAuthPass = process.env.BASIC_AUTH_PASS;

  // Skip authentication if environment variables are not set
  if (!basicAuthUser || !basicAuthPass) {
    return fetch(request);
  }

  // Get the Authorization header
  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return new Response('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Synapse Access Required"',
        'Content-Type': 'text/plain',
      },
    });
  }

  // Decode base64 credentials
  const base64Credentials = authHeader.slice(6); // Remove "Basic " prefix
  const credentials = atob(base64Credentials);
  const [username, password] = credentials.split(':');

  // Verify credentials
  if (username !== basicAuthUser || password !== basicAuthPass) {
    return new Response('Unauthorized', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Synapse Access Required"',
        'Content-Type': 'text/plain',
      },
    });
  }

  // If authentication successful, forward the request to the original destination
  // For static files, we need to construct the URL to the actual file
  const url = new URL(request.url);
  
  // Handle root path - serve index.html
  if (url.pathname === '/') {
    return fetch(new URL('/index.html', url.origin));
  }

  // For other paths, try to serve the file directly
  return fetch(request);
}