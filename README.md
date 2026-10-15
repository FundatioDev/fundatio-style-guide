# FUNDATIO Style Guide

O FUNDATIO Style Guide é a base visual e técnica para os produtos digitais da FUNDATIO.

Este projeto não é um produto final. É uma fundação reutilizável que reúne princípios visuais, tokens, componentes e padrões que poderão ser adaptados aos futuros produtos.

**Fundamentos antes da forma.**

## Objetivo

Estabelecer uma linguagem visual consistente e componentes reutilizáveis para evitar reconstruir os mesmos fundamentos a cada novo projeto.

## Stack

* React
* TypeScript
* Vite
* CSS
* Google Fonts: Lora e Inter

## Estrutura

```text
src/
├── components/
│   ├── Button/
│   ├── Card/
│   ├── Field/
│   ├── Input/
│   ├── Textarea/
│   └── StyleGuide/
│       ├── ColorSwatch/
│       ├── RadiusScale/
│       ├── ShadowScale/
│       ├── SpacingScale/
│       └── TypographyScale/
├── styles/
│   ├── fonts.css
│   ├── globals.css
│   ├── playground.css
│   ├── reset.css
│   └── tokens.css
├── App.tsx
└── main.tsx
```

## Reutilização

Os componentes básicos e os estilos fornecem um ponto de partida para novos produtos. Cada produto pode adaptar essa fundação às suas necessidades sem precisar ter uma interface idêntica à dos demais.

Consulte [`ARCHITECTURE.md`](./ARCHITECTURE.md) para entender a separação entre os componentes reutilizáveis e os elementos específicos do Style Guide.

## Princípios

* **Clareza:** a interface deve ser compreensível antes de ser sofisticada.
* **Consistência:** decisões semelhantes devem produzir resultados semelhantes.
* **Propósito:** cada elemento deve existir por uma razão.
* **Reutilização:** fundamentos devem poder ser reaproveitados.
* **Acessibilidade:** considerar teclado, foco, contraste e semântica.
* **Evolução:** a base deve acompanhar as necessidades reais dos produtos.

## Desenvolvimento

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Verifique o código:

```bash
npm run lint
```

Gere a versão de produção:

```bash
npm run build
```

## Status

* **Versão:** 0.1
* **Estado:** fundação inicial em evolução

O projeto reúne a primeira base de tokens, componentes reutilizáveis e documentação visual. Novas melhorias devem acompanhar as necessidades dos produtos e os aprendizados de uso.

## Filosofia

O que precisamos estabelecer antes de começar a construir?

Fundamentos primeiro, componentes depois, produtos por último.

**Fundamentos antes da forma.**

# FUNDATIO UI

Biblioteca de componentes reutilizáveis da FUNDATIO, desenvolvida com React, TypeScript e CSS.

## Instalação

```bash
npm install @fundatio/ui
```

## Configuração

Importe os estilos da biblioteca no arquivo principal da aplicação:

```tsx
import '@fundatio/ui/style.css'
```

## Componentes disponíveis

- `Button` — botão com variantes e tamanhos.
- `Card` — cartão com cabeçalho, corpo e rodapé.
- `Field` — campo com label, descrição e mensagem de erro.
- `Input` — campo de entrada de dados.
- `Textarea` — campo de texto multilinha.

## Exemplo de uso

### Button

Botão reutilizável com variantes visuais e tamanhos configuráveis. Também aceita as propriedades nativas de um elemento HTML `<button>`.

**Importação**

```tsx
import { Button } from '@fundatio/ui'
```

**Propriedades**

| Propriedade | Tipo | Padrão | Descrição |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` | Variante visual do botão. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamanho do botão. |
| `children` | `ReactNode` | — | Conteúdo exibido no botão. |
| `className` | `string` | `''` | Classes CSS adicionais. |
| `disabled` | `boolean` | `false` | Desabilita a interação com o botão. |

Além dessas propriedades, o componente aceita os atributos nativos de `HTMLButtonElement`, como `type`, `onClick`, `aria-label` e `title`.

**Exemplos**

Botão padrão:

```tsx
<Button>Salvar</Button>
```

Variantes visuais:

```tsx
<Button variant="primary">Confirmar</Button>
<Button variant="secondary">Cancelar</Button>
<Button variant="ghost">Saiba mais</Button>
```

Tamanhos:

```tsx
<Button size="sm">Pequeno</Button>
<Button size="md">Médio</Button>
<Button size="lg">Grande</Button>
```

Desabilitado:

```tsx
<Button disabled>Indisponível</Button>
```

Com evento:

```tsx
<Button onClick={() => console.log('Clicado')}>
  Continuar
</Button>
```

### Input

Campo de entrada baseado no elemento HTML `<input>`, com suporte a estado de erro e atributos nativos.

**Importação**

```tsx
import { Input } from '@fundatio/ui'
```

**Propriedades específicas**

| Propriedade | Tipo | Padrão | Descrição |
|---|---|---|---|
| `error` | `boolean` | `false` | Ativa o estilo visual de erro e define `aria-invalid`. |
| `className` | `string` | `''` | Permite adicionar classes CSS. |

O componente também aceita as propriedades nativas de `HTMLInputElement`, como `type`, `placeholder`, `value`, `onChange`, `disabled` e `name`.

**Exemplos**

Campo básico:

```tsx
<Input placeholder="Digite seu nome" />
```

Campo de e-mail:

```tsx
<Input type="email" placeholder="Digite seu e-mail" />
```

Campo com erro:

```tsx
<Input
  type="email"
  placeholder="Digite seu e-mail"
  error
/>
```

Campo desabilitado:

```tsx
<Input placeholder="Indisponível" disabled />
```


### Textarea

Campo de texto multilinha baseado no elemento HTML `<textarea>`, com suporte a estado de erro e atributos nativos.

**Importação**

```tsx
import { Textarea } from '@fundatio/ui'
```

**Propriedades específicas**

| Propriedade | Tipo | Padrão | Descrição |
|---|---|---|---|
| `error` | `boolean` | `false` | Ativa o estilo visual de erro e define `aria-invalid`. |
| `className` | `string` | `''` | Permite adicionar classes CSS. |

O componente também aceita as propriedades nativas de `HTMLTextAreaElement`, como `placeholder`, `value`, `onChange`, `disabled`, `name`, `rows` e `maxLength`.

**Exemplos**

Campo básico:

```tsx
<Textarea placeholder="Digite sua mensagem" />
```

Com quantidade de linhas definida:

```tsx
<Textarea
  placeholder="Conte um pouco sobre você"
  rows={4}
/>
```

Campo com erro:

```tsx
<Textarea
  placeholder="Digite sua mensagem"
  error
/>
```

Campo desabilitado:

```tsx
<Textarea
  placeholder="Indisponível"
  disabled
/>
```


### Field

Componente que associa um rótulo a um campo de formulário e exibe uma descrição ou mensagem de erro. Também configura atributos de acessibilidade no controle filho.

**Importação**

```tsx
import { Field, Input } from '@fundatio/ui'
```

**Propriedades**

| Propriedade | Tipo | Obrigatória | Descrição |
|---|---|---|---|
| `label` | `string` | Sim | Texto do rótulo associado ao campo. |
| `name` | `string` | Sim | Nome usado para identificar o campo. |
| `description` | `string` | Não | Texto auxiliar exibido abaixo do campo. |
| `error` | `string` | Não | Mensagem de erro exibida abaixo do campo. |
| `children` | `ReactNode` | Não | Controle ou conteúdo exibido dentro do campo. |

**Exemplos**

Campo com descrição:

```tsx
<Field
  label="Nome"
  name="name"
  description="Informe seu nome completo."
>
  <Input placeholder="Digite seu nome" />
</Field>
```

Campo com erro:

```tsx
<Field
  label="E-mail"
  name="email"
  error="Informe um e-mail válido."
>
  <Input type="email" placeholder="Digite seu e-mail" />
</Field>
```

Campo sem controle filho explícito:

```tsx
<Field
  label="Observações"
  name="notes"
  description="Opcional"
 />
```

**Comportamento**

- Gera um `id` a partir de `name` e associa o `label` ao controle.
- Passa `name`, estado de erro e `aria-describedby` para um elemento filho válido.
- Exibe a mensagem de erro no lugar da descrição quando `error` é informado.
- Usa `role="alert"` na mensagem de erro.
- Se não houver `children`, renderiza um `Input` por padrão.

### Card

Componente de cartão composto por três seções opcionais: cabeçalho, corpo e rodapé. Cada seção pode receber conteúdo, classes CSS adicionais e atributos HTML nativos de `div`.

**Importação**

```tsx
import { Card, Button } from '@fundatio/ui'
```

**Componentes disponíveis**

| Componente | Descrição |
|---|---|
| `Card` | Contêiner principal do cartão. |
| `Card.Header` | Cabeçalho do cartão. |
| `Card.Body` | Conteúdo principal. |
| `Card.Footer` | Rodapé do cartão. |

**Propriedades**

`Card`, `Card.Header`, `Card.Body` e `Card.Footer` aceitam atributos nativos de `HTMLDivElement`, incluindo:

- `children` — conteúdo interno.
- `className` — classes CSS adicionais.
- `id`, `role`, `aria-label` e outros atributos HTML compatíveis.

**Exemplo completo**

```tsx
<Card>
  <Card.Header>
    <h2>Configurações</h2>
  </Card.Header>

  <Card.Body>
    <p>Gerencie as configurações da sua conta.</p>
  </Card.Body>

  <Card.Footer>
    <Button variant="secondary">Cancelar</Button>
    <Button>Salvar</Button>
  </Card.Footer>
</Card>
```

**Exemplo simples**

```tsx
<Card>
  <Card.Body>
    Conteúdo do cartão
  </Card.Body>
</Card>
```

As seções são opcionais e podem ser combinadas conforme a necessidade da interface.




## Tecnologias

- React
- TypeScript
- Vite
- CSS

## Licença

MIT
