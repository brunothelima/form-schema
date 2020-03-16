const emailCheck = (value) => {
  var regex = /^([^.@]+)(\.[^.@]+)*@([^.@]+\.)+([^.@]+)$/
  return regex.test(String(value).toLowerCase())
}

export default {
  name: {
    id: 'nameID',
    className: 'asdasd',
    events: {
      onChange: (ev, { dispatch }) => {
        const { value } = ev.target
        dispatch(schema => {
          schema.email.value = value
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