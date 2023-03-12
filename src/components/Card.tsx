import cn from 'classnames';
import { ReactNode } from 'react';

export default function Card({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <div className={cn(className, 'bg-white rounded-lg p-4 w-full')}>
      {children}
    </div>
  );
}
