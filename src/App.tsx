import React from "react";
import "./App.css";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Typography,
  Button
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { GridArray } from "./data";
import { AnyAaaaRecord } from "dns";

function App() {
  const [gridArray, updateGrids] = React.useState(GridArray);

  const traverseNode = (arr: typeof GridArray) => {
    var directions = {
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
      downLeft: {
        positionX: -1,
        positionY: 1,
      },
      downRight: {
        positionX: 1,
        positionY: 1,
      },
    };
  
    const rows = 6;
    const columns = 5;
    let currentPosition = { positionX: 0, positionY: 2 };
    
    // List to Hold Traversed Valid Nodes
    var traversedValidNodes = [];
  
    // Adding the current starting position to the list
    traversedValidNodes.push(currentPosition)
  
    while ( traversedValidNodes.length > 0 ) {
      // { positionX:0 , positionY:3 }
  
      var p = traversedValidNodes[0];
      
      // Removing currentNode entry from list. 
      traversedValidNodes.shift();
      
      arr[p.positionX][p.positionY].isWaterFlowed = true;
      arr[p.positionX][p.positionY].isBlocked = true;
  
      console.log("Water Flowed Through",arr[p.positionX][p.positionY])
  
      if( p.positionX > rows ) {
        break;
      }
  
      // Check the Downward Direction if Node is Valid
  
      var a: any = p.positionX + directions.down.positionX;
      var b: any = p.positionY + directions.down.positionY;
  
      // a = 2 , b = 3;
  
      if( a>=0 && a<rows && b>=0 && b<columns && !arr[a][b].isBlocked ) {
        traversedValidNodes.push({ positionX : a , positionY : b });
      }else{
  
        // Check the Nodes to the Left are Valid
  
        a = p.positionX + directions.left.positionX;
        b = p.positionY + directions.left.positionY;
  
        // a=1, b=2;
  
        if( a>=0 && a<rows && b>=0 && b<columns && !arr[a][b].isBlocked ) {
          traversedValidNodes.push({ positionX : a , positionY : b });
        }
  
        // Check the Node to the Right are Valid
  
        a = p.positionX + directions.right.positionX;
        b = p.positionY + directions.right.positionY;
  
        if( a>=0 && a<rows && b>=0 && b<columns && !arr[a][b].isBlocked ) {
          traversedValidNodes.push({ positionX : a , positionY : b });
        }
      }
    }

    console.log(arr);

    updateGrids( prevState =>  ([...arr]) );
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
      <Box display="inline-flex" style={{ width: "100%" }} alignItems="center" mx={2} justifyContent="center"> 
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ marginTop: 24 , maxWidth: 400 }}
        >
          {gridArray.map((gridRow, index) => (
            <Grid item container>
              {gridRow.map((grid, gridIndex) => (
                <Grid item>
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
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" color="primary" onClick={() => traverseNode(gridArray)} >Traverse Node</Button>
      </Box>
    </Box>
  );
}

export default App;
