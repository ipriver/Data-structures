import unittest
import os

from random import randint
from bubbleSort import bubbleSort

parentdir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.sys.path.insert(0, parentdir)


class TestBubbleSort(unittest.TestCase):
    def setUp(self):
        global lst
        lst = []

    def test_if_it_works(self):
        for i in range(randint(10, 20)):
            for j in range(randint(10, 50)):
                lst.append(randint(-999, 999))
        self.assertEqual(bubbleSort(lst), sorted(lst))

    def test_one_element_list(self):
        lst.append(1)
        self.assertEqual(bubbleSort(lst), sorted(lst))

    def test_empty_list(self):
        self.assertEqual(bubbleSort(lst), sorted(lst))

if __name__ == '__main__':
    unittest.main()
