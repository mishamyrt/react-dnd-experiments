import { type FC } from 'react'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { KanbanBoard } from '$components'
import { boardData } from '$mock'

import { type ExampleProps } from '../../types'
import { DroppableKanbanColumn } from './DroppableKanbanColumn'

export const ReactDNDExample: FC<ExampleProps> = ({ onChange }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <KanbanBoard>
        {boardData.map((data) => (
          <DroppableKanbanColumn key={data.title} onDrop={onChange} data={data} />
        ))}
      </KanbanBoard>
    </DndProvider>
  )
}
