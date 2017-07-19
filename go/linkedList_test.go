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

func TestLinkedListGetNode(t *testing.T) {
	var (
		ll    LinkedList
		inter LLInter = &ll
	)
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	var cases = []struct {
		expected int
		input    int
	}{
		{40, 3},
		{30, 10},
		{28, 22},
		{44, 34},
		{99, 45},
		{10, 69},
		{22, 77},
	}

	times := 70 + r1.Intn(150)
	for i := 0; i < times; i++ {
		switch i {
		case cases[0].input:
			inter.AddNode(&Node{value: cases[0].expected})
		case cases[1].input:
			inter.AddNode(&Node{value: cases[1].expected})
		case cases[2].input:
			inter.AddNode(&Node{value: cases[2].expected})
		case cases[3].input:
			inter.AddNode(&Node{value: cases[3].expected})
		case cases[4].input:
			inter.AddNode(&Node{value: cases[4].expected})
		case cases[5].input:
			inter.AddNode(&Node{value: cases[5].expected})
		case cases[6].input:
			inter.AddNode(&Node{value: cases[6].expected})
		default:
			rval := r1.Intn(1000)
			inter.AddNode(&Node{value: rval})
		}
	}

	for _, item := range cases {
		result := inter.GetNode(item.input)
		if result.value != item.expected {
			t.Error("GetNode expected", item.expected, "have", result)
		}
	}
}

func TestLinkedListInsertAtIndex(t *testing.T) {
	var (
		ll    LinkedList
		inter LLInter = &ll
	)
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	var cases = []struct {
		nodeValue int
		index     int
	}{
		{40, 3},
		{30, 10},
		{28, 22},
		{44, 34},
		{99, 45},
		{10, 69},
		{22, 77},
	}

	times := 70 + r1.Intn(150)
	for i := 0; i < times; i++ {
		rval := r1.Intn(1000)
		inter.AddNode(&Node{value: rval})
	}
	for _, item := range cases {
		inter.InsertAtIndex(item.index, &Node{value: item.nodeValue})
	}
	if ll.length != times+len(cases) {
		t.Error("InsertAtIndex error")
	}
	for _, item := range cases {
		if ll.GetNode(item.index).value != item.nodeValue {
			t.Error("InsertAtIndex iserts values incorrectly")
		}
	}

}

func TestLinkedListDeleteAtIndex(t *testing.T) {
	var (
		ll    LinkedList
		inter LLInter = &ll
	)
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	var cases = []struct {
		nodeValue int
		index     int
	}{
		{40, 3},
		{30, 10},
		{28, 22},
		{44, 34},
		{99, 45},
		{10, 69},
		{22, 77},
	}

	times := 70 + r1.Intn(150)
	for i := 0; i < times; i++ {
		rval := r1.Intn(1000)
		inter.AddNode(&Node{value: rval})
	}
	for _, item := range cases {
		inter.InsertAtIndex(item.index, &Node{value: item.nodeValue})
	}
	if ll.length != times+len(cases) {
		t.Error("InsertAtIndex error")
	}
	for _, item := range cases {
		if ll.GetNode(item.index).value != item.nodeValue {
			t.Error("InsertAtIndex iserts values incorrectly")
		}
	}
	for _, item := range cases {
		inter.DeleteAtIndex(item.index)
		if ll.GetNode(item.index).value == item.nodeValue {
			t.Error("delete at index doesn't delete indexed Node")
		}
	}
}
