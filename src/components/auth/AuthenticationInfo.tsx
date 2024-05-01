import { Link } from "react-router-dom";

import { AuthenticationFormProps } from "@customTypes/auth";

export const AuthenticationInfo = ({ mode }: AuthenticationFormProps) => {
  const isSignin = mode === "signin";

  return (
    <p className="authentication-form-info">
      {isSignin ? "New to Aprendi?" : "Already on Aprendi?"}
      <Link
        className="text-black"
        to={isSignin ? "/aprendi/signup" : "/aprendi/signin"}
      >
        <span className="font-bold">{isSignin ? " Sign up" : " Sign in"}</span>
      </Link>
    </p>
  );
};
