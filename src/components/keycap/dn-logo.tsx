import type React from "react";

type DNLogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const DNLogo: React.FC<DNLogoProps> = ({
  width = 64,
  height = 64,
  className,
}) => (
  <svg
    aria-label="DN Logo"
    role="img"
    width={width}
    height={height}
    viewBox="0 0 400 370"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M64.4484 279.6V252.6H37.1484V168.3H64.4484V141H146.348V86.7H176.648V252.6H149.048V279.6H64.4484ZM67.4484 249.6H146.048V171H67.4484V249.6ZM207.07 279.6V141H318.97V168.3H346.57V279.6H315.97V171H237.37V279.6H207.07Z"
      fill="var(--background)"
    />
  </svg>
);

export const InvertedDNLogo: React.FC<DNLogoProps> = ({
  width = 64,
  height = 64,
  className,
}) => (
  <svg
    aria-label="Inverted DN Logo"
    role="img"
    width={width}
    height={height}
    viewBox="0 0 400 370"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M64.4484 279.6V252.6H37.1484V168.3H64.4484V141H146.348V86.7H176.648V252.6H149.048V279.6H64.4484ZM67.4484 249.6H146.048V171H67.4484V249.6ZM207.07 279.6V141H318.97V168.3H346.57V279.6H315.97V171H237.37V279.6H207.07Z"
      fill="var(--foreground)"
    />
  </svg>
);
