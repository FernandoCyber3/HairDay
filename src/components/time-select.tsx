import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";

export const timeSelectWrapperVariants = cva(
  `
    flex justify-center items-center relative
  `,
  {
    variants: {
      size: {
        base: "w-19.5 h-10 rounded-lg",
      },
    },
    defaultVariants: {
      size: "base",
    },
  },
);

export const timeSelectVariants = cva(
  `appearance-none absolute inset-0 outline-none peer cursor-pointer transition`,
  {
    variants: {
      variant: {
        primary:
          "bg-gray-600 border border-transparent hover:bg-gray-500 checked:border-yellow focus:border-yellow disabled:bg-transparent disabled:border-gray-600",
      },
      size: {
        base: "rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "base",
    },
  },
);

export const timeSelectLabelVariants = cva(`cursor-pointer`, {
  variants: {
    variant: {
      primary:
        "text-gray-200 z-1 peer-checked:text-yellow peer-focus:text-yellow peer-disabled:text-gray-600",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface TimeSelectProps
  extends
    VariantProps<typeof timeSelectWrapperVariants>,
    VariantProps<typeof timeSelectVariants>,
    Omit<React.ComponentProps<"input">, "size"> {
  id: string;
  label: string;
}

export function TimeSelect({
  id,
  label,
  variant,
  size,
  className,
  disabled,
  ...props
}: TimeSelectProps) {
  return (
    <div className={timeSelectWrapperVariants({ size, className })}>
      <input
        type="radio"
        name="time-select"
        id={id}
        className={timeSelectVariants({ variant, size })}
        disabled={disabled}
        {...props}
      />
      <label
        className={cx(timeSelectLabelVariants({ variant }), textVariants())}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}
