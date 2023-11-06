
function BubbleSort(A,N)
 swapped=true

while(swapped) do
 swapped= false

for 0 <= i <N-1 do
 if (A[i] > A[i+1]) then
  swap(A[i], A[i+1)
  swapped=true
end if

end for 
N= N-1
end while 
return A
end function
