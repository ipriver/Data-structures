package linkedList

import (
	"math/rand"
	"testing"
	"time"
)

func TestLinkedListAddNode(t *testing.T) {
	var (
		ll    LinkedList
		inter LLInter = &ll
	)
	inter.AddNode(&Node{value: 0})
	if ll.length != 1 && ll.tail.value == 0 {
		t.Error("AddNode doesn't work")
	}
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	for i := 0; i < 10+r1.Intn(90); i++ {
		rval := r1.Intn(1000)
		inter.AddNode(&Node{value: rval})
		if ll.length != i+2 || ll.tail.value != rval {
			t.Error("Error AddNode with random values")
		}
	}
}

func TestLinkedListRemoveLast(t *testing.T) {
	var (
		ll    LinkedList
		inter LLInter = &ll
	)
	inter.AddNode(&Node{value: 0})
	if ll.length != 1 && ll.tail.value == 0 {
		t.Error("AddNode doesn't work")
	}
	inter.RemoveLast()
	if ll.length != 0 {
		t.Error("RemoveLast doesn't work")
	}
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	times := 10 + r1.Intn(90)
	for i := 0; i < times; i++ {
		rval := r1.Intn(1000)
		inter.AddNode(&Node{value: rval})
		if ll.length != i+1 || ll.tail.value != rval {
			t.Error("Error AddNode with random values")
		}
	}
	for i := 0; i < times; i++ {
		inter.RemoveLast()
		if ll.length != times-i-1 {
			t.Error("Error RemoveLast doesn't work with many repeats")
		}
	}
}

func TestLinkedListClean(t *testing.T) {
	var (
		ll    LinkedList
		inter LLInter = &ll
	)
	for k := 0; k < 10; k++ {
		s1 := rand.NewSource(time.Now().UnixNano())
		r1 := rand.New(s1)
		for i := 0; i < 10+r1.Intn(90); i++ {
			rval := r1.Intn(1000)
			inter.AddNode(&Node{value: rval})
			if ll.length != i+1 || ll.tail.value != rval {
				t.Error("Error AddNode with random values")
			}
		}
		inter.CleanList()
		if ll.length != 0 {
			t.Error("Clean function doesn't work")
		}
	}
}

/*func TestLinkedListGetNode(t *testing.T) {
	var (
		ll    LinkedList
		inter LLInter = &ll
	)
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
}*/
