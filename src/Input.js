import React from 'react'
import useInput from './useInput'

function Input(props) {
  const { value, onChange } = useInput(props)
  
  return <input value={value || ''} onChange={onChange} />
}

export default Input
