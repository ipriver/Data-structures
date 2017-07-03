package queue

import (
	"fmt"
)

type Queue struct {
	queue     []int
	maxLength int
}

type Qinter interface {
	addLast(value int) []int
	removeFirst() []int
	cleanQueue() []int
}

func (q *Queue) addLast(value int) []int {
	if len(q.queue) < q.maxLength {
		q.queue = append(q.queue, value)
	} else {
		fmt.Println("queue has max length")
	}
	return q.queue
}

func (q *Queue) removeFirst() []int {
	if len(q.queue) > 0 {
		q.queue = q.queue[1:]
	} else {
		fmt.Println("queue is empty, nothing to remove")
	}
	return q.queue
}

func (q *Queue) cleanQueue() []int {
	q.queue = q.queue[:0]
	return q.queue
}
