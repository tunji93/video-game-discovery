import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

function GameCardContainer({children}: Props) {
    return (
        <Box width="270px" borderRadius={10} overflow="hidden">
            {children}
        </Box>
    )
}

export default GameCardContainer