# Merge Sort

Merge Sort follows the **Divide and Conquer** approach.

It consists of two main parts:

1. Divide the array into smaller subarrays.
2. Merge the sorted subarrays back into a single sorted array.

---

# Merge Algorithm

**Problem:** Merge two already sorted arrays into one sorted array.

### Step 1: Initialize

```javascript
result = []
left_ptr = 0
right_ptr = 0
```

- `result` stores the merged array.
- `left_ptr` points to the current element of the left array.
- `right_ptr` points to the current element of the right array.

---

### Step 2: Compare Elements

Continue comparing while both pointers are inside their respective arrays.

**Condition:**

```javascript
left_ptr < left.length &&
right_ptr < right.length
```

---

### Step 3: Compare Current Elements

Compare:

```javascript
left[left_ptr]
```

with

```javascript
right[right_ptr]
```

- If the left element is greater:
  - Push the right element into the result.
  - Move the right pointer.

```javascript
result.push(right[right_ptr])
right_ptr++
```

- Otherwise:
  - Push the left element into the result.
  - Move the left pointer.

```javascript
result.push(left[left_ptr])
left_ptr++
```

---

### Step 4: Append Remaining Elements

Once one array is exhausted, append all remaining elements from the other array.

If the left array still has elements:

```javascript
while (left_ptr < left.length) {
    result.push(left[left_ptr])
    left_ptr++
}
```

If the right array still has elements:

```javascript
while (right_ptr < right.length) {
    result.push(right[right_ptr])
    right_ptr++
}
```

---

### Step 5: Return Result

```javascript
return result
```

---

# Divide Algorithm

**Problem:** Divide the array until every subarray contains only one element.

---

### Step 1: Base Case

If the array contains 0 or 1 element, it is already sorted.

```javascript
if (array.length <= 1)
    return array
```

---

### Step 2: Find the Middle

```javascript
mid = Math.floor(array.length / 2)
```

---

### Step 3: Split the Array

Split the array into two halves.

```javascript
left = array.slice(0, mid)
right = array.slice(mid)
```

- `slice(0, mid)` returns elements from index `0` to `mid - 1`.
- `slice(mid)` returns elements from `mid` to the last index.

---

### Step 4: Recursively Sort Both Halves

Instead of sorting manually, recursively call `mergeSort()` on both halves.

```javascript
left = mergeSort(array.slice(0, mid))
right = mergeSort(array.slice(mid))
```

Each recursive call repeats the same process:

1. Check the base case.
2. Find the middle.
3. Divide into left and right.
4. Recursively sort both halves.
5. Return the sorted array.

This continues until every subarray contains only one element.

---

### Step 5: Merge the Sorted Halves

Once both recursive calls return sorted arrays, merge them.

```javascript
return merge(left, right)
```

---

# Overall Flow

```text
mergeSort(array)

↓

Check Base Case

↓

Find Middle

↓

Divide into Left and Right

↓

Recursively Sort Left

↓

Recursively Sort Right

↓

Merge Both Sorted Arrays

↓

Return Final Sorted Array
```

---

# Time Complexity

| Case | Complexity |
|------|------------|
| Best | O(n log n) |
| Average | O(n log n) |
| Worst | O(n log n) |

---

# Space Complexity

```text
O(n)
```

Extra space is required for the temporary arrays used during merging.

---

# Key Points

- Uses the **Divide and Conquer** technique.
- Divides the array recursively until each subarray contains one element.
- Merges two sorted arrays using the **Two Pointer** technique.
- Stable sorting algorithm.
- Not an in-place sorting algorithm because it requires extra memory.
- Performs consistently with **O(n log n)** time complexity in all cases.