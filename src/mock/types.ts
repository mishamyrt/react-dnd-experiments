import type { KanbanCardProps } from '$components'

export type KanbanCardStatus = 'Новый' | 'Потенциальный' | 'Действующий' | 'Расторгнут'

export type KanbanCardData = {
  key: string
  status: KanbanCardStatus
} & KanbanCardProps

export interface KanbanColumnData {
  title: KanbanCardStatus
  items: KanbanCardData[]
}

export type KanbanBoardData = KanbanColumnData[]
