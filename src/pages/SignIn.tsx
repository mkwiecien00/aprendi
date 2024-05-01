import { DottedBackground } from "@components/ui/DottedBackground";
import { AuthenticationForm } from "@components/auth/AuthenticationForm";

export const SignInPage = () => {
  return (
    <DottedBackground>
      <AuthenticationForm mode="signin" />
    </DottedBackground>
  );
};
