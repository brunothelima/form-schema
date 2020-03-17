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

  const { schema, dispatch, validate, errors, data } = useSchema(props.schema)
  const onSubmit: FormSubmitEvent = ev => {
    ev.preventDefault()

    validate()

    if (!Object.keys(errors).length) {
      props.onSuccess && props.onSuccess(data)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      {JSON.stringify(errors)}
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
