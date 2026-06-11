import { useState, type AnchorHTMLAttributes, type ReactNode } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function UnderlineLink({ children, className = "", ...rest }: Props) {
  const [hover, setHover] = useState(false);
  return (
    <a
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`ui-link ${className}`}
    >
      <span>{children}</span>
      <span className={hover ? "ui-link-bar ui-link-bar-hover" : "ui-link-bar"} />
    </a>
  );
}
