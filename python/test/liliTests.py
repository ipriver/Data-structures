import unittest
import os
from lili import LinkedList, Node
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

if __name__ == '__main__':
    unittest.main()
