import { ButtonProps } from "@customTypes/ui";

export const Button = ({ text, className, children }: ButtonProps) => {
  return (
    <button className={className}>
      {children}
      {text}
    </button>
  );
};
