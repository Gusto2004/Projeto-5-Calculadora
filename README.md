# Calculadora

Calculadora com as quatro operações básicas, feita em JavaScript puro. Primeiro projeto construído de forma autónoma, como exercício de consolidação.

## Funcionalidades

- Somar, subtrair, multiplicar e dividir dois números
- Suporte a números decimais
- Cálculo com a tecla Enter, além do botão
- Histórico dos últimos cálculos, guardado entre visitas
- Modo escuro / claro com botão de alternância, que memoriza a preferência
- Validação de entradas inválidas ou vazias
- Tratamento do caso de divisão por zero

## Tecnologias

- HTML5
- CSS3 (variáveis CSS para os temas)
- JavaScript (DOM, eventos, `switch`, `localStorage`)

## Conceitos praticados

- Seleção de elementos do DOM (`querySelector`)
- Eventos de clique e de teclado (`addEventListener`, `keydown`)
- Conversão de texto para número (`parseFloat`) e validação (`isNaN`)
- Estrutura de decisão com `switch`
- "Early return" para tratar casos de erro
- Persistência de dados no browser com `localStorage`
- Alternância de tema com `classList.toggle` e variáveis CSS

## Como correr

Abre o `index.html` no browser, ou usa a extensão "Live Server" no VSCode para veres as alterações em tempo real.

## Demo

🔗 [Ver site ao vivo](https://gusto2004.github.io/Projeto-5-Calculadora/)

## Próximos passos

- [ ] Adicionar suporte a mais operações (percentagem, potência)
- [ ] Botão para limpar o histórico
- [ ] Suporte a expressões maiores (mais do que dois números)