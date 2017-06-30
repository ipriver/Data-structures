#include <iostream>
#include <stdlib.h>
#include <time.h> 
using namespace std;

int bubble_sort(int *arr, int size);

int main()
{
    int size = 10;
    int *myArr = new int[size];
    srand (time(NULL));

    for (int i = 0; i < size; i += 1)
    {
        myArr[i] = rand() % 101 + -100;
    }

    *myArr = bubble_sort(myArr, size);

    for (int i = 0; i < size; i += 1)
    {
        cout << myArr[i] << endl;
    }

    return 0;
}

int bubble_sort(int *arr, int size)
{
    bool sorted = false;
    while (!sorted)
    {
        sorted = true;
        for (int i = 0; i < size - 1; i += 1)
        {
            if (arr[i] > arr[i + 1])
            {
                sorted = false;
                arr[i] = arr[i] ^ arr[i + 1];
                arr[i + 1] = arr[i] ^ arr[i + 1];
                arr[i] = arr[i] ^ arr[i + 1];
            }
        }
    }

    return *arr;
}