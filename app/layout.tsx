import { UserProvider } from '@auth0/nextjs-auth0/client';
import PostHogProvider from './providers/PostHogProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <PostHogProvider>
            <main>{children}</main>
          </PostHogProvider>
        </UserProvider>
      </body>
    </html>
  );
}
