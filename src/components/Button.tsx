import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const variantStyles = {
  primary: 'bg-primary text-white hover:bg-[#4939C9]',
  secondary: 'border border-[#ECEAF3] bg-background text-heading',
};

function Button({
  children,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  return (
    <button
      className={`cursor-pointer rounded-xl text-sm leading-none font-normal transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
