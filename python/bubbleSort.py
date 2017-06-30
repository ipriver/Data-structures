def bubbleSort(lst):
    sort = False
    while not sort:
        sort = True
        for i in range(len(lst) - 1):
            if lst[i] > lst[i + 1]:
                sort = False
                lst[i] = lst[i] ^ lst[i + 1]
                lst[i + 1] = lst[i] ^ lst[i + 1]
                lst[i] = lst[i] ^ lst[i + 1]
    return lst
