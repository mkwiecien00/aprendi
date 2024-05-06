import { Link } from "react-router-dom";

import { DottedBackground } from "@components/ui/DottedBackground";
import { Container } from "@components/ui/Container";
import { Heading } from "@components/ui/Heading";
import { TextGenerateEffect } from "@components/ui/TextGenerateEffect";
import { Button } from "@components/ui/Button";
import { MousePointerClick } from "lucide-react";

export const HomePage = () => {
  return (
    <DottedBackground>
      <Container>
        <Heading
          firstPart="Learning"
          secondPart="never"
          thirdPart="exhaust the mind"
        />
        <TextGenerateEffect
          words="Maximize your day with new knowledge for your better future."
          className="text-center"
        />
        <Link to="/aprendi/signin">
          <Button
            text="Get started"
            className="btn btn-primary mt-8 px-5 text-white"
          >
            <MousePointerClick size={20} />
          </Button>
        </Link>
      </Container>
    </DottedBackground>
  );
};
