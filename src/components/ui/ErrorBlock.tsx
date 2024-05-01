import { ErrorBlockProps } from "@customTypes/ui";

export const ErrorBlock = ({ message }: ErrorBlockProps) => {
  return <p className="opacity-0">Error: {message}</p>;
};
