import React from 'react'
import { InputType } from './types'
import Field from './Field'

interface PropsType {
  schema: InputType[],
  children?: any
}

function Form({ schema, children }: PropsType) {
  return (
    <div className="Form">
      {schema.map(input =>
        <Field key={input.id} htmlFor={input.id} label={input.label} >
          <input.tag {...input} />
        </Field>
      )}
      {children}
    </div>
  )
}

export default Form
