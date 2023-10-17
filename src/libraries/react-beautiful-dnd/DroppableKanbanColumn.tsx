import { KanbanColumn, KanbanColumnItems } from '$components'
import { type FC } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { type KanbanColumnData } from '../../mock/types'
import { DraggableKanbanCard } from './DraggableKanbanCard'

export const DroppableKanbanColumn: FC<KanbanColumnData> = ({ title, items }) => {
  return (
    <Droppable key={title} droppableId={title}>
      {(provided, snapshot) => (
        <KanbanColumn active={snapshot.isDraggingOver} key={title} title={title}>
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
