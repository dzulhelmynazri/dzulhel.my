import type { SVGProps } from "react";

const Zod = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 203"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    role="img"
    aria-label="Zod logo"
  >
    <defs>
      {/* main reusable shape used by the <use> */}
      <g id="zod__a">
        <path
          d="M60.816 14.033h136.278l39.933 41.69-112.989 126.554L18.957 55.724z"
          fill="#18253F"
        />
        <path
          d="M151.427 152.386H98.013l-24.124-29.534 68.364-.002.002-4.19h39.078z"
          fill="#274D82"
        />
        <path
          d="m225.56 43.834-147.382 85.09-19.226-24.051 114.099-65.877-2.096-3.631 30.391-17.546zM146.596 14.075 35.93 77.968 18.719 56.483l74.095-42.78z"
          fill="#274D82"
        />
      </g>

      {/* subtle drop shadow/filter used by the original */}
      <filter
        id="zod__c"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        colorInterpolationFilters="sRGB"
      >
        <feOffset dx="0" dy="4" in="SourceAlpha" result="off" />
        <feGaussianBlur in="off" stdDeviation="6" result="blur" />
        <feColorMatrix
          in="blur"
          type="matrix"
          values="0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 0 0
                  0 0 0 0.15"
          result="shadow"
        />
        <feBlend in="SourceGraphic" in2="shadow" mode="normal" />
      </filter>
    </defs>

    {/* original standalone paths (kept for compatibility / exact rendering) */}
    <path
      fill="#18253F"
      d="M60.816 14.033h136.278l39.933 41.69-112.989 126.554L18.957 55.724z"
    />
    <path
      fill="#274D82"
      d="M151.427 152.386H98.013l-24.124-29.534 68.364-.002.002-4.19h39.078z"
    />
    <path
      fill="#274D82"
      d="m225.56 43.834-147.382 85.09-19.226-24.051 114.099-65.877-2.096-3.631 30.391-17.546zM146.596 14.075 35.93 77.968 18.719 56.483l74.095-42.78z"
    />

    {/* the group that referenced the missing defs — now uses the defined #zod__a and #zod__c */}
    <g transform="translate(2 1.51)">
      <use href="#zod__a" filter="url(#zod__c)" />
      <use href="#zod__a" fill="#3068B7" />
    </g>
  </svg>
);

export { Zod };
