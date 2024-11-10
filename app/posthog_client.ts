'use client';

import posthog from 'posthog-js';

export function initPostHog() {
    if (typeof window !== 'undefined') {
        const apiKey = process.env.POSTHOG_API_KEY;
        
        if (!apiKey) {
            console.warn('PostHog API key not found');
            return;
        }

        posthog.init(apiKey, {
            api_host: "https://eu.i.posthog.com",
            person_profiles: "always",
            autocapture: true,
            capture_pageview: true,
        });
    }
}
