const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const encryptMessage = (key, plainText) => {

    let encryptedMessage = "";
    let secretKeyCount = 0;

    for (let i = 0; i < plainText.length; i++) {
        // key loops which makes it always at least be equal or it can be greater
        if (secretKeyCount >= key.length) {
            secretKeyCount = 0;
        }
        // assigning each letter to a number
        const textLetterNumber = alphabet.indexOf(plainText[i]);
        const keyLetterToNumber = alphabet.indexOf(key[secretKeyCount]);
        
        let cipherNumber = (textLetterNumber + keyLetterToNumber) % 26;
       
        
        encryptedMessage += alphabet[cipherNumber];
        secretKeyCount++;
    }
    
    return encryptedMessage;
}

const encryptText = (key, plainText) => {
        //Turning massage to capital letters
        plainText= plainText.toUpperCase();
        key = key.toUpperCase();
    
 // Check if the text contains only letters A-Z
    if (!/^[A-Z]+$/.test(plainText) || !/^[A-Z]+$/.test(key)) {
        console.log("Please only use alphabets from A-Z for both the plaintext and the key.");
        return;
    }
    
    const encryptedText = encryptMessage(key, plainText);
    console.log(encryptedText);
    return encryptedText;
}

encryptText("Secret", "Hello");
