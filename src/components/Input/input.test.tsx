
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Input from './Input'

describe('Input', () => {
  it('deve renderizar um campo de entrada', () => {
    render(<Input placeholder="Digite seu nome" />)

    expect(
      screen.getByPlaceholderText('Digite seu nome'),
    ).toBeInTheDocument()
  })

  it('deve respeitar a propriedade disabled', () => {
    render(<Input disabled placeholder="Campo desabilitado" />)

    expect(
      screen.getByPlaceholderText('Campo desabilitado'),
    ).toBeDisabled()
  })
})
