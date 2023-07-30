
/*
Leet code explanation: 
Given a string s, return true if the s can be palindrome after deleting at most one character from it.
*/

let validPalindrome = (word)=>{
   word = word = word.replace(/[^A-Za-z0-9 ]/g, "");
    word = word.replace(/\s/g, "").toLowerCase();

    let p1=0;
    let p2=word.length-1;
 
    while(p1< p2){

     if(word[p1] != word[p2] ){
        
 return subString(word,p1, p2-1) || 
 subString(word,p1+1, p2);
  
     }
        p1++;
        p2--;
    }
    
    return true
}


let subString = (word, left, right)=>{
    while(left < right){
        if(word[left] != word[right]){
            
            return false
        }
        left++;
        right--;
    }
    
    return true
}
