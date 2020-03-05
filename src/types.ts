import { FormEvent, ElementType } from "react";

export interface InputType {
  Component: ElementType;
  attrs: InputAttrsType;
  field?: InputFieldType;
  validations: ValidationType[],
  value?: any,
}
export interface InputFieldType {
  infos?: string;
  label?: string;
  errors?: string[]
}
export interface InputAttrsType {
  id?: string;
  name: string;
  placeholder?: string | number;
}

export interface ValidationType {
  message: string,
  handler: string | ValidationHandlerType
}
export interface ValidationHandlerType {
  (value: any): boolean
}

export interface DataType {
  [inputName: string]: string;
}
export interface ErrorsType {
  [inputName: string]: string[];
}

export interface ChangeEvent {
  (inputName: string, value: string): void
}
export interface SubmitEvent {
  (ev: FormEvent<HTMLFormElement>, data: DataType): void
}
export interface SuccessEvent {
  (data: DataType): void
}