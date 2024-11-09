'use client';

import posthog from 'posthog-js';

export function initPostHog() {
    if (typeof window !== 'undefined') {
        posthog.init('phc_75WOmtugBO95jJ6H7m6X0plzYM0mDIgIGqF6ZCqjog2',
            {
                api_host: 'https://eu.i.posthog.com',
                person_profiles: 'always'
            }
        )
    }
}
