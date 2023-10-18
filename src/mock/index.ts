import { randomInt } from '$utils'
import { CardDataGenerator } from './generate'
import { type KanbanBoardData } from './types'

const generator = new CardDataGenerator()

const randomLength = (): number => randomInt(30, 5)

export const boardData: KanbanBoardData = [
  {
    title: 'Новый',
    items: generator.getArray(randomLength()),
  },
  {
    title: 'Потенциальный',
    items: generator.getArray(randomLength()),
  },
  {
    title: 'Действующий',
    items: generator.getArray(randomLength()),
  },
  {
    title: 'Расторгнут',
    items: generator.getArray(randomLength()),
  },
]

export const boardDataMap = generator.map
