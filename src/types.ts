import { FormEvent, ChangeEvent, Dispatch, SetStateAction } from 'react'

export interface Schema {
  [inputName: string]: Input
}

export interface Input {
  id?: string;
  value?: any;
  errors?: string[];
  events?: Events;
  className?: string;
  validations?: Validations;
  dispatch?: Dispatch<SetStateAction<Schema>>;
}

export interface Events extends InputEvents { }
export interface InputEvents {
  onChange: InputChangeEvent
}
export interface InputChangeEvent {
  (ev: ChangeEvent<FormElements>, input: Input): void
}

export interface Validations {
  [validationName: string]: Validation | string;
}
export interface Validation {
  handler: ValidationHandler;
  message: string;
}
export interface ValidationHandler {
  (value: any): boolean
}

export type FormElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

export interface FormSubmitEvent {
  (ev: FormEvent<HTMLFormElement>): void;
}
export interface FormSuccessEvent {
  (data: Data): void;
}

export interface Data {
  [inputName: string]: any;
}
