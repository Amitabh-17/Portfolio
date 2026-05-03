import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const glassCardVariants = cva(
  'glass-effect rounded-lg border border-white/10 transition-all duration-300 hover:border-white/20',
  {
    variants: {
      variant: {
        default: 'bg-background/20 backdrop-blur-lg',
        dark: 'bg-black/30 backdrop-blur-lg',
        light: 'bg-white/10 backdrop-blur-lg',
      },
      size: {
        default: 'p-6',
        sm: 'p-4',
        lg: 'p-8',
        xl: 'p-12',
      },
      interactive: {
        true: 'hover:scale-105 hover:shadow-xl hover:shadow-primary/10 cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      interactive: false,
    },
  }
)

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {
  as?: React.ElementType
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, size, interactive, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(glassCardVariants({ variant, size, interactive }), className)}
        {...props}
      />
    )
  }
)
GlassCard.displayName = 'GlassCard'

export { GlassCard, glassCardVariants }