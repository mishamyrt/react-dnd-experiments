import { type CSSProperties, type FC } from 'react'
import {
  Draggable,
  type DraggableStateSnapshot,
  type DraggingStyle,
  type NotDraggingStyle,
} from 'react-beautiful-dnd'
import { KanbanCard } from '$components'
import { type KanbanCardData } from '../../mock/types'

export interface DraggableKanbanCardProps {
  data: KanbanCardData
  index: number
}

function getStyle (
  style: DraggingStyle | NotDraggingStyle | undefined,
  snapshot: DraggableStateSnapshot,
): CSSProperties {
  if (!snapshot.isDragging || !style) return {}
  if (!snapshot.isDropAnimating) {
    return style
  }

  return {
    ...style,
    transitionDuration: '0.1s',
  }
}

export const DraggableKanbanCard: FC<DraggableKanbanCardProps> = ({
  data,
  index,
}) => {
  const { key, name, phone } = data
  return (
    <Draggable key={key} draggableId={key} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getStyle(provided.draggableProps.style, snapshot)}
        >
          <KanbanCard name={name} phone={phone} />
        </div>
      )}
    </Draggable>
  )
}
