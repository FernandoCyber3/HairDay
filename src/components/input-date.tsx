import { Icon } from "./icon";
import { textVariants } from "./text";
import { cva, cx, type VariantProps } from "class-variance-authority";

import { TODAY } from "../utils/opening-hours";

export const inputDateWrapperVariants = cva(
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

export const inputDateVariants = cva(`custom-date-input outline-none`, {
  variants: {
    variant: {
      primary: "text-gray-200 placeholder-gray-400 uppercase",
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

export const inputDateIconVariants = cva(``, {
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
    VariantProps<typeof inputDateWrapperVariants>,
    VariantProps<typeof inputDateVariants>,
    VariantProps<typeof inputDateIconVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  id?: string;
  icon?: React.ComponentProps<typeof Icon>["svg"]
}

export function InputDate({
  id,
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: InputTextProps) {

  return (
    <div className={inputDateWrapperVariants({ size, className })}>
      {icon && <Icon svg={icon} className={inputDateIconVariants({variant, size})} />}

      <input
        id={id}
        type="date"
        className={cx(
          inputDateVariants({ size, disabled }),
          textVariants()
        )}
        min={TODAY}
        {...props}
      />
    </div>
  );
}
