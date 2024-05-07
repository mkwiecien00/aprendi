import { Sun, Moon } from "lucide-react";

export const ThemeController = () => {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <Sun size={16} />
      <input
        type="checkbox"
        value="synthwave"
        className="theme-controller toggle h-5 w-11"
      />
      <Moon size={16} />
    </label>
  );
};
