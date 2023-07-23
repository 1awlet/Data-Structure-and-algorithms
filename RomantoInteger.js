/*
Leet code explanation
I can be placed before V (5) and X (10) to make 4 (IV) and 9 (IX).
X can be placed before L (50) and C (100) to make 40 (XL) and 90 (XC).
C can be placed before D (500) and M (1000) to make 400 (CD) and 900 (CM).
If given a Roman numeral, the task is to convert it into an integer.

*/

var romanToInt = function(s) {
    var myObj = {I: 1,V: 5,X: 10,L: 50,C: 100,D: 500,M: 1000};
    
    let Output=0;
    
    for(let i=0; i< s.length; i++){
        
        if(myObj [s[i]] < myObj [s[i+1]]){
             
            Output -= myObj[s[i]];
        }else{
            Output += myObj[s[i]] ;
        }
    }
    
    return Output

    
};