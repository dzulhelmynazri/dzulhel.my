import dedent from "dedent";

import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "teamflow",
    title: "TeamFlow (Slack + AI) [In Progress]",
    period: {
      start: "10.2025",
    },
    link: "https://github.com/dzulhelmynazri/teamflow",
    skills: [
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "shadcn/ui",
      "Prisma ORM",
      "Zod",
      "React Hook Form",
      "UploadAThing",
      "Neon PostgreSQL",
      "OpenAI",
      "oRPC",
      "Kinde",
      "Arcjet",
    ],
    description: dedent`
      ### Building an AI-Powered Team Chat

      I wanted to explore how **AI** could enhance **real-time team communication**.  
      So I decided to build an **MVP Slack + AI**.

      The app is built using **Next.js (App Router v15)**, styled with **Shadcn** and **TailwindCSS v4**.  
      **Kinde** handles authentication and billing, **OpenAI** powers AI responses, and **oRPC** manages structured API communication.

      Under the hood, I’ll implement:
      - **Infinite Scroll** for chat messages
      - **Middleware** for request validation and security  
      - **Data Transfer Objects (DTO)** for clean and consistent data flow  
      - **Data Access Layer (DAL)** for safe database interactions using **Neon Postgres**

      It will be **protected by Arcjet** and **deployed on Vercel**.

`,
    isExpanded: true,
  },
  {
    id: "dzulhelmy",
    title: "https://dzulhel.my",
    period: {
      start: "10.2025",
    },
    link: "https://dzulhel.my",
    skills: [
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
    ],
    description: dedent`
    A minimal portfolio, learning and blog.

    **Featured:**

    - Clean & modern design
    - Light/Dark themes
    - vCard integration
    - SEO optimized ([JSON-LD schema](https://json-ld.org), sitemap, robots)
    - AI-ready with [/llms.txt](https://llmstxt.org)

    **Blog:**

    - Supports MDX & Markdown
    - Raw \`.mdx\` endpoints for AI readability
    - Syntax highlighting for clear code presentation
    - Dynamic OG images for rich link previews
    - RSS feed for easy content distribution
`,
    logo: "/projects/dzulhelmy.svg",
    isExpanded: false,
  },
  {
    id: "lmsdzul",
    title: "Learning Management System (LMS)",
    period: {
      start: "09.2025",
      end: "10.2025",
    },
    link: "https://github.com/dzulhelmynazri/lms",
    skills: [
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Neon PostgreSQL",
      "TipTap Editor",
      "Arcjet",
      "Vercel",
      "React Hook Form",
      "Prisma ORM",
      "Vercel",
      "Zod",
      "Tigris",
      "Stripe",
      "better-auth",
      "dndkit",
      "shadcn/ui",
    ],
    description: dedent`
        ### Why I Built It

        After spending 6 months try to learn the frontend, I wanted to understand how the **backend** truly connects everything together in **Next.js** — how data flows, how authentication works and how real-world systems communicate behind the scenes.  

        So I decided to learn it the hard way — by **building a complete modern LMS from scratch**.

        ### The Journey

        It started as a simple idea — *“What if I could build a modern LMS from scratch, using the best of today’s tools?”* So I did.  

        Using **Next.js (App Router v15)**, **Shadcn**, and **TailwindCSS v4** with **React Hook Form**, **Prisma** and **Neon Postgres**.  

        Integrated **better-auth** for authentication, **Arcjet** for security, **Tigris** for storage, **Stripe** for payments and deployed on **Vercel**.  

        Added **drag & drop**, a **rich text editor**, and implemented **two-layer security** — via **Data Access Layer** and **Middleware**.

`,
    isExpanded: false,
  },
  {
    id: "cartee",
    title: "Cartee (Shopify + WhatsApp) [Pre-revenue RM165,000]",
    period: {
      start: "06.2024",
      end: "06.2025",
    },
    skills: [
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Figma",
      "AWS Services",
      "UI/UX Design",
      "shadcn/ui",
    ],
    description: dedent`
        ### My First Real Attempt at Building Something Big

        It was a combination of **Shopify** and **WhatsApp** — a simple idea that grew into something much larger than I expected.  

        Even though the project eventually **failed**, I managed to achieve **pre-revenue of RM165,000** with a growing **waitlist** of users who believed in what I was building.  

        Along the way, I also managed to **form a small team of three**, including myself — covering both **frontend** and **backend** development.  

        Here was my journey where I started to learn everything at once — **sales**, **marketing**, **UI/UX design**, and **code**.  

        In simple words, I wanted to be a master of all trades but ended up a jack of none. I was too ambitious.  

        **Cartee** taught me humility. It showed me that ambition without focus can scatter my energy, but focus with purpose can move mountains.  

        Now, I no longer try to do everything. I focus on what truly matters — trying to find something meaningful, one deliberate step at a time.
`,
    logo: "/projects/cartee.svg",
    isExpanded: false,
  },
];
