export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface ContainerProps {
  children: React.ReactNode;
}

export interface DottedBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export interface ErrorBlockProps {
  message: string;
}

export interface HeadingProps {
  firstPart: string;
  secondPart: string;
  thirdPart: string;
}

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}

export interface LogoProps {
  iconClass: string;
  titleClass: string;
}

export interface TextGenerateEffectProps {
  words: string;
  className?: string;
}
