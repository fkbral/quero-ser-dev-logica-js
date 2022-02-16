# Checar se número é primo

## Como resolver
- Vamos fazer uma função checaSeEhPrimo (isPrime)

## Exemplos
- Ex: 1 ou 2
  - já retorno direto que é primo

- Ex: 5
  - divisores para testar: 2, 3, 4
  - vamos de 2 a n-1 

## Que passos precisamos fazer para descobrir se um número é primo
- vou receber um número de teste por parâmetro e vou verificar para cada número até ele se é divisível
- para checar se um número é divisível por outro:
  - o resto da divisão do número pelo divisor testado é igual a 0
  ```js
  numero % divisor === 0
  ``` 
- Se quisermos otimizar podemos testar de 2 a n/2, porque números maiores que a metade do número nunca serão divisores

- Teremos um contador divisorDeTeste começando em 2 e terminando em n/2
```js
  while (numeroDeTeste < divisorDeTeste){
    
  }
  ```


