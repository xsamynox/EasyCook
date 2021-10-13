import classnames from "classnames";
import { forwardRef } from "react";

type ButtonProps = {
  title?: string;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset" | undefined;
  name?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    className = "",
    type,
    disabled,
    title,
    ...props
  },
  ref,
) {
  return <button
    ref={ref}
    className={classnames("rounded-lg text-base cursor-pointer hover:shadow", className)}
    type={type}
    disabled={disabled}
    {...props}
  >
    {children}
    {title}
  </button >;
});

export default Button;
