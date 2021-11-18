function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={21}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.81 16.918a10.107 10.107 0 00-5.545-5.766 6.101 6.101 0 002.227-4.663 6.33 6.33 0 00-5.77-6.202 6.24 6.24 0 00-1.536 0 6.32 6.32 0 00-5.764 6.202 6.102 6.102 0 002.227 4.663 10.096 10.096 0 00-5.547 5.766 2.414 2.414 0 00.339 2.27 2.655 2.655 0 002.133 1.051h14.775a2.648 2.648 0 002.13-1.05 2.406 2.406 0 00.331-2.27zM7.036 6.49a3.807 3.807 0 013.518-3.725c.269-.033.54-.033.81 0a3.757 3.757 0 013.043 2.682 3.765 3.765 0 01-1.162 3.888 3.758 3.758 0 01-6.209-2.845zM3.571 17.74a7.965 7.965 0 017.388-4.999 7.955 7.955 0 017.387 5H3.571z"
        fill="#22262A"
      />
    </svg>
  );
}

export default SvgComponent;
