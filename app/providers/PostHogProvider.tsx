"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import { initPostHog } from "../posthog_client";

export default function PostHogProvider({
  children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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

  return <>{children}</>;
} 