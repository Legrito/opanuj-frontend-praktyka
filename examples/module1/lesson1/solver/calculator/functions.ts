export function add(a: number, b:number): number {
  return a + b;
}
export function subtract(a: number, b:number): number {
  return a - b;
}
export function multiply(a: number, b:number): number {
  return a * b;
}

export function divide(a: number, b:number): number {
  return a / b;
}

export const functionMap: Record<string, FunctionT> = {
  ['+']: add,
  ['-']: subtract,
  ['*']: multiply,
  ['/']: divide
}

export type FunctionT = (a: number, b: number) => number;
