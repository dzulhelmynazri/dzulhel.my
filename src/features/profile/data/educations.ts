import dedent from "dedent";

import type { Education } from "../types/educations";

export const EDUCATIONS: Education[] = [
  {
    id: "uniten",
    institutionName: "Universiti Tenaga Nasional (UNITEN)",
    institutionLogo: "/educations/uniten.svg",
    positions: [
      {
        id: "d01f57b5-4b80-4fbb-a44a-2763e2e8153a",
        title: "Bachelor of Computer Science (Software Engineering) (Hons)",
        studyPeriod: {
          start: "09.2022",
          end: "09.2025",
        },
        studyType: "Full-time",
        icon: "education",
        description: dedent`
          - 2 times Dean's List Awards
        `,
        skills: [
          "Human Computer Interaction",
          "Software Engineering Principles",
          "Object-Oriented Programming",
          "Data Structures and Algorithms",
          "Database Management Systems",
        ],
        isExpanded: true,
      },
    ],
    isCurrentInstitution: false,
  },
  {
    id: "techinasia",
    institutionName: "Tech In Asia School",
    institutionLogo: "/educations/techinasia.svg",
    positions: [
      {
        id: "79f6c8a9-4272-4ce3-a2a1-52c71b132c94",
        title: "MYStartup Bootcamp",
        studyPeriod: {
          start: "10.2023",
          end: "12.2023",
        },
        studyType: "Hybrid",
        icon: "education",
        description: dedent`
          - Awarded RM10,000 sponsorship from MYStartup
          - Selected among the top 20 from 121 applicants to learn startup fundamentals from angel investors and founders who built their companies from the ground up to millions in revenue.`,
        skills: [
          "Founder Mindset",
          "Startup Fundamentals",
          "Idea Validation",
          "MVP Development",
          "Product-Market Fit",
          "Go To Market Strategy",
          "Pitching & Storytelling",
          "Fundraising Basics",
          "Team Execution",
        ],
        isExpanded: false,
      },
    ],
    isCurrentInstitution: false,
  },
];
