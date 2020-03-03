import { ValidationType } from "./types";

export const required: ValidationType = (value: any) => {
  return value !== undefined && value !== '' && value !== null
} 