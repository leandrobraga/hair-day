import Text from "./text";

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled"> {
  children: React.ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props}>
      <Text>{children}</Text>
    </button>
  );
}
