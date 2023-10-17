import { randomInt } from './randomInt'

export function randomItem<T> (arr: T[]): T {
  return arr[randomInt(arr.length)]
}
