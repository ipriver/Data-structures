package main

import "fmt"
import "math/rand"
import "time"

func bubble_sort(size int, lst [10]int) [10]int {
    var sorted = false
    for !sorted {
        sorted = true
        for i := 0; i < size - 1; i++ {
            if lst[i] > lst[i + 1] {
                sorted = false
                lst[i] = lst[i] ^ lst[i + 1]
                lst[i + 1] = lst[i] ^ lst[i + 1]
                lst[i] = lst[i] ^ lst[i + 1]
            }
        }
    }
    return lst
}

func main() {
    const size = 10
    var arr [size] int
    s1 := rand.NewSource(time.Now().UnixNano())
    r1 := rand.New(s1)
    for i := 0; i < size; i++ {
        arr[i] = r1.Intn(100)
    }
    fmt.Println(bubble_sort(size, arr))
}