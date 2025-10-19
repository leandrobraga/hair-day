import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const textVariants = cva("font-sans text-gray-900", {
  variants: {
    variant: {
      "body-lg-bold": "text-3xl leading-6 font-bold",
      "body-md-bold": "text-base leading-6 font-bold",
      "body-md-regular": "text-base leading-6 font-normal",
      "body-sm-bold": "text-sm leading-5 font-bold",
      "body-sm-regular": "text-sm leading-5 font-normal",
    },
  },
  defaultVariants: {
    variant: "body-md-regular",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

export default function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children,
  );
}
