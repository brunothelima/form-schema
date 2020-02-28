import { ElementType } from "react";

export interface InputType {
  id?: string;
  tag: ElementType;
  name: string;
  label?: string;
  value?: string | number;
}