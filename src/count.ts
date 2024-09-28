export const add = (a: number, b: number): number => {
  return a + b
}

export const addAsync = async (a: number, b: number): Promise<number> => {
  const res = a + b
  return res
}
