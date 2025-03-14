export const config = {
  matcher: '/:path*', // Apply this middleware to all routes
};

export function middleware(req) {
  const password = 'mysecurepassword'; // Change this to your desired password
  const encodedPassword = 'bXlzZWN1cmVwYXNzd29yZA==';  // Base64 of 'mysecurepassword'
  
  const authHeader = req.headers.get('authorization');

  if (!authHeader || authHeader !== `Basic ${encodedPassword}`) {
    return new Response('Unauthorized', { 
      status: 401, 
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' }
    });
  }

  return new Response('Authorized', {
    status: 200,
    body: 'Welcome to the site!',  // Continue loading your content here if the user is authenticated
  });
}



