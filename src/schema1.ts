import InputText from './InputText'
import { InputType, ValidationType } from './types'

const email: ValidationType = (value: string) => {
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
      'required'
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
      'required',
      email
    ]
  }
]

export default schema