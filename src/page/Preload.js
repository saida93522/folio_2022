import { ReactComponent as Logo } from "../assets/logo.svg";

import { Loading, Grid, Text } from "@nextui-org/react";

const Preload = () => {
  return (
    <Grid.Container className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <Loading size="lg" type="points-opacity" className="App-logo">
          <Text>Suspended. Loading data...</Text>
        </Loading>
      </header>
    </Grid.Container>
  );
};

export default Preload;
