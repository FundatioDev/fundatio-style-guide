FUNDATIO Style Guide
O FUNDATIO Style Guide é a base visual e técnica para os produtos digitais da FUNDATIO.

Este projeto não foi criado como um produto final. Ele funciona como uma fundação reutilizável, onde definimos os princípios visuais, tokens, componentes e padrões que poderão ser utilizados e adaptados em futuros produtos.

A ideia é simples:

Fundamentos antes da forma.

Antes de construir um novo produto, estabelecemos aqui uma linguagem visual consistente. Cada novo projeto pode partir dessa base em vez de reconstruir esses fundamentos do zero.


Objetivo
O Style Guide centraliza:

fundamentos visuais;
cores;
tipografia;
espaçamento;
border radius;
sombras;
componentes reutilizáveis;
padrões de formulários;
estados e comportamentos básicos;
decisões de acessibilidade;
padrões que poderão evoluir junto com os produtos.

Ele deve funcionar como uma referência prática para construção dos próximos projetos da FUNDATIO.


Arquitetura
O projeto foi construído com:

React
TypeScript
Vite
CSS
Google Fonts
Lora
Inter

A estrutura foi organizada para que componentes e estilos possam ser reutilizados e adaptados em outros produtos.

src/

├── components/

│   ├── Button/

│   ├── Card/

│   ├── Field/

│   ├── Input/

│   ├── Textarea/

│   ├── ColorSwatch/

│   ├── SpacingScale/

│   ├── RadiusScale/

│   ├── ShadowScale/

│   └── TypographyScale/

│

├── styles/

│   ├── tokens.css

│   ├── reset.css

│   ├── globals.css

│   └── playground.css

│

├── App.tsx

└── main.tsx


Tokens
Os tokens são a base da linguagem visual.

Eles centralizam decisões como:

cores;
tamanhos tipográficos;
pesos de fonte;
espaçamentos;
border radius;
sombras;
transições.

Isso permite que os produtos compartilhem uma mesma linguagem sem depender de valores espalhados pelo código.


Componentes
Os componentes deste projeto foram construídos pensando em reutilização.

Entre eles:

Button
Card
Input
Field
Textarea

Também existem componentes específicos para documentar os próprios fundamentos:

ColorSwatch
TypographyScale
SpacingScale
RadiusScale
ShadowScale


Relação com futuros produtos
Este projeto deve ser tratado como uma base, não como um projeto isolado.

Um futuro produto da FUNDATIO poderá reutilizar:

FUNDATIO Style Guide

        ↓

   tokens + componentes

        ↓

   novo produto

        ↓

adaptações específicas

Por exemplo, um produto como o Salmorize poderá utilizar esta fundação e desenvolver sobre ela sua própria identidade e necessidades específicas.

A intenção é evitar dois extremos:

reconstruir tudo do zero em cada produto;
obrigar todos os produtos a serem visualmente idênticos.

O Style Guide fornece a fundação. Cada produto pode construir sobre ela.


Princípios
O desenvolvimento deste Style Guide segue alguns princípios:
Clareza
A interface deve ser compreensível antes de ser sofisticada.
Consistência
Decisões semelhantes devem produzir resultados semelhantes.
Propósito
Cada elemento deve existir por uma razão.
Reutilização
O que pode ser transformado em fundamento deve ser reutilizável.
Acessibilidade
Componentes devem considerar teclado, foco, contraste, estados e semântica desde sua construção.
Evolução
O Style Guide não é definitivo. Ele deve evoluir conforme os produtos revelam novas necessidades.


Desenvolvimento
Instale as dependências:

npm install

Execute o projeto em desenvolvimento:

npm run dev

Gere a versão de produção:

npm run build

O build atual deve passar sem erros antes de uma publicação.


Status
Versão: 0.1

Status: Fundação inicial / em evolução

O projeto já contém a primeira base de tokens, componentes e documentação visual.

As próximas evoluções incluem melhorias de documentação, acessibilidade, estados dos componentes, navegação e integração da fundação com futuros produtos.


Filosofia
O FUNDATIO Style Guide existe para responder a uma pergunta simples:

O que precisamos estabelecer antes de começar a construir?

A resposta está na própria estrutura do projeto: fundamentos primeiro, componentes depois, produtos por último.

Fundamentos antes da forma.
