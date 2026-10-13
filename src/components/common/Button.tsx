import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'yellow' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-bold tracking-wide rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 gap-1.5 min-h-[38px]',
    md: 'text-sm px-5 py-2.5 gap-2 min-h-[44px]',
    lg: 'text-base px-6 py-3.5 gap-2.5 min-h-[50px]',
  };

  const variantClasses = {
    primary:
      'bg-[#D32F2F] hover:bg-[#B71C1C] text-white shadow-sm hover:shadow-md focus-visible:ring-[#D32F2F] active:bg-[#9A0007]',
    secondary:
      'bg-[#0B1E4B] hover:bg-[#1B2A5B] text-white shadow-sm hover:shadow-md focus-visible:ring-[#0B1E4B] active:bg-[#071330]',
    outline:
      'bg-transparent border-2 border-[#0B1E4B] text-[#0B1E4B] hover:bg-[#0B1E4B] hover:text-white focus-visible:ring-[#0B1E4B]',
    yellow:
      'bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0B1E4B] font-extrabold shadow-sm hover:shadow focus-visible:ring-[#FBBF24]',
    whatsapp:
      'bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-sm hover:shadow focus-visible:ring-[#25D366]',
    ghost:
      'bg-transparent hover:bg-slate-100 text-[#0B1E4B] focus-visible:ring-slate-300',
  };

  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.01 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      disabled={disabled}
      {...(props as any)}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </motion.button>
  );
};
