import { InputProps } from "@customTypes/ui";

export const Input = ({ label, id, ...rest }: InputProps) => {
  return (
    <label className="form-input" htmlFor={id}>
      {label}
      <input {...rest} id={id} className="grow" required />
    </label>
  );
};
