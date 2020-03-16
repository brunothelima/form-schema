import { ChangeEvent } from 'react'
import { Input } from './types'

interface UseInput extends Input {
  name: string;
}

export const useInput = (input: UseInput) => {

  const { name, value, events, dispatch } = input
  
  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.persist()
  
    dispatch && dispatch(schema => {
      schema[name].value = ev.target.value
      return { ...schema }
    })
  
    events?.onChange 
      && events.onChange(ev, input)
  }

  return {
    value,
    onChange
  }
}
