export interface WaterTankItem {
  positionX: number;
  positionY: number;
  isBlocked: boolean;
  isWaterFlowed: boolean;
  isEdge: boolean;
}

export type WaterTank = WaterTankItem[][];

export const topRow: WaterTankItem[] = [
  {
    positionX: 0,
    positionY: 0,
    isBlocked: true,
    isWaterFlowed: false,
    isEdge: true,
  },
  {
    positionX: 0,
    positionY: 1,
    isBlocked: true,
    isWaterFlowed: false,
    isEdge: false,
  },
  {
    positionX: 0,
    positionY: 2,
    isBlocked: true,
    isWaterFlowed: false,
    isEdge: false,
  },
  {
    positionX: 0,
    positionY: 3,
    isBlocked: true,
    isWaterFlowed: false,
    isEdge: false,
  },
  {
    positionX: 0,
    positionY: 4,
    isBlocked: true,
    isWaterFlowed: false,
    isEdge: false,
  },
];
