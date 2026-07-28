Bubble Sort Algorithm

Step 1:
Check if the array length is less than or equal to 1.
If yes, return the array.

Step 2:
Start the outer loop from i = 0 to array.length - 1.

Step 3:
Start the inner loop from j = 0 to array.length - i - 2.

Step 4:
Compare adjacent elements.

If array[j] > array[j + 1],
swap them.

Step 5:
After all passes are completed,
return the sorted array.





Selection Sort Algorithm

Step 1:
Check if the array length is less than or equal to 1.
If yes, return the array.

Step 2:
Start the outer loop from i = 0 to i < array.length - 1.

Initialize:

minIndex = i

Assume the current element is the smallest.

Step 3:
Start the inner loop from j = i + 1 to j < array.length.

Compare:

array[j] < array[minIndex]

If true:

    minIndex = j

Step 4:
After the inner loop ends,

Swap:

array[i] with array[minIndex]

Step 5:
Repeat until the outer loop ends.

Return the sorted array.



Insertion Sort 
Step 1 :Check if the array length is less than or equal to 1.
If yes, return the array.

Step 2 : start the outer loop i from 1 to array.length-1 

step 3 : Initilize key = array[i] & Initilize j = i - 1 to traverse backward array 

step 3 : start the inner loop j should be greater than eqaul to 0 and array [j] > key

step 4 : compare if array[j] is greater than key shift array[j] to array[j+1] and decrement j 

step 5 : after while loop ends add key to array[j+1] index 

step 6 : after outer loop ends return array 


Merge Sort
step 1 : check if array length is should be less than or equal to 1 if true return  

step 2 : calculate the mid of array [Math.floor(array.length/2)]

step 3 : divide array in two parts 
            let left = array.slice(0,mid)
            let right = array.slice(mid)
        
step 4 : now divide them recursively 
            left = mergeSort(left)
            rigth = mergeSort(right)
step 4 : return the both arrays merged
            return merge(left , right)



Merge Function :
step 1 : check if both recieved arrays length is less than or equal to 1 return array 

step 2 : Initilize two pointers for traversing arrays 
            let left_ptr = 0 
            let right_ptr = 0 

step 3 : Initlize result array 
            let result = []

step 4 : Traverse both arrays using while loop 
             left_ptr < left.length  && right_ptr < right.length

step 5 : compare if (left[left_ptr] > right [right_ptr]) if true :
         add right[right_ptr] into result array  && right_ptr++
         if false : 
        add left[left_ptr] into result array & left_ptr++

step 6 : when while loop ends add remaining elements into result array from left and right array use two while loop 
        while (left_ptr < left.length) push element into result array
        while(right_ptr < right.length) push element into result array 

step 7  : return result array 



Quick Sort :
step 1 : check if low >= high return array else continue 

step 2 : calculate the pivotIndex using partition function 

step 3 : divide array into two parts for sorting using pivotIndex 
         QuickSort(array , low , pivotIndex-1)
         QuickSort(array , pivotIndex+1 , high )

step 4 : return array 

Partition Function (array , low , high )
step 1 : Initilize pivot = high 

step 2 : Initilize i = low 

step 3 : start the loop from low to high 
        for(let j = low ; j < high  ; j++)

step 4 : check if array [j]  < pivot  
        true :  swap element at i with element at j 
                array[i] , array [j]  = array [j] ,array[i ]
        increase i 

step 5 : after loop end , swap pivot with i 
        array[high] , array [i] = array [i] , array [high]

step 6 : return i  
