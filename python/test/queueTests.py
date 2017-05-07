import unittest
import os
parentdir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.sys.path.insert(0,parentdir)
from queue import Queue 


class TestQueue(unittest.TestCase):
    def setUp(self):
        self.max_length = 10

    def test_queue_attributes(self):
        queue = Queue(self.max_length)
        self.assertTrue(hasattr(queue, 'max_length'))
        self.assertTrue(hasattr(queue, 'queue'))
        self.assertTrue(hasattr(queue, 'add'))
        self.assertTrue(hasattr(queue, 'remove'))
        self.assertTrue(hasattr(queue, 'clear'))

    def test_queue_creation(self):
        queue = Queue(self.max_length)
        self.assertEqual(queue.max_length, self.max_length)
        self.assertIsInstance(queue, Queue)

    def test_queue_maxLength_value_is_zero(self):
        queue = Queue()
        self.assertEqual(queue.max_length, 0)

    def test_different_maxLength_values(self):
        lst = [4, 54432, 32, 999]
        for i in lst:
            queue = Queue(i)
            self.assertEqual(queue.max_length, i)
    
    def test_incorrect_maxLength_values(self):
        pass    

    def test_queue_add_elements(self):
        queue = Queue(self.max_length)
        queue.add(4)
        self.assertEqual(queue.queue, [4])
        self.assertEqual(len(queue.queue), 1)
        queue.add(3)
        self.assertEqual(queue.queue, [4,3])
        self.assertEqual(len(queue.queue), 2)
        queue.add([1,1])
        self.assertEqual(queue.queue, [4,3,[1,1]])
        self.assertEqual(len(queue.queue), 3)

    def test_queue_add_more_values_than_maxLength(self):
        queue = Queue(self.max_length)
        for i in range(self.max_length * 2):
            queue.add(i)
        self.assertEqual(len(queue.queue), self.max_length)

    def test_removeFirst_element_from_queue(self):
        queue = Queue(self.max_length)
        queue.add(1)
        queue.add(2)
        queue.add(3)
        self.assertEqual(queue.queue, [1,2,3])
        self.assertEqual(len(queue.queue), 3)
        queue.remove()
        self.assertEqual(queue.queue, [2,3])
        self.assertEqual(len(queue.queue), 2)
        queue.remove()
        self.assertEqual(queue.queue, [3])
        self.assertEqual(len(queue.queue), 1)

        queue = Queue(self.max_length)
        for i in range(self.max_length):
            queue.add(i)
        self.assertEqual(len(queue.queue), self.max_length)
        for i in range(1, self.max_length + 1):
            queue.remove()
            self.assertEqual(len(queue.queue), self.max_length-i)

    def test_remove_more_elements_than_maxLength(self):
        queue = Queue(self.max_length)
        for i in range(self.max_length):
            queue.add(i)
        self.assertEqual(len(queue.queue), self.max_length)
        for i in range(self.max_length * 2):
            queue.remove()
        self.assertEqual(len(queue.queue), 0)

    def test_clean_function(self):
        queue = Queue(self.max_length)
        for i in range(self.max_length):
            queue.add(i)
        self.assertEqual(len(queue.queue), self.max_length)
        queue.clear()
        self.assertEqual(queue.queue, [])
        self.assertEqual(len(queue.queue), 0)

    def test_chian_add(self):
        queue = Queue(self.max_length)
        queue.add(1).add(2).add(3)
        self.assertEqual(queue.queue, [1,2,3])
        self.assertEqual(len(queue.queue), 3)

    def test_chain_remove(self):
        queue = Queue(self.max_length)
        queue.add(1).add(2).add(3).remove().remove()
        self.assertEqual(queue.queue, [3])
        self.assertEqual(len(queue.queue), 1)

    def test_chain_clean(self):
        queue = Queue(self.max_length)
        queue.add(1).add(2).add(3).clear()
        self.assertEqual(queue.queue, [])
        self.assertEqual(len(queue.queue), 0)
        queue = Queue(self.max_length)
        queue.add(1).add(2).add(3).clear().add(1).add(1)
        self.assertEqual(queue.queue, [1, 1])
        self.assertEqual(len(queue.queue), 2)

    def test_chain_constructor(self):
        queue = Queue(self.max_length).add(1).add(2).add(3).remove().remove()
        self.assertEqual(queue.queue, [3])
        self.assertEqual(len(queue.queue), 1)