import React, { useState, useEffect } from 'react'
import * as Validations from './validations'
import Field from './Field'

import { 
  InputType, 
  DataType, 
  SubmitEvent, 
  ChangeEvent, 
  SuccessEvent 
} from './types'

interface PropsType {
  schema: InputType[];
  children?: any;
  onSuccess?: SuccessEvent;
}

function Form ({ schema, children, onSuccess }: PropsType) {

  const [data, setData] = useState({} as DataType)

  const onChange: ChangeEvent = (name, value) => {
    setData({ ...data, [name]: value })
  }

  const onSubmit: SubmitEvent = (ev, data) => {
    ev.preventDefault()
    
    for (const input of schema.values()) {
    }
    

    if (onSuccess instanceof Function) {
      onSuccess(data)
    }
  }

  useEffect(() => {
    setData(() => {
      const map = ({ attrs, value }: InputType) => ({ [attrs.name]: value || '' })
      const reduce = (last: DataType, next: DataType) => ({ ...last, ...next })
      return schema.map(map).reduce(reduce)
    })
  }, [schema])

  return (
    <form className="Form" onSubmit={ev => onSubmit(ev, data)}>
      {JSON.stringify(data)}
      {schema.map(({ Component, attrs, field }) =>
        <Field key={attrs.id} id={attrs.id} {...field} >
          <Component {...attrs} onChange={onChange} />
        </Field>
      )}
      {children}
    </form>
  )
}

export default Form