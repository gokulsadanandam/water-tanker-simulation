import { FC } from 'react'
import { useDrag } from 'react-dnd'
import { Grid, GridProps } from '@material-ui/core';
import { ItemTypes } from './Dragabble.Items.Type';
import { WaterTankItem } from '../data';

export const DraggableGrid: FC<GridProps> = function DraggableGrid({ children , key , ...rest }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.GRID,
    item: ({ type : 'block' }) ,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<WaterTankItem>()
      if (item && dropResult) {
          console.log(item,dropResult)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  return (
    <Grid
      ref={drag}
      role="Draggable-Grid"
      data-testid={`grid-${key}`}
      {...rest}
    >
      {children}
    </Grid>
  )
}
