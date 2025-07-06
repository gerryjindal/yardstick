import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Badge style variants
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border font-semibold w-fit whitespace-nowrap shrink-0 gap-1 px-2 py-0.5 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border-transparent hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground border-transparent hover:bg-secondary/90",
        destructive:
          "bg-destructive text-white border-transparent hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "text-foreground border border-border hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "text-[10px] px-2 py-0.5",
        md: "text-xs px-3 py-1",
        lg: "text-sm px-4 py-1.5",
      },
      state: {
        active: "ring-2 ring-ring/60",
        disabled: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

// Badge component
function Badge({
  className,
  variant,
  size,
  state,
  asChild = false,
  children,
  icon,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean
    icon?: React.ReactNode
    state?: "active" | "disabled"
  }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, state }), className)}
      {...props}
    >
      {icon && <span className="inline-flex items-center justify-center">{icon}</span>}
      {children}
    </Comp>
  )
}

export { Badge, badgeVariants }