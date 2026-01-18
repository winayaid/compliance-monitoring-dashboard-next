import * as React from "react"

import { cn } from "@/lib/cn"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs outline-none transition focus-visible:ring-2 focus-visible:ring-ring",
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }
