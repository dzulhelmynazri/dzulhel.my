import { BaseUI } from "../components/techstack/base-ui";
import { BetterAuth } from "../components/techstack/better-auth";
import { CSS } from "../components/techstack/css";
import { dotenv } from "../components/techstack/dotenv";
import { Figma } from "../components/techstack/figma";
import { Git } from "../components/techstack/git";
import { GitHub } from "../components/techstack/github";
import { HTML } from "../components/techstack/html";
import { JavaScript } from "../components/techstack/javascript";
import { KiboUI } from "../components/techstack/kibo-ui";
import { Markdown } from "../components/techstack/markdown";
import { Motion } from "../components/techstack/motion";
import { Neon } from "../components/techstack/neon";
import { Nextjs } from "../components/techstack/nextjs";
import { nuqs } from "../components/techstack/nuqs";
import { Polar } from "../components/techstack/polar";
import { PostgreSQL } from "../components/techstack/postgresql";
import { Prettier } from "../components/techstack/prettier";
import { Prisma } from "../components/techstack/prisma";
import { RadixUI } from "../components/techstack/radix-ui";
import { Resend } from "../components/techstack/resend";
import { shadcnui } from "../components/techstack/shadcn-ui";
import { Supabase } from "../components/techstack/supabase";
import { SWR } from "../components/techstack/swr";
import { TailwindCSS } from "../components/techstack/tailwindcss";
import { Turbopack } from "../components/techstack/turbopack";
import { Turborepo } from "../components/techstack/turborepo";
import { TypeScript } from "../components/techstack/typescript";
import { Vercel } from "../components/techstack/vercel";
import { Zod } from "../components/techstack/zod";
import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // 🧩 Framework
  {
    icon: Nextjs,
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
  },

  // 💬 Language
  {
    icon: JavaScript,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    icon: TypeScript,
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },

  // 🧾 Markup
  {
    icon: HTML,
    title: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    categories: ["Markup"],
  },

  // 🎨 Styling
  {
    icon: CSS,
    title: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    categories: ["Styling"],
  },
  {
    icon: TailwindCSS,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Styling"],
  },
  {
    icon: Motion,
    title: "Motion",
    href: "https://motion.dev/",
    categories: ["Animation"],
  },

  {
    icon: Markdown,
    title: "Markdown",
    href: "https://www.markdownguide.org/",
    categories: ["Markup"],
  },

  // 🔐 Authentication
  {
    icon: BetterAuth,
    title: "better-auth",
    href: "https://better-auth.com/",
    categories: ["Authentication"],
    theme: true,
  },

  // 🧱 Build Tool
  {
    icon: Turbopack,
    title: "Turbopack",
    href: "https://turbo.build/repo/docs/reference/configuration#turbopack",
    categories: ["Build Tool"],
  },
  {
    icon: Turborepo,
    title: "Turborepo",
    href: "https://turborepo.org/",
    categories: ["Build Tool"],
  },

  // 🗃️ Database
  {
    icon: Neon,
    title: "Neon",
    href: "https://neon.tech/",
    categories: ["Database"],
    theme: true,
  },
  {
    icon: PostgreSQL,
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
  },
  {
    icon: Prisma,
    title: "Prisma",
    href: "https://prisma.io/",
    categories: ["Database"],
  },
  {
    icon: Supabase,
    title: "Supabase",
    href: "https://supabase.com/",
    categories: ["Database"],
    theme: true,
  },

  // 🎨 Design System
  {
    icon: BaseUI,
    title: "Base UI",
    href: "https://baseui.org/",
    categories: ["Design System"],
  },
  {
    icon: KiboUI,
    title: "Kibo UI",
    href: "https://kibo-ui.com/",
    categories: ["Design System"],
  },
  {
    icon: RadixUI,
    title: "Radix UI",
    href: "https://www.radix-ui.com/",
    categories: ["Design System"],
  },
  {
    icon: shadcnui,
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Design System"],
  },

  // 🧭 Data Fetching
  {
    icon: SWR,
    title: "SWR",
    href: "https://swr.vercel.app/",
    categories: ["Data Fetching"],
    theme: true,
  },

  // 🌿 Environment Variables
  {
    icon: dotenv,
    title: ".ENV",
    href: "https://www.dotenv.org/",
    categories: ["Environment Variables"],
  },

  // 📧 Email
  {
    icon: Resend,
    title: "Resend",
    href: "https://resend.com/",
    categories: ["Email"],
  },

  // 🧹 Formatting
  {
    icon: Prettier,
    title: "Prettier",
    href: "https://prettier.io/",
    categories: ["Formatting"],
    theme: true,
  },

  // ☁️ Hosting
  {
    icon: Vercel,
    title: "Vercel",
    href: "https://vercel.com/",
    categories: ["Hosting"],
  },

  // 💳 Payment Gateway
  {
    icon: Polar,
    title: "Polar",
    href: "https://polar.sh/",
    categories: ["Payment Gateway"],
    theme: true,
  },

  // 🧭 Repository
  {
    icon: GitHub,
    title: "GitHub",
    href: "https://github.com/",
    categories: ["Repository"],
  },

  // 🚦 Routing
  {
    icon: nuqs,
    title: "Nuqs",
    href: "https://nuqs.dev/",
    categories: ["Routing"],
    theme: true,
  },

  // 🧠 Tools
  {
    icon: Figma,
    title: "Figma",
    href: "https://www.figma.com/",
    categories: ["Tools", "Design"],
  },

  // 🔍 Validation
  {
    icon: Zod,
    title: "Zod",
    href: "https://zod.dev/",
    categories: ["Validation"],
  },

  // 🌀 Version Control
  {
    icon: Git,
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
];
