import React from 'react'
import Form from './Form'
import schema from './schema'
import { Data } from './types'

function App() {

  function onSuccess(data: Data) {
    console.log(data)
  }

  return (
    <Form schema={schema} onSuccess={onSuccess}>
      <button>Send</button>
    </Form>
  )
}

export default App
