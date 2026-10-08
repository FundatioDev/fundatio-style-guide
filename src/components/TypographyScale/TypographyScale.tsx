
import { useEffect, useState } from 'react'
import './TypographyScale.css'

interface TypographyScaleProps {
  name: string
  sample: string
}

function TypographyScale({ name, sample }: TypographyScaleProps) {
  const [value, setValue] = useState('')

  useEffect(() => {
    const cssValue = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim()

    setValue(cssValue)
  }, [name])

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