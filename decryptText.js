const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const decryptMessage = (key, cipherText) => {
    let decryptedMessage = "";
    let secretKeyCount = 0;

    for (let i = 0; i < cipherText.length; i++) {
        if (secretKeyCount >= key.length) {
            secretKeyCount = 0;
        }
        const cipherLetterNumber = alphabet.indexOf(cipherText[i]);
        const keyLetterToNumber = alphabet.indexOf(key[secretKeyCount]);
        
        let plainNumber = (cipherLetterNumber - keyLetterToNumber + 26) % 26;
        decryptedMessage += alphabet[plainNumber];
        secretKeyCount++;
    }
    
    return decryptedMessage;
}

const decryptText = (key, cipherText) => {
    cipherText = cipherText.toUpperCase();
    key = key.toUpperCase();
    
    if (!/^[A-Z]+$/.test(cipherText) || !/^[A-Z]+$/.test(key)) {
        console.log("Please only use alphabets from A-Z for both the ciphertext and the key.");
        return;
    }
    
    const decryptedText = decryptMessage(key, cipherText);
    console.log(decryptedText);
    return decryptedText;
}

encryptText("”THISISANEXAMPLEKEYINCOMPUTERSECURITYEXAM”", "Gele");