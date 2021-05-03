
## Instalação e utilização
Teste técnico utilizando Node.js com Express

-   Tenha o yarn instalado
-   Clone o projeto do Github
-   No terminal, digite: yarn
-   Para iniciar o servidor, inserir no terminal: yarn dev

### Testes
Para realizar o teste existente, digitar no terminal: 

- yarn test

Desta forma, será feito o teste no seguinte cenário: DDD origem: 11, DDD destino: 17, plano: FaleMais 60, minutos: 80. Será verificado o Status Code retornado (deverá ser 200), se possui os 6 campos que devem ser retornados na requisição (origem, destino, minutos, plano, com FaleMais, sem FaleMais) e se os valores correspondem. 