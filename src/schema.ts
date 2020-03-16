import { Schema, ValidationHandler } from "./types"

const emailCheck: ValidationHandler = value => {
  var regex = /^([^.@]+)(\.[^.@]+)*@([^.@]+\.)+([^.@]+)$/
  return regex.test(String(value).toLowerCase())
}

const schema: Schema =  {
  name: {
    id: 'nameID',
    className: 'asdasd',
    events: {
      onChange: (ev, { dispatch }) => {
        dispatch && dispatch(schema => {
          schema['email'].value = ev.target.value
          return { ...schema }
        })
      },
    },
    validations: {
      required: 'Required Input',
    },
  },
  email: {
    id: 'emailID',
    validations: {
      required: 'Required Input',
      email: {
        handler: emailCheck,
        message: 'Invalid e-mail'
      }
    }
  },
}

export default schema