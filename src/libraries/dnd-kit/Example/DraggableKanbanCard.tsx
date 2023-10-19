import { type FC } from 'react'

import { useDraggable } from '@dnd-kit/core'
import clsx from 'clsx'

import { KanbanCard } from '$components'
import { type KanbanCardData } from '$mock'

import styles from './DraggableKanbanCard.module.scss'

export interface DraggableKanbanCardProps {
  data: KanbanCardData
  index: number
}

export const DraggableKanbanCard: FC<DraggableKanbanCardProps> = ({ data }) => {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef: draggableRef,
  } = useDraggable({
    id: data.key,
    data,
  })

  return (
    <div
      className={clsx({
        [styles.dragging]: isDragging,
      })}
      ref={draggableRef}
      {...attributes}
      {...listeners}
    >
      <KanbanCard name={data.name} phone={data.phone} />
    </div>
  )
}
