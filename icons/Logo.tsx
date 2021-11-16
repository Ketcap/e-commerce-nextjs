function Logo(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={97}
      height={97}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        y={0.404}
        width={96.584}
        height={96.584}
        rx={16}
        fill="#40BFFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68.184 44.902a5.366 5.366 0 010 7.588L52.086 68.587a5.366 5.366 0 01-7.588 0L28.401 52.49a5.366 5.366 0 010-7.588l16.097-16.098a5.366 5.366 0 017.588 0l16.098 16.098zm-19.892-4.715l-8.509 8.509 8.51 8.509 8.508-8.51-8.509-8.508z"
        fill="#fff"
      />
    </svg>
  );
}

export default Logo;
