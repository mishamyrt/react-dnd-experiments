import { type FC } from 'react'

import { Droppable } from 'react-beautiful-dnd'

import { KanbanColumn, KanbanColumnItems } from '$components'
import {
  canDrop,
  type KanbanCardData,
  type KanbanCardStatus,
  type KanbanColumnData,
} from '$mock'

import { DraggableKanbanCard } from './DraggableKanbanCard'

type DroppableKanbanColumnProps = {
  draggedItem: undefined | KanbanCardData
} & KanbanColumnData

const canSafeDrop = (
  item: KanbanCardData | undefined,
  target: KanbanCardStatus,
): boolean => {
  if (!item) {
    return false
  }
  return canDrop(item, target)
}

export const DroppableKanbanColumn: FC<DroppableKanbanColumnProps> = ({
  title,
  items,
  draggedItem,
}) => {
  return (
    <Droppable key={title} droppableId={title}>
      {(provided, snapshot) => (
        <KanbanColumn
          ready={canSafeDrop(draggedItem, title)}
          active={snapshot.isDraggingOver}
          key={title}
          title={title}
        >
          <KanbanColumnItems containerRef={provided.innerRef}>
            {items.map((data, index) => (
              <DraggableKanbanCard index={index} data={data} key={data.key} />
            ))}
          </KanbanColumnItems>
        </KanbanColumn>
      )}
    </Droppable>
  )
}
