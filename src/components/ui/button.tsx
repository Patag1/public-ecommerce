import { cn } from '@/app/lib/utils'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        className={cn(
          `
          px-5 py-3
          w-auto
          bg-black
          text-white
          font-semibold
          border-transparent
          rounded-full
          hover:opacity-75
          disabled:cursor-not-allowed
          disabled:opacity-50
          transition
          ease-in-out
        `,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
