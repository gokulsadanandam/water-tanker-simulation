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

const intialState = [...GridArray];



function App() {
  const [gridArray, updateGrids] = React.useState(intialState);

  const deepCopyObject = (obj: object) => {
    let tempObj:any  = {};
    for (let [key, value] of Object.entries(obj)) {
      if (Array.isArray(value)) {
        tempObj[key] = deepCopy(value);
      } else {
        if (typeof value === 'object') {
          tempObj[key] = deepCopyObject(value);
        } else {
          tempObj[key] = value
        }
      }
    }
    return tempObj;
  }

  const deepCopy = (arr: any[]) => {
    let copy: any[] = [];
    arr.forEach(elem => {
      if(Array.isArray(elem)){
        copy.push(deepCopy(elem))
      }else{
        if (typeof elem === 'object') {
          copy.push(deepCopyObject(elem))
      } else {
          copy.push(elem)
        }
      }
    })
    return copy;
  }

  const fillTank = {
    initialState: gridArray,
    fill: function(){
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
        }
      };
    
      const rows = 6;
      const columns = 5;

      let arr = deepCopy(this.initialState);
      let currentPosition = { positionX: 0, positionY: 2 };
      let timer = 1000;
      
      // List to Hold Traversed Valid Nodes
      let traversedValidNodes = [];
    
      // Adding the current starting position to the list
      traversedValidNodes.push(currentPosition)
    
      while ( traversedValidNodes.length > 0 ) {
        // { positionX:0 , positionY:3 }
    
        let p = traversedValidNodes[0];
        
        // Removing currentNode entry from list. 
        traversedValidNodes.shift();
        
        arr[p.positionX][p.positionY].isWaterFlowed = true;
        arr[p.positionX][p.positionY].isBlocked = true;

        setTimeout( () => updateGrids( prevState => { 
          prevState[p.positionX][p.positionY].isWaterFlowed = true;
          prevState[p.positionX][p.positionY].isBlocked = true;
          return [...prevState]  
        }), timer );
        
        if( p.positionX > rows ) {
          break;
        }
    
        // Check the Downward Direction if Node is Valid
    
        let a: any = p.positionX + directions.down.positionX;
        let b: any = p.positionY + directions.down.positionY;
    
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
        
        timer = timer + 1000;
      }
      return arr;
    },
  getInitialTankState: function(){
    return this.initialState;
  }
}

function fillTheTank() { 
  const filledTank = fillTank.fill();
}

function resetTank(){
  
  for ( let i=0; i< GridArray.length; i++ ){
    for( let j=0; j<GridArray[i].length; j++ ) {
      GridArray[i][j] = { ...GridArray[i][j] , isBlocked: false, isWaterFlowed: false }
    }
  }
  updateGrids( prevState => [...GridArray] );
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
      <Box display="inline-flex" alignItems="center" p={2} justifyContent="center"> 
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ marginTop: 24 , maxWidth: 400 }}
        >
          {gridArray.map((gridRow, index) => (
            <Grid item container key={`container-grid-${index}`} >
              {gridRow.map((grid, gridIndex) => (
                <Grid item key={`container-grid-row-item-${index}-${gridIndex}`}>
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
        <Button variant="contained" color="primary" onClick={fillTheTank} >Traverse Node</Button>
        <Button variant="contained" color="secondary" onClick={resetTank} style={{ marginLeft: 8 }}>Reset State</Button>
      </Box>
    </Box>
  );
}

export default App;
