import { randomInt } from '$utils'
import { CardDataGenerator } from './generate'
import { type KanbanBoardData } from './types'
export * from './types'

const generator = new CardDataGenerator()

const randomLength = (): number => randomInt(30, 5)

export const boardData: KanbanBoardData = [
  {
    title: 'Новый',
    items: generator.getArray(randomLength(), 'Новый'),
  },
  {
    title: 'Потенциальный',
    items: generator.getArray(randomLength(), 'Потенциальный'),
  },
  {
    title: 'Действующий',
    items: generator.getArray(randomLength(), 'Действующий'),
  },
  {
    title: 'Расторгнут',
    items: generator.getArray(randomLength(), 'Расторгнут'),
  },
]

export const boardDataMap = generator.map
