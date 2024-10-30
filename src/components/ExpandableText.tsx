import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  wordLimit?: number;
  children: string;
}

const ExpandableText = ({ wordLimit = 100, children }: Props) => {
  if (!children) return null;

  const [isExpanded, setIsExpanded] = useState(false);
  const textArray = children.split(" ");
  const canExpand = textArray.length > wordLimit;
  const text =
    [...textArray].splice(0, wordLimit).join(" ") + (canExpand ? " ..." : "");

  return (
    <>
      {isExpanded ? children : text}
      {canExpand ? (
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          marginLeft={2}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </Button>
      ) : null}
    </>
  );
};

export default ExpandableText;
