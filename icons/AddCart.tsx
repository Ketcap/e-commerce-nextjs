function AddCart(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={52}
      height={52}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.25}
        d="M26.386 50.423c13.531 0 24.5-10.97 24.5-24.5 0-13.531-10.969-24.5-24.5-24.5-13.53 0-24.5 10.969-24.5 24.5 0 13.53 10.97 24.5 24.5 24.5z"
        stroke="#33A0FF"
        strokeWidth={2}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.44 28.878a2.221 2.221 0 002.176-1.792l1.115-5.573a2.23 2.23 0 00-2.18-2.666h-11.1v-1.115a1.114 1.114 0 00-1.112-1.114h-2.215a1.115 1.115 0 000 2.229h1.115v11.145a2.229 2.229 0 102.22 2.229h7.765a2.22 2.22 0 102.22-2.229h-9.987v-1.114h9.983zm1.115-7.8l-1.115 5.573h-9.987v-5.573h11.102z"
        fill="#33A0FF"
      />
    </svg>
  );
}

export default AddCart;
