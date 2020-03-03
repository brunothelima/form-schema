import React from 'react'

interface PropsType {
  id?: string;
  label?: string;
  children?: any;
}

function Field({ id, label, children }: PropsType) {
  return (
    <div className="Field">
      {label !== undefined &&
        <label htmlFor={id || ''}>
          {label}
        </label>
      }
      {children}
    </div>
  )
}

export default Field
