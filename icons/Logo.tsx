import * as React from "react";

function Logo(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={44}
      height={45}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        y={0.002}
        width={44}
        height={44}
        rx={16}
        fill="#40BFFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.062 20.274a2.445 2.445 0 010 3.457l-7.334 7.333a2.444 2.444 0 01-3.456 0l-7.334-7.333a2.445 2.445 0 010-3.457l7.334-7.333a2.444 2.444 0 013.457 0l7.333 7.333zM22 18.126l-3.876 3.876L22 25.88l3.876-3.877L22 18.126z"
        fill="#fff"
      />
    </svg>
  );
}

export default Logo;
