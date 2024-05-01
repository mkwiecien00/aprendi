import { ContainerProps } from "@customTypes/ui";

export const Container = ({ children }: ContainerProps) => {
  return <div className="container">{children}</div>;
};
