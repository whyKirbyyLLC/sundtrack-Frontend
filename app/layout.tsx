"use client";

import { useEffect } from "react";
import { initPostHog } from "./posthog_client";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  useEffect(() => {
    initPostHog();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      posthog.capture("$pageview", {
        path: pathname,
      });
    }
  }, [pathname]);

  return (
    <html lang="en">
      <UserProvider>
        <body>
          <main>{children}</main>
        </body>
      </UserProvider>
    </html>
  );
}
