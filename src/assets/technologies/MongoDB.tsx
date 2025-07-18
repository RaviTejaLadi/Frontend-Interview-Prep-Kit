import * as React from 'react';
import { JSX } from 'react/jsx-runtime';
const MongoDB = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <circle
      cx={512}
      cy={512}
      r={512}
      style={{
        fill: '#13aa52',
      }}
    />
    <path
      d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a727 727 0 0 1 13-78.53l1-.65a204.5 204.5 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347 347 0 0 0-5.05-56.76M512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
export default MongoDB;
