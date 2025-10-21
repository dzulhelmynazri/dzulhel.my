export type EducationPositionIcon =
  /** Icon key used to render the position category in the UI. */
  "code" | "design" | "education" | "business" | "idea";

export type EducationPosition = {
  id: string;
  title: string;
  /**
   * Study period of the education.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for current education.
   */
  studyPeriod: {
    /** Start date (e.g., "10.2022" or "2020"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Bachelor | Master | Doctoral, etc. */
  studyType?: string;
  description?: string;
  /** UI icon to represent the education type. */
  icon?: EducationPositionIcon;
  skills?: string[];
  /** Whether the education is expanded by default in the UI. */
  isExpanded?: boolean;
};

export type Education = {
  id: string;
  institutionName: string;
  /** URL to the institution logo (absolute URL or path under /public). */
  institutionLogo?: string;
  /** Educations held at this institution; keep newest first for display. */
  positions: EducationPosition[];
  /** Marks the institution as the current institution for highlighting. */
  isCurrentInstitution?: boolean;
};
