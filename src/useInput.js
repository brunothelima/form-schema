
export default function useInput(input) {

  const { name, value, events, dispatch } = input
  
  function onChange(ev) {
    ev.persist()
  
    dispatch && dispatch(schema => {
      schema[name].value = ev.target.value
      return { ...schema }
    })
  
    events?.onChange 
      && events.onChange(ev, input)
  }

  return {
    value,
    onChange
  }
}
