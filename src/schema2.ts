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
      label: 'Nome',      
    },
    attrs: {
      id: 'firstName2',
      name: 'first_name2',
      placeholder: 'Type your name here'
    },
    validations: [
      { handler: 'required', message: 'Required Input' },
    ]
  },
  {
    Component: InputText,
    field: {
      label: 'E-mail',
    },
    attrs: {
      id: 'emailInput2',
      name: 'email2',
      placeholder: 'ex: email@example.com'
    },
    validations: [
      { handler: 'required', message: 'Required Input' },
      { handler: emailCheck, message: 'Invalid e-mail' }
    ]
  }
]

export default schema