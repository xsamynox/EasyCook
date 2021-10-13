import React, { forwardRef } from 'react';

type CheckboxProps = {
  className?: string;
  disable?: boolean;
  type?: string;
  value?: string;
  name?: string;
  title: string;
} & React.HtmlHTMLAttributes<HTMLInputElement>

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox({ className, type, title, ...props }, ref) {
  return (
    <div className="flex gap-2 items-center">
      <input ref={ref} type="checkbox" {...props} />
      <label>{title}</label>
    </div>
  );
});

export default Checkbox;
