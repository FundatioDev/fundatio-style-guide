
import './RadiusScale.css'

interface RadiusScaleProps {
  name: string
  value: string
}

function RadiusScale({ name, value }: RadiusScaleProps) {
  return (
    <article className="radius-scale">
      <div
        className="radius-scale-preview"
        style={{ borderRadius: `var(${name})` }}
        aria-hidden="true"
      />

      <div className="radius-scale-info">
        <span className="radius-scale-name">{name}</span>
        <span className="radius-scale-value">{value}</span>
      </div>
    </article>
  )
}

export default RadiusScale