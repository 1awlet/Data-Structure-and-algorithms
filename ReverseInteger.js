var reverse = function (x) {
    const max32Integer = "2147483647";
    const min32Integer = "2147483648"; // -
  
    let isNegative = false;
    let digits = x.toString();
    if (digits.length && digits[0] === "-") {
      digits = digits.substring(1);
      isNegative = true;
    }
  
    const reversed = digits.split("").reverse().join("");
  
    if (reversed.length < max32Integer.length)
      return isNegative ? parseInt(reversed) * -1 : parseInt(reversed);
      
      //It can go out of range postively or negativley
    const maxMinInteger = isNegative ? min32Integer : max32Integer;
    for (let i = 0; i < reversed.length; i++) {
      if (parseInt(reversed[i]) > parseInt(maxMinInteger[i])) {
        return 0;
      } else if (parseInt(reversed[i]) < parseInt(maxMinInteger[i])) {
        return isNegative ? parseInt(reversed) * -1 : parseInt(reversed);
      }
    }
  
    
  };