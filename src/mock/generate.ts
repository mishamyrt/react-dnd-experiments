import { randomItem, randomString } from '$utils'

import { names } from './constants'
import type { KanbanCardData, KanbanCardStatus } from './types'

const randomPhone = (): string => randomString('0123456789', 10)
const randomName = (): string => randomItem(names)

export class CardDataGenerator {
  public map = new Map<string, KanbanCardData>()

  public get (status: KanbanCardStatus): KanbanCardData {
    const name = `${randomName()} ${randomName()}`
    const phone = randomPhone()
    const key = `${name}-${phone}`
    if (this.map.has(key)) {
      return this.get(status)
    }
    const item = { name, phone, key, status }
    this.map.set(item.key, item)
    return item
  }

  public getArray (count: number, status: KanbanCardStatus): KanbanCardData[] {
    const items: KanbanCardData[] = new Array(count)
    for (let i = 0; i < count; i++) {
      items[i] = this.get(status)
    }
    return items
  }
}
