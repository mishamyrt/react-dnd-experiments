import { type FC, useCallback, useState } from 'react'

import {
  DndContext,
  type DragEndEvent,
  DragOverlay,
  type DragStartEvent,
} from '@dnd-kit/core'

import { KanbanBoard, KanbanCard } from '$components'
import {
  boardData,
  canDrop,
  type KanbanCardData,
  type KanbanCardStatus,
} from '$mock'

import { type ExampleProps } from '../../types'
import { DroppableKanbanColumn } from './DroppableKanbanColumn'

export const DNDKitExample: FC<ExampleProps> = ({ onChange }) => {
  const [dragged, setDragged] = useState<KanbanCardData | undefined>(undefined)
  const handleDragEnd = useCallback(({ over, active }: DragEndEvent) => {
    if (over?.id && active.data.current) {
      const item = active.data.current as KanbanCardData
      const target = over.id as KanbanCardStatus
      if (canDrop(item, target)) {
        onChange(item, target)
      }
    }
    setDragged(undefined)
  }, [])
  const handleDragStart = useCallback((event: DragStartEvent) => {
    setDragged(event.active.data.current as KanbanCardData)
  }, [])

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <KanbanBoard>
        {boardData.map((data) => (
          <DroppableKanbanColumn key={data.title} data={data} />
        ))}
      </KanbanBoard>
      <DragOverlay>
        {dragged && <KanbanCard name={dragged.name} phone={dragged.phone} />}
      </DragOverlay>
    </DndContext>
  )
}
