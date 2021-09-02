import React from "react";
import Fab from "@material-ui/core/Fab";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import { useStoreContext } from "./+state/water.tankerprovider.context";
import { Screen } from "./+state/water.tanker.reducer";
import VerticalCard from "./Components/VerticalTextCards";

export default function WaterTankInputs() {
  const { state, dispatch } = useStoreContext();
  const { rows, columns, defaults, blocks } = state.WaterTankerInputs;
  console.log(state);
  const updateInput = (
    e: React.ChangeEvent<{}>,
    value: number | number[],
    key: string
  ) => {
    e.stopPropagation();

    if (key === "blocks" && value > columns * rows) {
      return console.error("Value Should Be Less!");
    }

    dispatch({
      type: "waterTankerScreen/updateInput",
      payload: { key, value: value as number },
    });
  };

  const navigateUserToSimulator = () => {
    dispatch({
      type: "waterTanker/updateScreen",
      payload: { screen: Screen.SIMULATOR_SCREEN },
    });
    dispatch({
      type: "waterTanker/createTank",
      payload: { rows, columns, blocks },
    });
  };

  const canUserNavigate =
    rows >= 0 && columns >= 0 && blocks <= rows * columns ? false : true;

  return (
    <Grid container>
      <Grid container item lg direction="row" justifyContent="space-evenly">
        <VerticalCard
          text="Rows"
          slider={
            <Slider
              defaultValue={5}
              aria-labelledby="water-tanker-slider"
              step={1}
              color="primary"
              min={5}
              max={defaults?.maxRows}
              onChangeCommitted={(e, value: number | number[]) =>
                updateInput(e, value, "rows")
              }
              valueLabelDisplay="auto"
            />
          }
          value={rows}
        />
        <VerticalCard
          text="Columns"
          slider={
            <Slider
              defaultValue={5}
              aria-labelledby="water-tanker-slider"
              step={1}
              color="secondary"
              min={5}
              max={defaults?.maxColumns}
              onChangeCommitted={(e, value: number | number[]) =>
                updateInput(e, value, "columns")
              }
              valueLabelDisplay="auto"
            />
          }
          value={columns}
        />
        <VerticalCard
          text="Blocks"
          slider={
            <Slider
              defaultValue={3}
              onChangeCommitted={(e, value: number | number[]) =>
                updateInput(e, value, "blocks")
              }
              aria-labelledby="water-tanker-slider"
              step={1}
              style={{ color: "darkcyan" }}
              min={5}
              max={rows*columns}
              valueLabelDisplay="auto"
            />
          }
          value={blocks}
        />
      </Grid>
      <Fab
        color="secondary"
        style={{ position: "absolute", right: 8, top: "50%" }}
        size="large"
        aria-label="navigate"
        disabled={canUserNavigate}
        onClick={navigateUserToSimulator}
      >
        <NavigateNextIcon />
      </Fab>
    </Grid>
  );
}
