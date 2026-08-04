import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-all [transition-duration:250ms] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50 motion-safe:hover:-translate-y-0.5',
  {
    variants: {
      variant: {
        default:
          'bg-accent text-accent-foreground shadow-[0_10px_24px_rgba(245,27,43,0.20)] hover:bg-[linear-gradient(135deg,#F51B2B_0%,#213F72_100%)] hover:shadow-[0_14px_30px_rgba(33,63,114,0.24)]',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-primary/25 bg-white/80 text-primary shadow-sm backdrop-blur hover:border-accent/35 hover:bg-secondary hover:text-primary',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-white hover:text-primary',
        ghost: 'hover:bg-secondary hover:text-primary',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
