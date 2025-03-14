import { NextResponse } from 'next/server';

export function middleware(req) {
    const password = 'mysecurepassword'; // Change this
    const encodedPassword = Buffer.from(password).toString('base64');
    const authHeader = req.headers.get('authorization');

    if (!authHeader || authHeader !== `Basic ${encodedPassword}`) {
        return new Response('Unauthorized', { 
            status: 401, 
            headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' }
        });
    }

    return NextResponse.next();
}


