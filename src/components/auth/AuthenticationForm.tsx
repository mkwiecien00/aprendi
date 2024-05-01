import { Container } from "@components/ui/Container";
import { AuthenticationLoginBox } from "@components/auth/AuthenticationLoginBox";
import { AuthenticationVisualBox } from "@components/auth/AuthenticationVisualBox";
import { AuthenticationInfo } from "@components/auth/AuthenticationInfo";

import { AuthenticationFormProps } from "@customTypes/auth";

export const AuthenticationForm = ({ mode }: AuthenticationFormProps) => {
  return (
    <Container>
      <div className="authentication-container">
        <AuthenticationLoginBox mode={mode} />
        <AuthenticationVisualBox />
      </div>
      <AuthenticationInfo mode={mode} />
    </Container>
  );
};
