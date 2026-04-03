import { Icon } from "./icon";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonIconVariants = cva(`
  flex justify-center items-center
  cursor-pointer transition group
`, {
  variants: {
    variant: {
      primary: "bg-transparent"
    },
    size: {
      base: "w-5 h-5"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "base"
  }
});

export const buttonIconIconVariants = cva(`transition`, {
  variants: {
    variant: {
      primary: "fill-yellow group-hover:fill-yellow-dark"
    },
  },
  defaultVariants: {
    variant: "primary"
  }
})

interface ButtonIconProps extends VariantProps<typeof buttonIconVariants>,
  Omit<React.ComponentProps<"button">, "size"> {
    icon: React.ComponentProps<typeof Icon>["svg"]
  }

export function ButtonIcon({ variant, size, className, icon, ...props }: ButtonIconProps) {
  return (
    <button className={buttonIconVariants({variant, size, className})} {...props}>
      <Icon svg={icon} className={buttonIconIconVariants({ variant })} />
    </button>
  )
}
