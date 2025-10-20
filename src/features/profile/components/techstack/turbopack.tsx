import type { SVGProps } from "react";

const Turbopack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Turbopack Logo"
  >
    <defs>
      <linearGradient
        id="turbopack_icon_light__a"
        x1="0"
        y1="50"
        x2="20"
        y2="100"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#FF0080" />
        <stop offset="1" stopColor="#7928CA" />
      </linearGradient>

      <linearGradient
        id="turbopack_icon_light__b"
        x1="0"
        y1="100"
        x2="50"
        y2="100"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#007CF0" />
        <stop offset="1" stopColor="#00DFD8" />
      </linearGradient>

      <linearGradient
        id="turbopack_icon_light__c"
        x1="50"
        y1="0"
        x2="100"
        y2="100"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#7928CA" />
        <stop offset="1" stopColor="#FF0080" />
      </linearGradient>
    </defs>

    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M38.687 36.698c-1.131 0-2.048.917-2.048 2.048V61.52c0 1.131.917 2.048 2.048 2.048H61.46c1.13 0 2.048-.917 2.048-2.048V38.746c0-1.13-.917-2.048-2.048-2.048H38.687ZM22.259 20.443c-1.036 0-1.876.84-1.876 1.875v55.63c0 1.036.84 1.876 1.876 1.876h55.63c1.036 0 1.875-.84 1.875-1.876v-55.63c0-1.036-.84-1.875-1.875-1.875h-55.63Z"
      clipRule="evenodd"
    />
    <path
      fill="url(#turbopack_icon_light__a)"
      d="M0 51.064v36.17c0 2.427.677 4.696 1.853 6.627l13.04-13.04V51.064H0Z"
    />
    <path
      fill="url(#turbopack_icon_light__b)"
      d="m5.946 98.028 12.93-12.93c.09.005.181.008.273.008H47.64V100H12.766c-2.508 0-4.847-.723-6.82-1.972Z"
    />
    <path
      fill="url(#turbopack_icon_light__c)"
      d="M53.481 100h33.753C94.284 100 100 94.284 100 87.234V12.766C100 5.716 94.284 0 87.234 0h-36.17v14.894H80.85a4.255 4.255 0 0 1 4.255 4.255V80.85a4.255 4.255 0 0 1-4.255 4.255h-27.37V100Z"
    />
  </svg>
);

export { Turbopack };
