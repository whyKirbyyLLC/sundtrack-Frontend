'use client';

import posthog from 'posthog-js';

export function initPostHog() {
    if (typeof window !== 'undefined') {
        posthog.init(process.env.POSTHOG_API_KEY!,
            {
                api_host: "https://eu.i.posthog.com",
                person_profiles: "always",
                autocapture: true,
                capture_pageview: true,
            });
    }
}
