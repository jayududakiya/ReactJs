import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add any other Next.js configurations here
};

// Define your Sentry options without the instrumentationHook
const sentryWebpackPluginOptions = {
  org: "demo01-w2",
  project: "firstdemoproject",

  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true
  },
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true
};

// Export the configuration
export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
