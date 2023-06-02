import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem gridArea={"nav"} bg={"coral"}>
        NAV
      </GridItem>
      <Show above="lg">
        <GridItem gridArea={"aside"} bg={"red"}>
          ASIDE
        </GridItem>
      </Show>
      <GridItem gridArea={"main"} bg={"blue"}>
        MAIN
      </GridItem>
    </Grid>
  );
}

export default App;
