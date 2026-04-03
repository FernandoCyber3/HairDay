import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

export const containerVariants = cva(`mx-auto`, {
  variants: {
    size: {
      md: "max-w-170.5",
      sm: "max-w-84.5"
    }
  },
  defaultVariants: {
    size: "md"
  }
})

interface ContainerProps extends VariantProps<typeof containerVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements
}

export function Container({ as = "div", size, className, children, ...props }: ContainerProps) {
  return React.createElement(
    as,
    {
      className: containerVariants({size, className}),
      ...props
    },
    children
  )
}
