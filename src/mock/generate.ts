import { randomItem, randomString } from '$utils'
import { names } from './constants'
import { type KanbanCardData } from './types'

const randomPhone = (): string => randomString('0123456789', 10)
const randomName = (): string => randomItem(names)

export class CardDataGenerator {
  public map = new Map<string, KanbanCardData>()

  public get (): KanbanCardData {
    const name = randomName()
    const phone = randomPhone()
    const key = `${name}-${phone}`
    if (this.map.has(key)) {
      return this.get()
    }
    const item = { name, phone, key }
    this.map.set(item.key, item)
    return item
  }

  public getArray (count: number): KanbanCardData[] {
    const items: KanbanCardData[] = new Array(count)
    for (let i = 0; i < count; i++) {
      items[i] = this.get()
    }
    return items
  }
}
