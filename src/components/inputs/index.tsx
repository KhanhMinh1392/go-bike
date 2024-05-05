import { cn } from '@/lib/utils';
import { ChangeEvent, useRef, useState } from 'react';
import { Input, InputProps } from '../ui/input';
import { EyeOffIcon, EyeOnIcon } from '../icons';
import { Button } from '../ui/button';

interface IGInputProps extends Omit<InputProps, 'className'> {
  isRequired?: boolean;
  label: string;
  className?: string;
}

export default function GInput({ label, className, isRequired, ...props }: Readonly<IGInputProps>) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [isHaveValue, setIsHaveValue] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setIsHaveValue(e.target.value !== '');
    props.onChange && props.onChange(e);
  };

  const type = props.type === 'password' ? (isShowPassword ? 'text' : 'password') : props.type;

  return (
    <div className="relative">
      <Input
        id={props.id}
        className={cn(
          'peer truncate text-gray-700 focus-visible:invalid:pt-2',
          props.type === 'password' && 'pr-14',
          className,
        )}
        ref={inputRef}
        onChange={handleChangeInput}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        {...props}
        type={type}
      />
      <label
        htmlFor={props.id}
        className={cn(
          'absolute left-4 top-3 text-base peer-invalid:top-4 peer-invalid:hidden peer-focus-visible:top-2 peer-focus-visible:text-xs peer-focus-visible:duration-300 peer-focus-visible:ease-in-out [&>small]:text-xl [&>small]:peer-focus-visible:text-xs',
          isHaveValue && !isFocus && 'hidden',
        )}
      >
        {label}
        {isRequired && <small className="text-red-600">*</small>}
      </label>
      {props.type === 'password' && (
        <Button
          variant={'ghost'}
          size={'icon'}
          className="absolute right-2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 bg-white"
          onClick={() => setIsShowPassword(!isShowPassword)}
        >
          {isShowPassword ? <EyeOnIcon /> : <EyeOffIcon />}
        </Button>
      )}
    </div>
  );
}
