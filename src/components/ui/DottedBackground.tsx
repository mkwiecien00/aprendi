import { DottedBackgroundProps } from "@customTypes/ui";

export const DottedBackground = ({ children }: DottedBackgroundProps) => {
  return (
    <div className="dark:bg-dot-white/[0.35] bg-dot-black/[0.35] relative flex h-screen w-full items-center justify-center bg-white dark:bg-black">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {children}
    </div>
  );
};
