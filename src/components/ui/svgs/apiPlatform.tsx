import type { ImgHTMLAttributes } from "react";

const ApiPlatform = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLxqZ1My-QboLN1WsmxNrG48j6BpKBLz3MQ&s"
    alt="API Platform"
    {...props}
  />
);

export { ApiPlatform };
