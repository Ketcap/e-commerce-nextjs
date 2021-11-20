import * as React from "react";

function Basket(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={21}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.042 1.74h2.25l2.25 13.5h11.25l2.25-10.126H4.417"
        stroke="#22262A"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Basket;
