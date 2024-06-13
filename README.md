# Pokémon TCG

Este projeto tem como objetivo aplicar conceitos da linguagem JavaScript, consumir uma API externa (Pokémon TCG API) e exibir os resultados em uma página web interativa. É um exemplo prático para estudos de desenvolvimento web frontend, focando em manipulação de DOM, requisições assíncronas (fetch), e atualização dinâmica de conteúdo baseado em filtros.

## Funcionalidades Implementadas

- Busca de cartas Pokémon utilizando filtros como nome, set, tipo, subtipo, supertipo e raridade.
- Exibição dinâmica dos resultados de busca em formato de cartões com imagem e informações relevantes.
- Carregamento assíncrono dos dados da API utilizando `fetch`.
- Utilização de Bootstrap para o layout responsivo e estilização básica.
- Implementação de um spinner de carregamento para indicar visualmente quando uma requisição está em andamento.

## Tecnologias Utilizadas

- HTML
- CSS (Bootstrap para estilização básica)
- JavaScript

## Como Usar

Para executar este projeto localmente, siga as instruções abaixo:

1. Clone o repositório:

  ```git clone https://github.com/seu-usuario/pokemon-tcg-project.git```

2. Navegue até o diretório do projeto:

  ```cd pokemon-tcg-project```

3. Abra o arquivo index.html no seu navegador web.

4. Interaja com a aplicação utilizando os filtros disponíveis para buscar e visualizar cartas Pokémon.

## Estrutura do Projeto

- index.html: Página principal que contém a estrutura HTML e os elementos interativos (inputs, selects, cards).
- styles.css: Arquivo CSS para estilização básica da página.
- script.js: Arquivo JavaScript que controla a interatividade da página, incluindo requisições à API, manipulação do DOM e atualização dinâmica dos filtros e resultados.
- img/: Diretório contendo imagens utilizadas no projeto, como o logo do Pokémon TCG.

## API Utilizada

Este projeto consome a Pokémon TCG API para buscar informações detalhadas sobre cartas Pokémon, incluindo imagens, tipos, raridades e outros atributos.

