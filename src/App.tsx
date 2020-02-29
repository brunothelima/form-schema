import React, { useState, FormEvent } from 'react'
import { Form } from './types'
import FormComponent from './Form'
import schema1 from './schema1'
import schema2 from './schema2'
import './App.css'

function App() {

  const [schema, setSchema] = useState(schema1)

  function onSubmit(ev: FormEvent<HTMLFormElement>, data: Form.Data) {
    ev.preventDefault()
    console.log(data)
  }
  
  return (
    <div className="App">
      <FormComponent schema={schema} onSubmit={onSubmit}>
        <button>Send</button>
      </FormComponent>
      <button onClick={() => setSchema(schema1)}>Form1</button>
      <button onClick={() => setSchema(schema2)}>Form2</button>
    </div>
  )
}

export default App
