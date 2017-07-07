package queue

import (
	"math/rand"
	"testing"
	"time"
)

func TestQueueAddFunc(t *testing.T) {
	var arr []int
	var maxLength int = 10
	var qu = Queue{arr, maxLength}
	var inter Qinter
	inter = &qu
	if len(qu.queue) != 0 {
		t.Error("something is wrong")
	}
	inter.AddLast(24)
	if len(qu.queue) != 1 || qu.queue[0] != 24 {
		t.Error("length should be 1 or value is incorrect")
	}
	for i := 0; i < 20; i++ {
		inter.AddLast(1)
	}
	if len(qu.queue) > 10 {
		t.Error("length of Queue is > maxLength")
	}
	maxLength = 1000
	qu = Queue{arr, maxLength}
	inter = &qu
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	for i := 0; i < 10+r1.Intn(90); i++ {
		rval := r1.Intn(1000)
		inter.AddLast(rval)
		if len(qu.queue) != i+1 || qu.queue[i] != rval {
			t.Error("Error with random values")
		}
	}
}

func TestQueueRemoveLast(t *testing.T) {
	var arr []int
	var maxLength int = 10
	var qu = Queue{arr, maxLength}
	var inter Qinter
	inter = &qu
	if len(qu.queue) != 0 {
		t.Error("something is wrong")
	}
	inter.AddLast(24)
	if len(qu.queue) != 1 || qu.queue[0] != 24 {
		t.Error("length should be 1 or value is incorrect")
	}
	inter.RemoveFirst()
	if len(qu.queue) != 0 {
		t.Error("function RemoveFirst didn't work")
	}
	inter.AddLast(24)
	inter.AddLast(32)
	inter.AddLast(33)
	inter.RemoveFirst()
	if len(qu.queue) != 2 && qu.queue[0] != 32 {
		t.Error("function RemoveFirst didn't work")
	}
	inter.RemoveFirst()
	if len(qu.queue) != 1 && qu.queue[0] != 33 {
		t.Error("function RemoveFirst didn't work")
	}
	maxLength = 1000
	qu = Queue{arr, maxLength}
	inter = &qu
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	var times int = r1.Intn(900)
	for i := 0; i < times; i++ {
		inter.AddLast(r1.Intn(1000))
	}
	for i := 0; i < times; i++ {
		inter.RemoveFirst()
		if len(qu.queue) != times-i-1 {
			t.Error("Errror in RemoveFirst")
		}
	}
}

func TestQueueCleanQueue(t *testing.T) {
	var arr []int
	var maxLength int = 10
	var inter Qinter
	var qu = Queue{arr, maxLength}
	inter = &qu
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	for i := 0; i < 10; i++ {
		inter.AddLast(r1.Intn(1000))
	}
	if len(qu.queue) != 10 {
		t.Error("length is < 10")
	}
	inter.CleanQueue()
	if len(qu.queue) != 0 {
		t.Error("function CleanQueue didn't removed Queue")
	}
}
