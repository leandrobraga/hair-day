import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";

const buttonVariants = cva(
  "flex items-center justify-center cursor-pointer rounded-lg group",
  {
    variants: {
      variant: {
        primary: "bg-yellow hover:outline-2 hover:outline-yellow-light",
      },
      size: {
        md: "h-14 py-4 px-5",
      },
      disabled: {
        true: "opacity-30 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className,
  variant,
  size,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Text variant="body-sm-bold">{children}</Text>
    </button>
  );
}
