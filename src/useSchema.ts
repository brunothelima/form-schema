import { useState, useMemo } from 'react'
import { Schema, Validation } from './types'
import Validations from './validations'

export const useSchema = (source: Schema) => {

  const [schema, dispatch] = useState(source)
  
  const data = useMemo(() => {
    return Object.keys(schema)
      .map(name => ({ [name]: schema[name]?.value }))
      .reduce((prev, next) => ({ ...prev, ...next }))
  }, [schema])

  const errors = useMemo(() => {
    return Object.keys(schema)
      .filter(name => !!schema[name]?.errors?.length)
      .map(name => ({ [name]: schema[name]?.errors }))
      .reduce((prev, next) => ({ ...prev, ...next }), {})
  }, [schema])

  const validate = () => dispatch(schema => {

    for (const name in schema) {
      const { validations, value } = schema[name]

      schema[name].errors = []

      for (const validation in validations) {

        const v = validations[validation] as Validation
        const handler = v.handler ? v.handler : Validations[validation]
        const message = v.message ? v.message : v

        if (!handler(value)) {
          schema[name].errors?.push(message as string)
        }
      }
    }

    return { ...schema }
  })

  return {
    schema,
    data,
    errors,
    dispatch,
    validate,
  }
}