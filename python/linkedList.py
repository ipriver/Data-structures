class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None


class LinkedList:
    def __init__(self):
        self.length = 0
        self.head = None
        self.tail = None

    def add_node(self, node):
        if not isinstance(node, Node):
            raise 'input value is not a Node'
        self.length += 1
        if not self.head:
            self.head = node
            self.tail = node
        else:
            node.prev = self.tail
            self.tail.next = node
            self.tail = node
        return self

    def remove_last(self):
        node = self.head
        if not node:
            raise 'Linked List is already empty'
        if not node.next:
            self.head = None
            self.tail = None
        else:
            while node.next:
                node = node.next
            node.prev.next = None
            self.tail = node.prev
        self.length -= 1
        return self

    def clean(self):
        def recursiveRm(self, node):
            if node.next:
                node.next.prev = None
            node.next = None
            node.value = None
            self.length -= 1
            if not node.prev:
                node.value = None
                return 0
            return recursiveRm(self, node.prev)
        node = self.tail
        if not node:
            raise 'Linked List is already empty'
        recursiveRm(self, node)
        self.head = None
        self.tail = None
        return self

    def get_node(self, index, notSkip=True):
        node = self.head
        if notSkip and not node:
            raise 'Linked List is already empty'
        if index > self.length or index < 0:
            raise 'invalid index input'
        for i in range(index):
            node = node.next
        return node

    def insert_at_index(self):
        pass

    def delete_at_index(self, index):
        node = self.get_node(index)
        if index == 0:
            if self.length == 1:
                self.tail = None
                self.head = None
            else:
                self.head = self.get_node(1)
        if node.prev:
            node.prev.next = node.next
        if node.next:
            node.next.prev = node.prev
        self.length -= 1
        node.next = None
        node.prev = None
        node.value = None
        return self
