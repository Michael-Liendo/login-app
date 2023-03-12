import classNames from 'classnames';
import { ReactNode } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  variant?: 'primary' | null;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function Button({
  type = 'button',
  fullWidth = false,
  variant = null,
  className = '',
  onClick,
  children,
}: ButtonProps) {
  const cn = classNames(
    className,
    'border py-2 px-6 rounded-full text-sm flex items-center font-semibold ',
    {
      'w-full': fullWidth,
      'border-gray-200 text-gray-600 hover:bg-gray-100': !variant,
      '!text-white border-blue-600 bg-blue-600 hover:bg-blue-800 hover:!border-blue-800':
        variant === 'primary',
    }
  );
  return (
    <button type={type} className={cn} onClick={onClick}>
      {children}
    </button>
  );
}
