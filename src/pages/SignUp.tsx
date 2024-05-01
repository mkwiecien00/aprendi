import { DottedBackground } from "@components/ui/DottedBackground";
import { AuthenticationForm } from "@components/auth/AuthenticationForm";

export const SignUpPage = () => {
  return (
    <DottedBackground>
      <AuthenticationForm mode="signup" />
    </DottedBackground>
  );
};
