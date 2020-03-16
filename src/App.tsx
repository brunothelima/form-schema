import React from 'react'
import Form from './Form'
import schema from './schema'

function App() {

  function onSuccess() {
    console.log('success')
  }

  return (
    <Form schema={schema} onSuccess={onSuccess}>
      <button>Send</button>
    </Form>
  )
}

export default App
