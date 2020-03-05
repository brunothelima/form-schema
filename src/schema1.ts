import InputText from './InputText'
import { InputType } from './types'

const emailCheck = (value: string) => {
  var regex = /^([^.@]+)(\.[^.@]+)*@([^.@]+\.)+([^.@]+)$/
  return regex.test(String(value).toLowerCase())
}

const schema: InputType[] = [
  {
    Component: InputText,
    field: { 
      label: 'First Name',      
    },
    attrs: {
      id: 'firstName',
      name: 'first_name',
      placeholder: 'Type your name here'
    },
    validations: [
      { handler: 'required', message: 'Required Input' },
    ],
  },
  {
    Component: InputText,
    field: {
      label: 'E-mail',
    },
    attrs: {
      id: 'emailInput',
      name: 'email',
      placeholder: 'ex: email@example.com'
    },
    validations: [
      { handler: 'required', message: 'Required Input' },
      { handler: emailCheck, message: 'Invalid e-mail' }
    ]
  }
]

export default schema