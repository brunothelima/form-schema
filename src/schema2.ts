import InputText from './InputText'
import { Form } from './types'

const schema: Form.Input[] = [
  {
    Input: InputText,
    field: { 
      label: 'Meu Nome',
    },
    attrs: {
      id: 'firstName',
      name: 'first_name',
      placeholder: 'Type your name here'
    }
  },
  {
    Input: InputText,
    field: {
      label: 'E-mail',
    },
    attrs: {
      id: 'emailInput',
      name: 'email',
      placeholder: 'ex: email@example.com'
    }
  }
]

export default schema