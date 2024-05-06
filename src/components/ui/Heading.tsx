import { HeadingProps } from "@customTypes/ui";

export const Heading = ({ firstPart, secondPart, thirdPart }: HeadingProps) => {
  return (
    <h1 className="heading">
      {firstPart} <span className="heading-gradient">{secondPart}</span>{" "}
      {thirdPart}
    </h1>
  );
};
