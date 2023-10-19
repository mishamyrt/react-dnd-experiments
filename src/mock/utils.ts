import type { KanbanCardData, KanbanCardStatus } from './types'

export const canDrop = (item: KanbanCardData, target: KanbanCardStatus): boolean => {
  switch (target) {
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
}
