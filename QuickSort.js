function quickSort(A, low, high)
   if low < high then
    p <-- partition(A,low,high)
    
    quickSort(A,low,p-1)
    quickSort(A,p+1, high)
  
   end if

end function
