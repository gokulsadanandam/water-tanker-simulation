import { GridArray, WaterTank } from "../data";

export interface WaterTankerState {
  WaterTank: WaterTank;
}

export const initialState: WaterTankerState = {
  WaterTank: GridArray,
};

export function reducer(
  state: WaterTankerState,
  action: { type: string; payload?: any }
) {
  console.log(action,state)
  switch (action.type) {
    case "watertanker/dropBlock":
      if (
        !action.payload.isBlocked
      ) {
          console.log("inside block")
          return{
            ...state,
            WaterTank : Object.assign([...state.WaterTank],{
              [action.payload.positionX] : Object.assign([...state.WaterTank[action.payload.positionX]], {
                [action.payload.positionY] : { positionX : action.payload.positionX, positionY: action.payload.positionY, 
                  isEdge: action.payload.isEdge , isWaterFlowed: action.payload.isWaterFlowed , isBlocked: true }
              })
            })
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
