import { FC } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './Dragabble.Items.Type';
import { Grid, GridProps } from '@material-ui/core';
import { WaterTankItem } from '../WaterTanker.Interfaces';

export const DropContainer: FC<GridProps & WaterTankItem> = ({ children, positionX, positionY, isBlocked, isEdge, isWaterFlowed , ...rest } ) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.GRID,
    drop: () => (
      {
        positionX,
        positionY,
        isBlocked,
        isEdge, 
        isWaterFlowed
      }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))


  return (
    <Grid ref={drop} role={'DropContainer'} {...rest} >
      {children}
    </Grid>
  )
}
