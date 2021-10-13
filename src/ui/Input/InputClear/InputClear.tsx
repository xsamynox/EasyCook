import React, { forwardRef } from 'react';
import classnames from "classnames";
import { Icon } from '@iconify/react';

type InputClearProps = {
  className?: string;
  disable?: boolean;
  type?: string;
  value?: string;
  name?: string;
} & React.HtmlHTMLAttributes<HTMLInputElement>

const InputClear = forwardRef<HTMLInputElement, InputClearProps>(function InputClear({ className, type = "text", ...props }, ref) {

  return (
    <div className="flex gap-10">
      <input ref={ref} className="border-none bg-gray-post text-left text-sm h-8 p-4 w-11/12 mb-2 rounded-md"  {...props} />
      <button>
        <Icon icon="bi:trash" className={classnames("bg-white cursor-pointer mb-2", className)} />
      </button>
    </div>
  );
});

export default InputClear;
