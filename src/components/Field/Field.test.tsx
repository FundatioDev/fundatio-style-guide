
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Field from './Field'
import Input from '../Input/Input'

describe('Field', () => {
  it('deve renderizar o label e o campo associado', () => {
    render(
      <Field label="Nome" name="name">
        <Input placeholder="Digite seu nome" />
      </Field>,
    )

    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
  })

  it('deve exibir a mensagem de erro quando informada', () => {
    render(
      <Field label="E-mail" name="email" error="E-mail inválido">
        <Input placeholder="Digite seu e-mail" />
      </Field>,
    )

    expect(screen.getByText('E-mail inválido')).toBeInTheDocument()
  })
})
