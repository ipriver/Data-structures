import unittest
import os
from stack import Stack
parentdir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.sys.path.insert(0, parentdir)


class TestStack(unittest.TestCase):
    def setUp(self):
        self.max_length = 10

    def test_stack_attributes(self):
        stack = Stack(self.max_length)
        self.assertTrue(hasattr(stack, 'max_length'))
        self.assertTrue(hasattr(stack, 'stack'))
        self.assertTrue(hasattr(stack, 'add'))
        self.assertTrue(hasattr(stack, 'remove'))
        self.assertTrue(hasattr(stack, 'clear'))

    def test_stack_creation(self):
        stack = Stack(self.max_length)
        self.assertEqual(stack.max_length, self.max_length)
        self.assertIsInstance(stack, Stack)

    def test_stack_maxLength_value_is_zero(self):
        stack = Stack()
        self.assertEqual(stack.max_length, 0)

    def test_different_maxLength_values(self):
        lst = [4, 54432, 32, 999]
        for i in lst:
            stack = Stack(i)
            self.assertEqual(stack.max_length, i)

    def test_incorrect_maxLength_values(self):
        lst = [-1, [], None, 'sdfsds', {'obj': 'sdfs'}, 1.1]
        for i in lst:
            with self.assertRaises(Exception):
                stack = Stack(i)

    def test_stack_add_elements(self):
        stack = Stack(self.max_length)
        stack.add(4)
        self.assertEqual(stack.stack, [4])
        self.assertEqual(len(stack.stack), 1)
        stack.add(3)
        self.assertEqual(stack.stack, [4, 3])
        self.assertEqual(len(stack.stack), 2)
        stack.add([1, 1])
        self.assertEqual(stack.stack, [4, 3, [1, 1]])
        self.assertEqual(len(stack.stack), 3)

    def test_stack_add_more_values_than_maxLength(self):
        stack = Stack(self.max_length)
        for i in range(self.max_length * 2):
            stack.add(i)
        self.assertEqual(len(stack.stack), self.max_length)

    def test_removeLast_element_from_stack(self):
        stack = Stack(self.max_length)
        stack.add(1)
        stack.add(2)
        stack.add(3)
        self.assertEqual(stack.stack, [1, 2, 3])
        self.assertEqual(len(stack.stack), 3)
        stack.remove()
        self.assertEqual(stack.stack, [1, 2])
        self.assertEqual(len(stack.stack), 2)
        stack.remove()
        self.assertEqual(stack.stack, [1])
        self.assertEqual(len(stack.stack), 1)

        stack = Stack(self.max_length)
        for i in range(self.max_length):
            stack.add(i)
        self.assertEqual(len(stack.stack), self.max_length)
        for i in range(1, self.max_length + 1):
            stack.remove()
            self.assertEqual(len(stack.stack), self.max_length - i)

    def test_remove_more_elements_than_maxLength(self):
        stack = Stack(self.max_length)
        for i in range(self.max_length):
            stack.add(i)
        self.assertEqual(len(stack.stack), self.max_length)
        for i in range(self.max_length * 2):
            stack.remove()
        self.assertEqual(len(stack.stack), 0)

    def test_clean_function(self):
        stack = Stack(self.max_length)
        for i in range(self.max_length):
            stack.add(i)
        self.assertEqual(len(stack.stack), self.max_length)
        stack.clear()
        self.assertEqual(stack.stack, [])
        self.assertEqual(len(stack.stack), 0)

    def test_chian_add(self):
        stack = Stack(self.max_length)
        stack.add(1).add(2).add(3)
        self.assertEqual(stack.stack, [1, 2, 3])
        self.assertEqual(len(stack.stack), 3)

    def test_chain_remove(self):
        stack = Stack(self.max_length)
        stack.add(1).add(2).add(3).remove().remove()
        self.assertEqual(stack.stack, [1])
        self.assertEqual(len(stack.stack), 1)

    def test_chain_clean(self):
        stack = Stack(self.max_length)
        stack.add(1).add(2).add(3).clear()
        self.assertEqual(stack.stack, [])
        self.assertEqual(len(stack.stack), 0)
        stack = Stack(self.max_length)
        stack.add(1).add(2).add(3).clear().add(1).add(1)
        self.assertEqual(stack.stack, [1, 1])
        self.assertEqual(len(stack.stack), 2)

    def test_chain_constructor(self):
        stack = Stack(self.max_length).add(1).add(2).add(3).remove().remove()
        self.assertEqual(stack.stack, [1])
        self.assertEqual(len(stack.stack), 1)

if __name__ == '__main__':
    unittest.main()
