import { ValidationHandlerType } from "./types";

export const required: ValidationHandlerType = (value: any) => {
  return value !== undefined && value !== '' && value !== null
} 

export default {
  required
} as { [validation: string]: ValidationHandlerType }