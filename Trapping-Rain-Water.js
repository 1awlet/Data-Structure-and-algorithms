/*
Leet code explanation:
Given n non-negative integers representing an elevation map 
where the width of each bar is 1, 
compute how much water it can trap after raining.
*/

var trap= (arr) => {
    let p1=0;
    let p2=arr.length-1;
    let maxL=0;
    let maxR=0;
    
    let total=0;
    for(let current=0; current<arr.length;  current++){
        
        if(maxL < maxR ){
            
            if(arr[p1] >= maxL){
                maxL = arr[p1];
                
            }else{
               total+= maxL- arr[p1]; 
            }
        p1++;
        }else{
           
            if(arr[p2] >= maxR){
                maxR=arr[p2];
            }else{
                total+= maxR- arr[p2]; 
            }
             p2--;
        }

    }
        return total
}

