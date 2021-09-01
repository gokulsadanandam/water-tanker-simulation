import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Menu, ArrowBack } from "@material-ui/icons";
import { useStoreContext } from "./+state/water.tankerprovider.context";
import { Screen } from "./+state/water.tanker.reducer";

export default function AppHeader() {
  const { state, dispatch } = useStoreContext();

  const navigateToHome = () => {
    dispatch({
      type: "waterTanker/updateScreen",
      payload: { screen: Screen.INPUT_SCREEN },
    });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {state.screen === Screen.SIMULATOR_SCREEN ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            onClick={navigateToHome}
          >
            <ArrowBack />
          </IconButton>
        ) : (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={navigateToHome}
          >
            <Menu />
          </IconButton>
        )}
        <Typography variant="h6">Water Tank Simulation</Typography>
      </Toolbar>
    </AppBar>
  );
}
