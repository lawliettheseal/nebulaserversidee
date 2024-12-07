import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'black' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:pointer-events-none disabled:opacity-50 neon-button',
          {
            'bg-white text-black hover:bg-gray-100': 
              variant === 'default',
            'bg-black text-white border border-white/20 hover:bg-black/80': 
              variant === 'black',
            'border-2 border-white/50 bg-transparent hover:bg-white/10 hover:border-white': 
              variant === 'outline',
            'hover:bg-white/10': 
              variant === 'ghost',
            'h-8 px-3 text-sm': 
              size === 'sm',
            'h-10 px-4': 
              size === 'md',
            'h-12 px-6 text-lg': 
              size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }