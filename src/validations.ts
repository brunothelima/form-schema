import { ValidationHandler } from "./types"

export const required: ValidationHandler = value => {
  return value !== undefined && value !== '' && value !== null
} 

export default {
  required
} as {
  [validationName: string]: ValidationHandler 
}