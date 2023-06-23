import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  term: string;
  children: ReactNode | ReactNode[];
};

function DefinitionItem({ term, children }: Props) {
  return (
    <Box marginY={5}>
      <Heading as="dt" color="gray.600" fontSize="md">
        {term}
      </Heading>
      <dd>
        {children}
      </dd>
    </Box>
  );
}

export default DefinitionItem;
