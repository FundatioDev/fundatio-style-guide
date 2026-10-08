
import { useState } from 'react'
import './TypographyScale.css'

interface TypographyScaleProps {
  name: string
  sample: string
}

function TypographyScale({ name, sample }: TypographyScaleProps) {
  const [value] = useState(() =>
   getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim(),
  )

  

  return (
    <article className="typography-scale">
      <div className="typography-scale-info">
        <span className="typography-scale-name">{name}</span>
        <span className="typography-scale-value">
          {value || 'Carregando...'}
        </span>
      </div>

      <p
        className="typography-scale-sample"
        style={{ fontSize: `var(${name})` }}
      >
        {sample}
      </p>
    </article>
  )
}

export default TypographyScale