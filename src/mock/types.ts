import type { KanbanCardProps } from '$components'

export type KanbanCardData = {
  key: string
} & KanbanCardProps

export interface KanbanColumnData {
  title: string
  items: KanbanCardData[]
}

export type KanbanBoardData = KanbanColumnData[]
