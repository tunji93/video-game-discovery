import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  text: string;
};

function ExpandableText({ text }: Props) {
  const [expanded, setIsExpanded] = useState(false);
  const limit = 300;
  if (text.length < limit) return <Text>{text}</Text>;

  const summary = expanded ? text : text.slice(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        marginLeft={1}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setIsExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
}

export default ExpandableText;
