
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Button from './Button'

describe('Button', () => {
  it('deve renderizar o texto recebido', () => {
    render(<Button>Confirmar</Button>)

    expect(
      screen.getByRole('button', { name: 'Confirmar' }),
    ).toBeInTheDocument()
  })

  it('deve respeitar a propriedade disabled', () => {
    render(<Button disabled>Salvar</Button>)

    expect(
      screen.getByRole('button', { name: 'Salvar' }),
    ).toBeDisabled()
  })
})
