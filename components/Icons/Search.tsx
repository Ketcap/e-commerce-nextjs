import * as React from "react";

function Search(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={22}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.707 19.457L14.4 13.12a7.837 7.837 0 10-1.844 1.858l6.308 6.338a1.31 1.31 0 002.149-.423 1.31 1.31 0 00-.305-1.435zM8.018 13.815A5.257 5.257 0 117.96 3.302a5.257 5.257 0 01.058 10.513z"
        fill="#22262A"
      />
    </svg>
  );
}

export default Search;
