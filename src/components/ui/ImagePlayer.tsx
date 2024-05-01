import { Player } from "@lottiefiles/react-lottie-player";
import { IPlayerProps } from "@lottiefiles/react-lottie-player";

export const ImagePlayer = ({ ...rest }: IPlayerProps) => {
  return <Player {...rest}></Player>;
};
