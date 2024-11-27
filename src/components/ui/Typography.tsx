import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small';
  className?: string;
  children: ReactNode;
}

export function Typography({ 
  variant = 'body',
  className,
  children 
}: TypographyProps) {
  const variants = {
    h1: 'text-4xl md:text-5xl font-serif font-medium',
    h2: 'text-3xl md:text-4xl font-serif',
    h3: 'text-2xl md:text-3xl font-serif',
    h4: 'text-xl md:text-2xl font-medium',
    body: 'text-base text-gray-600',
    small: 'text-sm text-gray-500'
  };

  const Component = variant.startsWith('h') ? variant : 'p';

  return (
    <Component className={cn(variants[variant], className)}>
      {children}
    </Component>
  );
}