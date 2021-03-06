package queue

import (
	"fmt"
)

type Queue struct {
	queue     []int
	maxLength int
}

type Qinter interface {
	AddLast(value int) []int
	RemoveFirst() []int
	CleanQueue() []int
}

func (q *Queue) AddLast(value int) []int {
	if len(q.queue) < q.maxLength {
		q.queue = append(q.queue, value)
	} else {
		fmt.Println("queue has max length")
	}
	return q.queue
}

func (q *Queue) RemoveFirst() []int {
	if len(q.queue) > 0 {
		q.queue = q.queue[1:]
	} else {
		fmt.Println("queue is empty, nothing to remove")
	}
	return q.queue
}

func (q *Queue) CleanQueue() []int {
	q.queue = q.queue[:0]
	return q.queue
}
