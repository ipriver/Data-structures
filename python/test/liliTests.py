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

    def test_LL_add_node_raise_error_if_argument_is_not_a_node(self):
        with self.assertRaises(Exception):
            lili.add_node(333)

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

    def test_LL_clean_function_raise_exception_if_empty(self):
        with self.assertRaises(Exception):
            lili.clean()

    def test_LL_clean_works_correctly(self):
        for i in range(1, times + 1):
            lili.add_node(Node(i))
        self.assertEqual(lili.length, times)
        lili.clean()
        self.assertEqual(lili.length, 0)
        self.assertEqual(lili.head, None)
        self.assertEqual(lili.tail, None)

    def test_LL_should_be_chainable(self):
        first_node = Node(23)
        (lili.add_node(first_node).add_node(Node(44)).clean()
             .add_node(first_node))
        self.assertEqual(lili.length, 1)
        self.assertEqual(lili.head, first_node)
        self.assertEqual(lili.tail, first_node)

    def test_LL_get_node_raise_if_LL_is_empty(self):
        with self.assertRaises(Exception):
            lili.get_node(1)

    def test_LL_get_node_raise_if_index_is_incorrect(self):
        for i in range(1, times + 1):
            lili.add_node(Node(i))
        with self.assertRaises(Exception):
            lili.get_node(-23)
        with self.assertRaises(Exception):
            lili.get_node(times + 1)

    def test_LL_get_node_returns_correct_node(self):
        global lili
        search_node = Node(99)
        (lili.add_node(Node(44)).add_node(Node(23)).add_node(search_node)
             .add_node(Node(9)))
        self.assertIsInstance(lili.get_node(2), Node)
        self.assertEqual(lili.get_node(2), search_node)
        lili = LinkedList()
        for i in range(7):
            lili.add_node(Node(i))
        lili.add_node(search_node)
        self.assertEqual(lili.length, 8)
        self.assertEqual(lili.get_node(7).value, search_node.value)

    def test_LL_get_node_random_test(self):
        my_rand = randint(5, 20)
        for i in range(1, times + 1):
            if (i == my_rand):
                search_node = Node(99)
                lili.add_node(search_node)
            else:
                lili.add_node(Node(i))
        self.assertIsInstance(lili.get_node(my_rand - 1), Node)
        self.assertEqual(lili.get_node(my_rand - 1), search_node)

    def test_LL_deleteAtIndex_raise_if_empty(self):
        with self.assertRaises(Exception):
            lili.delete_at_index(0)

    def test_LL_deleteAtIndex_raise_if_index_is_bigger_then_length(self):
        for i in range(1, times + 1):
            lili.add_node(Node(i))
        with self.assertRaises(Exception):
            lili.delete_at_index(times + 1)

    def test_LL_deleteAtIndex_deletes_correctly(self):
        lili.add_node(Node(23))
        lili.delete_at_index(0)
        self.assertEqual(lili.length, 0)
        self.assertEqual(lili.head, None)
        self.assertEqual(lili.tail, None)
        prev_node = Node(99)
        del_node = Node(33)
        next_node = Node(44)
        lst = [prev_node, del_node, next_node]
        for i in range(7):
            lili.add_node(Node(i))
        for i in lst:
            lili.add_node(i)
        for i in range(7):
            lili.add_node(Node(i))
        self.assertEqual(lili.length, 17)
        lili.delete_at_index(8)
        self.assertEqual(lili.length, 16)
        self.assertEqual(lili.get_node(7).value, prev_node.value)
        self.assertEqual(lili.get_node(7).next.value, next_node.value)
        self.assertEqual(lili.get_node(8).value, next_node.value)
        self.assertEqual(lili.get_node(8).prev.value, prev_node.value)

if __name__ == '__main__':
    unittest.main()
