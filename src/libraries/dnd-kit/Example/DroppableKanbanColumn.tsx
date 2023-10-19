import { KanbanColumn, KanbanColumnItems } from '$components'
import { canDrop, type KanbanCardData, type KanbanColumnData } from '$mock'
import { useDroppable } from '@dnd-kit/core'
import { type FC } from 'react'
import { DraggableKanbanCard } from './DraggableKanbanCard'

interface DroppableKanbanColumnProps {
  data: KanbanColumnData
}

export const DroppableKanbanColumn: FC<DroppableKanbanColumnProps> = ({ data }) => {
  const {
    active,
    isOver,
    setNodeRef: droppableRef,
  } = useDroppable({
    id: data.title,
  })

  const isCanDrop =
    active?.data.current &&
    canDrop(active.data.current as KanbanCardData, data.title)
  return (
    <KanbanColumn
      ready={isCanDrop}
      active={isOver}
      key={data.title}
      title={data.title}
    >
      <KanbanColumnItems containerRef={droppableRef}>
        {data.items.map((data, index) => (
          <DraggableKanbanCard index={index} data={data} key={data.key} />
        ))}
      </KanbanColumnItems>
    </KanbanColumn>
  )
}
