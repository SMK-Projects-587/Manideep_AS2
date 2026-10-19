import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const variantStyles = {
  primary: 'bg-primary text-white hover:bg-[#4939C9]',
  secondary: 'border border-[#ECEAF3] bg-background text-heading',
};

function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer rounded-xl text-sm leading-none font-normal transition-colors ${variantStyles[variant]} ${className} disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {children}
    </button>
  );
}

export default Button;
