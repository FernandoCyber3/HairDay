import { cva, type VariantProps } from "class-variance-authority"

export const labelVariants = cva(``, {
  variants: {
    variant: {
      primary: "text-gray-200 text-base font-bold"
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})

interface LabelProps extends VariantProps<typeof labelVariants>, React.ComponentProps<"label"> {
  htmlFor?: string
}

export function Label({ variant, htmlFor, className, children, ...props }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={labelVariants({variant, className})} {...props}>
      {children}
    </label>
  )
}
