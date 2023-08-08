/**
Leetcode explanation: Given a string containing just the characters '(', ')', '{', '}', '[', ']', determine if the input string is valid.
**/

function isValid(s) {
    const stack = [];
    const bracketPairs = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    for (let char of s) {
        if (bracketPairs[char]) {
            stack.push(char);
        } else {
            if (stack.length === 0 || bracketPairs[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true
