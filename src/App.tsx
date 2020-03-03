import React, { useState } from 'react'
import Form from './Form'
import schema1 from './schema1'
import schema2 from './schema2'
import './App.css'

function App() {

  const [schema, setSchema] = useState(schema1)

  // function sendData(data: DataType) {
  //   console.log('APP')
  //   console.log(data)
  // }

  return (
    <div className="App">
      <Form schema={schema}>
        <button>Send</button>
      </Form>
      <button onClick={() => setSchema(schema1)}>Form1</button>
      <button onClick={() => setSchema(schema2)}>Form2</button>
    </div>
  )
}

export default App
