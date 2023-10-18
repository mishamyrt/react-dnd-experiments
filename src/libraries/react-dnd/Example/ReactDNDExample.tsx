import { type KanbanCardData, boardData } from '$mock'
import { useCallback, type FC, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DroppableKanbanColumn } from './DroppableKanbanColumn'
import { ConfirmationDialog, KanbanBoard } from '$components'
import { useBoolean } from '@ozen-ui/kit/useBoolean'

export const ReactDNDExample: FC = () => {
  const [activeItem, setActiveItem] = useState<KanbanCardData>(boardData[0].items[0])
  const [currentTarget, setTarget] = useState('')
  const [open, { off, on }] = useBoolean(false)
  const handleSelectItem = useCallback((data: KanbanCardData, target: string) => {
    setActiveItem(data)
    setTarget(target)
    on()
  }, [])

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <KanbanBoard>
          {boardData.map((data) => (
            <DroppableKanbanColumn key={data.title} onSelect={handleSelectItem} data={data} />
          ))}
        </KanbanBoard>
      </DndProvider>
      <ConfirmationDialog
        data={activeItem}
        target={currentTarget}
        open={open}
        onClose={off}
      />
    </>
  )
}
