import { useCallback, type FC, useState } from 'react'
import { KanbanBoard } from '$components'
import {
  DragDropContext,
  type OnDragStartResponder,
  type OnDragEndResponder,
} from 'react-beautiful-dnd'
import {
  type KanbanCardData,
  boardData,
  boardDataMap,
  type KanbanCardStatus,
  canDrop,
} from '$mock'
import { DroppableKanbanColumn } from './DroppableKanbanColumn'
import { type ExampleProps } from '../../types'

export const ReactBeautifulDNDExample: FC<ExampleProps> = ({ onChange }) => {
  const [draggedItem, setDraggedItem] = useState<KanbanCardData | undefined>()
  const handleDragEnd: OnDragEndResponder = useCallback(
    ({ source, destination, draggableId }) => {
      setDraggedItem(undefined)
      if (
        !destination ||
        !draggableId ||
        source.droppableId === destination.droppableId
      ) {
        return
      }
      const item = boardDataMap.get(draggableId)
      if (!item) {
        return
      }
      const target = destination.droppableId as KanbanCardStatus
      if (canDrop(item, target)) {
        onChange(item, target)
      }
    },
    [],
  )

  const handleDragStart: OnDragStartResponder = useCallback(({ draggableId }) => {
    const item = boardDataMap.get(draggableId)
    if (!item) {
      return
    }
    setDraggedItem(item)
  }, [])

  return (
    <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <KanbanBoard>
        {boardData.map(({ title, items }) => (
          <DroppableKanbanColumn
            draggedItem={draggedItem}
            title={title}
            items={items}
            key={title}
          />
        ))}
      </KanbanBoard>
    </DragDropContext>
  )
}
