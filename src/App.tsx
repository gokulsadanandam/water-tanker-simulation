import React, {useReducer} from "react";
import "./App.css";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { GridArray, WaterTankItem } from "./data";
import { DropContainer } from "./Components/Drop.Container";
import { DraggableGrid } from "./Components/Dragabble.Grid";
import {useStoreContext} from './+state/water.tankerprovider.context'
import { deepCopy } from './utils/utils';

function App() {
  const { state, dispatch } = useStoreContext();

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

      const rows = 6;
      const columns = 5;

      let arr = deepCopy(this.initialState);
      let currentPosition = { positionX: 0, positionY: 2 };
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
          () => dispatch({ type : 'watertanker/updateGrids' , payload: { positionX : p.positionX , positionY : p.positionY } }) ,
          timer
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
    },
    getInitialTankState: function () {
      return this.initialState;
    },
  };

  function fillTheTank() {
    const filledTank = fillTank.fill();
  }

  function resetTank() {
    for (let i = 0; i < GridArray.length; i++) {
      for (let j = 0; j < GridArray[i].length; j++) {
        GridArray[i][j] = {
          ...GridArray[i][j],
          isBlocked: false,
          isWaterFlowed: false,
        };
      }
    }
    dispatch({ type : 'watertanker/updateGridArray' , payload: [...GridArray] }) 
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">Water Tank Simulation</Typography>
        </Toolbar>
      </AppBar>
      <Box display="flex" mt={3} p={2} justifyContent="center">
        {/* <DropContainer/> */}
        <Grid
          container
          alignItems="center"
          justifyContent="center"
        >
          {state?.WaterTank.map((gridRow, index) => (
            <Grid item container key={`container-grid-${index}`} justifyContent="center">
              {gridRow.map( (grid : WaterTankItem, gridIndex: number) => (
                <DropContainer
                  {...grid}
                  item
                  key={`container-grid-row-item-${index}-${gridIndex}`}
                >
                  <Box
                    m={1}
                    p={1}
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: grid.isWaterFlowed
                        ? "blue"
                        : grid.isBlocked
                        ? "black"
                        : "#d2d2d2",
                    }}
                  />
                </DropContainer>
              ))}
            </Grid>
          ))}
        </Grid>
        <Grid container alignItems="center" justifyContent="center" style={{ paddingTop : 8 }}>
          <Grid container item alignItems="center" justifyContent="center">
            <Button variant="contained" color="primary" onClick={fillTheTank}>
              Traverse Node
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
          <Grid container item alignItems="center" justifyContent="center">
            {new Array(5).fill(null).map((_) => (
              <DraggableGrid>
                <Box
                  m={1}
                  p={1}
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "black",
                  }}
                />
              </DraggableGrid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
