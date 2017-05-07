class Queue:
    def __init__(self, max_length=0):
        self.max_length = max_length
        self.queue = []

    def add(self, obj):
        if self.max_length > len(self.queue):
            self.queue.append(obj)
        else:
            print('Queue if full')
        return self

    def remove(self):
        try:
            self.queue.pop(0)
        except IndexError:
            print('Cannot remove element from queue - Queue is empty')
        return self

    def clear(self):
        self.queue = []
        return self
