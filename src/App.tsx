import "./App.css";
import {
  Box,
  Grid,
  Button,
  Typography,
} from "@material-ui/core";
import { topRow, WaterTankItem } from "./data";
import { DropContainer } from "./Components/Drop.Container";
import { DraggableGrid } from "./Components/Dragabble.Grid";
import {useStoreContext} from './+state/water.tankerprovider.context'
import { deepCopy } from './utils/utils';

function App() {
  const { state, dispatch } = useStoreContext();

  const { blocks , rows , columns , originY } = state.WaterTankerInputs;

  const fillTank = {
    initialState: state.WaterTank,
    fill: function () {
      let directions = {
        left: {
          positionX: 0,
          positionY: -1,
        },
        right: {
          positionX: 0,
          positionY: 1,
        },
        down: {
          positionX: 1,
          positionY: 0,
        },
      };

      const rows = state.WaterTankerInputs.rows;
      const columns = state.WaterTankerInputs.columns;

      let arr = deepCopy(this.initialState);
      let currentPosition = { positionX: 0, positionY: state.WaterTankerInputs.originY.value };
      let timer = 1000;

      // List to Hold Traversed Valid Nodes
      let traversedValidNodes = [];

      // Adding the current starting position to the list
      traversedValidNodes.push(currentPosition);

      while (traversedValidNodes.length > 0) {
        // { positionX:0 , positionY:3 }

        let p = traversedValidNodes[0];

        // Removing currentNode entry from list.
        traversedValidNodes.shift();

        arr[p.positionX][p.positionY].isWaterFlowed = true;
        arr[p.positionX][p.positionY].isBlocked = true;

        setTimeout(
          () => {
            console.log(p)
            return dispatch({ type : 'watertanker/updateGrids' , payload: { positionX : p.positionX , positionY : p.positionY } }) 
          },timer
        );

        if (p.positionX > rows) {
          break;
        }

        // Check the Downward Direction if Node is Valid

        let a: any = p.positionX + directions.down.positionX;
        let b: any = p.positionY + directions.down.positionY;

        // a = 2 , b = 3;

        if (
          a >= 0 &&
          a < rows &&
          b >= 0 &&
          b < columns &&
          !arr[a][b].isBlocked
        ) {
          traversedValidNodes.push({ positionX: a, positionY: b });
        } else {
          // Check the Nodes to the Left are Valid

          a = p.positionX + directions.left.positionX;
          b = p.positionY + directions.left.positionY;

          // a=1, b=2;

          if (
            a >= 0 &&
            a < rows &&
            b >= 0 &&
            b < columns &&
            !arr[a][b].isBlocked
          ) {
            traversedValidNodes.push({ positionX: a, positionY: b });
          }

          // Check the Node to the Right are Valid

          a = p.positionX + directions.right.positionX;
          b = p.positionY + directions.right.positionY;

          if (
            a >= 0 &&
            a < rows &&
            b >= 0 &&
            b < columns &&
            !arr[a][b].isBlocked
          ) {
            traversedValidNodes.push({ positionX: a, positionY: b });
          }
        }

        timer = timer + 1000;
      }
      return arr;
    }
  };

  function fillTheTank() {
    fillTank.fill();
  }

  function resetTank() {
    dispatch({ type : 'waterTanker/createTank' , payload: { rows , columns } }) 
  }

  function updateOriginAction(positionY: number){
    dispatch({ type : 'waterTanker/updateOrigin' , payload: positionY }) 
  }

  return (
    <Grid container justifyContent="center">
      <Grid container lg={8} alignItems="center" justifyContent="center">
        { !originY.selected && <Typography color="secondary" gutterBottom variant="h5">
          Please Select a Origin Position
        </Typography>
        }
        <Grid
          item
          container
          key={`container-grid-position-selector`}
          justifyContent="center"
        >
          <Box display="flex" >
            {topRow.map((topRowGrid) => (
              <DropContainer {...topRowGrid} onClick={ _ => updateOriginAction(topRowGrid.positionY) } >
                <Box
                  m={1}
                  p={1}
                  borderRadius={4}
                  bgcolor={originY?.value == topRowGrid.positionY && "#e63946" || "#ced4da"}
                  className="blocks"
                />
              </DropContainer>
            ))}
          </Box>
        </Grid>
        { originY.selected && state?.WaterTank.map((gridRow, index) => (
          <Grid
            item
            container
            key={`container-grid-${index}`}
            justifyContent="center"
          >
            {gridRow.map((grid: WaterTankItem, gridIndex: number) => (
              <DropContainer
                {...grid}
                item
                key={`container-grid-row-item-${index}-${gridIndex}`}
              >
                <Box
                  m={1}
                  p={1}
                  borderRadius={4}
                  className="blocks block-drop-container"
                  bgcolor={
                    grid.isWaterFlowed
                      ? "#48cae4"
                      : grid.isBlocked
                      ? "#003049"
                      : "#ced4da"
                  }
                />
              </DropContainer>
            ))}
          </Grid>
        ))}
      </Grid>
      <Grid
        lg={4}
        container
        alignItems="flex-start"
        justifyContent="center"
        style={{ paddingTop: 8 }}
      >
        <Grid container item alignItems="center" justifyContent="center">
          {new Array(blocks).fill(null).map((_) => (
            <DraggableGrid>
              <Box
                m={1}
                p={1}
                borderRadius={4}
                bgcolor="#003049"
                className="blocks"
              />
            </DraggableGrid>
          ))}
        </Grid>
        <Grid
          container
          item
          style={{ marginTop: 24 }}
          alignItems="center"
          justifyContent="center"
        >
          <Button variant="contained" color="primary" onClick={fillTheTank}>
            Start Simulation
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={resetTank}
            style={{ marginLeft: 8 }}
          >
            Reset State
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
