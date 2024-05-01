import { AuroraBackground } from "@components/ui/AuroraBackground";
import { AuthenticationForm } from "@components/auth/AuthenticationForm";

export const SignUpPage = () => {
  return (
    <AuroraBackground>
      <AuthenticationForm mode="signup" />
    </AuroraBackground>
  );
};
