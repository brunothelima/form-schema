import React from 'react'
import { useSchema } from './useSchema'
import { Schema, FormSubmitEvent, FormSuccessEvent } from './types'
import InputText from './InputText'

interface Props {
  children: any;
  schema: Schema;
  onSuccess: FormSuccessEvent;
}

function Form(props: Props) {

  const { schema, dispatch, validate, hasError } = useSchema(props.schema)

  const onSubmit: FormSubmitEvent = ev => {
    ev.preventDefault()

    validate()

    if (hasError())
      return

    props.onSuccess
      && props.onSuccess(ev)
  }

  return (
    <form onSubmit={onSubmit}>
      {JSON.stringify(schema)}
      {Object.keys(schema).map(name =>
        <div className="field" key={name}>
          <InputText name={name} {...schema[name]} dispatch={dispatch} />
        </div>
      )}
      {props.children}
    </form>
  )
}

export default Form
