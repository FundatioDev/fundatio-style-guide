
import { useEffect, useState } from 'react'
import './ColorSwatch.css'

interface ColorSwatchProps {
  name: string
  token: string
}

function ColorSwatch({ name, token }: ColorSwatchProps) {
  const [value, setValue] = useState('')

  useEffect(() => {
    const cssValue = getComputedStyle(document.documentElement)
      .getPropertyValue(token)
      .trim()

    setValue(cssValue)
  }, [token])

  return (
    <article className="color-swatch">
      <div
        className="color-swatch-preview"
        style={{ backgroundColor: `var(${token})` }}
        aria-hidden="true"
      />

      <div className="color-swatch-info">
        <p className="color-swatch-name">{name}</p>
        <p className="color-swatch-token">{token}</p>
        <p className="color-swatch-value">
          {value || 'Carregando cor...'}
        </p>
      </div>
    </article>
  )
}

export default ColorSwatch