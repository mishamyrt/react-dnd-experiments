import { type KanbanCardData, boardData, type KanbanCardStatus } from '$mock'
import { useCallback, type FC } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DroppableKanbanColumn } from './DroppableKanbanColumn'
import { KanbanBoard } from '$components'
import { type ExampleProps } from '../../types'

export const ReactDNDExample: FC<ExampleProps> = ({ onChange }) => {
  const handleSelectItem = useCallback(
    (data: KanbanCardData, target: KanbanCardStatus) => {
      onChange(data, target)
    },
    [],
  )

  return (
    <DndProvider backend={HTML5Backend}>
      <KanbanBoard>
        {boardData.map((data) => (
          <DroppableKanbanColumn
            key={data.title}
            onSelect={handleSelectItem}
            data={data}
          />
        ))}
      </KanbanBoard>
    </DndProvider>
  )
}
