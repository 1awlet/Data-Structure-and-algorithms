/*
Leet code explanation:
Given two strings s and t, return true if they are equal when both are typed into empty text editors.
'#' means a backspace character.
 */
 
var backspaceCompare = (s, t)=>{
    let string1=[];
    let string2=[];
    let bool=false;
    
    let len= Math.max(s.length, t.length);
   
       
        for(let i=0; i<len; i++){
         
         if(s[i]){
              if(s[i] !="#"){
            string1.push(s[i])
        }else{
             string1.pop()
        }
         }   
       
       if(t[i]){
           if(t[i] !="#"){
            string2.push(t[i])
        }else{
             string2.pop()
        }
       }
        
            
        }
        
        if(string1.length== string2.length){
            if(string1.length <=0 && string2.length <= 0){
                
            bool= true;
            return bool
            }
            for(let i=0; i<string1.length; i++){
           
           if(string1[i] != string2[i]){
               bool=false
               return bool
           }else{
               bool=true
           }
         
            
           
        }
        }else{
            bool=false
        }
        

 
    return bool;
    
}