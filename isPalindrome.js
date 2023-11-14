/*
leet code explanation
Given an integer x, return true if x is a 
palindrome and false otherwise.
*/

// we using two pointer techniques 
let isPalindrome = (word)=>{
   word = word = word.replace(/[^A-Za-z0-9 ]/g, "");
    word = word.replace(/\s/g, "").toLowerCase();

    let p1=0;
    let p2=word.length-1;

  while(p1< p2){
  
     if(word[p1] != word[p2]){
        return false
         
     }
        p1++;
        p2--;
    }
    
   
    return true
}
