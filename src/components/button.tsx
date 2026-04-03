import { cva, type VariantProps } from "class-variance-authority";
import { Text } from "./text";

export const buttonVariants = cva(
  `
  flex justify-center items-center
  cursor-pointer transition
`,
  {
    variants: {
      variant: {
        primary: "border-3 border-transparent bg-yellow hover:border-yellow-light",
      },
      size: {
        base: "h-14 px-4 rounded-lg",
      },
      disabled: {
        true: "opacity-30 pointer-events-none cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "base",
      disabled: false,
    },
  },
);

export const buttonTextVariants = cva("uppercase", {
  variants: {
    variant: {
      primary: "text-gray-900",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {}

export function Button({ variant, size, disabled, className, children, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({variant, size, disabled, className})} {...props}>
      <Text as="span" variant={"title-sm"} className={buttonTextVariants({variant})}>
        {children}
      </Text>
    </button>
  );
}
