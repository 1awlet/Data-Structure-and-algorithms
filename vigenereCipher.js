

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const mapAlphabetsToNumbers = (key,plainText)=>{
    const mappedHash = {};
    let secretKeyCount= 0;
    
    for(let letter in plainText){
        const letterNumber = alphabet.indexOf(plainText[letter])
       
       if(key.length <= secretKeyCount){
           secretKeyCount=0;
       }
       
       console.log(key[secretKeyCount])
       // console.log(plainText[letter] , " corresponds to ", //letterNumber)
        
        
        secretKeyCount++;
    }
}

const decryptText = (key, plainText)=>{
    
    if(/^[A-Z]+$/.test(plainText)){
        mapAlphabetsToNumbers (key,plainText)
    }else{
        console.log("false")
    }
}


decryptText("BANANA", "ILOVEPEANUTS")
