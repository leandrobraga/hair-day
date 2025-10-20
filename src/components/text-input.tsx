import { cva, cx, type VariantProps } from "class-variance-authority";
import UserIcon from "../assets/icons/user-retangle.svg?react";
import Icon from "./icon";

const inputTextVariants = cva(
  "border-1 border-solid border-gray-400 rounded-lg px-9 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-dark",
  {
    variants: {
      size: {
        md: "h-12 pb-2 px-2",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  },
);

interface InputTextProps
  extends VariantProps<typeof inputTextVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

export default function TextInput({
  size,
  disabled,
  ...props
}: InputTextProps) {
  return (
    <label className="relative text-gray-400 focus-within:text-gray-600 block">
      <Icon
        className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-2 text-yellow"
        svg={UserIcon}
      />
      <input
        className={cx(
          inputTextVariants({ size, disabled }),
          "placeholder-gray-400 text-gray-200",
        )}
        {...props}
      />
    </label>
  );
}
