import { Input } from "@components/ui/Input";
import { ErrorBlock } from "@components/ui/ErrorBlock";
import { Button } from "@components/ui/Button";
import googleIcon from "@images/google.png";

import { AuthenticationInputBoxProps } from "@customTypes/auth";

export const AuthenticationInputBox = ({
  isSignin,
}: AuthenticationInputBoxProps) => {
  return (
    <>
      <div className="form-input-container">
        {!isSignin && (
          <Input
            label="Username"
            type="name"
            id="username"
            placeholder="test"
          />
        )}
        <Input
          label="Email"
          type="email"
          id="email"
          placeholder="test@test.com"
        />
        <Input
          label="Password"
          type="password"
          id="password"
          placeholder="•••••••"
        />
        <ErrorBlock message="error" />
      </div>

      <div className="form-btn-container">
        <Button
          className="form-btn btn-primary"
          text={isSignin ? "Sign in" : "Sign up"}
        />
        <div className="divider divider-neutral m-2">or</div>
        <Button
          className="form-btn btn-secondary"
          text={isSignin ? "Sign in with Google" : "Sign up with Google"}
        >
          <img src={googleIcon} alt="Google icon" className="h-[15px]" />
        </Button>
      </div>
    </>
  );
};
