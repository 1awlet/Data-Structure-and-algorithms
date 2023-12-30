

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



const mapAlphabetsToNumbers = (key,plainText)=>{
    let decryptedMessage ="";
    let secretKeyCount= 0;
    
    for(let letter in plainText){
        const textLetterNumber = alphabet.indexOf(plainText[letter])
          
          if(key.length <= secretKeyCount){
           secretKeyCount=0;
            }
    
        const keyLetterToNumber = alphabet.indexOf(key[secretKeyCount]);
       
       
    
       if(textLetterNumber + keyLetterToNumber <= 25){
          
           const ciperAdding = textLetterNumber + keyLetterToNumber;

          const decryptedLetter = alphabet[ciperAdding]
       
         decryptedMessage += decryptedLetter;
          console.log(decryptedMessage)
       }else{
          const ciperAdding = (textLetterNumber + keyLetterToNumber) % 26
           
       }
       
    
        secretKeyCount++;
    }
    
    
   

}

const decryptText = (key, plainText)=>{
    if(/^[A-Z]+$/.test(plainText) === false){
        console.log("please change the text to capital letter")
        return
    }
    
    const mappedTextToKey= mapAlphabetsToNumbers (key,plainText);
    

}


decryptText("BANANA", "ILOVEPEANUTS")
