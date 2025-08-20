import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg hover:shadow-destructive/25",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:border-primary/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-sm",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  withPulse?: boolean
  withRipple?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, withPulse = false, withRipple = true, ...props }, ref) => {
    const [isClicked, setIsClicked] = React.useState(false)
    const Comp = asChild ? Slot : motion.button
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (withRipple) {
        setIsClicked(true)
        setTimeout(() => setIsClicked(false), 600)
      }
      props.onClick?.(e)
    }
    
    const { onDrag, onDragEnd, onDragStart, onAnimationStart, onAnimationEnd, onAnimationIteration, ...restProps } = props;
    
    const htmlProps = {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      onClick: handleClick,
      ...restProps
    };
    
    const motionProps = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      animate: withPulse ? { scale: [1, 1.05, 1] } : {},
      transition: withPulse 
        ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
        : { duration: 0.15, ease: "easeOut" }
    };
    
    if (asChild) {
      return <Slot {...htmlProps} />
    }
    
    return (
      <motion.button {...htmlProps} {...motionProps}>
        {withRipple && isClicked && (
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-full"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
        {props.children}
      </motion.button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
