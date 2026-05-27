import type { SVGProps } from "react";

const ApiPlatform = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <title>API Platform</title>
    <path
      fill="currentColor"
      d="M12 .5L1.5 6.25v11.5L12 23.5l10.5-5.75V6.25L12 .5zm0 2.28l8.5 4.65v9.14L12 21.22 3.5 16.57V7.43L12 2.78z"
    />
    <text
      x="12"
      y="13.5"
      textAnchor="middle"
      fontSize="6"
      fontFamily="ui-sans-serif, system-ui, sans-serif"
      fontWeight="700"
      fill="currentColor"
    >
      API
    </text>
  </svg>
);

export { ApiPlatform };
