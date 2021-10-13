import React, { forwardRef } from 'react';
import { Icon, IconifyIcon } from '@iconify/react';
import classnames from "classnames";

type InputProps = {
  className?: string;
  disable?: boolean;
  type?: string;
  value?: string;
  name?: string;
  icon: string | IconifyIcon;
} & React.HtmlHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ className, type = "text", icon, ...props }, ref) {
  return (
    <div className="p-2.5 mb-3.5 border border-gray-200 text-base flex content-center gap-x-3 items-center rounded-lg" >
      <Icon icon={icon} width="18" />
      <input ref={ref} className={classnames("w-full border-none", className)} {...props} />
    </div>
  );
});


export default Input;
