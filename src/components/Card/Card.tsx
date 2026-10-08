import type {
  HTMLAttributes,
  ReactElement,
} from 'react'

import './Card.css'

type CardSectionProps = HTMLAttributes<HTMLDivElement>

function CardHeader({
  children,
  className = '',
  ...props
}: CardSectionProps) {
  return (
    <div
      className={`card-header ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

function CardBody({
  children,
  className = '',
  ...props
}: CardSectionProps) {
  return (
    <div
      className={`card-body ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

function CardFooter({
  children,
  className = '',
  ...props
}: CardSectionProps) {
  return (
    <div
      className={`card-footer ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

type CardProps = HTMLAttributes<HTMLDivElement>

type CardComponent = (
  (props: CardProps) => ReactElement
) & {
  Header: typeof CardHeader
  Body: typeof CardBody
  Footer: typeof CardFooter
}

const Card: CardComponent = Object.assign(
  function Card({
    children,
    className = '',
    ...props
  }: CardProps) {
    return (
      <div
        className={`card ${className}`.trim()}
        {...props}
      >
        {children}
      </div>
    )
  },
  {
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter,
  },
)

export default Card