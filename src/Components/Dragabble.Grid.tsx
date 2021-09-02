import { FC } from 'react'
import { useDrag } from 'react-dnd'
import { Grid, GridProps } from '@material-ui/core';
import { ItemTypes } from './Dragabble.Items.Type';
import { WaterTankItem } from '../data';
import {useStoreContext} from '../+state/water.tankerprovider.context'
import { withStyles } from '@material-ui/core/styles';
 
export const DraggableGrid: FC<GridProps> = function DraggableGrid({ children , key , ...rest }) {
  
  const { dispatch } = useStoreContext();

  const [, drag] = useDrag(() => ({
    type: ItemTypes.GRID,
    item: ({ type : 'block' }) ,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<WaterTankItem>()
      if (item && dropResult) {
        if(dropResult.isBlocked) {
          return dispatch({ type : 'watertanker/notificationMessage' , payload : "Cannot Place Block Here" })
        }
        dispatch({ type : 'watertanker/dropBlock' , payload : dropResult })
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

export interface StyledDraggableGridProps {
  color?: string;
  borderRadius?: number
}

const styles = () => ({
  root: {
      width: 40,
      height: 40,
      backgroundColor: ({color}: Partial<StyledDraggableGridProps>) => color,
      cursor: 'pointer',
      borderRadius: ({borderRadius}: Partial<StyledDraggableGridProps>) => `${borderRadius}px`
  }
})

export const StyledDraggableGrid =  withStyles(styles, { name : 'WaterBlocker.DraggableGrid' })(DraggableGrid);

