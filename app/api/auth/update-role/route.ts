import { ManagementClient } from 'auth0';
import { NextResponse } from 'next/server';

const auth0 = new ManagementClient({
  domain: process.env.AUTH0_DOMAIN!,
  clientId: process.env.AUTH0_CLIENT_ID!,
  clientSecret: process.env.AUTH0_CLIENT_SECRET!,
  audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
});


export async function POST(request: Request) {
  try {
    const { userId, roleName } = await request.json();

    if (!userId || !roleName) {
      return NextResponse.json({ error: 'userId and roleName are required' }, { status: 400 });
    }

    const response = await auth0.roles.getAll();
    const roles = response.data;
    const role = roles.find((r) => r.name.toLowerCase() === roleName.toLowerCase());


    if (!role) {
      return NextResponse.json({ error: `Role "${roleName}" not found` }, { status: 404 });
    }

    await auth0.users.assignRoles({ id: userId }, { roles: [role.id] });

    return NextResponse.json({ message: 'Role updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating role:', error);
    return NextResponse.json({ error: 'Failed to update role' }, { status: 500 });
  }
}
