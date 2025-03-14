import { NextResponse } from 'next/server';

export function middleware(req) {
    const password = 'mysecurepassword'; // Change this to your own password
    const authHeader = req.headers.get('authorization');

    if (!authHeader || authHeader !== `Basic ${btoa(password)}`) {
        return new Response('Unauthorized', { status: 401, headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
        }});
    }

    return NextResponse.next(); // Allow access if password is correct
}

