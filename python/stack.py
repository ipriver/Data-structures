class Stack:
    
    def __init__(self, max_length=0):
        if type(max_length) != int or max_length < 0:
            raise Exception
        self.stack = []
        self.max_length = max_length

    def add(self, obj):     
        if self.max_length > len(self.stack):
            self.stack.append(obj)
        else:
            print('Stack is full')
        return self

    def remove(self):
        try:
            self.stack.pop(len(self.stack)-1)
        except IndexError:
            print('Cannot remove element from stack - Stack is empty')
        return self

    def clear(self):
        self.stack = []
        return self
