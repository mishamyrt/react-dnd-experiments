import { randomInt } from '$utils'
import { CardDataGenerator } from './generate'
import { type KanbanBoardData } from './types'
export * from './types'
export * from './utils'

const generator = new CardDataGenerator()

const randomLength = (): number => randomInt(30, 5)

export const boardData: KanbanBoardData = [
  {
    title: 'New',
    items: generator.getArray(randomLength(), 'New'),
  },
  {
    title: 'Potential',
    items: generator.getArray(randomLength(), 'Potential'),
  },
  {
    title: 'Active',
    items: generator.getArray(randomLength(), 'Active'),
  },
  {
    title: 'Canceled',
    items: generator.getArray(randomLength(), 'Canceled'),
  },
]

export const boardDataMap = generator.map
