import meh from "../assets/meh.webp";
import thumbsup from "../assets/thumbs-up.webp";
import bullseye from "../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";

type Props = {
  rating: number;
};
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return;
  const emoji: { [key: string]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsup, alt: "recomended" },
    5: { src: bullseye, alt: "exceptional" },
  };
  return <Image {...emoji[rating]} boxSize="25px" />;
};

export default Emoji;
