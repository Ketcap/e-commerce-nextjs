function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={19}
      height={17}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.822 2.961a3.344 3.344 0 012.5 5.561c-.613.69-5.84 5.584-5.84 5.584s-5.238-4.893-5.85-5.595a3.3 3.3 0 01-.837-2.207 3.344 3.344 0 016.687 0 3.344 3.344 0 013.344-3.344l-.004.001zm.004-2.23a5.543 5.543 0 00-3.344 1.115 5.573 5.573 0 00-7.519 8.141c.626.718 4.75 4.578 6 5.744a2.229 2.229 0 003.045 0c1.244-1.165 5.35-5.015 5.984-5.732a5.573 5.573 0 00-4.17-9.267l.004-.001z"
        fill="#33A0FF"
      />
    </svg>
  );
}

export default SvgComponent;
