import * as React from 'react';
import { JSX } from 'react/jsx-runtime';
const VsCode = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 128 128" className="h-10 w-10" {...props}>
    <mask
      id="a"
      width={128}
      height={128}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M90.767 127.126a7.97 7.97 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.33 5.33 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.33 5.33 0 0 0 6.807.303l21.974-16.68 50.45 46.025a8 8 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#0065A9"
        d="M123.471 13.82 97.097 1.12A7.97 7.97 0 0 0 88 2.668L1.662 81.387a5.333 5.333 0 0 0 .006 7.887l7.052 6.411a5.33 5.33 0 0 0 6.811.303l103.971-78.875c3.488-2.646 8.498-.158 8.498 4.22v-.306a8 8 0 0 0-4.529-7.208Z"
      />
      <g filter="url(#b)">
        <path
          fill="#007ACC"
          d="m123.471 114.181-26.374 12.698A7.97 7.97 0 0 1 88 125.333L1.662 46.613a5.333 5.333 0 0 1 .006-7.887l7.052-6.411a5.33 5.33 0 0 1 6.811-.303l103.971 78.874c3.488 2.647 8.498.159 8.498-4.219v.306a8 8 0 0 1-4.529 7.208"
        />
      </g>
      <g filter="url(#c)">
        <path
          fill="#1F9CF0"
          d="M97.098 126.882A7.98 7.98 0 0 1 88 125.333c2.952 2.952 8 .861 8-3.314V5.98c0-4.175-5.048-6.266-8-3.313a7.98 7.98 0 0 1 9.098-1.549L123.467 13.8A8 8 0 0 1 128 21.01v85.982a8 8 0 0 1-4.533 7.21z"
        />
      </g>
      <path
        fill="url(#d)"
        fillRule="evenodd"
        d="M90.69 127.126a7.97 7.97 0 0 0 6.349-.244l26.353-12.681a8 8 0 0 0 4.53-7.21V21.009a8 8 0 0 0-4.53-7.21L97.039 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026-21.974-16.68a5.33 5.33 0 0 0-6.807.302l-7.048 6.411a5.336 5.336 0 0 0-.006 7.888L20.718 64 1.662 81.386a5.335 5.335 0 0 0 .006 7.888l7.048 6.411a5.33 5.33 0 0 0 6.807.303l21.975-16.681 50.45 46.026a8 8 0 0 0 2.742 1.793m5.252-92.184L57.662 64l38.28 29.057z"
        clipRule="evenodd"
        opacity={0.25}
        style={{
          mixBlendMode: 'overlay',
        }}
      />
    </g>
    <defs>
      <filter
        id="b"
        width={144.744}
        height={113.408}
        x={-8.411}
        y={22.594}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset />
        <feGaussianBlur stdDeviation={4.167} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow_1_36" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_36" result="shape" />
      </filter>
      <filter
        id="c"
        width={56.667}
        height={144.007}
        x={79.667}
        y={-8.004}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset />
        <feGaussianBlur stdDeviation={4.167} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow_1_36" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_36" result="shape" />
      </filter>
      <linearGradient id="d" x1={63.922} x2={63.922} y1={0.33} y2={127.67} gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default VsCode;
