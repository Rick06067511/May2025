import { NextResponse } from 'next/server';

export function middleware(req) {
    const password = 'mysecurepassword'; // Change this to your own password
    const encodedPassword = 'bXlzZWN1cmVwYXNzd29yZA==';  // Base64 of 'mysecurepassword'
    const authHeader = req.headers.get('authorization');

    if (!authHeader || authHeader !== `Basic ${encodedPassword}`) {
        return new Response('Unauthorized', { 
            status: 401, 
            headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' }
        });
    }

    return NextResponse.next();
}


