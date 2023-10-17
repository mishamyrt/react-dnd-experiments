import { CardDataGenerator } from './generate'
import { type KanbanBoardData } from './types'

const generator = new CardDataGenerator()

export const boardData: KanbanBoardData = [
  {
    title: 'Новый',
    items: generator.getArray(30),
  },
  {
    title: 'Потенциальный',
    items: generator.getArray(30),
  },
  {
    title: 'Действующий',
    items: generator.getArray(30),
  },
  {
    title: 'Расторгнут',
    items: generator.getArray(30),
  },
]

export const boardDataMap = generator.map
