import { GridArray, WaterTank } from "../data";

export enum Screen {
  INPUT_SCREEN = 'inputScreen',
  SIMULATOR_SCREEN = 'simulatorScreen',
}

export interface WaterTankerInputs {
  rows: number;
  columns: number;
  blocks: number;
  defaults?: {
    maxRows?: number;
    maxColumns?: number;
    maxBlocks?: number; 
  }
}

export interface WaterTankerState {
  screen: Screen;
  WaterTankerInputs: WaterTankerInputs,
  WaterTank: WaterTank;
}

export const initialState: WaterTankerState = {
  screen: Screen.INPUT_SCREEN,
  WaterTank: [] as WaterTank,
  WaterTankerInputs: {
    rows: 5,
    columns: 5,
    blocks: 3,
    defaults: {
      maxRows: 20,
      maxColumns: 20,
    }
  }
};

export function reducer(
  state: WaterTankerState,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case "waterTankerScreen/updateInput":
      return {
        ...state,
        WaterTankerInputs : {
          ...state.WaterTankerInputs,
          [action.payload.key] : action.payload.value  
        }
      }
    case "waterTanker/createTank":
      let WaterTank = []
      for (let i = 0; i < action.payload.rows; i++) {
        let column = []
        for (let j = 0; j < action.payload.columns; j++) {
          column.push({
            positionX: i,
            positionY: j,
            isBlocked: false,
            isWaterFlowed: false,
            isEdge: j==action.payload.columns,
          })
        }
        WaterTank.push(column);
      }
      return {
        ...state,
        WaterTank
      }
    case "waterTanker/updateScreen":
      return {
        ...state,
        screen: action.payload.screen  
      }
    case "watertanker/dropBlock":
      if (
        !action.payload.isBlocked
      ) {
          return{
            ...state,
            WaterTank : Object.assign([...state.WaterTank],{
              [action.payload.positionX] : Object.assign([...state.WaterTank[action.payload.positionX]], {
                [action.payload.positionY] : { positionX : action.payload.positionX, positionY: action.payload.positionY, 
                  isEdge: action.payload.isEdge , isWaterFlowed: action.payload.isWaterFlowed , isBlocked: true }
              })
            }),
            WaterTankerInputs : {
              ...state.WaterTankerInputs,
              blocks : state.WaterTankerInputs.blocks - 1
            }
          }
      }
      return state;
    case "watertanker/updateGrids":
      if (
        action.payload.positionX && action.payload.positionX
      ) {
        return{
          ...state,
          WaterTank : Object.assign([...state.WaterTank],{
            [action.payload.positionX] : Object.assign([...state.WaterTank[action.payload.positionX]], {
              [action.payload.positionY] : { positionX : action.payload.positionX, positionY: action.payload.positionY, 
                isEdge: action.payload.isEdge , isWaterFlowed: true , isBlocked: false }
            })
          })
        }
      }
      return state;
    case "watertanker/updateGridArray":
        return { ...state, WaterTank : [...action.payload] };
    case "watertanker/fill":
      return state;
    default:
      throw new Error();
  }
}
