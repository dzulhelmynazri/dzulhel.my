import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://dzulhel.my",
  ogImage: "/og-image.png",
  faviconIco: "/favicon.ico",
  faviconSvg: "/favicon.svg",
  appleTouchIcon: "/apple-touch-icon.png",
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Myself",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  // {
  //   title: "Components",
  //   href: "/components",
  // },
];

export const GITHUB_USERNAME = "dzulhelmynazri";
export const SOURCE_CODE_GITHUB_REPO = "dzulhelmynazri/dzulhel.my";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/dzulhelmynazri/dzulhel.my";

export const UTM_PARAMS = {
  utm_source: "dzulhel.my",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
