import React, { useState, useEffect } from 'react'
import Validations from './validations'
import Field from './Field'

import {
  DataType,
  InputType,
  ErrorsType,
  SubmitEvent,
  ChangeEvent,
  SuccessEvent,
} from './types'

interface PropsType {
  schema: InputType[];
  children?: any;
  onSuccess?: SuccessEvent;
}

function Form({ schema, children, onSuccess }: PropsType) {

  const [data, setData] = useState({} as DataType)
  const [errors, setErrors] = useState({} as ErrorsType)

  const onChange: ChangeEvent = (name, value) => {
    setData({ ...data, [name]: value })
  }

  const onSubmit: SubmitEvent = (ev, data) => {
    ev.preventDefault()

    setErrors({})

    for (const name in data) {
      const input = schema.find(input => input.attrs.name === name)

      if (input === undefined)
        continue
      
      if (input.validations === undefined)
        continue

      for (const validation of input.validations.values()) {

        let handler = !(validation.handler instanceof Function)
          ? Validations[validation.handler]
          : validation.handler

        if (!handler(data[name])) {
          setErrors(errors => {
            if (!errors[name]) errors[name] = []
            errors[name].push(validation.message)
            return errors
          })
        }
      }
    }
    
    if (Object.entries(errors).length) {
      if (onSuccess instanceof Function) {
        onSuccess(data)
      }
    }
  }

  useEffect(() => {
    setErrors({})
    setData(() => {
      const map = ({ attrs, value }: InputType) => ({ [attrs.name]: value || '' })
      const reduce = (last: DataType, next: DataType) => ({ ...last, ...next })
      return schema.map(map).reduce(reduce)
    })
  }, [schema])

  return (
    <form className="Form" onSubmit={ev => onSubmit(ev, data)}>
      {schema.map(({ Component, attrs, events, field }) =>
        <Field key={attrs.id} id={attrs.id} errors={errors[attrs.name]} {...field}>
          <Component {...attrs} 
            onChange={onChange}
            {...events} 
          />
        </Field>
      )}
      {children}
    </form>
  )
}

export default Form