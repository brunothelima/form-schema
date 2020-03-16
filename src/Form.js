import React, { useState } from 'react'
import Validations from './validations'
import Input from './Input'

function Form(props) {

  const [schema, dispatch] = useState(props.schema)

  function validate() {
    
    for (const name in schema) {
      const { validations } = schema[name]

      if (validations === undefined)
        continue

      schema[name].errors = []
      
      for (const validation in validations) {        
        const current = validations[validation]
        const handler = !current.handler ? Validations[validation] : current.handler
        const message = !current.message ? validations[validation] : current.message
        
        if (!handler(schema[name].value)) {
          dispatch(schema => {
            schema[name].errors.push(message)
            return { ...schema }
          })
        }
      }
    }

    return !Object.keys(schema).find(name => schema[name].errors.length > 0)
  }

  function onSubmit(ev) {    
    ev.preventDefault()
  
    if (!validate()) 
      return 

    props.onSuccess
      && props.onSuccess(ev)
  }
  
  return (
    <form onSubmit={onSubmit}>
      {JSON.stringify(schema)}
      {Object.keys(schema).map(name =>
        <div className="field" key={schema[name].id}>
          <Input name={name} {...schema[name]} dispatch={dispatch} />
        </div>
      )}
      {props.children}
    </form>
  )
}

export default Form
