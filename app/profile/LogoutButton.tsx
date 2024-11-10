'use client';

import posthog from 'posthog-js';

export default function LogoutButton() {
  return (
    <a 
      href="/api/auth/logout" 
      className="text-blue-500 hover:underline"
      onClick={() => {
        posthog.capture('user_logged_out');
      }}
    >
      Logout
    </a>
  );
} 