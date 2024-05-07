import { Button } from "@components/ui/Button";
import { Languages } from "lucide-react";
import { LanguageSwitcherOptions } from "@components/ui/LanguageSwitcherOptions";

export const LanguageSwitcher = () => {
  return (
    <div className="dropdown dropdown-end">
      <Button className="btn btn-square btn-neutral btn-sm mr-2 ">
        <Languages size={16} />
      </Button>
      <LanguageSwitcherOptions />
    </div>
  );
};
