// Função de ordenação Bubble Sort
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Troca os elementos se estiverem fora de ordem
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

// Exemplo de uso com medição de tempo
let array = [64, 34, 25, 12, 22, 11, 90];

// Início da medição de tempo
console.time("Tempo de execução do Bubble Sort");
console.log("Array antes:", array);
bubbleSort(array); // Chama a função de ordenação
console.log("Array depois:", array);
// Fim da medição de tempo
console.timeEnd("Tempo de execução do Bubble Sort");

