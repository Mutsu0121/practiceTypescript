export default function genericAdvanceSample() {
  //map関数のシグネチャ
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const transNumber = (item: string) => Number(item)

  const numbers = mapStringsToNumbers(['123', '456', '789'], transNumber)
  console.log('Generics advanced sample 1:', numbers)
}
