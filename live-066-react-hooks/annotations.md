## Tipos de componentes

- Stateless Components: Componente funcionais, sem lógica e estado. Não podiam ter o lifecycle manipulados (burros)
- Stateful Components: Componente de classe, podem ter estado e consegue manipular o lifecycle
  => Componente desorganizado (funções espalhadas)
  => O contexto do this não era referenciado para dentro da propria classe em alguns momentos (usava-se arrow function para resolver o problema ou usando bind)
  => Código desorganizado
  => Utilização de HOCS ou render props para compartilhar regra de negócio
  => Problema do this

## Hooks

- Com o hook useState, acaba a ideia de Stateless e Stateful
