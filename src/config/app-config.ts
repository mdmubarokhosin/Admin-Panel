import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "Admin Panel",
  version: packageJson.version,
  copyright: `© ${currentYear}, Admin Panel.`,
  meta: {
    title: "Admin Panel - Modern Next.js Dashboard",
    description:
      "Admin Panel is a modern, full-featured dashboard built with Next.js 16, Tailwind CSS v4, and shadcn/ui. Perfect for SaaS apps, admin panels, and internal tools—fully customizable and production-ready.",
  },
};
