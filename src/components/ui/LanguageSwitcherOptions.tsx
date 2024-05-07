import { languages } from "@data/languageOptions";

export const LanguageSwitcherOptions = () => {
  return (
    <ul className="w-30 menu dropdown-content z-[1] mt-4 rounded-box bg-base-100 p-2 shadow">
      {languages.map((language, index) => (
        <li key={index}>
          <button className="text-black hover:bg-grey">{language}</button>
        </li>
      ))}
    </ul>
  );
};
