import { Icon } from "./icon";
import { textVariants } from "./text";
import { cva, cx, type VariantProps } from "class-variance-authority";

export const inputTextWrapperVariants = cva(
  `
  flex items-center gap-2 border
  border-gray-500 rounded-lg
  focus-within:border-yellow-dark
`,
  {
    variants: {
      size: {
        base: "h-12 p-3",
      },
    },
    defaultVariants: {
      size: "base",
    },
  },
);

export const inputTextVariants = cva(`outline-none`, {
  variants: {
    variant: {
      primary: "text-gray-200 placeholder-gray-400",
    },
    size: {
      base: "flex-1",
    },
    disabled: {
      true: "pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "base",
    disabled: false,
  },
});

export const inputTextIconVariants = cva(``, {
  variants: {
    variant: {
      primary: "fill-yellow"
    },
    size: {
      base: "w-5 h-5",
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "base"
  }
})

interface InputTextProps
  extends
    VariantProps<typeof inputTextWrapperVariants>,
    VariantProps<typeof inputTextVariants>,
    VariantProps<typeof inputTextIconVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  id: string;
  icon?: React.ComponentProps<typeof Icon>["svg"]
}

export function InputText({
  id,
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: InputTextProps) {
  return (
    <div className={inputTextWrapperVariants({ size, className })}>
      {icon && <Icon svg={icon} className={inputTextIconVariants({variant, size})} />}

      <input
        id={id}
        type="text"
        className={cx(
          inputTextVariants({ size, disabled }),
          textVariants()
        )}
        placeholder="Nome do cliente"
        {...props}
      />
    </div>
  );
}
