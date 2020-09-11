export class MinLengthFieldError extends Error {
  constructor (readonly fieldName: string) {
    super(`${fieldName} deve possui pelo menos 6 caracteres`)
  }
}
