# Pseudocode for the Quick Sort algorithm
function quickSort(A, low, high)
    if low < high then
    
        # Partition the array A and get the pivot's index
        p <-- partition(A, low, high)
        
        # Recursively sort the elements to the left of the pivot
        quickSort(A, low, p - 1)
        
        # Recursively sort the elements to the right of the pivot
        quickSort(A, p + 1, high)
    
    end if
end function

