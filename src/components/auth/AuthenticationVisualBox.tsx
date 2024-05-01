import { ImagePlayer } from "@components/ui/ImagePlayer";
import animatedImg from "@animations/animation.json";

export const AuthenticationVisualBox = () => {
  return (
    <div className="authentication-box authentication-visual-box ">
      <ImagePlayer
        autoplay={true}
        speed={0.5}
        loop={true}
        src={animatedImg}
        style={{ height: "350px", width: "450px" }}
      />
      <h3 className="authentication-visual-box-header">
        Unleash your potential
      </h3>
      <p className="authentication-visual-box-info">
        Learn effortlessly, plan with ease, and stay organized{" "}
        <span className="font-bold">with Aprendi</span>
      </p>
    </div>
  );
};
