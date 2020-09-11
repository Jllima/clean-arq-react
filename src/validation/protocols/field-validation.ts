export interface FieldValidation {
  validate(field: string, value: string): Error
}
