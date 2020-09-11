export class InvalidFieldError extends Error {
  constructor (readonly fieldName: string) {
    super(`${fieldName} é invalido!`)
  }
}
