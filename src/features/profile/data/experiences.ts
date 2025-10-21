import dedent from "dedent";

import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "mechanikos",
    companyName: "Mechanikos Sdn Bhd",
    companyLogo: "/experiences/mechanikos.svg",
    positions: [
      {
        id: "c3d18e0f-91c5-46c0-9a72-4b6153e1ef22",
        title: "Product Interface Engineer",
        employmentPeriod: {
          start: "10.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: dedent`
          - Developed and maintaning [Mechanikos UI](https://mechanikos-ui.vercel.app) Design System for the Mechanikos's projects.
          - Responsible to develop user interface for the Mechanikos's projects.
        `,
        skills: [
          "TypeScript",
          "Next.js (App Router)",
          "Shadcn/ui",
          "Tailwind CSS",
          "Figma",
          "UI/UX Design",
          "Agile",
          "Teamwork",
          "Problem-solving",
        ],
        isExpanded: true,
      },
      {
        id: "5b7e2a41-9d2c-4f30-9b42-6f3aebf713c1",
        title: "Creative Technology",
        employmentPeriod: {
          start: "06.2025",
          end: "09.2025",
        },
        employmentType: "Internship",
        icon: "design",
        description: dedent`
          - Developed an POC for [Rezkhi Hijau](https://rezkhi-hijau-prjzko4k8-mechanikos.vercel.app/) with chatbot using [aisdk](https://ai-sdk.dev/) and [Next.js](https://nextjs.org/).
          - Developed [Faszz](https://faszz.com/) website using [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).
        `,
        skills: [
          "Next.js (App Router)",
          "aisdk",
          "UI/UX Design",
          "Figma",
          "Tailwind CSS",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
];
