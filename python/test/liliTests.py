import unittest
import os

from random import randint
from linkedList import LinkedList, Node

parentdir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.sys.path.insert(0, parentdir)


class TestNode(unittest.TestCase):
    def setUp(self):
        global node
        node = Node(4)

    def test_Node_creation(self):
        self.assertIsInstance(node, Node)

    def test_Node_has_its_atributes(self):
        self.assertTrue(hasattr(node, 'value'))
        self.assertTrue(hasattr(node, 'prev'))
        self.assertTrue(hasattr(node, 'next'))

    def test_Node_throws_errror_if_no_default_value(self):
        with self.assertRaises(Exception):
            node = Node()


class TestLinkedList(unittest.TestCase):
    def setUp(self):
        global lili
        lili = LinkedList()
        global times
        times = randint(25, 50)

    def test_LL_creation(self):
        lili = LinkedList()
        self.assertIsInstance(lili, LinkedList)

    def test_LL_properties(self):
        self.assertTrue(hasattr(lili, 'add_node'))
        self.assertTrue(hasattr(lili, 'remove_last'))
        self.assertTrue(hasattr(lili, 'clean'))
        self.assertTrue(hasattr(lili, 'get_node'))
        self.assertTrue(hasattr(lili, 'insert_at_index'))
        self.assertTrue(hasattr(lili, 'delete_at_index'))

    def test_LL_add_node_function_works_correctly(self):
        test_node = Node(23)
        lili.add_node(test_node)
        self.assertEqual(lili.length, 1)
        self.assertEqual(lili.head, test_node)
        self.assertEqual(lili.tail, test_node)
        second_node = Node(33)
        lili.add_node(second_node)
        self.assertEqual(lili.length, 2)
        self.assertEqual(lili.head, test_node)
        self.assertEqual(lili.tail, second_node)

    def test_LL_add_node_random(self):
        for i in range(1, times + 1):
            lili.add_node(Node(i))
        self.assertEqual(lili.length, times)

    def test_LL_add_node_should_be_chainable(self):
        first_node = Node(23)
        last_node = Node(33)
        lili.add_node(first_node).add_node(Node(44)).add_node(last_node)
        self.assertEqual(lili.length, 3)
        self.assertEqual(lili.head, first_node)
        self.assertEqual(lili.tail, last_node)

    def test_LL_remove_node_should_raise_error_if_empty(self):
        with self.assertRaises(Exception):
            lili.remove_last()

    def test_LL_remove_node_works_correctyle(self):
        test_node = Node(23)
        lili.add_node(test_node)
        self.assertEqual(lili.length, 1)
        self.assertEqual(lili.head, test_node)
        self.assertEqual(lili.tail, test_node)
        lili.remove_last()
        self.assertEqual(lili.length, 0)
        self.assertEqual(lili.head, None)
        self.assertEqual(lili.tail, None)

    def test_LL_remove_node_random(self):
        for i in range(1, times + 1):
            lili.add_node(Node(i))
        for i in range(1, times + 1):
            lili.remove_last()
            self.assertEqual(lili.length, times-i)
        self.assertEqual(lili.length, 0)
        self.assertEqual(lili.head, None)
        self.assertEqual(lili.tail, None)
        with self.assertRaises(Exception):
            lili.remove_last()

    def test_LL_remove_node_should_be_chainable(self):
        for i in range(1, times + 1):
            lili.add_node(Node(i))
        lili.remove_last().remove_last().remove_last()
        self.assertEqual(lili.length, times - 3)
        self.assertNotEqual(lili.tail, None)

if __name__ == '__main__':
    unittest.main()
