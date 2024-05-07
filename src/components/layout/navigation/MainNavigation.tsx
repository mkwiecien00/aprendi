import { Link } from "react-router-dom";
import { Logo } from "@components/ui/Logo";
import { ThemeController } from "@components/ui/ThemeController";
import { LanguageSwitcher } from "@components/ui/LanguageSwitcher";

export const MainNavigation = () => {
  return (
    <header>
      <nav className="navbar fixed z-20 flex justify-between bg-base-100">
        
        <Link to="/aprendi/">
          <Logo iconClass="app-logo-icon-nav" titleClass="app-logo-title-nav" />
        </Link>

        <div className="flex-end gap-3">
          <ThemeController />
          <LanguageSwitcher />
        </div>

        {/* ADD: when user is logged in - user avatar with settings */}
      </nav>
    </header>
  );
};
