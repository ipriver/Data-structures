package main

import (
	"fmt"
	"math/rand"
	"time"
)

func Bubble_sort(lst []int) []int {
	var sorted = false
	for !sorted {
		sorted = true
		for i := 0; i < len(lst)-1; i++ {
			if lst[i] > lst[i+1] {
				sorted = false
				lst[i] = lst[i] ^ lst[i+1]
				lst[i+1] = lst[i] ^ lst[i+1]
				lst[i] = lst[i] ^ lst[i+1]
			}
		}
	}
	return lst
}

func main() {
	const size = 10
	var arr []int
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	for i := 0; i < size; i++ {
		arr[i] = r1.Intn(100)
	}
	fmt.Println(Bubble_sort(arr))
}
