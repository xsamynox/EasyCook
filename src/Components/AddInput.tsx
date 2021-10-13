import { Icon } from '@iconify/react';
import classnames from 'classnames';
import React, { forwardRef } from 'react';

interface AddInputProps {
  title: string;
  className?: string;
  type?: string;
}

const AddInput = forwardRef<HTMLInputElement, AddInputProps>(function AddInput({ className, type = "button", title, ...props }, ref) {
  return (
    <button className={classnames("flex items-center gap-2 mb-4", className)} {...props}>
      <Icon icon="akar-icons:circle-plus" />
      <label className={classnames("cursor-pointer", className)}>{title}</label>
    </button >
  );
});

export default AddInput;
