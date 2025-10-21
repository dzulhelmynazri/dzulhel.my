export const SpinnerIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    role="img"
    aria-label="Loading spinner"
  >
    <title>Loading spinner</title>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);
