import { useCallback, type FC, useState } from 'react'
import { ConfirmationDialog, KanbanBoard } from '$components'
import { DragDropContext, type OnDragEndResponder } from 'react-beautiful-dnd'
import { boardData, boardDataMap } from '$mock'
import { DroppableKanbanColumn } from './DroppableKanbanColumn'
import { useBoolean } from '@ozen-ui/kit/useBoolean'
import { type KanbanCardData } from '../../../mock/types'

export const ReactBeautifulDNDExample: FC = () => {
  const [open, { off, on }] = useBoolean(false)
  const [activeItem, setActiveItem] = useState<KanbanCardData>(boardData[0].items[0])
  const [target, setTarget] = useState<string>('')

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
      setTarget(destination.droppableId)
      setActiveItem(item)
      on()
    },
    [],
  )

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <KanbanBoard>
          {boardData.map(({ title, items }) => (
            <DroppableKanbanColumn title={title} items={items} key={title} />
          ))}
        </KanbanBoard>
      </DragDropContext>
      <ConfirmationDialog
        data={activeItem}
        target={target}
        open={open}
        onClose={off}
      />
    </>
  )
}
