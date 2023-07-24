/*
Leet code explanation:
Given a string s, find the length of the longest 
substring
without repeating characters.

*/


/**
 * @param {string} s
 * @return {number}
 */



const lengthOfLongestSubstring = (string)=> {
    let maxLong=0;
   if( string.length == 0  || string.length== 1) {
      return string.length;
       }
    for(let i=0; i<string.length; i++){
        let seen= {};
        let currentLength=0;
            
        for(let j=i; j<string.length; j++){
            
            if(!seen[string[j]]){
                seen[string[j]]= true;
                currentLength +=1;
                 maxLong= Math.max(currentLength, maxLong);
            }else{
               
                break;
            }
        }
    }
    
return maxLong;
}



