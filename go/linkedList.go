package linkedList

import (
	"fmt"
)

type Node struct {
	value int
	prev  Node
	next  Node
}

type LinkedList struct {
	length int
	head   Node
	tail   Node
}

type LLInter interface {
	AddNode(node Node) LinkedList
	RemoveLast() LinkedList
	CleanList() LinkedList
	GetNode(index int) Node
	InsertAtIndex(index int, newNode Node) LinkedList
	DeleteAtIndex(index int) LinkedList
}

func (ll *LinkedList) AddNode(node Node) LinkedList {
	return
}

func (ll *LinkedList) RemoveLast() LinkedList {
	return
}

func (ll *LinkedList) CleanList() LinkedList {
	return
}

func (ll *LinkedList) GetNode(index int) Node {
	return
}

func (ll *LinkedList) InsertAtIndex(index int, newNode Node) LinkedList {
	return
}

func (ll *LinkedList) DeleteAtIndex(index int) LinkedList {
	return
}
