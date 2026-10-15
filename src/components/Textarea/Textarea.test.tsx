
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Textarea from './Textarea'

describe('Textarea', () => {
  it('deve renderizar o campo com o placeholder informado', () => {
    render(<Textarea placeholder="Digite sua mensagem" />)

    expect(
      screen.getByPlaceholderText('Digite sua mensagem'),
    ).toBeInTheDocument()
  })

  it('deve respeitar a propriedade disabled', () => {
    render(<Textarea disabled placeholder="Campo desabilitado" />)

    expect(
      screen.getByPlaceholderText('Campo desabilitado'),
    ).toBeDisabled()
  })
})
