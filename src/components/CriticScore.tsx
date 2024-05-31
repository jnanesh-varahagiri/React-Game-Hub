import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 70 ? "green" : score > 40 && score <= 70 ? "" : "red";
  return (
    <Badge colorScheme={color} fontSize={"15px"} paddingX={"4px"}>
      {score}
    </Badge>
  );
};

export default CriticScore;
