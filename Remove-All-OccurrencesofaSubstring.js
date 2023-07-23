/*
Leet code explanation
Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

Find the leftmost occurrence of the substring part and remove it from s.
Return s after removing all occurrences of part.
*/

var removeOccurrences = function(s, part) {
    
           
    while(s.includes(part)){
        s=   s.replace(part,'');
    }

  return s
    
};