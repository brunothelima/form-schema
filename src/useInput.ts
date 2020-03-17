import { ChangeEvent } from 'react'
import { Input, FormElements } from './types'

interface UseInputArgs extends Input {
  name: string;
}

export const useInput = (input: UseInputArgs) => {

  const { name, value, events, dispatch } = input
  
  const onChange = (ev: ChangeEvent<FormElements>) => {
    ev.persist()
  
    dispatch && dispatch(schema => {
      schema[name].value = ev.target.value
      return { ...schema }
    })
  
    events?.onChange && events.onChange(ev, input)
  }

  return {
    value,
    onChange
  }
}
