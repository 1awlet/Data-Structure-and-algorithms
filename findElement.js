function findNum(A, n, chosenNum){
 
    if(A[n-1] ==chosenNum){
   
        return true
    }
    
          
    if(n== 0){
        return false
    }

    
 return   findNum(A,n-1, chosenNum)
}

let arr=[3,4,5]
console.log(findNum(arr,arr.length, 4))



