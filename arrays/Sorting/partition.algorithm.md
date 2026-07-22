PARTITION ALGORITHM (Ascending Order)

Step 1:
Choose the pivot.

pivot = array[high]

Step 2:
Initialize two pointers.

i = low          // Points to the position where the next smaller element should be placed.

Step 3:
Traverse the array.

Start a loop:

j = low to high - 1

Step 4:
Compare the current element with the pivot.

If array[j] < pivot:

    Swap array[i] and array[j]

    Increment i

Step 5:
After the loop ends,

Swap array[i] and array[high]

This places the pivot in its correct sorted position.

Step 6:
Return i

i represents the final index of the pivot.