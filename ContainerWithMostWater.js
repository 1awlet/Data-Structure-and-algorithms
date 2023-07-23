/*
Leet code  explanaton

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.
*/

var maxArea = function(height) {
    let Maxar=0;
    let pointer2 =height.length-1;
    let  pointer1= 0;
    
    while(pointer1 < pointer2){
       
           let width= pointer2 - pointer1;
            let heights= Math.min(height[pointer1], height[pointer2]);
           let area= heights* width;
            Maxar= Math.max(area,Maxar);
          
        if(height[pointer1] <= height[pointer2]){
            pointer1++;
        }else{
            pointer2--;
        }
    
       
    }
    
     return Maxar;
        
    };