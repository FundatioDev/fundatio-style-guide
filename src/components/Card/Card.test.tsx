
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Card from './Card'

describe('Card', () => {
  it('deve renderizar o conteúdo recebido', () => {
    render(
      <Card>
        <Card.Body>Conteúdo do cartão</Card.Body>
      </Card>,
    )

    expect(screen.getByText('Conteúdo do cartão')).toBeInTheDocument()
  })

  it('deve renderizar cabeçalho, corpo e rodapé', () => {
    render(
      <Card>
        <Card.Header>Cabeçalho</Card.Header>
        <Card.Body>Corpo</Card.Body>
        <Card.Footer>Rodapé</Card.Footer>
      </Card>,
    )

    expect(screen.getByText('Cabeçalho')).toBeInTheDocument()
    expect(screen.getByText('Corpo')).toBeInTheDocument()
    expect(screen.getByText('Rodapé')).toBeInTheDocument()
  })
})
