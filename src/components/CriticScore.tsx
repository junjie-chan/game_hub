import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color =
    score > 80 ? "green" : score > 60 ? "yellow" : score <= 60 ? "red" : "";

  return (
    <Badge fontSize="14px" paddingX={2} borderRadius={5} colorScheme={color}>
      {score || "--"}
    </Badge>
  );
};

export default CriticScore;
