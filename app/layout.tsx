import { UserProvider } from '@auth0/nextjs-auth0/client';
import PostHogProvider from './providers/PostHogProvider';
import Header from './components/page/header';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <PostHogProvider>
            <Header />
            <main>{children}</main>
          </PostHogProvider>
        </UserProvider>
      </body>
    </html>
  );
}
