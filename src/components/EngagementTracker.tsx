'use client';

import { useEffect } from 'react';

export default function EngagementTracker() {
    useEffect(() => {
        const startTime = Date.now();
        let scrolledHalfway = false;
        let timeThresholdReached = false;

        // 1. Time on Site Tracking (> 60s is the goal)
        const timeInterval = setInterval(() => {
            const timeSpent = (Date.now() - startTime) / 1000;
            if (timeSpent >= 60 && !timeThresholdReached) {
                timeThresholdReached = true;
                console.log('Engagement: User spent 60s+');
                // Dispatch custom event for Voluum/Zeropark scripts to catch
                window.dispatchEvent(new CustomEvent('engagement:time_60s'));
            }
        }, 5000);

        // 2. Scroll Depth Tracking
        const handleScroll = () => {
            if (scrolledHalfway) return;

            const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
            if (scrollPercent > 0.5) {
                scrolledHalfway = true;
                console.log('Engagement: User scrolled 50%');
                // Dispatch custom event for external trackers
                window.dispatchEvent(new CustomEvent('engagement:scroll_50'));
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timeInterval);
        };
    }, []);

    return null;
}
