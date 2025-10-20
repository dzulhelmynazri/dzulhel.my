/**
 * A technology item displayed in the Tech Stack section.
 *
 */
export type TechStack = {
  /** Icon component. */
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /** Display name of the technology. */
  title: string;
  /** Official website URL. */
  href: string;
  /** Category tags used for grouping/filtering. */
  categories: string[];
  /** If true, use theme-specific icons for dark/light mode. */
  theme?: boolean;
};
