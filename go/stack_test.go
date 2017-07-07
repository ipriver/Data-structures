package stack

import (
	"math/rand"
	"testing"
	"time"
)

func TestStackAddFunc(t *testing.T) {
	var arr []int
	var maxLength int = 10
	var st = Stack{arr, maxLength}
	var inter InterStack
	inter = &st
	if len(st.stack) != 0 {
		t.Error("something is wrong")
	}
	inter.AddLast(24)
	if len(st.stack) != 1 || st.stack[0] != 24 {
		t.Error("length should be 1 or value is incorrect")
	}
	for i := 0; i < 20; i++ {
		inter.AddLast(1)
	}
	if len(st.stack) > 10 {
		t.Error("length of Stack is > maxLength")
	}
	maxLength = 1000
	st = Stack{arr, maxLength}
	inter = &st
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	for i := 0; i < 10+r1.Intn(90); i++ {
		rval := r1.Intn(1000)
		inter.AddLast(rval)
		if len(st.stack) != i+1 || st.stack[i] != rval {
			t.Error("Error with random values")
		}
	}
}

func TestStackRemoveLast(t *testing.T) {
	var arr []int
	var maxLength int = 10
	var st = Stack{arr, maxLength}
	var inter InterStack
	inter = &st
	if len(st.stack) != 0 {
		t.Error("something is wrong")
	}
	inter.AddLast(24)
	if len(st.stack) != 1 || st.stack[0] != 24 {
		t.Error("length should be 1 or value is incorrect")
	}
	inter.RemoveLast()
	if len(st.stack) != 0 {
		t.Error("function RemoveLast didn't work")
	}
	inter.AddLast(24)
	inter.AddLast(32)
	inter.AddLast(33)
	inter.RemoveLast()
	if len(st.stack) != 2 && st.stack[0] != 32 {
		t.Error("function RemoveLast didn't work")
	}
	inter.RemoveLast()
	if len(st.stack) != 1 && st.stack[0] != 24 {
		t.Error("function RemoveLast didn't work")
	}
	maxLength = 1000
	st = Stack{arr, maxLength}
	inter = &st
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	var times int = r1.Intn(900)
	for i := 0; i < times; i++ {
		inter.AddLast(r1.Intn(1000))
	}
	for i := 0; i < times; i++ {
		inter.RemoveLast()
		if len(st.stack) != times-i-1 {
			t.Error("Errror in RemoveLast")
		}
	}
}

func TestStackCleanStack(t *testing.T) {
	var arr []int
	var maxLength int = 10
	var inter InterStack
	var st = Stack{arr, maxLength}
	inter = &st
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	for i := 0; i < 10; i++ {
		inter.AddLast(r1.Intn(1000))
	}
	if len(st.stack) != 10 {
		t.Error("length is < 10")
	}
	inter.CleanStack()
	if len(st.stack) != 0 {
		t.Error("function CleanQueue didn't removed Queue")
	}
}
