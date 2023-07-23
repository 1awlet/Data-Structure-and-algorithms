/*
leet code explanation
Given an integer x, return true if x is a 
palindrome and false otherwise.
*/

var isPalindrome = function(x) {
    let palindrom="";
   let xString= x.toString();
 
     for(let i=xString.length-1; i>=0; i--){
         // console.log(xString[i])
         palindrom +=xString[i];
     }
   
     if(palindrom === xString ){
         return true
     }else{
        return false
     }
     
     
     
     
     
 };