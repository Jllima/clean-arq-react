export class MinLengthFieldError extends Error {
  constructor (readonly fieldName: string, readonly numLength: number) {
    super(`${fieldName} deve possui pelo menos ${numLength} caracteres`)
  }
}
