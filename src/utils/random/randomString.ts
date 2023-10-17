export function randomString (characters: string, length: number): string {
  const result = new Array(length)
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    result[i] = characters[randomIndex]
  }
  return result.join('')
}
