import { useCallback, type FC } from 'react'
import { KanbanBoard } from '$components'
import { DragDropContext, type OnDragEndResponder } from 'react-beautiful-dnd'
import { boardData, boardDataMap } from '$mock'
import { DroppableKanbanColumn } from './DroppableKanbanColumn'
import { type KanbanCardStatus } from '$mock'
import { type ExampleProps } from '../../types'

export const ReactBeautifulDNDExample: FC<ExampleProps> = ({ onChange }) => {
  const handleDragEnd: OnDragEndResponder = useCallback(
    ({ source, destination, draggableId }) => {
      if (
        !destination ||
        !draggableId ||
        source.droppableId === destination.droppableId
      ) {
        return
      }
      // Тут же можно проверять доступность перехода по жизненному циклу
      const item = boardDataMap.get(draggableId)
      if (!item) {
        return
      }
      onChange(item, destination.droppableId as KanbanCardStatus)
    },
    [],
  )

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <KanbanBoard>
        {boardData.map(({ title, items }) => (
          <DroppableKanbanColumn title={title} items={items} key={title} />
        ))}
      </KanbanBoard>
    </DragDropContext>
  )
}
