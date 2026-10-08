import type { InputHTMLAttributes } from 'react'

import './Input.css'

interface InputProps
extends InputHTMLAttributes<HTMLInputElement> {
error?: boolean
}

function Input({
error = false,
className = '',
...props
}: InputProps) {
return (
<input
className={`input ${error ? 'input-error' : ''} ${className}`.trim()}
aria-invalid={error || undefined}
{...props}
/>
)
}

export default Input
