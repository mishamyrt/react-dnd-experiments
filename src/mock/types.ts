import type { KanbanCardProps } from '$components'

export type KanbanCardStatus = 'New' | 'Potential' | 'Active' | 'Canceled'

export type KanbanCardData = {
  key: string
  status: KanbanCardStatus
} & KanbanCardProps

export interface KanbanColumnData {
  title: KanbanCardStatus
  items: KanbanCardData[]
}

export type KanbanBoardData = KanbanColumnData[]
