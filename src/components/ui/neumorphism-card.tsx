import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const neumorphismCardVariants = cva(
  'rounded-lg transition-all duration-300',
  {
    variants: {
      variant: {
        light: 'bg-white neumorphism-light',
        dark: 'bg-gray-800 neumorphism-dark',
        insetLight: 'bg-white neumorphism-inset-light',
        insetDark: 'bg-gray-800 neumorphism-inset-dark',
      },
      size: {
        default: 'p-6',
        sm: 'p-4',
        lg: 'p-8',
        xl: 'p-12',
      },
      interactive: {
        true: 'hover:scale-105 cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'light',
      size: 'default',
      interactive: false,
    },
  }
)

export interface NeumorphismCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof neumorphismCardVariants> {
  as?: React.ElementType
}

const NeumorphismCard = forwardRef<HTMLDivElement, NeumorphismCardProps>(
  ({ className, variant, size, interactive, as: Component = 'div', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(neumorphismCardVariants({ variant, size, interactive }), className)}
        {...props}
      />
    )
  }
)
NeumorphismCard.displayName = 'NeumorphismCard'

export { NeumorphismCard, neumorphismCardVariants }