export const GridArray: WaterTank = [
    [
      {
        positionX: 0,
        positionY: 0,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: true,
      },
      {
        positionX: 0,
        positionY: 1,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 0,
        positionY: 2,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 0,
        positionY: 3,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 0,
        positionY: 4,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
    ],
    [
      {
        positionX: 1,
        positionY: 0,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: true,
      },
      {
        positionX: 1,
        positionY: 1,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 1,
        positionY: 2,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 1,
        positionY: 3,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 1,
        positionY: 4,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: true,
      },
    ],
    [
      {
        positionX: 2,
        positionY: 0,
        isBlocked: true,
        isWaterFlowed: false,
        isEdge: true,
      },
      {
        positionX: 2,
        positionY: 1,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 2,
        positionY: 2,
        isBlocked: true,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 2,
        positionY: 3,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 2,
        positionY: 4,
        isBlocked: true,
        isWaterFlowed: false,
        isEdge: true,
      },
    ],
    [
      {
        positionX: 3,
        positionY: 0,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: true,
      },
      {
        positionX: 3,
        positionY: 1,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 3,
        positionY: 2,
        isBlocked: true,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 3,
        positionY: 3,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 3,
        positionY: 4,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: true,
      },
    ],
    [
      {
        positionX: 4,
        positionY: 0,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: true,
      },
      {
        positionX: 4,
        positionY: 1,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 4,
        positionY: 2,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 4,
        positionY: 3,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 4,
        positionY: 4,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: true,
      },
    ],
    [
      {
        positionX: 5,
        positionY: 0,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: true,
      },
      {
        positionX: 5,
        positionY: 1,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 5,
        positionY: 2,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 5,
        positionY: 3,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: false,
      },
      {
        positionX: 5,
        positionY: 4,
        isBlocked: false,
        isWaterFlowed: false,
        isEdge: true,
      },
    ],
  ];

  export interface WaterTankItem {
    positionX: number;
    positionY: number;
    isBlocked: boolean;
    isWaterFlowed: boolean;
    isEdge: boolean;
  }

  export type WaterTank = WaterTankItem[][]
  