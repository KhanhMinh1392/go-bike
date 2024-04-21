import React from 'react';
import { Input, InputProps } from '../ui/input';
import { cn } from '@/lib/utils';

interface IGInputProps extends Omit<InputProps, 'className'> {
  label: string;
  className?: string;
}

export default function GInput({ label, className, ...props }: IGInputProps) {
  return (
    <div className="relative">
      <Input id={props.id} type='email' className={cn('peer focus-visible:invalid:pt-2', className)} {...props}/>
      <label htmlFor={props.id} className="absolute left-4 top-4 text-xl peer-focus-visible:top-2 peer-focus-visible:text-xs peer-invalid:top-4 peer-invalid:hidden">
        {label}
      </label>
    </div>
  );
}
