import React from 'react'

interface PropsType {
  label?: string;
  htmlFor?: string;
  children?: any;
}

function Field({ htmlFor, label, children }: PropsType) {

  return (
    <div className="Field"> 
      {!!label && <label htmlFor={htmlFor}>{label}</label>}
      {children}
    </div>
  )
}

export default Field
