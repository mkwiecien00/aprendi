import aprendiLogoIcon from "@images/aprendi-logo-icon.png";
import aprendiLogoTitle from "@images/aprendi-logo-title.png";

import { LogoProps } from "@customTypes/ui";

export const Logo = ({ iconClass, titleClass }: LogoProps) => {
  return (
    <div className="flex items-center">
      <img
        src={aprendiLogoIcon}
        alt="Aprendi app logo icon"
        className={iconClass}
      />
      <img
        src={aprendiLogoTitle}
        alt="Aprendi app logo title"
        className={titleClass}
      />
    </div>
  );
};
