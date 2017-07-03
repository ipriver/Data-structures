package main

import (
	"math/rand"
	"sort"
	"testing"
	"time"
)

func TestBubble_sortWithInt(t *testing.T) {
	var arr = []int{32, 47, 8, 1, 4, 2, 29, 43, 123, 23}
	arr = Bubble_sort(arr)
	if !(sort.IntsAreSorted(arr)) {
		t.Error("unsorted")
	}
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	arr = arr[:0]
	size := r1.Intn(100)
	for i := 0; i < size; i++ {
		arr = append(arr, r1.Intn(1000))
	}
	arr = Bubble_sort(arr)
	if !(sort.IntsAreSorted(arr)) {
		t.Error("unsorted")
	}
}
