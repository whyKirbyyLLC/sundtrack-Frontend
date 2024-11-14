import { ManagementClient } from 'auth0';
import { NextResponse } from 'next/server';
import axios from 'axios';

const auth0 = new ManagementClient({
  domain: process.env.AUTH0_DOMAIN!,
  clientId: process.env.AUTH0_CLIENT_ID!,
  clientSecret: process.env.AUTH0_CLIENT_SECRET!,
  audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
});

// Helper function to get the Management API Access Token
async function getAccessToken() {
  const response = await axios.post(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
    client_id: process.env.AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_CLIENT_SECRET,
    audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
    grant_type: 'client_credentials',
  });

  return response.data.access_token;
}

export async function POST(request: Request) {
  try {
    const { userId, roleName, action } = await request.json();

    if (!userId || !roleName || !action) {
      return NextResponse.json({ error: 'userId, roleName, and action are required' }, { status: 400 });
    }

    // Fetch all roles from Auth0
    const rolesResponse = await auth0.roles.getAll();
    const roles = rolesResponse.data;
    const role = roles.find((r) => r.name.toLowerCase() === roleName.toLowerCase());

    if (!role) {
      return NextResponse.json({ error: `Role "${roleName}" not found` }, { status: 404 });
    }

    const accessToken = await getAccessToken();

    if (action === 'add') {
      // Assign the role to the user
      await axios.post(
        `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${userId}/roles`,
        { roles: [role.id] },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return NextResponse.json({ message: 'Role added successfully' }, { status: 200 });
    } else if (action === 'remove') {
      // Remove the role from the user
      await axios.delete(
        `https://${process.env.AUTH0_DOMAIN}/api/v2/users/${userId}/roles`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          data: { roles: [role.id] },
        }
      );
      return NextResponse.json({ message: 'Role removed successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Invalid action. Must be "add" or "remove"' }, { status: 400 });
    }
  } catch (error: any) {
    console.error('Error updating role:', error.response?.data || error.message);
    return NextResponse.json({ error: 'Failed to update role' }, { status: 500 });
  }
}
