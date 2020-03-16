import { useState } from 'react'
import { Schema } from './types'
import Validations from './validations'

export const useSchema = (source: Schema) => {

  const [schema, dispatch] = useState(source)

  const hasError = () => {
    return !!Object.keys(schema).filter(name => schema[name].errors?.length)
  } 

  const validate = () => dispatch(schema => {

    for (const name in schema) {
      const { validations, value } = schema[name]

      schema[name].errors = []

      for (const validation in validations) {
        
        const current = validations[validation]
        
        const message = (current instanceof Object)
          ? current.message
          : current 
        
        const handler = !(current instanceof Object)
          ? Validations[validation]
          : current.handler

        if (!handler(value)) {
          schema[name].errors?.push(message)
        }
      }
    }

    return { ...schema }
  })

  return {
    schema,
    dispatch,
    validate,
    hasError
  }
}