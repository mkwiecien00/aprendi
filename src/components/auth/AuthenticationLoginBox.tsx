import { Logo } from "@components/ui/Logo";
import { AuthenticationInputBox } from "@components/auth/AuthenticationInputBox";
import { AuthenticationFormProps } from "@customTypes/auth";

export const AuthenticationLoginBox = ({ mode }: AuthenticationFormProps) => {
  const isSignin = mode === "signin";

  return (
    <div className="authentication-box mt-10">
      <Logo iconClass="app-logo-icon" titleClass="app-logo-title" />
      <form className="card-body w-full">
        <h1 className="form-header">{isSignin ? "Sign in" : "Sign up"}</h1>
        <AuthenticationInputBox isSignin={isSignin} />
      </form>
    </div>
  );
};
