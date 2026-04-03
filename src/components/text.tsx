import { cva, type VariantProps } from "class-variance-authority"
import { createElement } from "react"

export const textVariants = cva("", {
  variants: {
    variant: {
      "title-lg": "text-2xl font-bold",
      "title-md": "text-base font-bold",
      "title-sm": "text-sm font-bold",
      "text-md": "text-base font-normal",
      "text-sm": "text-sm font-normal"
    }
  },
  defaultVariants: {
    variant: "text-md"
  }
})

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  children?: React.ReactNode
}

export function Text({ as = "p", variant, className, children, ...props }: TextProps) {
  return createElement(
    as,
    {
      className: textVariants({variant, className}),
      ...props
    },
    children
  )
}
