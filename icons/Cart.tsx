function Cart(
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
        d="M7.23 19.74a.562.562 0 100-1.125.562.562 0 000 1.125zM15.105 19.74a.562.562 0 100-1.125.562.562 0 000 1.125z"
        fill="#22262A"
        stroke="#22262A"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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

export default Cart;
