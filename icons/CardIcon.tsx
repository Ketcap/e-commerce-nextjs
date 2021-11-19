function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={18}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.44 12.878a2.221 2.221 0 002.176-1.792l1.115-5.573a2.23 2.23 0 00-2.18-2.666H4.45V1.732A1.115 1.115 0 003.338.618H1.124a1.115 1.115 0 000 2.229H2.24v11.145a2.229 2.229 0 102.22 2.229h7.765a2.22 2.22 0 102.22-2.229H4.457v-1.114h9.983zm1.115-7.8l-1.115 5.573H4.453V5.078h11.102z"
        fill="#33A0FF"
      />
    </svg>
  );
}

export default SvgComponent;
