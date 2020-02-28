import React from 'react'
import Form from './Form'
import schema from './schema'
import './App.css'

function App() {
  return (
    <div className="App">
      <Form schema={schema}>
        <button>Send</button>
      </Form>
    </div>
  )
}

export default App
