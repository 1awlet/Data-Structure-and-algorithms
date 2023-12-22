/*
Leet code explanation:
Given a string s, find the length of the longest 
substring
without repeating characters.
I solved the the algorthim using sliding window technique

*/




let longest= (sam)=>{
    let p1=0;
    let p2=0;
   let seenChar= {};
  let longest=0;
  for(let p2=0; p2< sam.length; p2++ ){
      let currentChar = sam[p2];
  
    if(seenChar [currentChar]>= p1){
        p1=seenChar [currentChar]+1;
  
    }
       seenChar[currentChar]=p2;
  longest= Math.max(longest, p2-p1+1);
  
  }
  
  
  return longest
}



