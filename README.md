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
