import { ManagementClient } from 'auth0';
import { NextResponse } from 'next/server';

const auth0 = new ManagementClient({
  domain: process.env.AUTH0_DOMAIN!,
  clientId: process.env.AUTH0_CLIENT_ID!,
  clientSecret: process.env.AUTH0_CLIENT_SECRET!,
  audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
});

export async function GET(request: Request) {
  try {
    const userId = request.headers.get('user-id');

    if (!userId) {
      console.error('User ID header is missing.');
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    console.log('Received User ID:', userId);

    const roles = await auth0.users.getRoles({ id: userId });

    return NextResponse.json({ data: roles }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching user roles:', error.message);
    return NextResponse.json({ error: 'Failed to fetch user roles' }, { status: 500 });
  }
}
