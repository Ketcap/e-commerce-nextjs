function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={15}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.043 5.927L9.792 9.449l1.25 5.724-4.13-3.458-4.397 3.274 1.698-5.66-3.966-3.7 5.18-.04L7.375.029l1.504 5.635 5.165.263z"
        fill="#C1C8CE"
      />
    </svg>
  );
}

export default SvgComponent;
