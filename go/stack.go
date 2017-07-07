package stack

import (
	"fmt"
)

type Stack struct {
	stack     []int
	maxLength int
}

type InterStack interface {
	AddLast(value int) []int
	RemoveLast() []int
	CleanStack() []int
}

func (s *Stack) addLast(value int) []int {
	if len(s.stack) < s.maxLength {
		s.stack = append(s.stack, value)
	} else {
		fmt.Println("stack has max length")
	}
	return s.stack
}

func (s *Stack) removeLast() []int {
	if len(s.stack) > 0 {
		s.stack = s.stack[:len(s.stack)-1]
	} else {
		fmt.Println("stack is empty, nothing to remove")
	}
	return s.stack
}

func (s *Stack) CleanStack() []int {
	s.stack = s.stack[:0]
	return s.stack
}
