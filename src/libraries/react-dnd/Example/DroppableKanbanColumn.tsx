import { KanbanColumn, KanbanColumnItems } from '$components'
import { type FC } from 'react'
import {
  type KanbanCardStatus,
  type KanbanCardData,
  type KanbanColumnData,
} from '$mock'
import { useDrop } from 'react-dnd'
import { DraggableKanbanCard } from './DraggableKanbanCard'
import { CardType } from './constants'
import { useIsDragging } from './hooks'

interface DroppableKanbanColumnProps {
  data: KanbanColumnData
  onSelect: (data: KanbanCardData, target: KanbanCardStatus) => void
}

export const DroppableKanbanColumn: FC<DroppableKanbanColumnProps> = ({
  data,
  onSelect,
}) => {
  const { title, items } = data
  const [{ isOver, canDrop }, dropRef] = useDrop<
  KanbanCardData,
  KanbanCardData,
  {
    isOver: boolean
    canDrop: boolean
  }
  >({
    accept: CardType,
    drop: (item) => {
      onSelect(item, title)
      return item
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    canDrop: (item) => {
      if (item.status === title) {
        return false
      }
      switch (title) {
        case 'New':
          return item.status === 'Potential'
        case 'Potential':
          return ['New', 'Canceled'].includes(item.status)
        case 'Active':
          return ['Potential', 'New'].includes(item.status)
        case 'Canceled':
          return item.status === 'Active'
        default:
          return false
      }
    },
  })
  const isDragging = useIsDragging()

  return (
    <KanbanColumn ready={isDragging && canDrop} active={canDrop && isOver} key={title} title={title}>
      <KanbanColumnItems containerRef={dropRef}>
        {items.map((data, index) => (
          <DraggableKanbanCard index={index} data={data} key={data.key} />
        ))}
      </KanbanColumnItems>
    </KanbanColumn>
  )
}
