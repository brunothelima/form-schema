import React from 'react'
import { InputAttrsType, InputEventsType } from './types'

interface PropsType extends InputAttrsType, InputEventsType {}

function InputText({ name, onChange, onFocus, onBlur }: PropsType) {
  return (
    <div className="Input">
      <input name={name} 
        onBlur={ev => onBlur && onBlur(name, ev.target.value)} 
        onFocus={ev => onFocus && onFocus(name, ev.target.value)} 
        onChange={ev => onChange && onChange(name, ev.target.value)} 
      />
    </div>
  )
}

export default InputText
