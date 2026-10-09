
import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react'

import Input from '../Input/Input'
import './Field.css'

interface FieldProps {
  label: string
  name: string
  description?: string
  error?: string
  children?: ReactNode
}

interface FieldControlProps {
  id?: string
  name?: string
  error?: boolean
  'aria-describedby'?: string
  'aria-invalid'?: boolean
}

function Field({
  label,
  name,
  description,
  error,
  children,
}: FieldProps) {
  const inputId = `field-${name}`
  const messageId = `${inputId}-message`
  const message = error || description

  const control = isValidElement(children)
    ? cloneElement(
        children as ReactElement<FieldControlProps>,
        {
          id: inputId,
          name,
          error: Boolean(error),
          'aria-describedby': message ? messageId : undefined,
          'aria-invalid': error ? true : undefined,
        },
      )
    : children ?? (
        <Input
          id={inputId}
          name={name}
          error={Boolean(error)}
          aria-describedby={message ? messageId : undefined}
          aria-invalid={error ? true : undefined}
        />
      )

  return (
    <div className="field">
      <label className="field-label" htmlFor={inputId}>
        {label}
      </label>

      {control}

      {message && (
        <p
          id={messageId}
          className={`field-message ${error ? 'field-error' : ''}`}
          role={error ? 'alert' : undefined}
        >
          {message}
        </p>
      )}
    </div>
  )
}

export default Field
