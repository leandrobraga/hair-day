import type React from "react";
import Icon from "./icon";

interface ButtonIconProps extends React.ComponentProps<"button"> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function ButtonIcon({ icon, ...props }: ButtonIconProps) {
  return (
    <button {...props}>
      <Icon
        svg={icon}
        className="text-yellow-light hover:text-yellow-dark cursor-pointer w-5 h-5"
      />
    </button>
  );
}
