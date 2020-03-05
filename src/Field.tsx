import React from 'react'
import { InputFieldType } from './types'

interface PropsType extends InputFieldType {
  id?: string,
  children?: any;
}

function Field({ id, label, errors, children }: PropsType) {
  return (
    <div className="Field">
      {label !== undefined &&
        <label htmlFor={id || ''}>
          {label}
        </label>
      }
      {children}
      {errors?.length && 
        <ul className="Field__errors">
          {errors?.map((error, index) => 
            <li key={`${id}_${index}`}>{error}</li>
          )}
        </ul>
      }
    </div>
  )
}

export default Field
