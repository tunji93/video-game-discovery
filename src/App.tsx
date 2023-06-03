import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem gridArea={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea={"aside"}>ASIDE</GridItem>
      </Show>
      <GridItem gridArea={"main"}>MAIN</GridItem>
    </Grid>
  );
}

export default App;
