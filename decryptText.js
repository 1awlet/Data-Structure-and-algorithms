
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
