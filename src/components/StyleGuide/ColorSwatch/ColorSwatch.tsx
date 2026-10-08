import { useState } from 'react'

import './ColorSwatch.css'

interface ColorSwatchProps {
  name: string
  token: string
}

function ColorSwatch({
  name,
  token,
}: ColorSwatchProps) {
  const [value] = useState(() =>
    getComputedStyle(document.documentElement)
      .getPropertyValue(token)
      .trim(),
  )

  return (
    <div className="color-swatch">
      <div
        className="color-swatch-preview"
        style={{
          backgroundColor: `var(${token})`,
        }}
      />

      <div className="color-swatch-info">
        <strong>{name}</strong>
        <span>{token}</span>
        <span>{value}</span>
      </div>
    </div>
  )
}

export default ColorSwatch