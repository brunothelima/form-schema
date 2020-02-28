import React from 'react'
import { InputType } from './types'

interface PropsType extends InputType {
  children?: any
}

function InputText(props: PropsType) {
  return (
    <input {...props}/>
  )
}

export default InputText
