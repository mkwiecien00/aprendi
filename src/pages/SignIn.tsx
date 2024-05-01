import { AuroraBackground } from "@components/ui/AuroraBackground";
import { AuthenticationForm } from "@components/auth/AuthenticationForm";

export const SignInPage = () => {
  return (
    <AuroraBackground>
      <AuthenticationForm mode="signin" />
    </AuroraBackground>
  );
};
