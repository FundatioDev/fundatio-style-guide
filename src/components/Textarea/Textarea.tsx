
import type { TextareaHTMLAttributes } from 'react'

import './Textarea.css'

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
}

function Textarea({
  error = false,
  className = '',
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={`textarea ${error ? 'textarea-error' : ''} ${className}`.trim()}
      aria-invalid={error || undefined}
      {...props}
    />
  )
}

export default Textarea
