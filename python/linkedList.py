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
        pass

    def get_node(self):
        pass

    def insert_at_index(self):
        pass

    def delete_at_index(self):
        pass
