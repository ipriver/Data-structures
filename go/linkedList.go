package main

import (
	"fmt"
)

type Node struct {
	value interface{}
	prev  *Node
	next  *Node
}

type LinkedList struct {
	length int
	head   *Node
	tail   *Node
}

type LLInter interface {
	AddNode(node *Node) *LinkedList
	RemoveLast() *LinkedList
	CleanList() *LinkedList
	GetNode(index int) *Node
	InsertAtIndex(index int, newNode Node) *LinkedList
	DeleteAtIndex(index int) *LinkedList
}

func (ll *LinkedList) AddNode(node *Node) *LinkedList {
	if ll.head != nil {
		node.prev = ll.tail
		ll.tail.next = node
		ll.tail = node
	} else {
		ll.head = node
		ll.tail = node
	}
	ll.length += 1
	return ll
}

func (ll *LinkedList) RemoveLast() *LinkedList {
	if ll.head == nil && ll.tail == nil {
		fmt.Println("Linked list is empty")
	} else if ll.length == 1 {
		ll.head = nil
		ll.tail = nil
		ll.length -= 1
	} else {
		prev_node := ll.tail.prev
		prev_node.next = nil
		ll.tail.prev = nil
		ll.tail = prev_node
		ll.length -= 1
	}
	return ll
}

func (ll *LinkedList) CleanList() *LinkedList {
	node := ll.tail
	for node.prev != nil {
		if node.next != nil {
			node.next.prev = nil
			node.next.next = nil
		}
		node = node.prev
		node.next = nil
	}
	ll.length = 0
	ll.head = nil
	ll.tail = nil
	return ll
}

func (ll *LinkedList) GetNode(index int) *Node {
	if index > ll.length-1 {
		fmt.Println("incorrect index")
		return nil
	} else {
		node := ll.head
		for i := 0; i < index; i++ {
			node = node.next
		}
		return node
	}
}

func (ll *LinkedList) InsertAtIndex(index int, newNode Node) *LinkedList {
	return ll
}

func (ll *LinkedList) DeleteAtIndex(index int) *LinkedList {
	return ll
}
