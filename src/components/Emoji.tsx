import React from "react";
import bullseye from "../assets/bullseye-.png";
import thumbsUp from "../assets/thumbsup.png";
import thumbsDown from "../assets/thumbsdown.jpeg";
import meh from "../assets/meh.png";
import { ImageProps, Image } from "@chakra-ui/react";
interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    1: { src: thumbsDown, alt: "not recommended" },
    2: { src: thumbsDown, alt: "not recommended" },
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "Recommended" },
    5: { src: bullseye, alt: "Exceptional" },
  };
  return (
    <Image
      paddingTop={1}
      borderRadius="50px"
      {...emojiMap[rating]}
      boxSize={8}
    />
  );
};

export default Emoji;
