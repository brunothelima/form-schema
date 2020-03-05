import { FormEvent, ElementType } from "react";

export interface InputType {
  Component: ElementType;
  attrs: InputAttrsType;
  field?: InputFieldType;
  validations?: InputValidationType[],
  events?: InputEventsType,
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

export interface InputEventsType {
  onChange?: ChangeEvent;
  onFocus?: FocusEvent;
  onBlur?: BlurEvent;
}

export interface InputValidationType {
  message: string,
  handler: string | InputValidationHandlerType
}
export interface InputValidationHandlerType {
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
export interface FocusEvent {
  (inputName: string, value: string): void
}
export interface BlurEvent {
  (inputName: string, value: string): void
}

export interface SubmitEvent {
  (ev: FormEvent<HTMLFormElement>, data: DataType): void
}
export interface SuccessEvent {
  (data: DataType): void
}