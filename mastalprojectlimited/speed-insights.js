/**
 * Vercel Speed Insights - Vanilla JavaScript Implementation
 * 
 * This script integrates Vercel Speed Insights for performance tracking.
 * When deployed on Vercel with Speed Insights enabled in the dashboard,
 * this will automatically collect and report web vitals data.
 * 
 * For local development: Speed Insights only tracks in production mode.
 * To enable Speed Insights:
 * 1. Deploy to Vercel
 * 2. Enable Speed Insights in your Vercel project dashboard
 * 3. Redeploy to activate tracking
 */

(function() {
  'use strict';
  
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return;
  }

  // Inject the Speed Insights script dynamically
  // This approach works for static HTML sites deployed on Vercel
  function injectSpeedInsights() {
    // Create the script element
    var script = document.createElement('script');
    
    // When deployed on Vercel with Speed Insights enabled,
    // the /_vercel/speed-insights/script.js endpoint becomes available
    script.src = '/_vercel/speed-insights/script.js';
    script.defer = true;
    
    // Optional: Add error handler for development environments
    script.onerror = function() {
      // Speed Insights is not available (likely in development or not enabled)
      console.info('Speed Insights: Not available. Enable in Vercel dashboard after deployment.');
    };
    
    // Append to document head
    if (document.head) {
      document.head.appendChild(script);
    } else {
      // Fallback: wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
          document.head.appendChild(script);
        });
      } else {
        document.head.appendChild(script);
      }
    }
  }

  // Initialize Speed Insights
  injectSpeedInsights();
})();
