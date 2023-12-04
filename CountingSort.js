
Function counting-sort(A,K)
C --> new array(k+1) of zeros
R --> new array(length(A)) of zeros

Post --> 0

For 0<=j <length(A) do
c[A[j]] +1
End for

For 0 < i < (k+1) do
For pos <= r < post+c[i] do
R[r]=i
End for
Post = r
End for

Return R

End function
