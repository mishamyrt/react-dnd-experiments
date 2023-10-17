export function randomInt (max: number, min = 0): number {
  const rangeMax = max - min
  return min + Math.floor(Math.random() * rangeMax)
}
