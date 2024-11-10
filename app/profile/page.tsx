'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';
import posthog from 'posthog-js';
import { redirect } from 'next/navigation';
import LogoutButton from './LogoutButton';

export default function Profile() {
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (user && !isLoading && user.sub) {
      posthog.identify(user.sub, {
        email: user.email,
        name: user.name,
        auth0_id: user.sub,
      });
    }
  }, [user, isLoading]);

  if (isLoading) return <div>Loading...</div>;

  if (!user) {
    redirect('/api/auth/login');
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Hello {user.name}</p>
      <button>
        Do Nothing
      </button>
      <LogoutButton />
    </div>
  );
}