
import './ShadowScale.css'

interface ShadowScaleProps {
  name: string
  value: string
}

function ShadowScale({ name, value }: ShadowScaleProps) {
  return (
    <article className="shadow-scale">
      <div
        className="shadow-scale-preview"
        style={{ boxShadow: `var(${name})` }}
        aria-hidden="true"
      />

      <div className="shadow-scale-info">
        <span className="shadow-scale-name">{name}</span>
        <span className="shadow-scale-value">{value}</span>
      </div>
    </article>
  )
}

export default ShadowScale