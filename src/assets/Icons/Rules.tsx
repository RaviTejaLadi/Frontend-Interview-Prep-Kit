import * as React from 'react';
import { JSX } from 'react/jsx-runtime';
const Rules = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 1024 1024" className="icon" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path d="M832 960H192s-64-2.133-64-170.667h768C896 957.867 832 960 832 960" fill="#42A5F5" />
    <path d="M170.667 64h682.666v725.333H170.667z" fill="#90CAF9" />
    <path
      d="M384 320h341.333v42.667H384zm0 85.333h341.333V448H384zm0 85.334h341.333v42.666H384zM384 576h341.333v42.667H384zm0 85.333h341.333V704H384zM298.667 320h42.666v42.667h-42.666zm0 85.333h42.666V448h-42.666zm0 85.334h42.666v42.666h-42.666zm0 85.333h42.666v42.667h-42.666zm0 85.333h42.666V704h-42.666z"
      fill="#1976D2"
    />
  </svg>
);
export default Rules;
