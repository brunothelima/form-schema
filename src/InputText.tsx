import React from 'react'
import { InputAttrsType, ChangeEvent } from './types'

interface PropsType extends InputAttrsType {
  onChange: ChangeEvent;
}

function InputText({ name, onChange }: PropsType) {
  return (
    <div className="Input">
      <input name={name} onChange={ev => onChange(name, ev.target.value)} />
    </div>
  )
}

export default InputText
