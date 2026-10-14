/** @type {import('next').NextConfig} */

// Enforced CSP only restricts framing, <base> and plugins, so it can't break scripts/styles.
const CSP = "frame-ancestors 'self'; base-uri 'self'; object-src 'none'";
// ponytail: report-only (logs to the browser console, no report endpoint); tighten and enforce once clean.
const CSP_REPORT_ONLY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: blob: https:",
  "connect-src 'self' https://events.usermaven.com https://*.googleapis.com",
  "frame-src 'self'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: CSP },
          { key: "Content-Security-Policy-Report-Only", value: CSP_REPORT_ONLY },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
    ];
  },
  // env: {
  //   DB_URI: process.env.DB_URI,
  //   URL: process.env.URL,
  //   SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,

  //   API_KEY: process.env.API_KEY,
  //   AUTH_DOMAIN: process.env.AUTH_DOMAIN,
  //   PROJECT_ID: process.env.PROJECT_ID,
  //   STORAGE_BUCKET: process.env.STORAGE_BUCKET,
  //   MG_SENDER_ID: process.env.MG_SENDER_ID,
  //   APP_ID: process.env.APP_ID,
  //   JWT_SECRET: process.env.JWT_SECRET,
  //   URL: process.env.URL,
  //   CRYPTO_SCRETKEY: process.env.CRYPTO_SCRETKEY,

  //   PADDLE_VENDOR_ID: process.env.PADDLE_VENDOR_ID,
  //   VENDOR_API_CODE: process.env.VENDOR_API_CODE,

  //   ANALYTICS_KEY: process.env.ANALYTICS_KEY,

  //   GA_ID: process.env.GA_ID,
  //   GOOGLE_SITE_VERIFICATION: process.env.GOOGLE_SITE_VERIFICATION,

  //   CONVERTKIT_API_URL: process.env.CONVERTKIT_API_URL,
  //   CONVERTKIT_API_KEY: process.env.CONVERTKIT_API_KEY,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "api.uifaces.co",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
