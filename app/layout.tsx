"use client";

import { useEffect } from "react";
import { initPostHog } from "./posthog_client";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import "./globals.css";

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
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>© 2023 Your Company</p>
        </footer>
      </body>
    </html>
  );
}
