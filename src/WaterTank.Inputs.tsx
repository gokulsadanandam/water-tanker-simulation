import React from "react";
import Fab from "@material-ui/core/Fab";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import { useStoreContext } from "./+state/water.tankerprovider.context";
import { Screen } from './+state/water.tanker.reducer';

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
        payload: { screen : Screen.SIMULATOR_SCREEN  },
    });
  }

  const canUserNavigate = (rows >= 0 && columns >= 0 && blocks <= rows * columns) ? false : true;

  return (
    <Grid container>
      <Grid container item lg direction="row" justifyContent="center">
        <Grid item lg={8}>
          <Typography id="water-tanker-rows" gutterBottom>
            Number of Rows in Water Tanker
          </Typography>
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
        </Grid>

        <Grid item lg={8}>
          <Typography id="water-tanker-rows" gutterBottom>
            Number of Columns in Water Tanker
          </Typography>
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
        </Grid>

        <Grid item lg={8}>
          <Typography id="water-tanker-rows" gutterBottom>
            Number of Blockers
          </Typography>
          <Slider
            defaultValue={3}
            onChangeCommitted={(e, value: number | number[]) =>
              updateInput(e, value, "blocks")
            }
            aria-labelledby="water-tanker-slider"
            step={1}
            style={{ color: "darkcyan" }}
            min={5}
            max={defaults?.maxBlocks}
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>
      <Grid item lg>
        <Typography id="water-tanker-rows" gutterBottom>
          {rows}
        </Typography>
        <Typography id="water-tanker-rows" gutterBottom>
          {columns}
        </Typography>
        <Typography id="water-tanker-rows" gutterBottom>
          {blocks}
        </Typography>
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
