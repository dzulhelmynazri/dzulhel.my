import { GitHub } from "../components/social-links/github";
import { LinkedIn } from "../components/social-links/linkedin";
import { Threads } from "../components/social-links/threads";
import { TikTok } from "../components/social-links/tiktok";
import type { SocialLink } from "../types/social-links";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: LinkedIn,
    title: "LinkedIn",
    description: "Dzulhelmy Bin Nazri",
    href: "https://linkedin.com/in/dzulhelmynazri",
  },
  {
    icon: GitHub,
    title: "GitHub",
    description: "Dzulhelmy Nazri",
    href: "https://github.com/dzulhelmynazri",
  },
  {
    icon: Threads,
    title: "threads",
    description: "@dzulhel.myy",
    href: "https://threads.net/@dzulhel.myy",
  },
  {
    icon: TikTok,
    title: "TikTok",
    description: "@dzulhelmynazri",
    href: "https://tiktok.com/@dzulhelmynazri",
  },
];
