import { InputValidationHandlerType } from "./types";

export const required: InputValidationHandlerType = (value: any) => {
  return value !== undefined && value !== '' && value !== null
} 

interface ValidationsType {
  [validation: string]: InputValidationHandlerType
}

export default {
  required
} as ValidationsType