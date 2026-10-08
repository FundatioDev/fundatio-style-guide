
import './SpacingScale.css'

interface SpacingScaleProps {
  name: string
  value: string
}

function SpacingScale({ name, value }: SpacingScaleProps) {
  return (
    <article className="spacing-scale">
      <div className="spacing-scale-info">
        <span className="spacing-scale-name">{name}</span>
        <span className="spacing-scale-value">{value}</span>
      </div>

      <div className="spacing-scale-track">
        <div
          className="spacing-scale-bar"
          style={{ width: `var(${name})` }}
          aria-hidden="true"
        />
      </div>
    </article>
  )
}

export default SpacingScale