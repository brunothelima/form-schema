import React from 'react'
import { useInput } from './useInput'
import { Input } from './types'

interface Props extends Input {
  name: string
}

function InputText(props: Props) {
  const { value, onChange } = useInput(props)

  return <input name={props.name} value={value || ''} onChange={onChange} />
}

export default InputText
