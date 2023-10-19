import { type FC } from 'react'

import { useDrag } from 'react-dnd'

import { KanbanCard } from '$components'
import { type KanbanCardData } from '$mock'

import { CardType } from './constants'

export interface DraggableKanbanCardProps {
  data: KanbanCardData
  index: number
}

export const DraggableKanbanCard: FC<DraggableKanbanCardProps> = ({ data }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, dragRef] = useDrag<KanbanCardData, KanbanCardData>(
    () => ({
      type: CardType,
      item: data,
      options: {
        dropEffect: 'move',
      },
    }),
    [],
  )

  return (
    <div ref={dragRef}>
      <KanbanCard name={data.name} phone={data.phone} />
    </div>
  )
}
