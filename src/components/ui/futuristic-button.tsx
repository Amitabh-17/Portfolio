import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const futuristicButtonVariants = cva(
  'relative overflow-hidden rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20',
        ghost: 'bg-transparent border border-primary/30 hover:bg-primary/10 hover:border-primary/50',
        outline: 'bg-transparent border-2 border-primary/50 hover:bg-primary/10 hover:border-primary/70',
        glow: 'bg-gradient-to-r from-primary/30 to-secondary/30 border border-primary/40 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-12 px-8 py-3 text-lg',
        xl: 'h-14 px-10 py-4 text-xl',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      fullWidth: false,
    },
  }
)

export interface FuturisticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof futuristicButtonVariants> {
  loading?: boolean
}

const FuturisticButton = forwardRef<HTMLButtonElement, FuturisticButtonProps>(
  ({ className, variant, size, fullWidth, loading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(futuristicButtonVariants({ variant, size, fullWidth }), className)}
        disabled={loading || props.disabled}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {children}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </button>
    )
  }
)
FuturisticButton.displayName = 'FuturisticButton'

export { FuturisticButton, futuristicButtonVariants }