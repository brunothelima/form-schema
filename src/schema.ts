import { InputType } from './types'
import InputText from './InputText'

const schema: InputType[] = [
  {
    id: 'firstNameInput',
    tag: InputText,
    name: 'first_name',
    label: 'First Name',
    value: ''
  },
  {
    id: 'emailInput',
    tag: InputText,
    name: 'email',
    label: 'E-mail',
    value: ''
  }
]

export default schema