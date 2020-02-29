import React, { useState, useEffect } from 'react'
import { Form } from './types'
import Field from './Field'

interface Props {
  children?: any;
  schema: Form.Input[];
  onSubmit: Form.Submit;
}

export default function ({schema, children, onSubmit}: Props) {

  const [data, setData] = useState({} as Form.Data) 

  function onChange(name: string, value: any) {
    setData({...data, [name]: value})
  }

  useEffect(() => {
    const map = ({attrs, value}: Form.Input) => {
      return { [attrs.name]: value || '' }
    }
    const reduce = (last: Form.Data, next: Form.Data) => {
      return { ...last, ...next }
    }
    setData(schema.map(map).reduce(reduce))
  }, [schema])

  return (
    <form className="Form" onSubmit={ev => onSubmit(ev, data)}>
      {schema.map(({Input, attrs, field}) => 
        <Field key={attrs.id} id={attrs.id} {...field} >
          <Input {...attrs} onChange={onChange} />
        </Field>
      )}
      {children}
    </form>
  )
}
