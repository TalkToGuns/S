import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  children: ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn(
      "bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]",
      className
    )}>
      {children}
    </div>
  );
}