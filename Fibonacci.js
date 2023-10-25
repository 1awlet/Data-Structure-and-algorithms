


function fibinaci(n){
    if(n<= 1){
           return n; 
    }


    return (fibinaci(n-1) + fibinaci(n-2))
}


console.log(fibinaci(23))


