package linkedList

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
	InsertAtIndex(index int, newNode *Node) *LinkedList
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

func (ll *LinkedList) InsertAtIndex(index int, newNode *Node) *LinkedList {
	if index < 0 || index > ll.length-1 {
		fmt.Println("incorrect index")
		return nil
	}
	if ll.head == nil || index == ll.length {
		ll.AddNode(newNode)
	}
	node := ll.GetNode(index)
	if ll.head == node {
		newNode.next = node
		node.prev = newNode
		ll.head = newNode
	} else {
		newNode.prev = node.prev
		node.prev.next = newNode
		node.prev = newNode
		newNode.next = node
	}
	ll.length += 1
	return ll
}

func (ll *LinkedList) DeleteAtIndex(index int) *LinkedList {
	node := ll.GetNode(index)
	if node == nil {
		return nil
	}
	if index == 0 {
		if ll.length == 0 {
			fmt.Println("Linked list is already empty")
			return ll
		}
		if ll.length == 1 {
			ll.head.next = nil
			ll.tail.prev = nil
			ll.tail = nil
			ll.head = nil
		} else {
			ll.head = ll.GetNode(1)
			ll.head.prev = nil
		}
	}
	if ll.length == index+1 {
		ll.tail = ll.tail.prev
	}
	if node.prev != nil {
		node.prev.next = node.next
	}
	if node.next != nil {
		node.next.prev = node.prev
	}
	node.next = nil
	node.prev = nil
	node.value = nil
	ll.length -= 1
	return ll
}
