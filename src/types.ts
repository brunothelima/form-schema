import { FormEvent, ElementType } from "react";

export interface InputType {
  Component: ElementType;
  attrs: InputAttrsType;
  field?: InputFieldType;
  validations: (string|ValidationType)[]
  value?: any,
}

export interface InputFieldType {
  infos?: string;
  label?: string;
}

export interface InputAttrsType {
  id?: string;
  name: string;
  placeholder?: string | number;
}

export interface ValidationType {
  (value: any): boolean
}

export interface DataType {
  [name: string]: string;
}

export interface ChangeEvent {
  (name: string, value: string): void
}

export interface SubmitEvent {
  (ev: FormEvent<HTMLFormElement>, data: DataType): void
}

export interface SuccessEvent {
  (data: DataType): void
}