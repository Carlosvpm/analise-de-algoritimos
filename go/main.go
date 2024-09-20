package main

import (
	"fmt"
	"time"
)

func bubbleSort(arr []int) {
	n := len(arr)
	for i := 0; i < n-1; i++ {
		for j := 0; j < n-i-1; j++ {
			if arr[j] > arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
			}
		}
	}
}

func main() {
	arr := []int{64, 34, 25, 12, 22, 11, 90}
	fmt.Println("Array antes:", arr)

	start := time.Now() // Início da medição de tempo
	bubbleSort(arr)
	duration := time.Since(start).Nanoseconds() // Fim da medição de tempo

	fmt.Println("Array depois:", arr)
	fmt.Printf("Tempo de execução: %v\n", float64(duration)/1e6)
}
