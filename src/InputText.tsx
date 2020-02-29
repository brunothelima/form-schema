import React, { ChangeEvent } from 'react'
import { Form } from './types'

type Ev = ChangeEvent<HTMLInputElement>

interface Props extends Form.Attrs {
  onChange: OnChange;
}

interface OnChange {
  (name: string, value: string): void
}

function InputText({ name, onChange }: Props) {
  return (
    <div className="Input">
      <input name={name} onChange={ev => onChange(name, ev.target.value)} />
    </div>
  )
}

export default InputText
