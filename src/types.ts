import { FormEvent, ElementType } from "react";

export namespace Form {
  
  export interface Input {
    Input: ElementType;
    attrs: Attrs;
    field?: Field;
    value?: any,
  }

  export interface Field {
    infos?: string;
    label?: string;
  }

  export interface Attrs {
    id?: string;
    name: string;
    placeholder?: string | number;
  }

  export interface Data {
    [name: string]: string;
  }

  export interface Submit {
    (ev: FormEvent<HTMLFormElement>, data: Data): void
  }
}
